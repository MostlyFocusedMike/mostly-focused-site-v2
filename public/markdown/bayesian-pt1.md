# CHAPTER 1: BAYESIAN THINKING AND EVERYDAY REASONING
## Overview
- Frequentist statistics is founded on the idea that probability represents the frequency with which something happens
- Bayesian statistics is concerned with how probabilities represent how uncertain we are about a piece of information.
- bayesian is useful in things like elections, where a candidate in an election can only be elected once. There are note many frequent events in that case to draw from

A Bayesian analysis involves 3 main steps:

1. Observed data
2. Formed a hypothesis
3. Updated your beliefs based on the data

So let's analyze this given the scenario:

> One night you are suddenly awakened by a bright light at your
window. You jump up from bed and look out to see a large object
in the sky that can only be described as saucer shaped. You are
generally a skeptic and have never believed in alien encounters,
but, completely perplexed by the scene outside, you find yourself
thinking, Could this be a UFO?!

## Observations
- Before making hypothesis you collect data
- This data can be noted as high to low probablity
- could be noted as:


> P(bright light outside window, saucer-shaped object in sky ) = very low

- This states the Probability of `x` items all occuring together is `very low`
- 'In probability theory, we use a comma to separate events when we’re looking at the combined probability of multiple events.'
- so a single event would be written as `P(rain) = possible`

### Holding Prior Beliefs and Conditioning Probabilities
we don't exist in a vaccuum, typically we frame data against prior beliefs we hold about how things work
so:

> P(bright light outside window, saucer-shaped object in sky | experience on Earth ) = very low
- '|' doesn't mean 'or', it means "given", used to show prior beliefs
- “The probability of observing bright
lights and a saucer-shaped object in the sky, given our experience on Earth,
is very low.”
- 'The probability outcome is called a _conditional probability_ because we are conditioning the probability of one event occurring on the existence of something else.'
- Probability can use variables:

```plaintext
D = bright light outside window, saucer-shaped object in sky
X = experience on Earth
P(D | X) = very low
```

you can also add more prior beliefs, that happen together as well

```plaintext
D = bright light outside window, saucer-shaped object in sky
X = experience on Earth, it's July 4th
P(D | X) = low
```
being on July 4th makes lights more probable

### Explaining the formula
Now that we have variables, it breaks down like:
```plaintext
P(D | X) = L
```
Meaning: the **P**robability the variables on the left of | _being explained by_ the variables on the right of | equals **L** likelihood
- `P(D|X) = very likely`: means the data does not surprise you given your beliefs
- `P(D|X) = very low`: means the data is surprising given your beliefs

### Assuming Prior Beliefs in Practice
- we don't have to list all our prior beliefs every time, it is assumed
- sometimes list most relevant, so we'll post just experience on earth to remind

## Forming a Hypothesis
- form hypothesis off of given data and prior beliefs. hypotheses can be about anything
- Given above D data and X prior experiences, we would make a hypothesis of:

> H<sub>1</sub> = A UFO is in my back yard!

- this hypothesis would predict that if a UFO was in the backyard, you would expect to see briht lights and saucer shaped object
> But what is this hypothesis predicting? If we think of this situation
backward, we might ask, “If there was a UFO in your back yard, what would
you expect to see?” And you might answer, “Bright lights and a saucershaped
object.” Because H1 predicts the data D, when we observe our data
given our hypothesis, the probability of the data increases. Formally we
write this as:

> P (D| H<sub>1</sub> ,X ) >> P (D| X ) 1

> This equation says: “The probability of seeing bright lights and a
saucer-shaped object in the sky, given my belief that this is a UFO and my
prior experience, is much higher (indicated by the double greater-than
sign '>>') than just seeing bright lights and a saucer-shaped object in the
sky without explanation.” Here we’ve used the language of probability to
demonstrate that our hypothesis explains the data.

- this is not done, just becuase you have a hypothesis doesn't mean you are finished, a hypothesis may make an event more likely, but the hypothesis itself could still be very unlikely

## Gathering More Evidence and Updating Your Beliefs
- gethering ore data after forming hypothesis is important
- lets say you noticed more lights, more saucers, a film crew, and someone yelling "cut"

```plaintext
H1 = A UFO has landed!
P (H1 | X ) = very, very low
```
so that says the probability of your hypothesis being correct given experiences is very very low

```plaintext
H2 = A film is being made outside your window
P (H2 | X ) = very low
```
- it's also not likely a movie is made outside, but it's more likely than a UFO

## Comparing Hypotheses
- to compare, use your updated data

> D<sub>updated</sub> = bright lights, saucer-shaped object, wires, film crew <br />
> H<sub>1</sub> = A UFO has landed! <br />
> P(D<sub>updated</sub> | H<sub>1</sub>, X ) = very, very low

- Reminder this says probablity of data being _explained by_ your hypothesis and prior beliefs is still low, so it's likely the hypthesis is wrong
- your second hypothesis is more likely, so let's compare using >>

> P(D<sub>updated</sub> | H<sub>1</sub>, X) >> P(D<sub>updated</sub> | H<sub>2</sub>, X)

- this is the heart of bayesian, we aren't saying one is true, we are saying one is more likely given our data and prior beliefs
- Mathematically, we express these as a ratio h2:h1 is 1000:1
- Meaning the h2 explains the data 1,000 times better than h1

## Data Informs Belief; Belief Should Not Inform Data
- Hypotheses change and everyone's experiences are different, but data should be universal fact

- we've been using
> P (D | H,X )
- which is  “The probability of the data given my hypotheses and
experience in the world,” or more plainly, “How well my beliefs explain
what I observe.”

- But the more common way of thinking is actually:

> P (H | D,X )

- Which is “The probability of _my hypothesis_ given the data and my experiences
in the world,” or “How well what I think supports what I observe.”

> Bayesian thinking is about changing your mind and updating how you understand the world. The data we observe is all that is real, so our beliefs ultimately need to shift
> until they align with the data.

- Given our example UFO film, if suddenly everyone takes off their outfits to reveal army uniforms and says "that should fool the locals" it might be worth it to re-examine our hypothesis given our updated data


-------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------

# CH 2: Measuring Uncertainty
## Overview
Very high and very low are certainly not very scientific, this chapter discusses how to quantify probability instead of relying on qualitative feelings

## What Is a Probability?
- borrowing from logic, where there are true and false values, or 1 and 0 for computers
- we can use probablity as extensions of that idea P(X) = 0 means it's impossible and P(X) = 1 is a guarantee.
- Rarely do we use 1 and 0, ussually it's fractions to show how confident we are that something will happen, like P(X) = .5 means we are truly unsure if it will or won't happen

### Negation
- not true == false, not false == true
- We want the probabilty of something not happening + the opposite to equal 1
- The probability of x and the negation of the probability of x should be 1

> P(X) + ¬P(X) = 1

> *NOTE:* the "¬" minus with a tick is the negation symbol, sometimes it's just a "-" or "~"

- so if P(X) = 1, then the negation would be 0, so 1 + 0 = 1, if the P(X) = 0, the negation would be 1, so 0 + 1
- we use 1 and 0, but it's helpful to think about about it as percentages, 100% of happening is what we say anyway since it's the max
- this makes sense, if rain is .75 chance of happening, that means it's a 25% of **not** raining, the chance and the negation of chance combined equal 100%, or .75 + .25 = 1

## Calculating Probabilities by Counting Outcomes of Events
- we have 2 sets of outcomes with probability, the total possible outcomes and the outcomes we care about
- so for a coin flip, the total possible is 2, it's heads or tails
- the outcomes we care about is 1, we want heads (in this case)
- In probability theory, we use {} to refer to define sets, and Ω (the capital Greek letter omega) to indicate the set of all events and :

```plaintext
Ω  = {heads, tails}
desired = {heads}
```

- in order to find the probability of getting an outcome we care about, P(heads), we need to divide out {desired}/Ω

```plaintext
   {heads}         1
--------------  =  -
{heads, tails}     2

```
- so P(heads) = .5
- More complex, let's say we want probability of getting *at least* one heads in 2 coinflips
- now our total outcomes are:

```
Ω  = {(heads, tails), (heads, heads), (tails, tails), (tails, heads)}
desired  = {(heads, tails), (heads, heads), (tails, heads)}
```
- As you can see there are 3 outcomes we want, with four total, so P(one heads) = .75
> as examples get more complicated, manually counting each possible outcome becomes unfeasible. Solving harder probability problems of this nature often involves a field of mathematics called *combinatorics*. In Chapter 4 we’ll see how we can use combinatorics to solve a slightly more complex problem.

# Calculating Probabilities as Ratios of Beliefs
> Counting events is useful for physical objects, but it’s not so great for the
vast majority of real-life probability questions we might have, such as:

> • “What’s the probability it will rain tomorrow?” <br>
> • “Do you think she’s the president of the company?” <br>

- trying to count outcomes in situations like this is not possible
- lets say "is it going to rain?" there are 2 outcomes, it will rain or it won't rain
- There are now 2 hypotheses to test:

> H<sub>1</sub> = it will rain

> H<sub>2</sub> = it will Not rain

- A common way to quantify (and help understand the math) is to make a bet with a theoretical other person
- "I bet you 100 dollars it will rain" and they say "Meh, I only bet 5 dollars it won't"
- this conveys a ratio of certainty: I'm so sure it will rain I bet 100 against your 5 saying it wont

> P(h<sub>1(will rain)</sub>)

> P(h<sub>2(wont rain)</sub>)

```plaintext
P(H1)     100
-----  =  ---  =  20 (20 to 1)
P(H2)      5
```

- this is like at the race track, odds are 12 to 1 on peaches the horse, so if you pay 1 dollar, and they win, you get 12 dollars back.

# Solving for the Probabilities

> P(h<sub>1(will rain)</sub>) = 20 * P(h<sub>2(wont rain)</sub>)
- read as “The probability that that it will rain is 20 times greater than the probability that it won't.”
- remember that the P(X) of something is equal to 1 - P(X), so let's replace the wont rain:
- to do calculations, it's helpful to think of P(h) like a variable, so we can do regular math function, so 20 * p(h) + 1 * p(h) = 20P(h) + 2P(h) = 22P(h)

> P(h<sub>1(will rain)</sub>) = 20 * (1 - P(h<sub>2(wont rain)</sub>))
- now multiply out the parenthesis

> P(h<sub>1(will rain)</sub>) = 20 - 20 * P(h<sub>2(wont rain)</sub>))

- remove both -20 * P(h<sub>1(will rain)</sub>) from the right side by adding 20 * P(h<sub>1(will rain)</sub>) to boths sides
- this will give use 21 * P(h<sub>1</sub>), since we added 20 * P(h<sub>1</sub>, and there was already one P(h<sub>1</sub>) on that side

> P(h<sub>1(will rain)</sub>) = 20 - 20 * P(h<sub>2(wont rain)</sub>))

-------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------
 ### Symbols to copy
Ω
¬
