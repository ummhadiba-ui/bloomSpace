let books = [
    {name:"Atomic Habits" , author:"James Clear" , status:"Reading"},
    {name:"Ikigai" , author:"Hector Gracia" , status:"Completed"},
    {name:"Deep Work" , author:"Cal Newport" , status:"Reading"}
];
let displayBooks = () =>{
    let bookList = document.querySelector('#book-list');
    bookList.textcontent = "";
    for(let i = 0; i < books.length; i++){
        let bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        let bookName = document.createElement("h3");
        let bookAuthor = document.createElement("p");
        let bookStatus = document.createElement("span");
        bookStatus.classList.add("status");
        if(books[i].status === "completed"){
            bookStatus.classList.add("completed");
        }else if(books[i].status === "Reading"){
            bookStatus.classList.add("reading");
        }
        bookCard.append(bookName);
        bookCard.append(bookStatus);
        bookCard.append(bookAuthor);
        bookList.append(bookCard);
    }
}
    let totalBooks = document.querySelector("total-books");
    let completedBooks = document.querySelector("completed-books");
    let readingBooks = document.querySelector("reading-books");
function calculateStats(){
let totalBooks = 3;
 let completedBooks = 0;
  let readingBooks = 0;
    for(let i = 0; i < books.length; i++){
        if(books[i].status === "Completed"){
            completedBooks++;
        }else if(books[i].status === "Reading"){
            readingBooks++;
        }
    }
    console.log(totalBooks);
    console.log(completedBooks);
    console.log(readingBooks);
}
calculateStats();
let bookName = document.querySelector('#book-name');
let bookAuthor = document.querySelector('#book-author');

function addBooks(){
     let bookTitle = bookName.value;
     let bookWriter = bookAuthor.value;
     if(bookTitle === "" || bookWriter === ""){
        alert("Please fill in both fields");
     }else{
       let newBook = {
        name:bookTitle,
        author:bookWriter,
        status:"Reading"
       };
       books.push(newBook);
     }
     displayBooks();
calculateStats();
bookName.value = "";
bookAuthor.value = "";

}
let bookBtn = document.querySelector('#add-book');
bookBtn.addEventListener("click" , addBooks);
    displayBooks();
    calculateStats();
