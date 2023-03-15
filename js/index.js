const siteContent = {
  nav: {
    "nav-item-0": "Services",
    "nav-item-1": "Product",
    "nav-item-2": "Vision",
    "nav-item-3": "Features",
    "nav-item-4": "About",
    "nav-item-5": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// Nav

let nav = document.querySelectorAll("nav a");
nav.forEach((element, index) => {
  element.textContent = siteContent["nav"][`nav-item-${index}`];
});
// Nav color
nav.forEach((item) => {
  item.style.color = "green";
});

// CTA
let cta = document.querySelector(".cta-text h1");
// cta.textContent = siteContent["cta"]["h1"];
const breaks = siteContent.cta.h1;
const breakArray = breaks.split(" ");
breakArray.forEach((item) => {
  cta.innerHTML += `${item}<br>`;
});
let ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent["cta"]["button"];

let ctaImg = document.querySelector("#cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

// Main Content
let mainContent = document.querySelectorAll(".main-content .text-content h4");
mainContent[0].textContent = siteContent["main-content"]["features-h4"];
mainContent[1].textContent = siteContent["main-content"]["about-h4"];
mainContent[2].textContent = siteContent["main-content"]["services-h4"];
mainContent[3].textContent = siteContent["main-content"]["product-h4"];
mainContent[4].textContent = siteContent["main-content"]["vision-h4"];

let mainContentP = document.querySelectorAll(".main-content .text-content p");
mainContentP[0].textContent = siteContent["main-content"]["features-content"];
mainContentP[1].textContent = siteContent["main-content"]["about-content"];
mainContentP[2].textContent = siteContent["main-content"]["services-content"];
mainContentP[3].textContent = siteContent["main-content"]["product-content"];
mainContentP[4].textContent = siteContent["main-content"]["vision-content"];

let mainContentImg = document.querySelector("#middle-img");
mainContentImg.setAttribute(
  "src",
  siteContent["main-content"]["middle-img-src"]
);

// Contact
let contact = document.querySelector(".contact h4");
contact.textContent = siteContent["contact"]["contact-h4"];

let contactP = document.querySelectorAll(".contact p");
contactP.forEach((item, index) => {
  item.textContent = Object.values(siteContent.contact)[index + 1];
});

// Footer
let footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];

// Stretch
let stretchButton = document.querySelector(".cta-text button");
stretchButton.textContent = "Get Started!";
stretchButton.style.backgroundColor = "green";
stretchButton.style.color = "white";
stretchButton.style.borderRadius = "5px";
stretchButton.style.padding = "10px 20px";
stretchButton.style.fontSize = "20px";

let stretchImg = document.querySelector("#cta-img");
stretchImg.style.borderRadius = "50%";

let stretchMainContent = document.querySelectorAll(
  ".main-content .text-content h4"
);
stretchMainContent.forEach((item) => {
  item.style.color = "#00235B";
});

let stretchMainContentP = document.querySelectorAll(
  ".main-content .text-content p"
);
stretchMainContentP.forEach((item) => {
  item.style.color = "#2D2727";
});

let stretchMainContentImg = document.querySelector("#middle-img");
stretchMainContentImg.style.borderRadius = "50px";

let stretchContact = document.querySelector(".contact h4");
stretchContact.style.color = "green";

let stretchContactP = document.querySelectorAll(".contact p");
stretchContactP.forEach((item) => {
  item.style.color = "#19A7CE";
});

let stretchFooter = document.querySelector("footer p");
stretchFooter.style.color = "red";

let stretchNav = document.querySelectorAll("nav a");
stretchNav.forEach((item) => {
  item.style.color = "#060047";
});

let stretchNavAppend = document.createElement("a");
stretchNavAppend.textContent = "Log Us";
stretchNavAppend.style.color = "red";
document.querySelector("nav").appendChild(stretchNavAppend);

let stretchNavPrepend = document.createElement("a");
stretchNavPrepend.textContent = "Duraan ali";
stretchNavPrepend.style.color = "red";
document.querySelector("nav").prepend(stretchNavPrepend);

// Eventsjs

// 1. mouseover
let middle = document.querySelector("#middle-img");
middle.addEventListener("mouseover", (event) => {
  event.target.style.transform = "scale(0.4)";
  event.target.style.transition = "transform 0.3s";
});

// 2. mouseout
middle.addEventListener("mouseout", (event) => {
  event.target.style.transform = "scale(1)";
});

// 3. click
let logos = document.querySelector("#logo-img");
logos.addEventListener("click", (event) => {
  event.target.style.transform = "scale(0.4)";
  event.target.style.transition = "transform 0.3s";
});

// 4. dblclick
logos.addEventListener("dblclick", (event) => {
  event.target.style.transform = "scale(1)";
});

// 5. keydown
document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    document.body.style.backgroundColor = "red";
  }
});

// 6. resize
window.addEventListener("resize", function (event) {
  document.body.style.backgroundColor = "blue";
});

//
const image = document.getElementById("cta-img");
const timeline = gsap.timeline();

timeline.from(image, {
  duration: 4,
  scale: 0.9,
  opacity: 0,
  ease: "back.out(1.7)",
});

const button = document.getElementsByTagName("button");

button.addEventListener("click", () => {
  gsap.to(button, {
    duration: 0.5,
    scale: 0.9,
    yoyo: true,
    repeat: 1,
    ease: "power2.out",
  });
});
