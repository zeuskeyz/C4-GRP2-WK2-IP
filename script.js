function myAkanName() {
    
    var birthDateInput = document.getElementById("dateOfBirth"); 
    var genderInput = document.getElementById("genderChoice");
    let textResult = document.getElementById("feedBack");

    var birthDateDetails = new Date(birthDateInput.value); //CREATES A NEW DATE OBJECT USING THE DETAILS INPUT BY THE USER STARTING WIT YEAR MONTH DATE HOUR MINUTE etc
    var birthDay = birthDateDetails.getDay();//THE getDay() METHOD PICKS THE DAY FROM THE DATE IN FORM OF A NUMBER FROM 0-6 SUN-SAT
    
    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; // WE DECLARE AND INITIALISE AN ARRAY WITH THE DAYS OF THE WEEK STARTING FROM SUNDAY TO MONDAY
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]; //ARRAY OF FEMALE AKAN NAMES
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]; //ARRAY OF MALE AKAN NAMES


        if (genderInput.value === "Male" || genderInput.value === "Female") {

            if (genderInput.value === "Male") {

                birthDateInput.value = '';
                genderInput.value=genderInput[0].innerHTML;
                textResult.innerHTML = 'Your Akan name is ' + maleNames[birthDay] + ' because you are a ' + genderInput.value + ' born on a ' + daysOfWeek[birthDay] + "!";
                
            }

            else {

                birthDateInput.value = '';
                genderInput.value = genderInput[0].innerHTML;
                textResult.innerHTML = 'Your Akan name is ' + femaleNames[birthDay] + ' because you are a ' + genderInput.value + ' born on a ' + daysOfWeek[birthDay] + "!";
            }

        }
}