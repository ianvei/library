function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.parker = function() {
        return(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`)
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not read yet")

console.log(theHobbit.parker())

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
  title.value = ''
  author.value = ''
  pageNo.value = ''
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
    obj["bookIndex"] = bookCounter
  }

  myLibrary.push(obj);
  console.log(myLibrary);
  clearValues();
  return false; // page doesnt reload on form submission
}



