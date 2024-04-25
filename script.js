
const title =document.getElementById("title")
const author = document.getElementById("author")
const AddBtn = document.getElementById("add-btn")
const Container = document.getElementById("container")
const  Div_Form = document.getElementById("form")
const AddSection = document.getElementById("AddBook")


//Getting the Input filed and blurring other content on the site
AddSection.addEventListener('click',()=>{

    Container.style.zIndex=0;
    Container.style.opacity=.4;
    Div_Form.classList.remove("input-container")




})