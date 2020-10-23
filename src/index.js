// Calculator Animations
const calc = () => {
  // Declarations
  let calcNumbers = [];
  const screen = document.getElementById("calcScreen");

  // Calculator operations
  const calculator = {
    divide: function (...numbers) {
      return numbers / numbers;
    },
    subtract: function (args) {
      let result = args.reduce((acc, curr) => {
        return acc - curr;
      });
      return result;
    },
    multiply: function (args) {
      // To Fix
      let result = args.reduce((acc, curr) => {
        return acc * curr;
      });
      return result;
    },
    addition: function (args) {
      let result = args.reduce((acc, curr) => {
        return acc + curr;
      });
      return result;
    }
  };

  // Hover Highlight
  let numbBtn = document.getElementsByClassName("numberBtn");
  for (let i = 0; i < numbBtn.length; i++) {
    numbBtn[i].addEventListener("mouseover", (event) => {
      event.target.classList.toggle("btnHover");
    }); // Button Press Animation
    numbBtn[i].addEventListener("click", (event) => {
      event.target.classList.toggle("shadow");
      let pressedBtn = event.target;
      console.log(pressedBtn.innerHTML);

      calcNumbers.push(parseInt(pressedBtn.innerHTML, 10)); // Pushes pressed buttons to array
      screen.innerHTML = calcNumbers.join("");
      setTimeout(() => {
        event.target.classList.toggle("shadow"); // Toggles Shadow on Mouse Hover
      }, 300);
    }); // Removes Hover Highlight
    numbBtn[i].addEventListener("mouseout", (event) => {
      event.target.classList.toggle("btnHover");
    });
  }
};

calc();
