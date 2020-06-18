function navBar() {
    var x = document.getElementById("myTopnav");
    console.log(x.className);
    if (x.className === "row justify-content-center topnav"){
      x.className = "topnav responsive";
    } 
      else {
      x.className = "row justify-content-center topnav";
    }
  }