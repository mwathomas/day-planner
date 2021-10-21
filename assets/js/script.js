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
  var eventInfo = $("<textarea>").attr({
    class: "event",
  });
  hourBox.append(eventInfo);

  //colors the hour blocks based on current time
  if (blockTime.time < moment().format("HH")) {
    eventInfo.attr({
      class: "past",
      id: "event",
    });
  } else if (blockTime.time === moment().format("HH")) {
    eventInfo.attr({
      class: "present",
      id: "event",
    });
  } else if (blockTime.time > moment().format("HH")) {
    eventInfo.attr({
      class: "future",
      id: "event",
    });
  }

  // creates save button
  var saveBtn = $("<i class='far fa-save fa-lg'></i>");
  var saveEvent = $("<button>")
    .attr({
      class: "col-md-1 saveBtn",
    })
    .prepend('<img id="saveimage" src="assets/images/download.png" />');
  saveEvent.append(saveBtn);
  rows.append(hourField, hourBox, saveEvent);
});

var saveBtnClick = document.querySelector(".saveBtn");
var eventInput = document.querySelector(".event");
// // saves data to be used in localStorage
saveBtnClick.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem("event", eventInput.value);
});
