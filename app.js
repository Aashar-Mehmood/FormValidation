const emailExpression = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//select buttons for actions
const SUBMIT_BTN = document.getElementById('submit');
const RESET_BTN = document.getElementById('reset');

//select all Inputs and Text Areas and select
const allInputs = document.querySelectorAll('form section input');
const allTextAreas = document.querySelectorAll('form section textarea');
const select = document.querySelector('select#edu');
const allSpans = document.querySelectorAll('form span');
const allLabels = document.querySelectorAll('form label');
//event listener for submit button
SUBMIT_BTN.addEventListener('click', (e) => {

  //iterate over each input to check if it is empty
  allInputs.forEach((input) => {
    if (input.value == '' || input.value == null) {
      input.previousElementSibling.textContent = " field can not be empty";
      redColor(input);
      e.preventDefault();
    }

    //check if it is not empty then is its pattern correct
    else if (input.value !== '' || input.value !== null) {
      if ((input.getAttribute("type") == "text") && (/[0-9]+/.test(input.value))) {
        input.previousElementSibling.textContent = " can not contain Numbers";
        redColor(input);
        e.preventDefault();
      }

      else if ((input.getAttribute("type") == "number") && (/[a-zA-Z]+/.test(input.value))) {
        input.previousElementSibling.textContent = " can not contain characters or space";
        redColor(input);
        e.preventDefault();
      }

      else if(input.getAttribute("type") == "number" && input.id=="cnic" && input.value.length!==13){
        input.previousElementSibling.textContent = 'length should be 13';
        redColor(input);
        e.preventDefault();
      }

      else if ((input.getAttribute("type") == "email") && (!(emailExpression.test(input.value)))) {
        input.previousElementSibling.textContent = "Enter a valid Email Address";
        redColor(input);
        e.preventDefault();
      }
      else {
        input.previousElementSibling.textContent = " ";
        blackColor(input);
      }
    }
  });
  
  //chceck each text Area if it is empty or not
  allTextAreas.forEach((textArea) => {
    if (textArea.value == '' || textArea.value == null) {
      textArea.previousElementSibling.textContent = " field can not be empty";
      redColor(textArea);
      e.preventDefault();
    }
    else if (textArea.value !== '' || textArea.value !== null){
      if(textArea.id=="bio" && textArea.value.length<100){
        textArea.previousElementSibling.textContent = "Bio Should be not too short";
        redColor(textArea);
      }
    }
    else {
      textArea.previousElementSibling.textContent = " ";
      blackColor(textArea);
    }
  });

  if(select.selectedIndex== 0){
    select.previousElementSibling.textContent = 'Select Your Education';
    redColor(select);
    e.preventDefault();
  }
  else {
    select.previousElementSibling.textContent = " ";
    blackColor(select);
  }

});

//functions to change the color of span element and label element
function redColor(ele){
  ele.previousElementSibling.style.color = "red";
  ele.previousElementSibling.previousElementSibling.style.color = "red";
}
function blackColor(element){
  element.previousElementSibling.style.color = 'black';
  element.previousElementSibling.previousElementSibling.style.color = 'black';
}

//event listener for reset button
RESET_BTN.addEventListener('click', ()=>{
  allInputs.forEach((inp)=>{
    inp.value = ' ';
  });
  allTextAreas.forEach((textarea)=>{
    textarea.value = ' ';
  });
  allSpans.forEach((element)=>{
    element.innerHTML = '';
  });
  allLabels.forEach((label)=>{
    label.style.color = 'black';
  })
});
