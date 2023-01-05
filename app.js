let myLibrary = [];

function Book() {
    // the constructor...
}

function addBookToLibrary() {
    // do stuff here
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