function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0 , -1) ;
    if (display.value = '') {
        display.value = '0' ;
    }
}
function appendToDisplay(value) {
    const display =  document.getElementById('display');
    if (display === '0') {
        display.value = '0';
    }else{
        display.value += value;
    }
}
function clearDisplay() {
    document.getElementById('display').value = '0';
}
function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}