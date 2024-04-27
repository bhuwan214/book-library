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

//Input field Overlay function on plus button

AddSection.addEventListener("click", () => {
formModal()
});




function Book (title, author,totalPages, readPages){
    this.title=title || BookDetail.title;
    this.author=author || BookDetail.author;
    this.totalpages= totalPages || BookDetail.pages;
    this.readPages= readPages||0;
}

const Book1 = new Book("An Introduction to Haiku",'Harold Gould Henderson','567','45');
var Book2 = new Book("The Memory Police", 'Yoko Ogawa', '900' , '800');
const Book3 = new Book ('Pattern Recognition ', 'William Gibson', '400','50');


OutputTitle.innerHTML = `${BookDetail.title}`;
OutputAuthor.innerHTML = `${BookDetail.author}`;


//Getting the Input filed and blurring other content on the site


AddBtn.addEventListener("click", () => {
  //Creating a div inside the main-div
  const newDiv = document.createElement("div");

  
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
    newH4.innerHTML=`Progress: ${parseInt(parseInt(Book2.readPages ) / parseInt(Book2.totalpages )* 100)}%`}
 newDiv.appendChild(newH4)

}
  Main_Div.appendChild(newDiv);

  Div_Form.classList.add("input-container");
  Container.style.opacity = 1;

  AddbookHandle();

  //Giving the newly created div class name
  for (let i = 0; i <= 1000; i++) {
    console.log("hello")
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
// console.log(`title: ${ titleValue} , author: ${authorValue}
// , totalPages : ${TotalPgValue} , readpages : ${ReadPgValue}` )



}
  
var Book2 = new BookDetail(`${titleValue}`,`${authorValue}`,`${TotalPgValue}`,`${ReadPgValue}`)
console.log(Book2);


