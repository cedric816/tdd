const fizzbuzz = (num) => {
    return (num % 5 == 0 ? "buzz" : (num % 7 == 0?"fizz":""));
}

exports.fizzbuzz = fizzbuzz;