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
  window.addEventListener('mouseup', function(event) {
    var box = document.getElementById("checkboxes");
    var checks = document.getElementById("text");
    var i;
      if(event.target != box && event.target.parentNode != box){
        if (event.target != checks && event.target.parentNode != checks){
          box.style.display = "none";
        }  
      }
  });
}




function listAllIngredients(){
  axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
  .then(response => {
      var drinkList = [];
      drinkList = response.data;

    //console.log(drinkList.drinks[0].strIngredient1);

    var mydiv = document.getElementById("mydiv");
    for (let x in drinkList.drinks) {
      mydiv.innerHTML += "<p>" + drinkList.drinks[x].strIngredient1 + "</p>"
    }
  })
  .catch(error => console.error(error));
}



function cockTailSearch (inputIngredient) {
  //let text1 = document.getElementById('inputAnIngrediant').value;
  //window.location.href = '../Pages/Result.html';
  //console.log(5);

  axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
  .then(response => {
    var cockTailArr = [];
    cockTailArr = response.data;
    
    var mydiv = document.getElementById("mydiv");
    for (let i = 0; i < cockTailArr.drinks.length; i++) {
      if (cockTailArr.drinks[i].strIngredient1 === inputIngredient){
        //console.log(cockTailArr.drinks[i].strDrink);
        mydiv.innerHTML += "<p>" + cockTailArr.drinks[i].strDrink + "</p>"
      }
    }
  })
  .catch(error => console.error(error));
}


function passValue(){
  var ingredient = document.getElementById("inputAnIngrediant").value;
  localStorage.setItem("ingredientValue", ingredient);
  return false;
}

function getValue(){
  var u = localStorage.getItem("ingredientValue");
  return u;
}