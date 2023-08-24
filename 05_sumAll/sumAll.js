const sumAll = function(x, y) {
    let smaller = 0;
    let bigger = 0;
    let sum = 0;
    if((x<0 || y<0) || (typeof x != "number" || typeof y != "number")) {
        return "ERROR";
    } else if (x > y) {
        smaller = y;
        bigger = x;
    } else {
        smaller = x;
        bigger = y;
    }

    for (smaller; smaller <= bigger; smaller++) {
        sum += smaller;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
