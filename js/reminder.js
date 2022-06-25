const reminderSave = document.querySelector(".reminderSave");
const reminderContainer = document.querySelector(".reminderContainer");
const reminderDate = document.querySelector(
  "div.reminderContainer input[type='date']"
);
const reminderTime = document.querySelector(
  "div.reminderContainer input[type='time']"
);

const displayLabels = document.querySelector(".displayLabels");
const labelContainer = document.createElement("span");
let lastReminderTime;

reminderSave.addEventListener("click", () => {
  if (reminderDate.value === "") {
    return;
  }
  if (reminderTime.value === "") {
    return;
  } else {
    labelContainer.className = "labeledReminder";
    labelContainer.textContent = `Alarm-${reminderDate.value}, ${reminderTime.value}`;
    displayLabels.appendChild(labelContainer);
    clickedIcon[0].style.display = "none";

    const reservedTime = new Date(
      `${reminderDate.value}T${reminderTime.value}`
    ).getTime();

    const currentTime = new Date().getTime();
    const millisecondsDateTime = reservedTime - currentTime;
    // const savedAllNotes = document.querySelectorAll(".savedNotes");
    // console.log(savedAllNotes.children);
    lastReminderTime = millisecondsDateTime;
  }
});

const displayAlram = (noteElement) => {
  console.log("heeieiei", { noteElement });
  // alert("Reminder!!!");
};

const labeledReminder = document.querySelectorAll(".labeledReminder");
const checkReminder = () => {
  labeledReminder.forEach((dataTime) => {
    console.log(dataTime.firstChild);
  });
};

// function getToday() {
//   const today = new Date();
//   const yyyy = today.getFullYear();
//   let MM = today.getMonth() + 1;
//   let dd = today.getDate();
//   if (MM <= 9) {
//     MM = "0" + MM;
//   }
//   if (dd <= 9) {
//     dd = "0" + dd;
//   }
//   return `${yyyy}-${MM}-${dd}`;
// }
// reminderDate.value = getToday();
