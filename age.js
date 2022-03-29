    
    //let button = document.querySelector('.submit-button').addEventListener('click');



    function verifyAge() {
    var age = document.getElementId("age").innerHTML;
    var adult = document.getElementId("adult").innerHTML;
    var result = document.getElementById("granted").innerHTML
    var denied = false;

    if (parseInt(age.value,10) >= 18) {
        denied = true;
    } else {
        denied = false;

    if (denied == false) {
        if (month.value == "y") {
            result.innerHTML = "Denied"
        } else {
          result.innerHTML = "No Entry"
        }
    } else {
        result.innerHTML = "Accepted"
    }
  }
}


function verifyAge(e) {
    e.perventDefault();
    console.log('working');
    let dob = Date.parse(form.elements['date'].value);
    let minDate = new Date;
    //console.log(minDate);
    minDate.setFullYear(minDate.getFullYear() - 21);
    //console.log(dob);

    if(dob <= minDate) {
        output.innerText = 'Approved!';
        return
    } else {
        output.innerText = 'Too young go home!';
        return
    }
}

let form = document.getElementById('form');

form.addEventListener('submit, verifyAge')
