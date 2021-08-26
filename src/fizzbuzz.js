const fizzbuzz = (num) => {
    if (num == null){
        return "Error! need a number :)";
    } else if (num % 5 == 0 && num % 7 == 0){
        return "fizzbuzz";
    } else if (num % 5 == 0) {
        return "buzz";
    } else if (num % 7 == 0) {
        return "fizz";
    } else {
        return '';
    }
}

exports.fizzbuzz = fizzbuzz;