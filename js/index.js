//declaring variables
var classGrade;
var desiredGrade;
var examWeight;
var examWeight;
var classWeight;
var examGrade;

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
    if(valuesInputted()){
        if(valuesValid()){
            calssWeight = 1 - (examWeight/100);
            examGrade = ((desiredGrade - (classGrade * classWeight)) / examWeight) * 100;
            print("You need a " + String(examGrade.toFixed(2)) + "% on your final exam to achieve your desired grade.");
        }
        else{
            print("Please enter valid values in the boxes.")
        }
    }
    else{
        print("Please populate all the boxes.")
    }
}

//updates all values and calls main function when go button is clicked
