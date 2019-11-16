- [Getting Started](#getting-started)
  - [The Most Basic App](#the-most-basic-app)
  - [`express` and `app`](#express-and-app)
  - [`app.get(path, callback(req, res, next))`](#appgetpath-callbackreq-res-next)
  - [`app.listen(port, [host] callback)`](#applistenport-host-callback)
- [Basic Routing](#basic-routing)
  - [routing structure](#routing-structure)
- [Serving static files in Express](#serving-static-files-in-express)
  - [`express.static`](#expressstatic)
  - [first real brush with `app.use`](#first-real-brush-with-appuse)
  - [options argument](#options-argument)

# Getting Started
- Here is the starting example given from the docs, with some notes and further reading

## The Most Basic App
```js
const express = require('express');
const app = express();

// pick a port
const port = process.env.PORT || 4321;

app.get('/', (req, res) => {
    console.log('Hit the home route!');
    res.send('Hello World!');
    // res.send({ msg: 'hello world'}); // json payload
});

// "start" the app by listening on a port
app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening on port ${port}!`);
});
```

## `express` and `app`
- Requiring express returns a function that when called returns an express application, normally the application is called app for convention.

## `app.get(path, callback(req, res, next))`
[docs for `.get`](https://expressjs.com/en/4x/api.html#app.get.method)
- there are others for the http verbs `.get`, `.put`, `.patch`, `.post`, however these aren't usually used directly on the main app, and are instead used on something called a router. More later.
- the function (called a handler function) takes three arguments, the request, the response, and the callback for middleware. Again, more on that later
- To actually send anything to the client, you can use `res.send` and a payload.

## `app.listen(port, [host] callback)`
[docs for `.listen`](https://expressjs.com/en/4x/api.html#app.listen)

- this binds our application to a port and listens to it. the host is optional, but given my history with docker, I'm just throwing this in here so I don't forget. The callback runs when the connection is established

# Basic Routing
Each route can have one or more handler functions, which are executed when the route is matched.

## routing structure
Route definition takes the following structure:

```plaintext
app.METHOD(PATH, HANDLER)
```

```js
app.post('/', (req, res, next) => {
  res.send('Got a POST request');
});
```
Where:
  - app is an instance of express.
  - METHOD is an HTTP request method, in lowercase.
  - PATH is a path on the server.
  - HANDLER is the function executed when the route is matched.

# Serving static files in Express
[docs for `.static`](https://expressjs.com/en/4x/api.html#express.static)
To serve static files such as images, CSS files, and JavaScript files, use the `express.static` built-in middleware function in Express.

## `express.static`
The function signature is:

```js
express.static(root, [options])

// in use
app.use(express.static(path.join(__dirname, 'public')))
```

The root argument specifies the root directory from which to serve static assets, here is our root `public` folder. Also, it's good to use the `path.join` function since the path is by default relative to whatever process launches the node process.

## first real brush with `app.use`
We will talk more about `app.use` in a second, but what setting it up like this does is say
> "The `/` route will first go through this static directory, if it finds a file, then it will serve that. If not, I will check elsewhere"

By default, going to `/` will show index.html, and then if that links to `/stylesheets/styles.css`, it will again check the static files in `public` before checking anywhere else. This will override anything like `app.get('/', callback)` by the way.

You could also specify an asset directory by doing
```js
app.use('/static', express.static('public'))
```

this would allow you to specify in your codebase when you are refering specifically to an asset, instead of going through `/` first everytime.

## options argument
It takes an options argument, but the defaults all seem good. Check the docs above for a list. These include the index.html being the default index file, and redirecting `/cats/` => `/cats` as true. It is useful for setting specific headers on the files:
```js
const options = {
    setHeaders: (res, path, stat) => { // eslint-disable-line no-shadow
        res.set('x-timestamp', Date.now());
        res.set('just-a-test', 'hello-there');
        res.set('path', path);
    },
};

const staticFiles = express.static(path.join(__dirname, 'public'), options);
app.use(staticFiles);
```

Now, you can load the files that are in the public directory:
