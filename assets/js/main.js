/*=============== MENU ===============*/
const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");

/* Menu show - hidden */
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
  navToggle.classList.toggle("animate-toggle");
});

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav-link");

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');

  navToggle.classList.remove("animate-toggle");
  navMenu.classList.remove('show-menu')
}

navLink.forEach(link => {
  link.addEventListener('click', linkAction)
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.querySelector("#header");

  this.scrollY >= 20 ? header.classList.add('bg-header') : header.classList.remove('bg-header');
}

window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section');

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
    sectionTop = current.offsetTop - 58,
    sectionId = current.getAttribute('id'),
    sectionClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']');

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");    
    }
  })
}

window.addEventListener('scroll', scrollActive)

/*=============== SERVICES SWIPER ===============*/
var servicesSwiper = new Swiper(".services-swiper", {
  spaceBetween: 32,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
var mixer = mixitup(".work-container", {
  selectors: {
    target: ".mix",
  },
  animation: {
    duration: 300,
  },
});

/* Active work */
const linkWorks = document.querySelectorAll(".work-item");
function activeWork() {
  linkWorks.forEach(function (a) {
    a.classList.remove("active-work");
  });
  this.classList.add("active-work");
}

linkWorks.forEach((a) => {
  a.addEventListener("click", activeWork);
});

/*=============== RESUME ===============*/
const accordionItems = document.querySelectorAll(".resume-item");

accordionItems.forEach((item) => {
  const header = item.querySelector(".resume-header"),
    content = item.querySelector(".resume-content"),
    icon = item.querySelector(".resume-icon i");

  header.addEventListener("click", () => {
    const isOpen = item.classList.toggle("accordion-open");

    content.style.height = isOpen ? content.scrollHeight + "px" : "0";
    icon.className = isOpen ? "ri-subtract-line" : "ri-add-line";

    accordionItems.forEach((otherItem) => {
      if (
        otherItem !== item &&
        otherItem.classList.contains("accordion-open")
      ) {
        otherItem.querySelector(".resume-content").style.height = "0";
        otherItem.querySelector(".resume-icon i").className = "ri-add-line";
        otherItem.classList.remove("accordion-open");
      }
    });
  });
});

/*=============== TESTIMONIALS SWIPER ===============*/
var servicesSwiper = new Swiper(".testimonials-swiper", {
  spaceBetween: 32,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

/*=============== EMAIL JS ===============*/
const contactForm = document.querySelector("#contact-form"),
  contactName = document.querySelector("#contact-name"),
  contactEmail = document.querySelector("#contact-email"),
  contactSubject = document.querySelector("#contact-subject"),
  contactMessage = document.querySelector("#contact-message"),
  message = document.querySelector("#message");

const sendEmail = (e) => {
  e.preventDefault();

  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    contactSubject.value === "" ||
    contactMessage.value === ""
  ) {
    message.classList.remove('color-first')
    message.classList.add("color-red");
    message.textContent = "Write all the input fields";

    setTimeout(() => {
      message.textContent = "";
    }, 3000);
  } else {
    emailjs
      .sendForm(
        "service_ynbb7gc",
        "template_eij90ec",
        "#contact-form",
        "gmWdnC3SX_vSFlEX_"
      )
      .then(
        () => {
          message.classList.remove("color-red");
          message.classList.add("color-first");
          message.textContent = "Message sent ✔";

          setTimeout(() => {
            message.textContent = "";
          }, 5000);
        },
        (error) => {
          alert("OOPs! SOMETHING WENT WRONG...", error);
          console.log(error);
        }
      );

    contactName.value = "";
    contactEmail.value = "";
    contactSubject.value = "";
    contactMessage.value = "";
  }
};

contactForm.addEventListener("submit", sendEmail);

/*=============== STYLE SWITCHER ===============*/
const styleSwitcher = document.querySelector("#style-switcher");
const switcherToggle = document.querySelector("#switcher-toggle");
const switcherClose = document.querySelector("#switcher-close");

/* Switcher show */

switcherToggle.addEventListener("click", () => {
  styleSwitcher.classList.add("show-switcher");
});

/* Switcher hidden */
switcherClose.addEventListener("click", () => {
  styleSwitcher.classList.remove("show-switcher");
});

/*=============== THEME COLORS ===============*/
const colors = document.querySelectorAll(".style-switcher-color");

colors.forEach((color) => {
  color.onclick = () => {
    const activeColor = color.style.getPropertyValue("--hue");

    colors.forEach((c) => c.classList.remove("active-color"));

    color.classList.add("active-color");

    document.documentElement.style.setProperty("--hue", activeColor);
  };
});

/*=============== LIGHT/DARK MODE ===============*/
let currentTheme = "light";
document.body.className = currentTheme;

document.querySelectorAll('input[name="body-theme"').forEach((input) => {
  input.addEventListener("change", () => {
    currentTheme = input.value;
    document.body.className = currentTheme;
  });
});
