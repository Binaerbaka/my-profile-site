document.addEventListener("DOMContentLoaded", () => {

    const btn =
    document.getElementById("themeToggle");

    if(localStorage.getItem("theme") === "dark"){
        document.body.classList.add("dark");
    }

    btn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if(document.body.classList.contains("dark")){
            localStorage.setItem("theme","dark");
        }
        else{
            localStorage.setItem("theme","light");
        }

    });

});
particlesJS("particles-js", {

  particles: {
    number: { value: 60 },
    color: { value: "#ffffff" },
    opacity: { value: 0.4 },
    size: { value: 3 },
    move: { speed: 1 }
  },

  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" }
    }
  }

});