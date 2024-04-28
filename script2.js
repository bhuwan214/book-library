const titleField = document.getElementById("titleField");
const authorField = document.getElementById("authorField");
const AddBtn = document.getElementById("add-btn");
const Container = document.getElementById("container");
const Div_Form = document.getElementById("form");
const AddSection = document.getElementById("AddBook");
const Main_Div = document.getElementById("main");
const Addbtn = document.getElementById("add-btn");
const item = document.getElementsByClassName("item");
const TotalPages=document.getElementById('TotalPage')
const ReadPages=document.getElementById('PageRead') 
const OutputTitle = document.getElementById("titleName")
const OutputAuthor = document.getElementById("authorName")

let count=0;



function Book (title, author,totalPages, readPages){
    this.title=title;
    this.author=author ;
    this.totalPages= totalPages;
    this.readPages= readPages;
}


function ShowformModal(){
    Container.style.opacity = 0.4;
    Div_Form.classList.remove("input-container");
}





function RemoveformModal (){
    Div_Form.classList.add("input-container");
    Container.style.opacity = 1;
}


AddSection.addEventListener("click", () => {
    ShowformModal()
    // const  newDiv = document.createElement('div')
  
    });


 
    for ( i=count; i<count+1; i++){
        const  newDiv = document.createElement('div')
        newDiv.setAttribute('class','item');
        Main_Div.appendChild(newDiv);

    AddBtn.addEventListener("click", ()=>{
        
        RemoveformModal()


         //Get values from input fields
        const  TitleValue = titleField.value;
        const  AuthorValue = authorField.value;
        const  TotalPgValue =  TotalPages.value;
        const  ReadPgValue =  ReadPages.value;
        console.log(TitleValue)

          //Create a new book instance 
         const newBook = new Book (TitleValue, AuthorValue, TotalPgValue, ReadPgValue);
        console.log(newBook);



        
//     //Add data inside the item container
    const newH4Title = document.createElement("h4");
    newH4Title.innerHTML = `Title: ${newBook.title}`;
    const newH4Author = document.createElement("h4");
    newH4Author.innerHTML = `Authors: ${newBook.author}`;
    const newH4Progress = document.createElement("h4");
    newH4Progress.innerHTML =`Progress: ${Math.floor((newBook.readPages/ newBook.totalPages)*100)}%`;

//     //Appending newly  created Elements to newDiv 

    newDiv.appendChild(newH4Title) ;
    newDiv.appendChild(newH4Author);
    newDiv.appendChild(newH4Progress);

    // //Reset input fields 

    titleField.value ="";
    authorField.value= "";
    TotalPages.value="";
    ReadPages.value="";

    for (let i = 0; i <= 1000; i++) {
        console.log("hello")
        const children = Main_Div.children[i];
        children.classList.add("item");
        children.id = `item${i}`;
      }
      
      count++

    })

    }


// AddBtn.addEventListener("click", ()=>{

   
//    
//    


//   

//     //Update output dynamically  

//     //Create a new div for the new book
//   

  

 




// })   
