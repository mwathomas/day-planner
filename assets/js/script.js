// defines items in the scheduler
var workday = [
  {
    hour: "09",
    time: "09",
    ampm: "am ",
  },
  {
    hour: "10",
    time: "10",
    ampm: "am ",
  },
  {
    hour: "11",
    time: "11",
    ampm: "am ",
  },
  {
    hour: "12",
    time: "12",
    ampm: "pm ",
  },
  {
    hour: "01",
    time: "13",
    ampm: "pm ",
  },
  {
    hour: "02",
    time: "14",
    ampm: "pm ",
  },
  {
    hour: "03",
    time: "15",
    ampm: "pm ",
  },
  {
    hour: "04",
    time: "16",
    ampm: "pm ",
  },
  {
    hour: "05",
    time: "17",
    ampm: "pm ",
  },
];
console.log(allEntries);
var allEntries = JSON.parse(localStorage.getItem("allEntries"));

// gets todays date and puts it in the header
function getDate() {
  var currentDate = moment().format("dddd, MMMM Do YYYY");
  $("#currentDay").text(currentDate);
}
getDate();

// creates the visuals for the scheduler body
workday.forEach(function (blockTime) {
  // creates timeblocks row
  var rows = $("<form>")
    .attr({
      class: "row",
    })
    .appendTo(".container");

  var hourField = $("<div>").text(`${blockTime.hour}${blockTime.ampm}`);

  // creates schdeduler data
  var hourBox = $("<div>").attr({
    class: "col-md-9 description p-0",
  });
  var eventInfo = $("<textarea>");
  hourBox.append(eventInfo);
  eventInfo.append(allEntries[`${blockTime.time}` - 9]);

  //colors the hour blocks based on current time
  if (blockTime.time < moment().format("HH")) {
    eventInfo.attr({
      class: "past",
      id: `e${blockTime.time}`,
    });
  } else if (blockTime.time === moment().format("HH")) {
    eventInfo.attr({
      class: "present",
      id: `e${blockTime.time}`,
    });
  } else if (blockTime.time > moment().format("HH")) {
    eventInfo.attr({
      class: "future",
      id: `e${blockTime.time}`,
    });
  }

  // creates save button
  var saveBtn = $("<i class='far fa-save fa-lg'></i>");
  var saveEvent = $("<button>")
    .attr({
      class: "col-md-1 saveBtn",
      id: `b${blockTime.time}`,
    })
    .prepend('<img id="saveimage" src="assets/images/download.png" />');
  saveEvent.append(saveBtn);
  rows.append(hourField, hourBox, saveEvent);
});

// saves data to be used in localStorage
var saveButton1 = document.querySelector("#b09");
saveButton1.addEventListener("click", function (event) {
  event.preventDefault();
  var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
  if (existingEntries == null) existingEntries = [];
  var entryText1 = document.querySelector("#e09").value;
  console.log(entryText1);
  existingEntries.splice(0, 1, entryText1);
  console.log(existingEntries);
  localStorage.setItem("allEntries", JSON.stringify(existingEntries));
});

var saveButton2 = document.querySelector("#b10");
saveButton2.addEventListener("click", function (event) {
  event.preventDefault();
  var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
  if (existingEntries == null) existingEntries = [];
  var entryText2 = document.querySelector("#e10").value;
  existingEntries.splice(1, 1, entryText2);
  localStorage.setItem("allEntries", JSON.stringify(existingEntries));
});

var saveButton3 = document.querySelector("#b11");
saveButton3.addEventListener("click", function (event) {
  event.preventDefault();
  var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
  if (existingEntries == null) existingEntries = [];
  var entryText3 = document.querySelector("#e11").value;
  existingEntries.splice(2, 1, entryText3);
  localStorage.setItem("allEntries", JSON.stringify(existingEntries));
});

var saveButton4 = document.querySelector("#b12");
saveButton4.addEventListener("click", function (event) {
  event.preventDefault();
  var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
  if (existingEntries == null) existingEntries = [];
  var entryText4 = document.querySelector("#e12").value;
  existingEntries.splice(3, 1, entryText4);
  localStorage.setItem("allEntries", JSON.stringify(existingEntries));
});

var saveButton5 = document.querySelector("#b13");
saveButton5.addEventListener("click", function (event) {
  event.preventDefault();
  var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
  if (existingEntries == null) existingEntries = [];
  var entryText5 = document.querySelector("#e13").value;
  existingEntries.splice(4, 1, entryText5);
  localStorage.setItem("allEntries", JSON.stringify(existingEntries));
});

var saveButton6 = document.querySelector("#b14");
saveButton6.addEventListener("click", function (event) {
  event.preventDefault();
  var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
  if (existingEntries == null) existingEntries = [];
  var entryText6 = document.querySelector("#e14").value;
  existingEntries.splice(5, 1, entryText6);
  localStorage.setItem("allEntries", JSON.stringify(existingEntries));
});

var saveButton7 = document.querySelector("#b15");
saveButton7.addEventListener("click", function (event) {
  event.preventDefault();
  var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
  if (existingEntries == null) existingEntries = [];
  var entryText7 = document.querySelector("#e15").value;
  existingEntries.splice(6, 1, entryText7);
  localStorage.setItem("allEntries", JSON.stringify(existingEntries));
});

var saveButton8 = document.querySelector("#b16");
saveButton8.addEventListener("click", function (event) {
  event.preventDefault();
  var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
  if (existingEntries == null) existingEntries = [];
  var entryText8 = document.querySelector("#e16").value;
  existingEntries.splice(7, 1, entryText8);
  localStorage.setItem("allEntries", JSON.stringify(existingEntries));
});

var saveButton9 = document.querySelector("#b17");
saveButton9.addEventListener("click", function (event) {
  event.preventDefault();
  var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
  if (existingEntries == null) existingEntries = [];
  var entryText9 = document.querySelector("#e17").value;
  existingEntries.splice(8, 1, entryText9);
  localStorage.setItem("allEntries", JSON.stringify(existingEntries));
});
