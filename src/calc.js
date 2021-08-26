const calc = (nb1, nb2, operator) => {
    if (!['+', '-', '*', '/'].includes(operator)) {
        return "invalid operator";
    }
    if (typeof nb1 !== 'number' || typeof nb2 !== 'number') {
        return "please give numbers";
    }
    if (operator == '+') {
        return nb1 + nb2;
    }
    if (operator == '-') {
        return nb1 - nb2;
    }
    if (operator == '/') {
        if (nb2 !== 0) {
            return nb1 / nb2;
        } else {
            return "division by 0 impossible";
        }
    }
    if (operator == '*') {
        return nb1 * nb2;
    }
}

exports.calc = calc;