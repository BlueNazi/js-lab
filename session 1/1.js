

function calculateBMI(weight, height) {
let weightkg = weight;
let heightm = height / 100;

let bmi = weightkg / (heightm * heightm);

return bmi;

}
function getStatus(bmi) {
    if (bmi < 18.5) {
        return "کمبود وزن";
    } 
    if (bmi >= 18.5 && bmi <= 24.9) {
        return "طبیعی";
    } 
    else{
        return "اضافه وزن";
    }
}