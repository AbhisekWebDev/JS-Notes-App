const addBtn = document.querySelector('#addBtn');
const main = document.querySelector('#main');

const saveNotes = () => {
    const notes = document.querySelectorAll('.note textarea');
    const data = [];
    notes.forEach(note => {
        data.push(note.value);
    });
    if(data.length === 0){
        localStorage.removeItem('notes');
    }else localStorage.setItem('notes', JSON.stringify(data));
};

addBtn.addEventListener('click', () => {
    addNote();
});

const addNote = (text = '') => {
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `
        <div class="tool">
            <i class="save fa-solid fa-check"></i>
            <i class="trash fa-solid fa-trash"></i>
        </div>
        <textarea name="" id="">${text}</textarea>
    `;

    note.querySelector('.trash').addEventListener('click', () => {
        note.remove();
        saveNotes();
    });

    note.querySelector('.save').addEventListener('click', () => {
        saveNotes();
    });

    main.appendChild(note);
};

(function () {
    const Isnotes = JSON.parse(localStorage.getItem('notes'));
    
    if(Isnotes === null){
        addNote();
    }else {
        Isnotes.forEach((Isnote) => {
            addNote(Isnote);
        });
    }
    
})();
