let box = document.querySelector(".box");
      let button = document.getElementById("btn");
      const colors = [
        "blue",
        "black",
        "yellow",
        "lightgreen",
        "orange",
        "grey",
        "purple",
        "skyblue",
      ];
      let colorIndex = 0;
      button.addEventListener("click", thisIsFun);
      function thisIsFun() {
        box.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
      }