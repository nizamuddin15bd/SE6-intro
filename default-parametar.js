function add(num1, num2 = 0) {
    console.log(num1, num2);
    const total = num1 + num2;
    // option 1
    // num2 == num2 || 0;

    // option 2
    // if (num2 == undefined) {
    //     num2 = 0;
    // }

    return total;
}
const result = add(15);
console.log(result);


function fullName(first, last) {
    const name = first + ' ' + last;
    return name;
}
