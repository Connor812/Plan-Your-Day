$(function () {

  // Gets Current Date and applies it to current day parapraph in header

  let currentDay = dayjs().format('dddd / MMMM / YYYY');
  $('#currentDay').text(currentDay);

  // Gets current time in the form of hours

  let currentTime = dayjs().format('H');

  // Loops through every div with the class .time-block and gets Id's, and based on the id will
  // change the color of the box 

  $('.time-block').each(function () {

    timeBlock = parseInt(this.id);
    console.log(timeBlock);

    if (timeBlock < currentTime) {
      $(this).addClass('past');
    } else if (timeBlock == currentTime) {
      $(this).removeClass('past');
      $(this).removeClass('future');
      $(this).addClass('present');
    } else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }
  })

  // Event listener for save button and adds .description to localStorage

  $(".saveBtn").on("click", function () {

    let text = $(this).siblings('.description').val();
    let time = $(this).parent().attr('id');
    localStorage.setItem('Hour-' + time, text);
  })

  $("#9 .description").val(localStorage.getItem("Hour-9"));
  $("#10 .description").val(localStorage.getItem("Hour-10"));
  $("#11 .description").val(localStorage.getItem("Hour-11"));
  $("#12 .description").val(localStorage.getItem("Hour-12"));
  $("#13 .description").val(localStorage.getItem("Hour-13"));
  $("#14 .description").val(localStorage.getItem("Hour-14"));
  $("#15 .description").val(localStorage.getItem("Hour-15"));
  $("#16 .description").val(localStorage.getItem("Hour-16"));
  $("#17 .description").val(localStorage.getItem("Hour-17"));

  // Reloads the page every minute so in the hour changes, the boxes update color

  setTimeout(function () {
    window.location.reload();
  }, 600000);

});
