document.addEventListener("DOMContentLoaded", () => {

const menubarbtn = document.getElementById("menubarbtn");
const sectionsidemenu = document.getElementById("section-sidemenu");
const sidemenu = document.getElementById("sidemenu");
const sidemenubtn = document.getElementById("sidemenubtn");
const infocontainer = document.getElementById("infocontainer");
const infobtn = document.getElementById("infobtn");
const close = document.getElementById("close");

// Show sectionsidemenu
menubarbtn.addEventListener("click", () => {
  sectionsidemenu.style.display = "block";
  sidemenu.style.display = "block";
  infocontainer.style.display = "none";
});

// Show info 
infobtn.addEventListener("click", () => {
  sidemenu.style.display = "none";
  infocontainer.style.display = "block";
});

// Show sidemenu
sidemenubtn.addEventListener("click", () => {
  infocontainer.style.display = "none";
  sidemenu.style.display = "block";

});

close.addEventListener("click", () => {
   sectionsidemenu.style.display = "none"
});


  const toggleButtons = document.querySelectorAll('.toggle-btn');
  const contactForms = document.querySelectorAll('.contact-form');

  toggleButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      contactForms[index].classList.toggle('hidden');
    });
  });

  contactForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      const name = form.querySelector('.name-input').value.trim();
      const email = form.querySelector('.email-input').value.trim();
      const message = form.querySelector('.message-input').value.trim();

      if (name.length < 2) {
        e.preventDefault();
        alert('Please enter a valid name.');
      } else if (!email.includes('@') || email.length < 5) {
        e.preventDefault();
        alert('Please enter a valid email address.');
      } else if (message.length < 10) {
        e.preventDefault();
        alert('Please enter a message with at least 10 characters.');
      }
    });
  });

});
