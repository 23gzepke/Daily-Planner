$(document).ready(function() {
  // listen for save button clicks

  $(".saveBtn").on("click", function() {
    // get nearby values
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    console.log('value:', value);
    console.log('time:', time);

    // save the value in localStorage as time
    localStorage.setItem(value, time);
    
  });

  function getData() {
    ///////$("textarea").text(localStorage.getItem(value));
    var storageKeys = Object.keys(localStorage);
    for(i = 0; i< storageKeys.length; i++) {
      var retrieveTime = localStorage.getItem(storageKeys[i]);
    $('#' + retrieveTime).children('textarea').val(storageKeys[i]);
    
    }
  };

  function hourUpdater() {
    // get current number of hours
    var currentHour = moment().hours();
    console.log('current hour:', currentHour);

    // loop over time blocks. gets current hour
    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
      var textArea = $("textarea");

      console.log("block hour:", blockHour);

      
      // if the current hour is greater than the block hour
      // then add class "past"

      // if they are equal
      // then remove class "past" and add class "present"

      // else
      // remove class "past", remove class "present", add class "future"

      if(currentHour > blockHour) {
        $(this).addClass("past");
      } else if (currentHour === blockHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
      console.log("current > blockHour");
    });
  }

  hourUpdater();
  getData();

  // set up interval to check if current time needs to be updated
  // which means execute hourUpdater function every 15 seconds

  // load any saved data from localStorage
    setInterval(hourUpdater, 15000);

  // display current day on page
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
});
