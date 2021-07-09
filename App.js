const accordion = ()=>{
const links = document.querySelectorAll('li')
links.forEach(link => {
    let arrow = link.querySelector("svg")
    let answer =link.querySelector("p")
    let question = link.querySelector(".faq")
    question.addEventListener('click',()=>{
        question.classList.toggle("active")  
        arrow.classList.toggle("rotate")  
        answer.classList.toggle("visible")
    })
})
}
accordion()