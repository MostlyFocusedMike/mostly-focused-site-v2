import path from 'path';

/** Source of truth for all  */
const NOTE_TITLES = [
    'Home',
    'Express: Getting Started',
    'Test',
];

const convertTitleToFile = (title) => {
    return title
        .toLocaleLowerCase()
        .replace(/:/g, '')
        .replace(/ /g, '-');
};

const convertTitleToRoute = (title) => {
    const fileName = convertTitleToFile(title);
    return fileName.match(/home/) ? '' : `/${fileName}`;
};

const allFiles = NOTE_TITLES.map((title) => convertTitleToFile(title));

const options = {
    method: 'GET',
    credentials: 'include',
    headers: {
        accepts: 'application/json',
    },
};

const ArticleAdapter = {
    /**
     * Retrieve a single note from the markdown folder if title exists in list
     * @param {string} articleFileName - The file name
     */
    getOne: (articleFileName = NOTE_TITLES[0].toLocaleLowerCase()) => {
        if (!allFiles.includes(articleFileName)) return Promise.resolve({ notFound: true });

        // remember this gets compiled so the / is the 'public' folder
        return fetch(path.join(__dirname, 'markdown', `${articleFileName}.md`), options)
            .then(r => r.text())
            .then(text => {
                return {
                    text,
                };
            });
    },

    /** Return a list of the note titles and links to them */
    getAllTitles: () => Promise.resolve(NOTE_TITLES.map(title => ({ title, link: convertTitleToRoute(title) }))),
};

export default ArticleAdapter;
