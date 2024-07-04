let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');
let buttonsArray = Array.from(buttons);
let displayValue = " ";

buttonsArray.forEach(function(btn){
 btn.addEventListener('click',function(e){
  if(e.target.innerHTML == "DEL"){
    displayValue = displayValue.substring(0,displayValue.length-1);
    display.value = displayValue;
  }
  else if(e.target.innerHTML == "AC"){
    displayValue = " ";
    display.value = "All Cleared" + displayValue;
  }
  else if(e.target.innerHTML == "=")
  {
      displayValue = eval(displayValue);
      display.value = "= " + displayValue;
  }
  else{
      displayValue += e.target.innerHTML;
      display.value = displayValue;
  }
 })
})