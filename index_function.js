// Progress Bar

    // When the user scrolls the page, execute myFunction 
    document.addEventListener("scroll", myFunction)
    
    function myFunction() {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("myBar").style.width = scrolled + "%";
    }

// Scroll to the top 

    // Get the button:
    let mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }


// dual display member

    let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
    showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
    showSlides(slideIndex = n);
    }

    function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    }

    // auto-manual btn
    let autoMode = false;
    function toggleAuto() {
        autoMode = !autoMode;
      
        if (autoMode) {
          // Auto mode
          intervalId = setInterval(() => {
            plusSlides(1);
          }, 4500);
          document.getElementById("autoBtn").style.backgroundColor = "black";
          document.getElementById("autoBtn").style.color = "white";
        } else {
          // Manual mode
          clearInterval(intervalId);
          document.getElementById("autoBtn").style.backgroundColor = "#bbb";
          document.getElementById("autoBtn").style.color = "black";
        }
      }

    function getScreenResolution() {
        const width = window.screen.width;
        const height = window.screen.height;
        return `${width} x ${height}`;
    }
    document.getElementById('resolution').textContent = getScreenResolution();
