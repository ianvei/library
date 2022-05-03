// function Book(title, author, pages, read) {
//     this.title = title
//     this.author = author
//     this.pages = pages
//     this.read = read
//     this.parker = function() {
//         return(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`)
//     }
// }

// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not read yet")

// console.log(theHobbit.parker())

function openForm() {
    document.getElementById("page-overlay").style.display = "flex";
  }
  
  function closeForm() {
    document.getElementById("page-overlay").style.display = "none";
  }

let myLibrary = []

// Reset form values to their placeholder
function clearValues(){
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const pageNo = document.getElementById('pageNo');
  const read = document.getElementById('read');
  title.value = '';
  author.value = '';
  pageNo.value = '';
}

function updateText (obj){
  obj.notAdded = false
  // const updateTitle = document.getElementByClass('library');
  console.log('this is inside the funcion');
  console.log(obj['title']);

  const newBook = document.createElement('div');
  // newBook.classList.add(`library-book ${obj["bookIndex"]}`)
  // let libraryNumber = "library-book" + " " + 
  // console.log(libraryNumber)
  // newBook.classList.add(`library-book ${obj["bookIndex"]}`)
  newBook.classList.add("library-book");
  newBook.classList.add(`${obj["bookIndex"]}`);

  const bookTitle = document.createElement('div');
  // const bookAuthor = document.createElement('div');
  // const bookPageNo = document.createElement('div');
  // const bookRead = document.createElement('button');
  // const bookDelete = document.createElement('button');

  // bookTitle.classList.add("title");

  // bookAuthor.classList.add("author");
  // bookPageNo.classList.add("pageNo");
  // bookRead.classList.add("read");
  // bookDelete.classList.add("delete");

  // document.getElementbyID('library-book').appendChild(bookTitle);
  // document.getElementbyID('library-book').appendChild(bookAuthor);
  // document.getElementbyID('library-book').appendChild(bookPageNo);
  // document.getElementbyID('library-book').appendChild(bookRead);
  // document.getElementbyID('library-book').appendChild(bookDelete);
  // document.querySelector(`.${obj["bookIndex"].toString()}`)
  document.getElementById('addhere').appendChild(newBook);
  const individualBook = document.querySelector(`div[class="${obj.bookIndex}"]`);
  individualBook.appendChild(bookTitle)
  /* <div class="title">Title</div>
  <div class="author">Author</div>
  <div class="pageNo">23</div>
  <button class="read">Read</button>
  <button class="delete">Delete</button> */

  console.log('book created');
 
  console.log('book added');
  // document.getElementById
  // updateTitle.textContent = obj["title"];
  // console.log('hello')
  // // const updateAuthor = document.getElementById('author');
  // // const updatePageNo = document.getElementById('pageNo');
  // // const updateRead = document.getElementById('read');


  return false;  
}


let bookCounter = 0
// get form results, create object, push to library array
document.getElementById('myForm').onsubmit = function() {
  bookCounter++
  let form = document.querySelector('#form1');
  let data = new FormData(form);

  let obj = {};
  for (let [key, value] of data) {
    obj[key] = value;
    obj["bookIndex"] = bookCounter;
    obj["displayFlag"] = true;
    obj["notAdded"] = true
  }

  // updateText(obj);
  myLibrary.push(obj);
  console.log(myLibrary[0].displayFlag);
  
  for (let obj of myLibrary) {
    if (obj.displayFlag === true && obj.notAdded === true) {
      updateText(obj)
    }
    else if (obj.displayFlag === false) {
      // function to delete object and remove from DOM
    }
  }

  clearValues();
  return false; // page doesnt reload on form submission
}



// idea: loop through array, for i of myLibrary, if "display" = True, display it, if not (flag set to false) remove it