function isEligibleToVote(age){
    if(age>=18){
        console.log("You are eligible to vote.");
    }
    else{
        console.log("You are not eligible to vote.");
    }
}

isEligibleToVote(20); // You are eligible to vote.
isEligibleToVote(16); // You are not eligible to vote.


function getWeek(day){
    switch(day){
        case 1: console.log("Monday"); break;
        case 2: console.log("Tuesday"); break;
        case 3: console.log("Wednesday"); break;
        case 4: console.log("Thursday"); break;
        case 5: console.log("Friday"); break; 
        case 6: console.log("Saturday"); break;
        case 7: console.log("Sunday"); break;
        default: console.log("Invalid day");
    }
}

getWeek(1); // Monday
getWeek(5); // Friday
getWeek(8); // Invalid day


function getWeekNumber(day){
    switch (day){
        case 'Monday':
            return 1;
        case 'Tuesday':
            return 2;
        case 'Wednesday':
            return 3;
        case 'Thursday':
            return 4;
        case 'Friday':
            return 5;
        case 'Saturday':
            return 6;
        case 'Sunday':
            return 7;
        default:  
            return "Invalid day";
    }
}

console.log(getWeekNumber('Monday')); // 1
console.log(getWeekNumber('Friday')); // 5
console.log(getWeekNumber('Funday')); // Invalid day