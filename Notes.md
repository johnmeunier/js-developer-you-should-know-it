# Notes

## Repartition

### Intro
*John*
*1mns*

Hello Everyone. To begin, thank you for being there, it's a pleasure to talk to you about Javascript, especially about the topics that we will discuss : objects and array manipulation, functionnal programming and some tips. That will be a condensed version of a one hour original talk, you can find the full version on my github with some dev tools tips, promises and block scope tips.

#### John
My name is Johnathan MEUNIER and I'm a french full stack JS developer. I'm software engineer at the Lille Webcenter, in the North of france. You can find me on Twitter @J7N__ and on my Github @johnmeunier

#### Jean-Lou

### Objects
*JL*
*3mns*
### Arrays
*JL*
*6mns*

### Function
*John*
*10mns*

The purpose of this part is to discover or at least clarify some useful way of writing functions : pure function, currying and Higher Order Function.

#### Pure

A pure function have to validate two mandarory conditions:
- it can't have side effects
- it have to be deterministic : its result depends only on its parameters 

We will do a simple quiz to determinate if these functions are pure or not.

Is addSeven pure ? Yes, it just returns the result of 7 plus the parameter that you pass. No side effect and if you always call addSeven with the same parameter, the result will always be the same. 

For logAddSeven, it's a little bit more difficult and trickier. This one is not pure because it has side effect. It will log in the console. You can't interact with the environment, with something outside of your function.

valueToAdd is easier to guess. Indeed, the added value is stored outside of our function so it can change independly of our valueToAdd method. Of course, the first time the result is 15, but it can also be 17 or even any other number if valueToAdd is modified. 

So, the simpler way is to take every useful parameters that can change in parameters.

Even if the parameter is more complicated, like here, a date. 

With this logic you will try to take in parameters as much as possible things, even API like fetch of others functions that you will use in yout method. 

So, you have to split your code as much as possible to avoid complicated implementation.

As you understood, the concept of pure function also depends on the concept of scope. Indeed, if you create a variable in your function that you believe pure, and you modify this variable outside of this function, the behavior of your method will be distorted. Always wisely choose between implicit or explicit declaration and var, let or const keyword.

As we said earlier, with this method, you can quickly have a huge list of parameters when you call your function. So, we will now discover one way to reduce them.

#### Currying
There is a way to reduce functions of more than one argument to functions of one argument, a way called currying

The idea is to use transition method that will do specific thing.

In our example, add method take two parameters and return the addition of this two parameters. curryedAdd is a function that return a function. Each of this function take only one parameter. We create addSeven, a function that will take one parameter, based on our previously created method, curryedAdd with the parameter 7. addSeven, just take on parameter and will always add 7 to our parameter.

In addition to simplifying the call of a complexe pure method, this can be useful to secure a method call as a callback. For example, we usually use map one parameter, the current iteration but, in fact, map take two parameters : the current iteration and its index. In the first case, add take two parameters, so we add the current iteration and the current index. In the second case, we add one to the current iteration. The behavior is not the same.
#### HOF
A pure function have to validate two mandarory conditions:
- Takes one or more functions as arguments
- Returns a function as its result

This is very useful to add or change the comportement of a method without changing the original method. We continue our simple add method. 

In Javascript, as you know, the typing is weak, so the engine tries his best. In our case, if you give a string and a number, for example, the number 1 with the string 0, the result will be the string 10 and not the number 1. This can be embarrassing. We will make a safe higher order function who will return NaN if the given parameters are bad. 

makeSage take a function , destructure its parameter, make sure each of them are a number. if it's not the case, it will return NaN, otherwise, it will return the result.  

For example, 1 plus 2 is 3, but 1 plus null or 1 plus the string 2 will be NaN. 

For the second example, we will create a logger service. Each time a function is called, we will log in the console the call and the result of this function. We use a console log bug instead, we are able to do what we want, for example call an API, or add the result in a database. 
### Others
*JL*
#### Label & Block
#### Fetch & Promise
#### Expressions
*1mnn*


### Tips
*John*
#### Console Group / Table / Time
#### Copy
#### Live Expressions

### Thanks
*JL*
*1mn*