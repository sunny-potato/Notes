const newNoteContainer = document.querySelector(".newNoteContainer");
const newNoteIcons = document.querySelectorAll(
  ".newNoteIcons> .material-symbols-outlined"
);
const newNoteTitle = document.querySelector(".newNoteTitle");
const newNoteContent = document.querySelector(".newNoteContent");

let noteTitle = [];
newNoteTitle.addEventListener("keyup", (event) => {
  noteTitle = event.target.textContent.split(" ");
  if (noteTitle.length === 0) {
    newNoteIcons[4].className = "material-symbols-outlined disabled";
  } else {
    newNoteIcons[4].className = "material-symbols-outlined";
  }
});

const deletedTitle = [];
const undo = () => {
  deletedTitle.push(noteTitle.pop());
  newNoteTitle.textContent = noteTitle.join(" ");
  if (noteTitle.length === 0) {
    newNoteIcons[4].className = "material-symbols-outlined disabled";
  }
  if (deletedTitle.length === 0) {
    newNoteIcons[5].className = "material-symbols-outlined disabled";
  } else {
    newNoteIcons[5].className = "material-symbols-outlined";
  }
};

const redo = () => {
  noteTitle.push(deletedTitle.pop());
  newNoteTitle.textContent = noteTitle.join(" ");
  if (deletedTitle.length === 0) {
    newNoteIcons[5].className = "material-symbols-outlined disabled";
  }
};

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
      const labeledReminder = document.querySelector(".labeledReminder");
      // const currentImages = document.querySelectorAll(".addedImage img");
      const reminderDate = document.querySelector(
        "div.reminderContainer input[type='date']"
      );
      const reminderTime = document.querySelector(
        "div.reminderContainer input[type='time']"
      );
      const initialDataArray = [];
      const getArchiveData = JSON.parse(localStorage.getItem("archivedData"));
      const noteInfo = {
        image: `0`,
        title: `${newNoteTitle.textContent}`,
        content: `${newNoteContent.textContent}`,
        reminderDate: `${reminderDate.value}`,
        reminderTime: `${reminderTime.value}`,
        bgColor: `${newNoteContainer.style.background}`,
      };
      if (getArchiveData === null) {
        initialDataArray.push(noteInfo);
        localStorage.setItem("archivedData", JSON.stringify(initialDataArray));
      } else {
        getArchiveData.push(noteInfo);
        localStorage.setItem("archivedData", JSON.stringify(getArchiveData));
      }
    });
    // check if there

    // if (currentImages.length !== 0) {
    //   currentImages.forEach((image) => {
    //     console.log(image.src);
    //   });
    // }
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
