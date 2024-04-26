
const title =document.getElementById("title")
const author = document.getElementById("author")
const AddBtn = document.getElementById("add-btn")
const Container = document.getElementById("container")
const  Div_Form = document.getElementById("form")
const AddSection = document.getElementById("AddBook")
const Main_Div = document.getElementById("main")





//Getting the Input filed and blurring other content on the site
AddSection.addEventListener('click',()=>{
    Container.style.opacity=.4;
    Div_Form.classList.remove("input-container")

})




    AddBtn.addEventListener( "click", () => {
        
        //Creating a div inside the main-div
        const newDiv=document.createElement("div")
        Main_Div.appendChild(newDiv)
    
        Div_Form.classList.add("input-container");
        Container.style.opacity=1;

        //Giving the newly created div class name
        for( let i=1; i<=1000; i++){
        children= Main_Div.children[i]
        children.classList.add("item")}
    })

