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