/* ==============================
   MOBILE NAVBAR
============================== */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


// Close menu when clicking navigation link

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});



/* ==============================
   WHATSAPP INQUIRY FORM
============================== */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get user input

    const name = document.getElementById("clientName").value.trim();

    const phone = document.getElementById("clientPhone").value.trim();

    const service = document.getElementById("serviceType").value;

    const message = document.getElementById("projectMessage").value.trim();


    // Check inputs

    if (!name || !phone || !service || !message) {

        alert("Please fill in all the fields.");

        return;

    }


    // Create WhatsApp message

    const whatsappMessage =

        `Hello Mavish Solution!

        I want to inquire about your services.

        Name: ${name}

        Phone: ${phone}

        Service: ${service}

        Project Details: ${message}`;


    // WhatsApp number

    const whatsappNumber = "91747725403";


    // Encode message

    const encodedMessage = encodeURIComponent(whatsappMessage);


    // Create WhatsApp URL

    const whatsappURL =

        `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;


    // Open WhatsApp

    window.open(whatsappURL, "_blank");


    // Reset form

    contactForm.reset();

});



/* ==============================
   SCROLL REVEAL ANIMATION
============================== */

const revealElements = document.querySelectorAll(

    ".service-card, .founder-card, .why-card"

);


const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.15

});


revealElements.forEach(function(element) {

    element.classList.add("reveal");

    observer.observe(element);

});



/* ==============================
   ACTIVE NAV LINK
============================== */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", function() {

    let current = "";

    sections.forEach(function(section) {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    document.querySelectorAll(".nav-links a").forEach(function(link) {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active-link");

        }

    });

});