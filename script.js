const button = document.getElementById('selector');

button.addEventListener('click', myFunction);

function myFunction() {
   var monthPayment = document.getElementsByClassName('dollars-monthly');
  var annualPayment = document.getElementsByClassName('dollars-annually');
    var i;
    var n;

    for(i = 0; i < monthPayment.length; i++) {
        for(n = 0; n < annualPayment.length; n++) {
            if(monthPayment[i].style.display === "none") {
                monthPayment[i].style.display = "block";
                annualPayment[i].style.display = "none";
                button.style.justifyContent = "flex-end"
            } else {
                monthPayment[i].style.display = "none";
                annualPayment[i].style.display = "block";
                button.style.justifyContent = "flex-start"
            }
        }
    }
}


