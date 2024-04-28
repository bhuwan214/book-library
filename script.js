const titleField = document.getElementById("titleField");
const authorField = document.getElementById("authorField");
const AddBtn = document.getElementById("add-btn");
const Container = document.getElementById("container");
const Div_Form = document.getElementById("form");
const AddSection = document.getElementById("AddBook");
const Main_Div = document.getElementById("main");
const Addbtn = document.getElementById("add-btn");
const item = document.getElementsByClassName("item");
const TotalPages =document.getElementById('TotalPage')
const ReadPages =document.getElementById('PageRead') 
const OutputTitle = document.getElementById("titleName")
const OutputAuthor = document.getElementById("authorName")


//BookDetail constructor
const BookDetail = {
    title: "The Lord of the Rings",
    author: "J.R.R Tolkien",
    pages: 320,
  };


//Input modal function
function formModal(){
    Container.style.opacity = 0.4;
    Div_Form.classList.remove("input-container");
}


//Getting the Input filed and blurring other content on the site
AddSection.addEventListener("click", () => {
formModal()
});



function Book (title, author,totalPages, readPages){
  this.title=title;
  this.author=author ;
  this.totalPages= totalPages;
  this.readPages= readPages;
}


AddBtn.addEventListener("click", () => {

  //Creating a div inside the main-div
  const newDiv = document.createElement("div");


//Getting value from input field
const  TitleValue = titleField.value;
const  AuthorValue = authorField.value;
const  TotalPgValue =  TotalPages.value;
const  ReadPgValue =  ReadPages.value;

//Creating book instance
const Book2 = new Book (TitleValue, AuthorValue, TotalPgValue, ReadPgValue);
        console.log(Book2);


//Adding data inside the item container

for (let i=0; i<3; i++){
const newH4 = document.createElement( "h4" ) ;
if (i==0){
newH4.setAttribute('id','titleName')
newH4.innerHTML = `Title: ${ Book2.title}`}
else if(i ==1) {
newH4.setAttribute('id','authorName')
newH4.innerHTML =`Authors: ${ Book2.author}`}
else {
    newH4.setAttribute('id', 'Progress-data')
    newH4.innerHTML=`Progress: ${Math.floor((Book2.readPages/ Book2.totalPages)*100)}%`;
  }
 newDiv.appendChild(newH4)
}

//Appending child newDiv to Main 

  Main_Div.appendChild(newDiv);
  Div_Form.classList.add("input-container");
  Container.style.opacity = 1;

      // //Reset input fields 
      titleField.value ="";
      authorField.value= "";
      TotalPages.value="";
      ReadPages.value="";

  //Giving the newly created div class name
  for (let i = 0; i <= 1000; i++) {
    const children = Main_Div.children[i];
    children.classList.add("item");
    children.id = `item${i}`;
  }

  

  
});


  



