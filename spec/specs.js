describe("changeMachine", function() {
    it("returns 1 penny if the user enters 1", function() {
        expect(changeMachine("1")).to.eql(['0 quarters', '0 dimes', '0 nickels', '1 pennies']);
    });

    it("returns 1 nickel if the user enters 5", function() {
        expect(changeMachine("5")).to.eql(['0 quarters', '0 dimes', '1 nickels', '0 pennies']);
    });

    it("returns 1 dime if the user enters 10", function() {
        expect(changeMachine("10")).to.eql(['0 quarters', '1 dimes', '0 nickels', '0 pennies']);
    });

    it("returns 1 quarter if the user enters 25", function() {
        expect(changeMachine("25")).to.eql(['1 quarters', '0 dimes', '0 nickels', '0 pennies']);
    });

    it("returns 1q, 1d, 1n, 1p if user enters 41", function() {
        expect(changeMachine("41")).to.eql(['1 quarters', '1 dimes', '1 nickels', '1 pennies']);
    });

    it("returns 3q, 0d, 0n, 3p if user enters 78", function() {
        expect(changeMachine("78")).to.eql(['3 quarters', '0 dimes', '0 nickels', '3 pennies']);
    });

});
