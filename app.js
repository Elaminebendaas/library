let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
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
let mainGrid = document.getElementById('bookgrid')
let readBtn = document.querySelectorAll('.readbtn')
addBookBtn.addEventListener('click', newBook)


readBtn.forEach(button => {
    button.addEventListener('click', changeStatus = () =>{
        button.classList.replace('notread', 'read')
    })    
});



function newBook() {
    const book = new Book(title.value, author.value, pages.value, read.checked)
    event.preventDefault()
    book.Output()
    closeModal()
    myLibrary.push(book)
    addBookToGrid(book)
}


//This creates the container for the book
function addBookToGrid(book){
    bookDiv = document.createElement('div')
    bookDiv.classList.add('book-details')
    bookDiv.dataset.index = myLibrary.indexOf(book)
    titleP = document.createElement('p')
    titleP.innerHTML = book.title
    bookDiv.append(titleP)
    authorP = document.createElement('p')
    authorP.innerHTML = book.author
    bookDiv.append(authorP)
    pagesP = document.createElement('p')
    pagesP.innerHTML = book.pages + " pages"
    bookDiv.append(pagesP)
    readBtn = document.createElement('button')
    readBtn.classList.add('btn')
    readBtn.classList.add('readBtn')
    if(book.read == true){
        readBtn.classList.add('read')
        readBtn.innerHTML = 'Read'
    }else{
        readBtn.classList.add('notread')
        readBtn.innerHTML = 'Not Read'
    }
    bookDiv.append(readBtn)
    removeBtn = document.createElement('button')
    removeBtn.classList.add('btn')
    removeBtn.classList.add('removeBtn')
    removeBtn.innerHTML = 'Remove'
    bookDiv.append(removeBtn)
    mainGrid.append(bookDiv)
}




function changeStatus(i){
    
    i.classList.replace('notread','read')
    console.log('hello')
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