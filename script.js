function calculateBMI() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const result = document.getElementById("result");
    const bmi = weight / (height * height);
    result.innerHTML = bmi.toFixed(2);
}