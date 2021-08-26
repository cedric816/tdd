const calc = (nb1, nb2, operator) => {
    if (!['+','-','*','/'].includes(operator)){
        return "invalid operator";
    }
    if (operator == '+'){
        return nb1+nb2;
    }
    if (operator == '-'){
        return nb1-nb2;
    }
    if (operator == '/' && nb2 != 0){
        return nb1/nb2;
    }
    if (operator == '/' && nb2 == 0){
        return "division by 0 impossible";
    }
    if (operator == '*'){
        return nb1*nb2;
    }
}

exports.calc = calc;