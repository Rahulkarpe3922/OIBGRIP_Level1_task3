const calculateTemp = () => {
    const inputTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp_diff');
    const option_index = tempSelected.selectedIndex;
    const valueTemp = temp_diff.options[option_index].value;

    // Celsius to Fahrenheit
    const celToFah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

    // Fahrenheit to Celsius
    const fahToCel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }

    if (valueTemp == 'cel') {
        document.getElementById("result").innerHTML ="Result : "+celToFah(inputTemp) + "° F";
    }
    else {
        document.getElementById("result").innerHTML ="Result : "+fahToCel(inputTemp) + "° C";
    }
}