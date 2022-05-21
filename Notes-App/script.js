const addNotes = document.querySelector("#add-notes");
const notesContainer = document.querySelector("#notes-container");

let arrOfNotes = [];

const notes = JSON.parse(localStorage.getItem("notes"));
if (notes) {
  arrOfNotes = notes;
  createNotes();
}

addNotes.addEventListener("click", addToArrOfNotes);

function callBtnsFunc() {
  const save = document.querySelectorAll(".save");
  const edite = document.querySelectorAll(".edite");
  const deleteNote = document.querySelectorAll(".delete");

  changeContentState(save, "false");
  changeContentState(edite, "true");
  deleteNotes(deleteNote);
}

function changeContentState(arrOfBtns, state) {
  arrOfBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const parent = e.currentTarget.parentElement;

      parent.nextElementSibling.setAttribute("contenteditable", state);

      if (state === "false") {
        updateNote(
          parent.parentElement.dataset.id,
          parent.nextElementSibling.innerText
        );
      }
    });
  });
}

function deleteNotes(deleteBtns) {
  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const parent = e.currentTarget.parentElement.parentElement;

      parent.remove();

      deleteNoteFromArr(parent.dataset.id);
    });
  });
}

function addToArrOfNotes() {
  const note = {
    text: "",
    contentState: true,
    id: Date.now(),
  };
  arrOfNotes.push(note);

  createNotes();
  addToLocalStorage();
}

function createNotes() {
  notesContainer.innerHTML = "";

  arrOfNotes.forEach((note) => {
    const newNote = document.createElement("div");
    newNote.className = "note";
    newNote.dataset.id = note.id;

    newNote.innerHTML = `
    <div class="options">
    <button class="btn save" title="Save"><i class="icon fa-solid fa-floppy-disk"></i></button>
    <button class="btn edite" title="Edite"><i class="icon fa-solid fa-pen-to-square"></i></button>
    <button class="btn delete" title="Delete"><i class="icon fa-solid fa-trash-can"></i></button>
  </div>
  <p class="note-text" contenteditable="${note.contentState}">${note.text}</p>
    `;

    notesContainer.append(newNote);
  });
  callBtnsFunc();
}

function addToLocalStorage() {
  localStorage.setItem("notes", JSON.stringify(arrOfNotes));
}

function updateNote(id, text) {
  const noteIdx = arrOfNotes.findIndex((note) => {
    return note.id == id;
  });

  arrOfNotes.splice(
    noteIdx,
    1,
    (arrOfNotes[noteIdx] = {
      text: text,
      contentState: false,
      id: id,
    })
  );
  addToLocalStorage();
}

function deleteNoteFromArr(id) {
  const noteIdx = arrOfNotes.findIndex((note) => {
    return note.id == id;
  });

  arrOfNotes.splice(noteIdx, 1);
  addToLocalStorage();
}
