var changeMachine = function(input) {

    var change = [];

    var quarter_div = Math.floor(78/25)  + ' quarters';
    var quarter_mod = input % 25;

    if (quarter_mod !== 0) {
        dime_div = quarter_mod / 10 + ' dimes';
        dime_mod = quarter_mod % 10;
    }
    else (dime_mod !== 0) {
        nickel_div = dime_mod / 5 + ' nickels';
        nickel_mod = dime_mod % 5;
    };
    var pennies = nickel_mod + ' pennies';

    change.push(quarter_div);
    console.log(change);
    return change;

};
