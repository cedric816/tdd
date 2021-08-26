const fizzbuzz = (num) => {
    if (num % 5 == 0 && num % 7 == 0){
        return "fizzbuzz";
    } else if (num % 5 == 0) {
        return "buzz";
    } else if (num % 7 == 0) {
        return "fizz";
    }
}

exports.fizzbuzz = fizzbuzz;