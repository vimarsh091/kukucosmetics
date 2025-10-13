// <!-- header open  -->

  function toggleMenu() {
    const menu = document.getElementById('main-menu');
    const toggle = document.getElementById('menu-toggle');
    menu.classList.toggle('active');
    toggle.innerHTML = menu.classList.contains('active') ? '✕' : '☰';
  }
  
  function toggleSubmenu(event) {
    // Only run this on mobile
    if (window.innerWidth <= 768) {
      const li = event.currentTarget;
      const submenu = li.querySelector(':scope > ul');
  
      // Detect if user clicked the link itself
      const clickedLink = event.target.closest('a');
  
      // If submenu exists
      if (submenu) {
        // If user clicked on arrow or LI background (not the link)
        if (event.target === li || event.target.parentElement === li) {
          event.preventDefault();
          li.classList.toggle('active');
        }
        // If clicked directly on <a>, open the link normally
        else if (clickedLink && !submenu.contains(clickedLink)) {
          window.location.href = clickedLink.href;
        }
      } 
      // If no submenu → allow normal link navigation
      else if (clickedLink) {
        window.location.href = clickedLink.href;
      }
    }
  }
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    const nav = document.querySelector('nav');
    const menu = document.getElementById('main-menu');
    const toggle = document.getElementById('menu-toggle');
  
    if (!nav.contains(e.target) && menu.classList.contains('active')) {
      menu.classList.remove('active');
      toggle.innerHTML = '☰';
      document.querySelectorAll('#main-menu li.active').forEach(item => item.classList.remove('active'));
    }
  });
  
  // Reset on desktop resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      const menu = document.getElementById('main-menu');
      const toggle = document.getElementById('menu-toggle');
      menu.classList.remove('active');
      toggle.innerHTML = '☰';
      document.querySelectorAll('#main-menu li.active').forEach(item => item.classList.remove('active'));
    }
  });
 

// mail open 
function openEmail() {

    const mailtoLink = "mailto:kukucosmetics25@gmail.com?subject=Inquiry from KUKU Cosmetics Website&body=Hello, I would like to know more about your products.";
    const gmailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=kukucosmetics25@gmail.com&su=Inquiry%20from%20KUKU%20Cosmetics%20Website&body=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products.";
  
    // Try mailto first
    window.location.href = mailtoLink;
  
    // Fallback to Gmail if nothing happens
    setTimeout(() => {
      window.open(gmailLink, "_blank");
    }, 1000);
  }
  

  // <!-- faq  -->
    $(document).ready(function () {
      $(".acc-set > a").on("mouseenter", function () {
        if (!$(this).hasClass("active")) {
          // Reset all
          $(".acc-set > a").removeClass("active");
          $(".acc-set > a i").removeClass("fa-minus").addClass("fa-plus");
          $(".acc content").slideUp(200);

          // Activate hovered one
          $(this).addClass("active");
          $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
          $(this).siblings(".acc content").slideDown(200);
        }
      });

      $(".acc set").on("mouseleave", function () {
        $(this).find("a").removeClass("active");
        $(this).find("i").removeClass("fa-minus").addClass("fa-plus");
        $(this).find(".acc content").slideUp(200);
      });
    });

