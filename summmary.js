let priyoPerson = 'koolsum begum';

priyoPerson = 'Momotaj Begum';
const hubby = 'Akbar the great ';

// default parameter
function getName(first, last = 'Chowdhury') {
    return first + ' ' + last;

}


// template string
const myPeople = `my lovely persone is are ${hubby} and his fullName is ${getName('Akbar')} .My Nmae is ${priyoPerson}`;
console.log(myPeople);


// arrow function
const getName2 = (first, last) => first + ' ' + last;
const fiveTimes = x => x * 5;
const bigArrawFunc = (x, y, z) => {
    const firstPart = x + y;
    const secondPart = x * y;
    const thirdPart = x / y;
    const result = firstPart + secondPart * thirdPart;
    return result;
}



const numbers = [2, 4, 67, 54];
const max = Math.max(...numbers);