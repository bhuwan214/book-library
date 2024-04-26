
const titleField =document.getElementById("titleField")
const authorField = document.getElementById("authorField")
const AddBtn = document.getElementById("add-btn")
const Container = document.getElementById("container")
const  Div_Form = document.getElementById("form")
const AddSection = document.getElementById("AddBook")
const Main_Div = document.getElementById("main")
const Addbtn =document.getElementById("add-btn")
const item =document.getElementsByClassName("item")




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
            AddbookHandle()
      const children= Main_Div.children[i]
        children.classList.add("item")
        children.id=`item${i}`
        item.innerHTML= "title : " + titleValue + "\nAuthor: "+authorValue;

    }

  
      
    })
    const output = document.getElementById('output');


    //Adding book-data to document
     
    function AddbookHandle(){
       
        const titleValue = titleField.value
        const authorValue = authorField.value
     }

    




  
