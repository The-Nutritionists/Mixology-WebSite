var expanded = false;

function dropdown() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    closeDropDown();
    expanded = false;
  }
}

function closeDropDown(){
    checkboxes.style.display = "none";
}

window.onclick = function(event) {
   //  var selectBox = document.getElementsByClassName("selectBox");
    if (event.target != selectBox) {
        this.closeDropDown();
        // checkboxes.style.display = "none";
    
  }
}

