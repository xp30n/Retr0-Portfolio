window.addEventListener("load", function () {
  setTimeout(function () {
    // loading screen fade out
    document.getElementById("loading-screen").style.opacity = 0;
    document.getElementById("loading-screen").style.pointerEvents = "none";

    // welcome msg fade in
    setTimeout(function () {
      document.getElementById("welcome-message").style.opacity = 1;
    }, 700);

    // welcome msg fade out
    setTimeout(function () {
      document.getElementById("welcome-message").style.opacity = 0;
    }, 2700);

    // new game btn fade
    setTimeout(function () {
      document.getElementById("main-content").style.opacity = 1;
      document.getElementById("main-content").style.pointerEvents = "all";
      document.getElementById("new-game-button").classList.add("fade-in");
    }, 3000);
  }, 4000);

  const newGameButton = document.getElementById("new-game-button");
  newGameButton.addEventListener("click", function () {
    document.getElementById("main-content").style.opacity = 0;
    document.getElementById("main-content").style.pointerEvents = "none";

    const starLogo = document.querySelectorAll(".star-logo");
    starLogo.forEach(function (logo) {
      logo.style.opacity = "0.3";
      logo.style.transform = "translate(-50%, -50%) scale(1.6)";
      logo.style.filter = "blur(5px)";
      logo.style.top = "60%";
      logo.style.transition =
        "opacity 1s ease, transform 1s ease, filter 0.5s ease, top 1s ease";
    });

    const creativeLogo = document.querySelectorAll(".creative-logo");
    creativeLogo.forEach(function (logo) {
      logo.style.opacity = "0";
      logo.style.transform = "translate(-50%, -50%) scale(1.3)";
      logo.style.filter = "blur(5px)";
      logo.style.top = "60%";
      logo.style.transition =
        "opacity 1s ease, transform 1s ease, filter 0.5s ease, top 1s ease";
    });

    const portfolioLogo = document.querySelectorAll(".portfolio-logo");
    portfolioLogo.forEach(function (logo) {
      logo.style.opacity = "0";
      logo.style.transform = "translate(-50%, -50%) scale(1.3)";
      logo.style.filter = "blur(5px)";
      logo.style.top = "60%";
      logo.style.transition =
        "opacity 1s ease, transform 1s ease, filter 0.5s ease, top 1s ease";
    });

    setTimeout(function () {
      document.getElementById("portfolio-interface").style.opacity = 1;
      document.getElementById("portfolio-interface").style.pointerEvents =
        "all";
    }, 1000);

    setTimeout(function () {
      const secondLogoContainer = document.getElementById(
        "second-logo-container"
      );
      secondLogoContainer.style.opacity = 1;
      secondLogoContainer.style.transition = "opacity 1s ease";

      const secondStarLogos = document.querySelectorAll(".star-logo2");
      secondStarLogos.forEach(function (logo) {
        logo.style.opacity = 1;
        logo.style.transition = "opacity 1s ease";
      });

      const secondCreativeLogos = document.querySelectorAll(".creative2");
      secondCreativeLogos.forEach(function (logo) {
        logo.style.opacity = 1;
        logo.style.transition = "opacity 1s ease";
      });

      const secondPortfolioLogos = document.querySelectorAll(".portfolio2");
      secondPortfolioLogos.forEach(function (logo) {
        logo.style.opacity = 1;
        logo.style.transition = "opacity 1s ease";
      });
    }, 2000);
  });

  const programmingProjectsButton = document.getElementById("programming-projects-btn");
  programmingProjectsButton.addEventListener("click", function(event) {
    event.preventDefault();

    document.getElementById("artworks").classList.add("fade-out");
    document.getElementById("contact-me").classList.add("fade-out");
    document.getElementById("prog-projects").classList.add("fade-out");
    document.getElementById("about-me").classList.add("fade-out");
    document.getElementById("education").classList.add("fade-out");
    document.getElementById("work-experience").classList.add("fade-out");

    setTimeout(() => {
      window.location.href = "Programming.html";
    }, 500);
  });

  const artworksButton = document.getElementById("artworks-btn");
  artworksButton.addEventListener("click", function(event) {
    event.preventDefault();

    document.getElementById("artworks").classList.add("fade-out");
    document.getElementById("contact-me").classList.add("fade-out");
    document.getElementById("prog-projects").classList.add("fade-out");
    document.getElementById("about-me").classList.add("fade-out");
    document.getElementById("education").classList.add("fade-out");
    document.getElementById("work-experience").classList.add("fade-out");

    setTimeout(() => {
      window.location.href = "Artworks.html";
    }, 500);
  });

  const contactMeButton = document.getElementById("contact-me-btn");
  contactMeButton.addEventListener("click", function(event) {
    event.preventDefault();

    document.getElementById("artworks").classList.add("fade-out");
    document.getElementById("contact-me").classList.add("fade-out");
    document.getElementById("prog-projects").classList.add("fade-out");
    document.getElementById("about-me").classList.add("fade-out");
    document.getElementById("education").classList.add("fade-out");
    document.getElementById("work-experience").classList.add("fade-out");

    setTimeout(() => {
      window.location.href = "ContactMe.html";
    }, 500);
  });

  const aboutMeButton = document.getElementById("about-me-btn");
  aboutMeButton.addEventListener("click", function(event) {
    event.preventDefault();

    document.getElementById("about-me").classList.add("fade-out");
    document.getElementById("artworks").classList.add("fade-out");
    document.getElementById("contact-me").classList.add("fade-out");
    document.getElementById("prog-projects").classList.add("fade-out");
    document.getElementById("education").classList.add("fade-out");
    document.getElementById("work-experience").classList.add("fade-out");

    setTimeout(() => {
      window.location.href = "AboutMe.html";
    }, 500);
  });

  const educationButton = document.getElementById("education-btn");
  educationButton.addEventListener("click", function(event) {
    event.preventDefault();

    document.getElementById("artworks").classList.add("fade-out");
    document.getElementById("contact-me").classList.add("fade-out");
    document.getElementById("prog-projects").classList.add("fade-out");
    document.getElementById("about-me").classList.add("fade-out");
    document.getElementById("education").classList.add("fade-out");
    document.getElementById("work-experience").classList.add("fade-out");

    setTimeout(() => {
      window.location.href = "Education.html";
    }, 500);
  });
  const workExperienceButton = document.getElementById("work-experience-btn");
  workExperienceButton.addEventListener("click", function(event) {
    event.preventDefault();

    document.getElementById("artworks").classList.add("fade-out");
    document.getElementById("contact-me").classList.add("fade-out");
    document.getElementById("prog-projects").classList.add("fade-out");
    document.getElementById("about-me").classList.add("fade-out");
    document.getElementById("education").classList.add("fade-out");
    document.getElementById("work-experience").classList.add("fade-out");

    setTimeout(() => {
      window.location.href = "WorkExperience.html";
    }, 500);
  });
});
