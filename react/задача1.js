const doc = document.getElementById("knopka");
const outputNumber = document.getElementById("outputNumber");

doc.addEventListener("click", () => {
  const but = document.getElementById("vvod");
    const inputValue = parseFloat(but.value);
  if (isNaN(inputValue)) {
    alert("Error");
  } else {
    const result = inputValue * 2;
    outputNumber.value = result;
  }
});
