//checking if values are missing
function valuesInputted(){
    if(classGrade.length == 0 || desiredGrade.length == 0 || examWeight.length == 0){
        return false;
    }
    else{
        return true;
    }
}

//checks if values are valid
function valuesValid(){
    if((classGrade >= 0) && (desiredGrade <= 100 && desiredGrade >= 0) && (examWeight >= 0 && examWeight <= 100)){
        return true;
    }
    else{
        return false;
    }
}

//if all conditions are met, calculates value and displays it
//also notifies user if values are missing or invalid
function crunchNumbers(){

    // Declare and assign variables to html input text area
    var classGrade = document.getElementById("classGrade").value;
    var desiredGrade = document.getElementById("desiredGrade").value;
    var examWeight = document.getElementById("examWeight").value;
    console.log(classGrade + ", " + desiredGrade + ", " + examWeight)
    if(valuesInputted()){
        if(valuesValid()){
            //
            var classWeight = 1 - (examWeight/100);
            var examGrade = ((desiredGrade - (classGrade * classWeight)) / examWeight) * 100;
            console.log(examGrade)
            document.getElementById("examGrade").value = ("You need a " + String(examGrade.toFixed(2)) + "% on your final exam to achieve your desired grade.");
        }
        else{
            console.log("Please enter valid values in the boxes.")
        }
    }
    else{
        console.log("Please populate all the boxes.")
    }
}

//updates all values and calls main function when go button is clicked
