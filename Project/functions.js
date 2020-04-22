var expanded = false;

function dropdown() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}



window.addEventListener('mouseup', function(event) {
    var box = document.getElementById("checkboxes");
    var checks = document.getElementById("text");
    var i;
      if(event.target != box && event.target.parentNode != box){
        if (event.target != checks && event.target.parentNode != checks){
          this.console.log(5);
          box.style.display = "none";
        }  
      }
  });
