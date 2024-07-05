
const buttons= document.querySelectorAll('.btn');
const display = document.getElementById('display');
const resetButton = document.getElementById('reset');
const equalButton = document.getElementById('equalto');
const delButton = document.getElementById('del');

display.textContent = '0';
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const value = this.getAttribute('value');
        if (value !== 'DEL' && value !== 'RESET' && value !== '=') {
            updateDisplay(value);
        }
    });
});


function updateDisplay(value) {
    if (display.textContent === '0') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}


    resetButton.addEventListener('click', function(){
        display.textContent = 0;
    })



    delButton.addEventListener('click', function(){
       let currentDisplayValue = display.textContent;
       if(currentDisplayValue.length > 1){
        display.textContent = currentDisplayValue.slice(0, -1);
       }
       else{
        display.textContent = 0;
       }
    })



    equalButton.addEventListener('click', function(){
        let result = display.textContent;
        display.textContent = eval(result);

    })
