(function() {
  let mainNavLinks = document.querySelectorAll("#sidebar-nav ul a");
  let mainSections = document.querySelectorAll("main > section");

  function init() {
    doSmoothScrolling();
    doActiveNav();
    doMobileSidebar();
  }

  function doSmoothScrolling() {
    mainNavLinks.forEach(link => {
      link.addEventListener("click", event => {
        event.preventDefault();
        let target = document.querySelector(event.target.hash);
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    });
  }

  function doActiveNav() {
    let lastId;
    let cur = [];
    
    // This should probably be throttled.
    // Especially because it triggers during smooth scrolling.
    
    window.addEventListener("scroll", event => {
      let fromTop = window.scrollY;

      mainNavLinks.forEach(link => {
        console.log(link);
        let header = document.querySelector(link.hash);
        let section = header.parentElement;
