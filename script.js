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

    if ((ResNo >= 18.5) && (ResNo < 24.9)) {
        document.getElementById("para").innerHTML = "This is the healthy range.<br><br>"
        + "<b>Possible causes :</b> Lowest risk for heart disease, diabetes, and hypertension.<br><br>"
        + "<b>Risks :</b> Still requires a healthy lifestyle (balanced diet + regular exercise).<br>";
    }

    if ((ResNo >= 24.9  ) && (ResNo < 29.9)) {
        document.getElementById("para").innerHTML = "Weight is above normal, but not yet obesity.<br><br>"
        + "<b>Possible causes :</b> Can usually return to normal range with diet and exercise adjustments.<br><br>"
        + "<b>Risks :</b> higher chance of high blood pressure, insulin resistance, and early metabolic issues.<br>";
    }

    if ((ResNo >= 29.9  ) && (ResNo < 34.9)) {
        document.getElementById("para").innerHTML = "First level of obesity.<br><br>"
        + "<b>Possible causes :</b> Lifestyle changes are crucial; medical supervision is recommended.<br><br>"
        + "<b>Risks :</b> Higher risk of type 2 diabetes, high blood pressure, and cardiovascular diseases.<br>";
    }

    if ((ResNo >= 34.9  ) && (ResNo <= 39.9)) {
        document.getElementById("para").innerHTML = "More severe obesity.<br><br>"
        + "<b>Possible causes :</b> Medical follow-up becomes very important.<br><br>"
        + "<b>Risks :</b> Stronger risk of chronic diseases and Symptoms like shortness of breath and fatigue.<br>";
    }

    if ((ResNo >= 40 )) {
        document.getElementById("para").innerHTML = "Very serious stage.<br><br>"
        + "<b>Possible causes :</b> Often requires medical interventions (medications or bariatric surgery).<br><br>"
        + "<b>Risks :</b> Extremely high risks for heart disease, liver problems, joint damage, and breathing issues.<br>";
    }

}