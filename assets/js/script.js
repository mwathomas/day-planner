// defines items in the scheduler
var workday = [
  {
    hour: "09",
    time: "09",
    meridiem: "am",
  },
  {
    hour: "10",
    time: "10",
    meridiem: "am",
  },
  {
    hour: "11",
    time: "11",
    meridiem: "am",
  },
  {
    hour: "12",
    time: "12",
    meridiem: "pm",
  },
  {
    hour: "01",
    time: "13",
    meridiem: "pm",
  },
  {
    hour: "02",
    time: "14",
    meridiem: "pm",
  },
  {
    hour: "03",
    time: "15",
    meridiem: "pm",
  },
  {
    hour: "04",
    time: "16",
    meridiem: "pm",
  },
  {
    hour: "05",
    time: "17",
    meridiem: "pm",
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

  var hourField = $("<div>").text(`${blockTime.hour}${blockTime.meridiem}`);

  // creates schdeduler data
  var hourBox = $("<div>").attr({
    class: "col-md-9 description p-0",
  });
  var eventInfo = $("<textarea>");
  hourBox.append(eventInfo);

  //colors the hour blocks based on current time
  if (blockTime.time < moment().format("HH")) {
    eventInfo.attr({
      class: "past",
    });
  } else if (blockTime.time === moment().format("HH")) {
    eventInfo.attr({
      class: "present",
    });
  } else if (blockTime.time > moment().format("HH")) {
    eventInfo.attr({
      class: "future",
    });
  }

  // creates save button
  var saveBtn = $("<i class='far fa-save fa-lg'></i>");
  var saveEvent = $("<button>").attr({
    class: "col-md-1 saveBtn",
  });
  saveEvent.append(saveBtn);
  rows.append(hourField, hourBox, saveEvent);
});

// // loads any existing localstorage data after components created
// init();

// // saves data to be used in localStorage
// $(".saveBtn").on("click", function (event) {
//   event.preventDefault();
//   var saveIndex = $(this)
//     .siblings(".description")
//     .children(".future")
//     .attr("id");
//   myDay[saveIndex].reminder = $(this)
//     .siblings(".description")
//     .children(".future")
//     .val();
//   console.log(saveIndex);
//   saveReminders();
//   displayReminders();
// });

// // saves data to localStorage
// function saveEvent() {
//   localStorage.setItem("workday", JSON.stringify(workday));
// }

// // sets any data in localStorage to the view
// function displayReminders() {
//   workday.forEach(function (_thisHour) {
//     $(`#${_thisHour.id}`).val(_thisHour.reminder);
//   });
// }

// // sets any existing localStorage data to the view if it exists
// function init() {
//   var storedDay = JSON.parse(localStorage.getItem("workday"));

//   if (storedDay) {
//     myDay = storedDay;
//   }

//   saveEvent();
//   displayReminders();
