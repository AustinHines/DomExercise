const var1 = document.querySelector(`#one`);
var1.onclick = () => alert( `Cool! You can hear/understand a hummingbird and ants`)

const h3 = document.querySelector(`h3`);
h3.addEventListener (`mouseover`, () => {
    alert(`OH NO! The squirrels are on to you. Now you have to leave this reality and move to a new one`)
})

//BONUS 
const form = document.querySelector(`form`)
form.addEventListener (`submit`, () => {
    const quote = form.elements.quote.value
   alert(quote)
})

//Q2
// const darkMode = document.querySelector(`#dm`);
// darkMode.addEventListener(`onclick`, () => {
//     darkMode.classList.toggle(`dark-mode`)
// })

//q3
const reality = document.querySelector(`#reality`);

