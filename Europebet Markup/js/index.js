const date_btn = document.querySelectorAll('.date')
const catchX_div = document.querySelector('.catchX-div')

date_btn.forEach(el => {
    el.addEventListener('click',(e) => {
        e.currentTarget.classList.toggle('date-active')
        catchX_div.classList.toggle('catchX-div-toggle')
    })
})


// Accordion 

const accordionItem1 = document.querySelector('#accordionItem1')
const accordionItem2 = document.querySelector('#accordionItem2')
const accordionItem3 = document.querySelector('#accordionItem3')


accordionItem1.addEventListener('click', () => {
    const answerItem = document.querySelector('#answer-item1')
    answerItem.classList.toggle('answer-item-toggle')
})

accordionItem2.addEventListener('click', () => {
    const answerItem = document.querySelector('#answer-item2')
    answerItem.classList.toggle('answer-item-toggle')
})

accordionItem3.addEventListener('click', () => {
    const answerItem = document.querySelector('#answer-item3')
    answerItem.classList.toggle('answer-item-toggle')
})


 
const leftArrow = document.querySelector('.left-arrow')
const rightArrow = document.querySelector('.right-arrow')
let counter = 50


rightArrow.addEventListener('click',(e)=>{
    e.preventDefault()
    let sliderCont = document.querySelector('.cards')
    sliderCont.style.transform = `translateX(${counter-=350}px) translateY(-100px)`
})

leftArrow.addEventListener('click',(e)=>{
    e.preventDefault()
    let sliderCont = document.querySelector('.cards')
    sliderCont.style.transform = `translateX(${counter+=350}px) translateY(-100px)`
})


const left_arrow_slots = document.querySelector('.left-arrow-slots')
const right_arrow_slots = document.querySelector('.right-arrow-slots')
let counter2 = 50


right_arrow_slots.addEventListener('click',(e)=>{
    e.preventDefault()
    let sliderCont = document.querySelector('.slots-image-slider')
    sliderCont.style.transform = `translateX(${counter-=150}px)`
})

left_arrow_slots.addEventListener('click',(e)=>{
    e.preventDefault()
    let sliderCont = document.querySelector('.slots-image-slider')
    sliderCont.style.transform = `translateX(${counter+=150}px)`
})