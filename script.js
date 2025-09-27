function Calculator() {
    var age = document.getElementById("InAge").value;
    var weight = document.getElementById("InWeight").value;
    var Meter = document.getElementById("InM").value;
    var Cm = document.getElementById("InCm").value;
    

    // Check Age value
    var errorAge = document.getElementById("errorAge");
    if(age === ""){
        errorAge.innerHTML = 'Please add your Age!';
        return; // Stop the code until editting value . 
    }

    errorAge.innerHTML = '';
    age = parseFloat(age); // Make the value float not string . 
    
    // Check meter value
    var errorMeter = document.getElementById("errorMeter");
    if(Meter === ''){
        errorMeter.innerHTML = 'Please add your Meter!';
        return;
    }

    errorMeter.innerHTML = '';
    Meter = parseFloat(Meter);

    // Check Cm value
    var errorCm = document.getElementById("errorCm");
    if(Cm === ''){
        errorCm.innerHTML = 'Please add your Cm!';
        return;
    }

    errorCm.innerHTML = '';
    Cm = parseFloat(Cm);

    var tall = Meter + (Cm/100);

    // Check Weight value
    var errorWeight = document.getElementById("errorWeight");
    if(weight === ''){
        errorWeight.innerHTML = 'Please add your Weight!';
        return;
    }

    errorWeight.innerHTML = '';
    weight = parseFloat(weight);

    var ResNo = Math.floor(weight / (tall*tall));

    document.getElementById("ResNo").innerHTML = `${ResNo}`;

    if (ResNo < 18.5) {
        document.getElementById("para").innerHTML = "Body weight is too low compared to height.<br><br>"
        + "<b>Possible causes :</b> malnutrition, excessive exercise without proper diet, or medical conditions.<br><br>"
        + "<b>Risks :</b> weak immune system, osteoporosis, constant fatigue.<br>";
    }

}