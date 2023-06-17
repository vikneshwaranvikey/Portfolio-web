var typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Designer"],
  typeSpeed: 100,
  Backspeed: 100,
  backDelay: 1000,
  loop: true,
});
/*=====================toggle icon navbar===========*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*=====================scroll sections active link===========*/

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  /*=====================sticky navbar===========*/

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  /*=====================remove toggle icon and navbar when click navbar link===========*/

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*=====================scroll reveal===========*/

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content,.heading", { origin: "top" });
ScrollReveal().reveal(".services-container,.portfolio-box,.contact", {
  origin: "bottom",
});
ScrollReveal().reveal(".home-content h1,.about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p,.about-content", { origin: "right" });

/*=====================Dark theam===========*/

var icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "./assets/dark theme icon/moon.png";
  } else {
    icon.src = "./assets/dark theme icon/sun.png";
  }
};
/*=====================Contact link Js===========*/

var btn = document.getElementById("btn");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("From").value;
  var subject = document.getElementById("To").value;
  var message = document.getElementById("message").value;
  var phone = document.getElementById("phone").value;
  var body =
    "name: " +
    name +
    "<br/> From: " +
    email +
    "<br/> To: " +
    subject +
    "<br/> phone: " +
    phone +
    "<br/> message: " +
    message;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "vikeyviknesh@gmail.com",
    Password: "854017AA8D5EDF19F015DBB5A4051FDD0FBE",
    To: email,
    From: "vikeyviknesh@gmail.com",
    Subject: subject,
    Body: body,
  }).then((message) => alert("Message sent successfully."));
});
