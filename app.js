
if (!(document.querySelector("#cs").value == "Celsius")) {
    function convert() {
        const cel = document.querySelector("#cc").value
        const fer = cel * (9 / 5) + 32
        const ferrr = document.querySelector("#ff").value = fer
    }
}
else if (document.querySelector("#cs").value == "Fahrenheit") {
    console.log("no");
}
// console.log(!(document.querySelector("#cs").innerHTML === "Celsius"));
// // console.log(document.querySelector("#cs").innerHTML === "Fahrenheit");