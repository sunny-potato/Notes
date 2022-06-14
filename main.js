// const newNoteBefore = document.querySelector(".newNoteBefore");
const newNoteContainer = document.querySelector(".newNoteContainer");
const newNoteContent = document.querySelector(".newNoteContent");
const createNewNote = document.querySelector(".createNewNote");
// const ButtonsMain = document.querySelectorAll(".createNewNote > button");
// newNoteBefore.addEventListener("focusin", (event) => {
// event.target.style.display = "none";
// ButtonsMain.style.display = "none";
// newNoteAfter.style.display = "inline-block";
// });

// function goToList() {
//   console.log(ButtonsMain.NodeList);
// }

newNoteContainer.addEventListener("focusout", () => {
  // save data
});

const newNoteIcons = document.querySelectorAll(".material-symbols-outlined");
const clickedIcon = document.querySelectorAll("div.clickedIcon");
newNoteIcons.forEach((icon, index) => {
  clickedIcon[index].style.display = "none";
  icon.addEventListener("click", () => {
    if (clickedIcon[index].style.display === "none") {
      clickedIcon[index].style.display = "block";
    } else {
      clickedIcon[index].style.display = "none";
    }
  });
});

const backgroundColors = document.querySelectorAll(".backgroundColors div");
// console.log(backgroundColors);
backgroundColors.forEach((color, index) => {
  // console.log(color, index);
  color.addEventListener("click", () => {
    // console.log(color.className, index);
    newNoteContainer.style.background = color.className;
  });
});
