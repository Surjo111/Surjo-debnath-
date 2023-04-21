var password =golpo111;

function passcheck() {
    
if(document.getElementById('pass1').value != password) {
    alert('Wrong Password, try again');
    return false;
}
if(document.getElementById('pass1').value == password) {
    alert('Correct Password. Click ok to enter index2');
}

}