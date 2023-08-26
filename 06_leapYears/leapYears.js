const leapYears = function(year) {
    //is the year divisible by 400? if yes, it's a leap year
    if (year % 400 == 0) return true;
    //is the year divisible by 100? if yes, it's not a leap year
    if(year % 100 == 0) return false;
    //is the year divisible by 4? if yes, it's a leap year
    if (year % 4 == 0) return true;

    //if nothing is checked, it's not a leap year

    return false;
};

// Do not edit below this line
module.exports = leapYears;
