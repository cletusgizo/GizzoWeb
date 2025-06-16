function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const resultDiv = document.getElementById("result");

  resultDiv.textContent = ""; // Clear previous result

  // Input validation
  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    alert("Please enter valid, positive numbers for height and weight.");
    return;
  }

  const bmi = weight / (height * height);
  let status = "";

  if (bmi < 18.5) {
    status = "Underweight";
  } else if (bmi < 25) {
    status = "Normal";
  } else if (bmi < 30) {
    status = "Overweight";
  } else {
    status = "Obese";
  }

  resultDiv.innerHTML = `Your BMI is <strong>${bmi.toFixed(2)}</strong> (<span>${status}</span>)`;
}

function resetForm() {
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("result").textContent = "";
}
