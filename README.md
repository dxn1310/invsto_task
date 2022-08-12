# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Screenshot

![](./pricing_component.jpg)
Above is a screeshot of the Interactive Pricving Component

### Links

- Solution URL: https://github.com/dxn1310/invsto_intern_task/tree/main/task
- Live Site URL: https://dxn1310.github.io/invsto_intern_task/

## My process


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- Bootstrap


### What I learned

I learnt many new things, like how to properly use flexbox and meadia query in my react app, i also got plenty of practive with reactjs and css. I implemented dark mode first time for the entire webpage. I learnt various new concepts and wish to learn more.

```css
.bottom-container{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
} 
@media screen and (max-width: 480px){
  .bottom-outer{
    width: 80%;
    margin-left: 10%;
  }
  .bottom-last-component{
    flex-direction: column;
  }
  .bottom-container{
    flex-direction: column;
  }
  label.name{
    font-size: 80%;
  }
  .rchild{
    margin-top: 1%;
  }
  .btn{
    width: 160%;
  }
  .ul-container{
    width: 70%;
  }
}
```

### Continued development

I want to continue focusing on using flexbox and applications that are compatible with a mobile phone aswell, i also want to focus more of learning the various other hooks that can be used to make my react app better. I will also like to focus more on dark mode and try adding dark mode in my future projects for practice.

### Useful resources

- [Bootstrap](https://getbootstrap.com/)
- [npm reactjs](https://www.npmjs.com/package/react)

## Acknowledgments

During the project development, i got plenty of help and support from my friends who debugged my code and i got errors, They also helped me learn new things and introduced ti various resources that i can use in the future to make my projects better and more professional.
