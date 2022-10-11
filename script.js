const submitButton = document.querySelector(".subMitter");
const wiperButton = document.querySelector("#theWiper")

function myAkanName() {

    /*OUR WORKING LISTS */
    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; //list of the days of week
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]; //list of female Akan names
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]; //list of male Akan names

    /*DATE MANIPULATION VARIABLES*/
    var birthDateInput = document.getElementById("dateOfBirth");//uses the variable dateInput from the user prompt to create a calendar date
    var birthDateDetails = new Date(birthDateInput.value);
    var birthDay = birthDateDetails.getDay(); // picks the day from the date object
    var birthMonth = birthDateDetails.getMonth();// picks the month from the dabject
    var birthYear = birthDateDetails.getFullYear(); //picks the month from the dabject
    var genderInput = document.getElementById("genderChoice");
    let textResult = document.getElementById("feedBack");

    /* USING THE DATES TO ACCESS THE NAME LISTS*/
    var genderFemale = femaleNames[birthDay];// uses the day of birth as index to access the femalesNames
    var genderMale = maleNames[birthDay]; //uses the day of birth as index to access the femalesNames

    /*CAPTURE DATE INPUTS AND CHECKS IF ITS VALID*/
    if (birthDateInput.value.length === 10 && birthDay >= 0 && birthDay < 7 && birthMonth >= 0 && birthMonth < 12 && birthYear >= 1000) {
        
        if (genderInput.value === "Male" || genderInput.value === "Female") {

            if (genderInput.value === "Male") {

                textResult.innerHTML = "Your Akan name is " + maleNames[birthDay] + " because you are "+ genderInput.value + " born on "+ daysOfWeek[birthDay]+"!";
                birthDateInput.value = '';
                genderInput.value=genderInput[0].innerHTML;
                
                
            }

            else {
                textResult.innerHTML = "Your Akan name is " + femaleNames[birthDay] + " because you are "+ genderInput.value + " born on "+ daysOfWeek[birthDay]+"!";
                birthDateInput.value = '';
                genderInput.value = genderInput[0].innerHTML;
                
            }

        }

        
    }

    else {
        alert("WRONG DATE FORMAT. PLEASE USE YYYY-MM-DD\nExample: 2022-10-08");//triggers error alert if user date input is invalid
    }


}

function clearName(){
    document.getElementById("feedBack").innerHTML = ""
}

submitButton.addEventListener("click", myAkanName);
wiperButton.addEventListener("click", clearName);