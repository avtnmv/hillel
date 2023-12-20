function pow(num, degree) {
    if (degree === 0) {
        return 1; // Любое число в степени 0 равно 1
    } else if (degree > 0) {
        return num * pow(num, degree - 1);
    } else {
        
        return 1 / (num * pow(num, -degree - 1)); //Если число отрицательное, используем else
    }
}

const result = pow(2, 6)
console.log(result)