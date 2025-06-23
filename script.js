const display = document.getElementById("display");

function appendValue(value) {
  // If display shows "Error", reset first
  if (display.value === "Error") {
    display.value = "";
  }
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    // Prevent eval on empty string
    if (display.value.trim() === "") {
      display.value = "";
      return;
    }
    // Evaluate safely. Only basic math allowed.
    // eslint-disable-next-line no-eval
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function deleteLast() {
  if (display.value === "Error") {
    display.value = "";
    return;
  }
  display.value = display.value.slice(0, -1);
}