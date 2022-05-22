for (let i = 1; i <= 2; i++) {
    
   
        document.getElementById("image" + i.toString()).style.opacity = 1;
        document.getElementById("text" + i.toString()).style.opacity = 1;
    
   
  }

window.addEventListener("scroll", () => {
 

  if (window.scrollY > 1010) {
   
    for (let i = 3; i <= 4; i++) {
      document.getElementById("image" + i.toString()).style.opacity = 1;
      document.getElementById("text" + i.toString()).style.opacity = 1;
    }
  }
  if (window.scrollY > 2200) {
   
    for (let i = 5; i <= 6; i++) {
      document.getElementById("image" + i.toString()).style.opacity = 1;
      document.getElementById("text" + i.toString()).style.opacity = 1;
    }
  }
  if (window.scrollY > 3400) {
   
    for (let i = 7; i <= 8; i++) {
      document.getElementById("image" + i.toString()).style.opacity = 1;
      document.getElementById("text" + i.toString()).style.opacity = 1;
    }
  }
  if (window.scrollY > 4400) {
   
    for (let i = 9; i <= 10; i++) {
      document.getElementById("image" + i.toString()).style.opacity = 1;
      document.getElementById("text" + i.toString()).style.opacity = 1;
    }
  }
});
