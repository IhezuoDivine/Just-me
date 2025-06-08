document.addEventListener("DOMContentLoaded", () => {
  const menubarbtn = document.getElementById("menubarbtn");
  const sectionsidemenu = document.getElementById("section-sidemenu");
  const sidemenu = document.getElementById("sidemenu");
  const sidemenubtn = document.getElementById("sidemenubtn");
  const infocontainer = document.getElementById("infocontainer");
  const infobtn = document.getElementById("infobtn");
  const close = document.getElementById("close");
  const aboutLink = document.querySelector(".about1");
  const homeLink = document.querySelector(".home2");
  const aboutSection = document.getElementById("aboutme");
  const mainSection = document.getElementById("main");
  const seework = document.getElementById("seework");
  const seework2 = document.getElementById("seework2");
  const projectcontainer = document.getElementById("projectcontainer");

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

  close.addEventListener("click", function (event) {
    event.preventDefault();
    sectionsidemenu.style.display = "none";
  });

  seework2.addEventListener("click", function (event) {
    event.preventDefault();

    if (getComputedStyle(projectcontainer).display === "none") {
      projectcontainer.style.display = "grid";
      seework2.textContent = "See Less";
    } else {
      projectcontainer.style.display = "none";
      seework2.textContent = "See My Work";
    }
  });

  seework.addEventListener("click", function (event) {
    event.preventDefault();
    aboutSection.style.display = "block";
    seework.style.display = "block";
    aboutSection.style.display = "none";
    seework.style.display = "none";
    mainSection.style.display = "block";
    seework2.style.display = "block";
  });

  aboutLink.addEventListener("click", function (e) {
    e.preventDefault();
    aboutSection.style.display = "block";
    seework.style.display = "block";
    seework2.style.display = "none";
    mainSection.style.display = "none";
    sectionsidemenu.style.display = "none";
  });

  homeLink.addEventListener("click", function (e) {
    e.preventDefault();
    sectionsidemenu.style.display = "none";
    aboutSection.style.display = "none";
    mainSection.style.display = "block";
    seework2.style.display = "block";
    seework.style.display = "none";
  });
});
