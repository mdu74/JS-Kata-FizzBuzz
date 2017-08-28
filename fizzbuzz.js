function IsFizzBuzz(input) {
    if (DivisibleByThreeAndFive(input))
        return 'fizzbuzz';
    if (DivisibleByThree(input))
        return 'fizz';
    if (DivisibleByFive(input))
        return 'buzz';
    return input;
}

function DivisibleByThree(input) {
    return input % 3 === 0;
}

function DivisibleByFive(input) {
    return input % 5 === 0;
}

function DivisibleByThreeAndFive(input) {
    return DivisibleByThree(input) && DivisibleByFive(input);
}
