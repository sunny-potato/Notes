import { saveData } from "./archive.js";
import { redo, undo } from "./undoRedo.js";

const newNoteContainer = document.querySelector(".newNoteContainer");
const newNoteIcons = document.querySelectorAll(
  ".newNoteIcons> .material-symbols-outlined"
);
const newNoteTitle = document.querySelector(".newNoteTitle");
const newNoteContent = document.querySelector(".newNoteContent");

const clickedIcon = document.querySelectorAll("div.clickedIcon");
newNoteIcons.forEach((icon, index) => {
  if (index < 3) {
    clickedIcon[index].style.display = "none";
    icon.addEventListener("click", () => {
      for (let i = 0; i < 3; i++) {
        if (i === index && clickedIcon[i].style.display === "none") {
          clickedIcon[i].style.display = "block";
        } else if (i === index && clickedIcon[i].style.display === "block") {
          clickedIcon[i].style.display = "none";
        } else {
          clickedIcon[i].style.display = "none";
        }
      }
    });
  } else if (index === 3) {
    icon.addEventListener("click", () => {
      saveData();
    });
  } else if (index === 4) {
    icon.addEventListener("click", undo);
  } else if (index === 5) {
    icon.addEventListener("click", redo);
  }
});

const backgroundColors = document.querySelectorAll(".backgroundColors div");
backgroundColors.forEach((color) => {
  color.addEventListener("click", () => {
    newNoteContainer.style.background = color.className;
  });
});

const saveButton = document.querySelector(".saveButton");
const savedNotes = document.querySelector(".savedNotes");
saveButton.addEventListener("click", () => {
  const saveNewNote = newNoteContainer.cloneNode(true);
  savedNotes.appendChild(saveNewNote);
  saveNewNote.className = `savedNote`;
  // localStorage.setItem("SavedNotes", savedNotes.innerHTML);
  // const local = localStorage.getItem("SavedNotes");

  if (lastReminderTime) {
    console.log({ lastReminderTime });
    setTimeout(() => {
      displayAlram(saveNewNote);
    }, lastReminderTime);
  }

  reset();
});

const cancelButton = document.querySelector(".cancelButton");
cancelButton.addEventListener("click", () => {
  reset();
});

function reset() {
  newNoteTitle.textContent = "";
  newNoteContent.textContent = "";
  newNoteContainer.style.background = "white";
  lastReminderTime = undefined;

  clickedIcon.forEach((icon) => {
    icon.style.display = "none";
  });

  while (displayImages.firstChild) {
    displayImages.removeChild(displayImages.firstChild);
  }

  const displayLabels = document.querySelector(".displayLabels");
  while (displayLabels.firstChild) {
    displayLabels.removeChild(displayLabels.firstChild);
  }
}
