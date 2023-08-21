const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
})
//hide style switcher on scroll
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open"))
  {
    document.querySelector(".style-switcher").classList.remove("open");
  }
})

const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
  alternateStyles.forEach(style) => {
    if(color === style.getAttribute("title")){
    (
      style.removeAttribute("disabled");
    }
    else{
      style.setAttribute("disabled","true");
    }
  })
}

// Get references to the navigation links
const aboutLink = document.querySelector(".nav li:nth-child(2) a");
const servicesLink = document.querySelector(".nav li:nth-child(3) a");
const portfolioLink = document.querySelector(".nav li:nth-child(4) a");
const contactLink = document.querySelector(".nav li:nth-child(5) a");

// Get references to the sections
const aboutSection = document.querySelector("#about");
const servicesSection = document.querySelector("#services");
const portfolioSection = document.querySelector("#portfolio");
const contactSection = document.querySelector("#contact");

// Function to activate a section and deactivate others
function activateSection(section) {
  // Deactivate all sections
  aboutSection.style.display = "none";
  servicesSection.style.display = "none";
  portfolioSection.style.display = "none";
  contactSection.style.display = "none";

  // Activate the specified section
  section.style.display = "block";
}

// Event listeners for navigation links
aboutLink.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default link behavior
  activateSection(aboutSection);
});

servicesLink.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default link behavior
  activateSection(servicesSection);
});

portfolioLink.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default link behavior
  activateSection(portfolioSection);
});

contactLink.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default link behavior
  activateSection(contactSection);
});
