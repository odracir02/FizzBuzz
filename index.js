function showResult() {
    let answer = parseInt(document.getElementById("number-input").value);
    const printDiv = document.getElementById("print");
    let result = "";
    for (let i = 1; i <= answer; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        result += "FizzBuzz<br>";
      } else if (i % 3 === 0) {
        result += "Fizz<br>";
      } else if (i % 5 === 0) {
        result += "Buzz<br>";
      } else {
        result += i + "<br>";
      }
    }
    printDiv.innerHTML = result;
  }