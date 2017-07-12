    //  Set our number counter to any value.
    var number = 10;

    //  Variable that will hold our interval ID when we execute the "run" function
    var intervalId;

    //  The decrement function.
    function decrement() {
      //  Show the number in the #show-number tag.
      $("#show-number").html("<h2>" + number + "</h2>");
      //  Decrease number by one.
      number--;
      //  Once number hits zero...
      if (number === -1) {
        //  ...run the stop function.
        stop();
        //  Alert the user that time is up.
        alert("Time's Up!");
      }
    }
    //  The stop function
    function stop() {
      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }
    //  Execute the run function.
/*    run(); */

    $("#start").on("click", startTimer);

    function startTimer() {
      $("#start").hide();
      intervalId = setInterval(decrement, 1000)
    }

