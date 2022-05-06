function openForm() {
    document.getElementById("page-overlay").style.display = "flex";
    document.getElementById("temp-pop-up").style.display = "none";
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

// searchID = `${classNameSplit[0]}` + 

function updateText (obj){
  obj.notAdded = false
  console.table(obj)
  console.log('this is inside the funcion');
  console.log(obj['title']);

  const newBook = document.createElement('div');
 
  newBook.classList.add("library-book");
  classNameSplit = obj["title"].split(" ")[0]
  bookDomIndex = obj["bookIndex"]
  bookSearchQuery = classNameSplit + bookDomIndex
  console.log(bookSearchQuery)
  newBook.classList.add(bookSearchQuery);

  const bookTitle = document.createElement('div');
  bookTitle.classList.add('title');
  bookTitle.textContent = obj['title'];

  const bookAuthor = document.createElement('div');
  bookAuthor.classList.add('author');
  bookAuthor.textContent = obj['author'];

  const bookNumber = document.createElement('div');
  bookNumber.classList.add('pageNo');
  bookNumber.textContent = obj['pages'];
  console.log(obj["pages"])

  // add onclick later so this can be toggled
  const bookRead = document.createElement('button');
  bookRead.classList.add('read');
  bookRead.setAttribute('onclick', 'readText("'+bookSearchQuery+'")')
  if (obj['y-n'] === 'no'){
    bookRead.textContent = "Not Read";
  }
  else if (obj['y-n'] === 'yes'){
    bookRead.textContent = "Read";
  }
  
  const bookDelete = document.createElement('button');
  bookDelete.classList.add('delete');
  // bookDelete.classList.add(`${obj["title"]}`);
  bookDelete.textContent = "Delete";
  // functionArgs = obj['title']
  // bookDelete.setAttribute("onclick", `deleteBook(${obj['title'].toString()})`);

  bookDelete.setAttribute('onclick', 'deleteBook("'+bookSearchQuery+'")');


  document.getElementById('addhere').appendChild(newBook);
  
  const individualBook = document.querySelector(`.${bookSearchQuery}`);
 
  individualBook.appendChild(bookTitle);
  individualBook.appendChild(bookAuthor);
  individualBook.appendChild(bookNumber);
  individualBook.appendChild(bookRead);
  individualBook.appendChild(bookDelete);

  console.log('book created');

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
    obj["notAdded"] = true;
  }

  // updateText(obj);
  myLibrary.push(obj);
  console.log(myLibrary[0].displayFlag);
  
  for (let obj of myLibrary) {
    if (obj.displayFlag === true && obj.notAdded === true) {
      updateText(obj);
    }
  }

  clearValues();
  return false; // page doesnt reload on form submission
}

function deleteBook(title){
  const deleteButton = document.querySelector(".library-book" + "." + `${title}`);
  console.log(title);
  console.log('deleting');
  console.info(deleteButton);
  for (let obj of myLibrary){
    if (obj["title"] === title) {
      obj.displayFlag = false;
      console.log(obj);
    }
  }
  deleteButton.remove();
  // console.log(`button pressed title is ${title}`)
}

function readText(book){
  console.log(book)
  const readButton = document.querySelector(`.${book} > .read`);
  if (readButton.textContent === "Read"){
    readButton.textContent = "Not Read";
  }
  else {
    readButton.textContent = "Read";
  }
}


