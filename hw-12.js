
function pow (number, degree){
    if (degree === 0) {
        return 1;
    } else {
        return number * pow (number, degree- 1);
    }
}

console.log(pow(16, 5));
console.log(pow(5, 2));