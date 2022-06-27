// const newNoteContainer = document.querySelector(".newNoteContainer");
const newNoteIcons = document.querySelectorAll(
  ".newNoteIcons> .material-symbols-outlined"
);
const newNoteTitle = document.querySelector(".newNoteTitle");
const newNoteContent = document.querySelector(".newNoteContent");

const changeHistory = [];
newNoteTitle.addEventListener("keydown", (event) => {
  const titleHistory = {
    text: event.target.textContent,
    field: "title",
  };
  changeHistory.push(titleHistory);
  isChangeHistoryAbled();
});

newNoteContent.addEventListener("keydown", (event) => {
  const contentHistory = {
    text: event.target.textContent,
    field: "content",
  };
  changeHistory.push(contentHistory);
  isChangeHistoryAbled();
});

function isChangeHistoryAbled() {
  if (changeHistory.length === 0) {
    newNoteIcons[4].classsName = "material-symbols-outlined disabled";
  } else {
    newNoteIcons[4].className = "material-symbols-outlined";
  }
}

const deleteHistory = [];
export const undo = () => {
  deleteHistory.push(changeHistory.pop());
  const lastChangeElement = changeHistory[changeHistory.length - 1];
  if (changeHistory.length !== 0) {
    if (lastChangeElement.field === "title") {
      newNoteTitle.textContent = lastChangeElement.text;
    } else {
      newNoteContent.textContent = lastChangeElement.text;
    }
  } else {
    newNoteIcons[4].className = "material-symbols-outlined disabled";
  }
  if (deleteHistory.length === 0) {
    newNoteIcons[5].classsName = "material-symbols-outlined disabled";
  } else {
    newNoteIcons[5].className = "material-symbols-outlined";
  }
};

export const redo = () => {
  const lastDeleteElement = deleteHistory[deleteHistory.length - 1];
  if (deleteHistory.length !== 0) {
    if (lastDeleteElement.field === "title") {
      newNoteTitle.textContent = deleteHistory.pop().text;
    } else {
      newNoteContent.textContent = deleteHistory.pop().text;
    }
  } else {
    console.log(deleteHistory.length);
    newNoteIcons[5].classsName = "material-symbols-outlined disabled";
  }
};
