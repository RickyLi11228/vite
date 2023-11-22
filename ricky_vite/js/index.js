document.querySelector(".btn").addEventListener("click", function () {
    if (document.body.classList.contains("blue")) {
      document.body.classList.add("green");
      document.body.classList.remove("blue");
    } else {
      document.body.classList.add("blue");
      document.body.classList.remove("green");
    }
  });