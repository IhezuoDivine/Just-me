document.addEventListener("DOMContentLoaded", () => {

const menubarbtn = document.getElementById("menubarbtn");
const sectionsidemenu = document.getElementById("section-sidemenu");
const sidemenu = document.getElementById("sidemenu");
const sidemenubtn = document.getElementById("sidemenubtn");
const infocontainer = document.getElementById("infocontainer");
const infobtn = document.getElementById("infobtn");
const close = document.getElementById("close");
const aboutLink = document.querySelector('.about1');
const homeLink = document.querySelector('.home2');
const aboutSection = document.getElementById('aboutme');
const mainSection = document.getElementById('main');
//const seework = document.getElementById("seework");


menubarbtn.addEventListener("click", () => {
  sectionsidemenu.style.display = "block";
  sidemenu.style.display = "block";
  infocontainer.style.display = "none";
});

infobtn.addEventListener("click", () => {
  sidemenu.style.display = "none";
  infocontainer.style.display = "block";
});

sidemenubtn.addEventListener("click", () => {
  infocontainer.style.display = "none";
  sidemenu.style.display = "block";

});
  
close.addEventListener("click",function(event) {
   event.preventDefault();
   sectionsidemenu.style.display = 'none';
});

aboutLink.addEventListener('click', function (e) {
  e.preventDefault();
  aboutSection.style.display = 'block';
  mainSection.style.display = 'none';
  sectionsidemenu.style.display ="none";
  seework.textContent = "Click To go Back";
});

homeLink.addEventListener('click', function (e) {
  e.preventDefault();
  sectionsidemenu.style.display = 'none';
  aboutSection.style.display = 'none';
  mainSection.style.display = 'block';
  seework.textContent = "See My Work";
});


/*
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
  */
});
