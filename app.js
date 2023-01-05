let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {
    // do stuff here
}

Book.prototype.Output = function() {
    console.log(this.title)
    console.log(this.author)
    console.log(this.pages)
    console.log(this.read)
}

let addBookBtn = document.getElementById('addBookBtn')
let titleForm = document.getElementById('title')
let authorForm = document.getElementById('author')
let pagesForm = document.getElementById('pages')
let readForm = document.getElementById('read')
addBookBtn.addEventListener('click', newBook)

function newBook() {
    console.log(title)
    const book = new Book(title.value, author.value, pages.value, read.checked)
    event.preventDefault()
    book.Output()
    closeModal()
}





//Opening an closing modal
let modal = document.getElementById('addBook')
let openBtn = document.getElementById('openBtn')
let overlay = document.getElementById('overlay')
let closeBtn = document.getElementById('closeBtn')

openBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)

function openModal() {
    modal.classList.add('active')
    overlay.classList.add('active')
}
function closeModal() {
    modal.classList.remove('active')
    overlay.classList.remove('active')
}