describe("fizzbuzz", function() {
    it("Given number 1 should return 1", function() {
        var numbersNotDivisibleByBothThreeAndFive = [1, 2, 4, 7];
        numbersNotDivisibleByBothThreeAndFive.forEach(function(numberNotDivisbleByBothThreeAndFive) {
            //---------------Set up test pack-------------------
            var input = numberNotDivisbleByBothThreeAndFive;
            //---------------Execute Test ----------------------
            var result = IsFizzBuzz(input);
            //---------------Test Result -----------------------
            expect(result).toBe(numberNotDivisbleByBothThreeAndFive);
        });
    });
    it("Given number 2 should return 2", function() {
        //---------------Set up test pack-------------------
        var input = 2;
        //---------------Execute Test ----------------------
        var result = IsFizzBuzz(input);
        //---------------Test Result -----------------------
        expect(result).toBe(2);
    });
    it("Given number 3 should return fizz", function() {
        //---------------Set up test pack-------------------
        var input = 3;
        //---------------Execute Test ----------------------
        var result = IsFizzBuzz(input);
        //---------------Test Result -----------------------
        expect(result).toBe('fizz');
    });
    it("Given number 5 should return buzz", function() {
        //---------------Set up test pack-------------------
        var input = 5;
        //---------------Execute Test ----------------------
        var result = IsFizzBuzz(input);
        //---------------Test Result -----------------------
        expect(result).toBe('buzz');
    });
    it("Given number 6 should return fizz", function() {
        //---------------Set up test pack-------------------
        var input = 6;
        //---------------Execute Test ----------------------
        var result = IsFizzBuzz(input);
        //---------------Test Result -----------------------
        expect(result).toBe('fizz');
    });
    it("Given number 9 should return fizz", function() {
        //---------------Set up test pack-------------------
        var input = 9;
        //---------------Execute Test ----------------------
        var result = IsFizzBuzz(input);
        //---------------Test Result -----------------------
        expect(result).toBe('fizz');
    });
    it("Given number 10 should return buzz", function() {
        //---------------Set up test pack-------------------
        var input = 10;
        //---------------Execute Test ----------------------
        var result = IsFizzBuzz(input);
        //---------------Test Result -----------------------
        expect(result).toBe('buzz');
    });
    it("Given number 15 should return fizzbuzz", function() {
        //---------------Set up test pack-------------------
        var input = 15;
        //---------------Execute Test ----------------------
        var result = IsFizzBuzz(input);
        //---------------Test Result -----------------------
        expect(result).toBe('fizzbuzz');
    });
    it("Given number 20 should return buzz", function() {
        //---------------Set up test pack-------------------
        var input = 20;
        //---------------Execute Test ----------------------
        var result = IsFizzBuzz(input);
        //---------------Test Result -----------------------
        expect(result).toBe('buzz');
    });
    it("Given number 30 should return buzz", function() {
        //---------------Set up test pack-------------------
        var input = 30;
        //---------------Execute Test ----------------------
        var result = IsFizzBuzz(input);
        //---------------Test Result -----------------------
        expect(result).toBe('fizzbuzz');
    });
    it("Given number 75 should return buzz", function() {
        //---------------Set up test pack-------------------
        var input = 75;
        //---------------Execute Test ----------------------
        var result = IsFizzBuzz(input);
        //---------------Test Result -----------------------
        expect(result).toBe('fizzbuzz');
    });
});