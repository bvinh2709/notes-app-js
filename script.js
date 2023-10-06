const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');

let note = document.querySelectorAll('.input-box')

function saveNotes() {
    localStorage.setItem('notes', notesContainer.innerHTML);
}

function loadNotes() {
    notesContainer.innerHTML = localStorage.getItem('notes');
}

createBtn.addEventListener('click', () => {
    let inputBox = document.createElement('p');
    let inputImg = document.createElement('img');
    inputBox.classList.add('input-box');
    inputBox.setAttribute("contenteditable", "true");
    inputImg.src = './assets/delete.png'
    notesContainer.appendChild(inputBox).appendChild(inputImg);
    saveNotes()
})

notesContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        saveNotes()
    } else if (e.target.tagName === 'P'){
        note = document.querySelectorAll('.input-box')
        note.forEach( aNote => {
            aNote.onkeyup = () => {
                saveNotes()
            }
        })
    }
})

loadNotes();

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        document.execCommand('insertLineBreak')
        event.preventDefault();
    }
})