function convert() {
    const amount = document.getElementById("amount").value;
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    let result;

    if (from === to) {
        result = amount;
    } else if (from === "meter" && to === "centimeter") {
        result = amount * 100;
    } else if (from === "meter" && to === "millimeter") {
        result = amount * 1000;
    } else if (from === "meter" && to === "kilometer") {
        result = amount / 1000;
    } else if (from === "centimeter" && to === "meter") {
        result = amount / 100;
    } else if (from === "centimeter" && to === "millimeter") {
        result = amount * 10;
    } else if (from === "centimeter" && to === "kilometer") {
        result = amount / 100000;
    } else if (from === "millimeter" && to === "meter") {
        result = amount / 1000;
    } else if (from === "millimeter" && to === "centimeter") {
        result = amount / 10;
    } else if (from === "millimeter" && to === "kilometer") {
        result = amount / 1000000;
    } else if (from === "kilometer" && to === "meter") {
        result = amount * 1000;
    } else if (from === "kilometer" && to === "centimeter") {
        result = amount * 100000;
    } else if (from === "kilometer" && to === "millimeter") {
        result = amount * 1000000;
    }

    document.getElementById("result").innerText = "Result is:" + result;
}

console.log(convert);