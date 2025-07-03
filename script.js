var correctAnswer = ["1", "2", "3", "4"];
var inputs = document.querySelectorAll("input[type='text']");
var boxes = document.querySelectorAll(".box");
var resetBtn = document.querySelector("button[type='reset']");

resetBtn.style.display = "none";

for (var i = 0; i < inputs.length; i++) {
  (function (index) {
    inputs[index].addEventListener("input", function () {
      var value = inputs[index].value.trim();
      var img = boxes[index].querySelector("img");

      if (value.length === 1) {
        if (value === correctAnswer[index]) {
          img.src = "image.png";
        } else {
          img.src = "image1.png";
        }

        inputs[index].disabled = true;
        if (index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
        var allFilled = true;
        for (var j = 0; j < inputs.length; j++) {
          if (!inputs[j].disabled) {
            allFilled = false;
            break;
          }
        }

        if (allFilled) {
          resetBtn.style.display = "inline-block";
        }
      }
    });
  })(i);
}

resetBtn.addEventListener("click", function () {
  for (var k = 0; k < inputs.length; k++) {
    inputs[k].value = "";
    inputs[k].disabled = false;
    boxes[k].querySelector("img").src = "image.png";
  }
  inputs[0].focus();
  resetBtn.style.display = "none";
});
