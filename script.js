const titleField = document.getElementById("titleField");
const authorField = document.getElementById("authorField");
const AddBtn = document.getElementById("add-btn");
const Container = document.getElementById("container");
const Div_Form = document.getElementById("form");
const AddSection = document.getElementById("AddBook");
const Main_Div = document.getElementById("main");
const Addbtn = document.getElementById("add-btn");
const item = document.getElementsByClassName("item");
const TotalPage =document.getElementById('TotalPage')
const ReadPages =document.getElementById('PageRead') 


const BookDetail = {
  title: "The Lord of the Rings",
  author: "J.R.R Tolkien",
  pages: 320,
};


function Book (title, author,totalPages, readPages){
    this.title=title || BookDetail.title;
    this.author=author || BookDetail.author;
    this.pages= totalPages || BookDetail.pages;
    this.readPages= readPages||0;
}

const Book1 = new Book('king ','rocker','567','45')



//Getting the Input filed and blurring other content on the site
AddSection.addEventListener("click", () => {
  Container.style.opacity = 0.4;
  Div_Form.classList.remove("input-container");
});

AddBtn.addEventListener("click", () => {
  //Creating a div inside the main-div
  const newDiv = document.createElement("div");
  var content = document.createTextNode(
    `Title:${BookDetail.title}  Author : ${Book1.author}  ${Book1.readPages}`
  );
  newDiv.appendChild(content);
  Main_Div.appendChild(newDiv);

  Div_Form.classList.add("input-container");
  Container.style.opacity = 1;

  AddbookHandle();

  //Giving the newly created div class name
  for (let i = 0; i <= 1000; i++) {
    
    const children = Main_Div.children[i];
    children.classList.add("item");
    children.id = `item${i}`;
  }

  
});

const output = document.getElementById("item1");

//Adding book-data to document

function AddbookHandle() {
  var titleValue = titleField.value;
  var authorValue = authorField.value;
  var TotalPgValue = TotalPage.value;
  var ReadPgValue =ReadPages.value
console.log(`title: ${ titleValue} , author: ${authorValue}
, totalPages : ${TotalPgValue} , readpages : ${ReadPgValue}` )



}




