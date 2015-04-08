describe("changeMachine", function() {
    it("returns 1 penny if the user enters 1", function() {
        expect(changeMachine("1")).to.equal("1 penny");
    });

    it("returns 1 nickel if the user enters 5", function() {
        expect(changeMachine("5")).to.equal("1 nickel");
    });

    it("returns 1 dime if the user enters 10", function() {
        expect(changeMachine("10")).to.equal("1 dime");
    });

    it("returns 1 quarter if the user enters 25", function() {
        expect(changeMachine("25")).to.equal("1 quarter");
    });
});
