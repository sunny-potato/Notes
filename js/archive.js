// const currentImages = document.querySelectorAll(".addedImage img");
const newNoteTitle = document.querySelector(".newNoteTitle");
const newNoteContent = document.querySelector(".newNoteContent");
// const labeledReminder = document.querySelector(".labeledReminder");
const reminderDate = document.querySelector(
  "div.reminderContainer input[type='date']"
);
const reminderTime = document.querySelector(
  "div.reminderContainer input[type='time']"
);
const newNoteContainer = document.querySelector(".newNoteContainer");

export function getData() {
  return JSON.parse(localStorage.getItem("archivedData"));
}
// console.log(getData());

export function saveData() {
  const getArchiveData = getData();
  console.log("before start", getArchiveData);
  // console.log("start function", getArchiveData);
  const noteInfo = {
    // image: `0`,
    title: `${newNoteTitle.textContent}`,
    content: `${newNoteContent.textContent}`,
    reminderDate: `${reminderDate.value}`,
    reminderTime: `${reminderTime.value}`,
    bgColor: `${newNoteContainer.style.background}`,
  };

  // console.log("before setItem", getArchiveData);
  if (getArchiveData === null) {
    const initialDataArray = [];
    initialDataArray.push(noteInfo);
    localStorage.setItem("archivedData", JSON.stringify(initialDataArray));
    return getArchiveData;
  } else {
    getArchiveData.push(noteInfo);
    localStorage.setItem("archivedData", JSON.stringify(getArchiveData));
    return getArchiveData;
  }
}

// const getArchiveData = getData();
// console.log(getArchiveData);
// const archiveContainer = document.querySelector(".archiveContainer");
// const archiveInner = document.querySelector(".archiveInner");
// // console.log(archiveInner.children); 0-3
// getArchiveData.forEach((each) => {
//   archiveInner.children[0].textContent = each.title;
//   archiveInner.children[1].textContent = each.content;
//   archiveInner.children[2].textContent = `Alarm - ${each.reminderDate}, ${each.reminderTime}`;
//   archiveContainer.appendChild(archiveInner);
// });
