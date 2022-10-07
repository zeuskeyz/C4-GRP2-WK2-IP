function myAkanName() {
    
    var birthDateInput = document.getElementById("dateOfBirth").value; 
    var genderInput = document.getElementById("genderChoice").value.toUpperCase();//TURNS THE USER INPUT INTO UPPER CASE IN CASE ITS LOWER CASE
    
    var birthDateDetails = new Date(birthDateInput); //CREATES A NEW DATE OBJECT USING THE DETAILS INPUT BY THE USER STARTING WIT YEAR MONTH DATE HOUR MINUTE etc
    var birthDay = birthDateDetails.getDay();//THE getDay() METHOD PICKS THE DAY FROM THE DATE IN FORM OF A NUMBER FROM 0-6 SUN-SAT
    
    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; // WE DECLARE AND INITIALISE AN ARRAY WITH THE DAYS OF THE WEEK STARTING FROM SUNDAY TO MONDAY
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]; //ARRAY OF FEMALE AKAN NAMES
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]; //ARRAY OF MALE AKAN NAMES

    var fullGender;

        if (genderInput === "M" || genderInput === "F") {

            if (genderInput === "M") {

                fullGender = "Male";
                outPut = 'Your Akan name is ' + maleNames[birthDay] + ' because you are a ' + fullGender + ' born on a ' + daysOfWeek[birthDay] + "!";
                return outPut;
            }

            else {

                fullGender = "Female";
                outPut = 'Your Akan name is ' + femaleNames[birthDay] + ' because you are a ' + fullGender + ' born on a ' + daysOfWeek[birthDay] + "!";
                return outPut;
            }

        }

        else {

            return "Invalid gender. Reply with M for Male and F for Female";

        }
}


myAkanName() 