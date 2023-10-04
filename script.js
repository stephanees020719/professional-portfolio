function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  }
 
   
  function displayJoke() {
    var jokes = [
      "Why don't scientists trust atoms? Because they make up everything!",
      "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!",
      "Why don't skeletons fight each other? They don't have the guts!",
      "I'm reading a book about anti-gravity. It's impossible to put down!",
      "Why don't scientists trust atoms? Because they make up everything!",
    ];
    var randomIndex = Math.floor(Math.random() * jokes.length);
    var joke = jokes[randomIndex];
  
   
    var jokeContainer = document.getElementById("joke-container");
    jokeContainer.textContent = joke;
  }
  

  function moveContent() {
    var content = document.querySelector(".section");
    content.style.position = "relative";
    content.style.left = "50px";
    content.style.top = "50px";
  }

  function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  }