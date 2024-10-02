document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
  
      target.scrollIntoView({
        behavior: 'smooth', 
        block: 'start'      
      });
    });
  });

  window.onscroll = function() {
    var navbar = document.querySelector('.navbar-container');
    var navbarTexts = document.querySelectorAll('.navbar-container .nav-list li a');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
        navbarTexts.forEach(function(navbarText) { 
            navbarText.classList.add('scrolled');
        });
    } else {
        navbar.classList.remove('scrolled');
        navbarTexts.forEach(function(navbarText) {
            navbarText.classList.remove('scrolled');
        });
    }
};