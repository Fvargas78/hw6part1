$(document).ready(function() {

    // Add a method to the validator to test value with regexp
        jQuery.validator.addMethod(
        "regex",
        function(value, element) {
            return /^[0-9]+\.[0-9]{4,}/.test(value);
    }, "Please enter a valid number with at least 4 decimal places.");

    $("#number_form").validate({
        rules:
            {
                num_input: {required: true, regex: true},
            }
    });
})

function round_to_nearest_integer(number) {
    //round the floating-point number to the nearest integer
    return(Math.round(number));
}

function sqrt_round_to_nearest_integer(number) {
    //calculate the square root of the floating-point number and round it to an integer
    return(Math.round(Math.sqrt(number)));
}

function round_to_nearest_tenths(number) {
    //round the floating-point number to the nearest tenths position
    return number.toFixed(1);
}

function round_to_nearest_hundredths(number) {
    //round the floating-point number to the nearest hundredths position
    return number.toFixed(2);
}

function round_to_nearest_thousandths(number) {
    //round the floating-point number to the nearest thousandths position
    return number.toFixed(3);
}

function validate() {
    if ($('#num_input').valid()) {
        let number = parseFloat($('#num_input').val());

        $('#result').val(
            "The number you entered is " + number +

            "\n Rounded to the nearest integer: " + round_to_nearest_integer(number) +
            "\n The square root rounded to an integer: " + sqrt_round_to_nearest_integer(number) +
            "\n Rounded to the nearest tenths: " + round_to_nearest_tenths(number) +
            "\n Rounded to the nearest  hundredths: " + round_to_nearest_hundredths(number) +
            "\n Rounded to the nearest thousandths: " + round_to_nearest_thousandths(number)
    );
    }
}
