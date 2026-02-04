

      window.onscroll = function() {myFunction()};

    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;

    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }

    // sticky navigation var end



        function toggleText() {
 
            // Get all the elements from the page
            let points =
                document.getElementById("points");
 
            let showMoreText =
                document.getElementById("moreText");
 
            let buttonText =
                document.getElementById("textButton");
 
            // If the display property of the dots to be displayed is already set to 'none' (that is hidden) then this section of code triggers
            if (points.style.display === "none") {
 
                // Hide the text between the span
                // elements
                showMoreText.style.display = "none";
 
                // Show the dots after the text
                points.style.display = "inline";
 
                // Change the text on button to
                // 'Show More'
                buttonText.innerHTML = "Show More";
            }
 
            // If the hidden portion is revealed,
            // we will change it back to be hidden
            else {
 
                // Show the text between the
                // span elements
                showMoreText.style.display = "inline";
 
                // Hide the dots after the text
                points.style.display = "none";
 
                // Change the text on button
                // to 'Show Less'
                buttonText.innerHTML = "Show Less";
            }
        }
          function toggleText2(){
            let points =
                document.getElementById("points2");
 
            let showMoreText =
                document.getElementById("moreText2");
 
            let buttonText =
                document.getElementById("textButton2");
            if (points.style.display === "none") {
                showMoreText.style.display = "none";
                points.style.display = "inline";
                buttonText.innerHTML = "Show More";
            }
 
            else {
                showMoreText.style.display = "inline";
                points.style.display = "none";
                buttonText.innerHTML = "Show Less";
            }
        }

          function toggleText3(){
            let points =
                document.getElementById("points3");
 
            let showMoreText =
                document.getElementById("moreText3");
 
            let buttonText =
                document.getElementById("textButton3");
            if (points.style.display === "none") {
                showMoreText.style.display = "none";
                points.style.display = "inline";
                buttonText.innerHTML = "Show More";
            }
 
            else {
                showMoreText.style.display = "inline";
                points.style.display = "none";
                buttonText.innerHTML = "Show Less";
            }
        }

        function toggleText4(){
            let points =
                document.getElementById("points4");
 
            let showMoreText =
                document.getElementById("moreText4");
 
            let buttonText =
                document.getElementById("textButton4");
            if (points.style.display === "none") {
                showMoreText.style.display = "none";
                points.style.display = "inline";
                buttonText.innerHTML = "Show More";
            }
 
            else {
                showMoreText.style.display = "inline";
                points.style.display = "none";
                buttonText.innerHTML = "Show Less";
            }
        }

        function toggleText5(){
            let points =
                document.getElementById("points5");
 
            let showMoreText =
                document.getElementById("moreText5");
 
            let buttonText =
                document.getElementById("textButton5");
            if (points.style.display === "none") {
                showMoreText.style.display = "none";
                points.style.display = "inline";
                buttonText.innerHTML = "Show More";
            }
 
            else {
                showMoreText.style.display = "inline";
                points.style.display = "none";
                buttonText.innerHTML = "Show Less";
            }
        }

        function toggleText6(){
            let points =
                document.getElementById("points6");
 
            let showMoreText =
                document.getElementById("moreText6");
 
            let buttonText =
                document.getElementById("textButton6");
            if (points.style.display === "none") {
                showMoreText.style.display = "none";
                points.style.display = "inline";
                buttonText.innerHTML = "Show More";
            }
 
            else {
                showMoreText.style.display = "inline";
                points.style.display = "none";
                buttonText.innerHTML = "Show Less";
            }
        }

        function toggleText7(){
            let points =
                document.getElementById("points7");
 
            let showMoreText =
                document.getElementById("moreText7");
 
            let buttonText =
                document.getElementById("textButton7");
            if (points.style.display === "none") {
                showMoreText.style.display = "none";
                points.style.display = "inline";
                buttonText.innerHTML = "Show More";
            }
 
            else {
                showMoreText.style.display = "inline";
                points.style.display = "none";
                buttonText.innerHTML = "Show Less";
            }
        }

        function toggleText8(){
            let points =
                document.getElementById("points8");
 
            let showMoreText =
                document.getElementById("moreText8");
 
            let buttonText =
                document.getElementById("textButton8");
            if (points.style.display === "none") {
                showMoreText.style.display = "none";
                points.style.display = "inline";
                buttonText.innerHTML = "Show More";
            }
 
            else {
                showMoreText.style.display = "inline";
                points.style.display = "none";
                buttonText.innerHTML = "Show Less";
            }
        }
