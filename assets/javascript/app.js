
//  Slideshow Activity
//  ** SOLUTION **

// TODO: Put links to our images in this image array.
var triviaQuestions = {
    "1.  Which of the following statements about the metal mercury is NOT true?": {
      a: "Mercury is also called quicksilver",
      b: "At room temperature, mercury is liquid",
      c: "Mercury is very poisonous",
      d: "Mercury is highly radioactive"
    },
    "2. The echidna and the platypus are the only two mammals that:": {
      a: "Lay eggs",
      b: "Are capable of flight",
      c: "Do not require oxygen",
      d: "Do not nurse their young"
    },
    "3. What is spelunking?": {
      a: "The study of tropical birds",
      b: "The exploration of caves",
      c: "Deep-sea diving",
      d: "The study of ancient animal tracks"
    },
    "4. What is the cause of the sound made when you &quot;crack a whip&quot;?": {
      a: "The actual sound of the whip is imperceptible. What we hear is a sharp echo against the earth, which greatly magnifies the slight sound.",
      b: "A shock wave is created when the end of the whip travels faster than the sound waves created by its own motion.",
      c: "As you sharply crack the whip, the leather of the whip stretches and suddenly becomes taut, making a loud noise.",
      d: "Each whip is designed with two internal 'sticks' that snap together, making a loud noise when the whip is cracked."
    },
    "5. Dry ice is:": {
      a: "Regular ice, with all the moisture sucked out",
      b: "Frozen water with the addition of special chemicals to make it smoke",
      c: "Frozen carbon dioxide",
      d: "Frozen helium"
    },
    "6. How many numerals can the average person remember in the correct order?": {
      a: "10",
      b: "7",
      c: "5",
      d: "3"
    },
    "7. How many karats is pure, unalloyed gold?": {
      a: "32",
      b: "24",
      c: "18",
      d: "9"
    },
    "8. How do dairies ensure that the cream does not rise to the top in whole or 2% milk?": {
      a: "They pasteurize it.",
      b: "They homogenize it.",
      c: "They pack it in sterile containers.",
      d: "They keep it constantly refrigerated."
    },
    "9. What would some doctors prescribe a century ago when a patient complained of continual fatigue (a possible mineral deficiency)?": {
      a: "Apples that have been pierced with nails and stored for several days.",
      b: "Whole oats steamed with molasses and bran.",
      c: "Ground olive pits cooked with dark tea in a heavy enamel pot.",
      d: "A dozen raw eggs a week."
    },
    "10.  During the time of the dinosaurs, how many continents were there on Earth?": {
      a: "1",
      b: "3",
      c: "4",
      d: "8"
    }
  };

// Variable showImage will hold the setInterval when we start the slideshow
var showQuiz;

// Count will keep track of the index of the currently displaying picture.
var count = 0;

// TODO: Use jQuery to run "startQuiz" when we click the "start" button.
$("#start").click(startQuiz);

// TODO: Use jQuery to run "stopQuiz" when we click the "done" button.
$("#done").click(stopQuiz);


// This function will replace display whatever image it's given
// in the 'src' attribute of the img tag.
function displayImage() {
  $("#image-holder").html("<img src=" + images[count] + " width='400px'>");
}

function nextImage() {
  //  TODO: Increment the count by 1.
  count++;

  // TODO: Show the loading gif in the "image-holder" div.
  $("#image-holder").html("<img src='images/loading.gif' width='200px'/>");

  // TODO: Use a setTimeout to run displayImage after 1 second.
  setTimeout(displayPage, 1000);

  // TODO: If the count is the same as the length of the image array, reset the count to 0.
  if (count === triviaQuestions.length) {
    count = 0;
  }
}

function startQuiz() {

  // TODO: Use showImage to hold the setInterval to run nextImage.
  showPage = setInterval(nextPage, 300000);

}

function stopQuiz() {

  // TODO: Put our clearInterval here:
  clearInterval(showPage);

}

// This will run the display image function as soon as the page loads.
displayImage();