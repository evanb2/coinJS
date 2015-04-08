var changeMachine = function(input) {

    var change = [];

    var quarter_div = Math.floor(input/25)  + ' quarters';
    var dime_div = '0 dimes';
    var nickel_div = '0 nickels';
    var pennies = '0 pennies';
    var quarter_mod = input % 25;

    if (quarter_mod !== 0) {
        var dime_div = Math.floor(quarter_mod / 10) + ' dimes';
        var dime_mod = quarter_mod % 10;

        if (dime_mod !== 0) {
            var nickel_div = Math.floor(dime_mod / 5) + ' nickels';
            var nickel_mod = dime_mod % 5;

            if (nickel_mod !== 0) {
                var pennies = nickel_mod + ' pennies';
            }
        }

    }
    change.push(quarter_div, dime_div, nickel_div, pennies);
    console.log(change);
    return change;

};
