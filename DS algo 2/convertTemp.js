function convertTemp(celsius) {
    let res = [];

    let Fahrenheit = celsius * 1.8 + 32;
    let Kelvin = celsius + 273.15;

    res.push(Kelvin);
    res.push(Fahrenheit);

    return res;
}

console.log(convertTemp(36.50));