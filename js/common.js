function navBar() {
    var x = document.getElementById("myTopnav");
    console.log(x.className);
    if (x.classList.contains("responsive") == false){
      x.classList.add("responsive");
    } 
      else {
      x.classList.remove("responsive");
    }
  }