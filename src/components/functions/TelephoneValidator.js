function telephoneCheck(str) {
    let regexOne = /^(\d{3})([-])(\d{3})([-])(\d{4})$/; //555-555-5555
    let regexTwo = /^([(])(\d{3})([)])(\d{3})([-])(\d{4})$/; //(555)555-5555
    let regexThree = /^([(])(\d{3})([)])([' '])(\d{3})([-])|(d{4})$/; //(555) 555-5555
    let regexFour = /^(\d{3})([' '])(\d{3})([' '])(\d{4})$/; //555 555 5555
    let regexFive = /^(\d{10})$/; //5555555555
    let regexSix = /^[1]([' '])([(])(\d{3})([)])([' '])(\d{3})([-])|(d{4})$/; //1 555 555 5555
    let regexSeven =/^[1]([' '])(\d{3})([-])(\d{3})([-])(\d{4})$/; //1 555-555-5555
    let regexEight =/^[1]([' '])(\d{3})([' '])(\d{3})([' '])(\d{4})$/; //1 555 555 5555
    let regexNine = /^[1]([(])(\d{3})([)])(\d{3})([-])(\d{4})$/; //1(555)555-5555

    if (regexOne.exec(str)) {
    return true;
    }
    else if (str.match(regexTwo)) {
    return true;
    }
    else if (str.match(regexThree)) {
    return true;
    }
    else if (str.match(regexFour)) {
    return true;
    }
    else if (str.match(regexFive)) {
    return true;
    }
    else if (str.match(regexSix)) {
    return true;
    }
    else if (str.match(regexSeven)) {
    return true;
    }
    else if (str.match(regexEight)) {
    return true;
    }
    else if (str.match(regexNine)) {
    return true;
    }
    else {
    return false;
    };
}

    export default telephoneCheck;