// <!-- header open  -->

  function toggleMenu() {
    const menu = document.getElementById('main-menu');
    const toggle = document.getElementById('menu-toggle');

    if (!menu || !toggle) return;

    menu.classList.toggle('active');
    toggle.innerHTML = menu.classList.contains('active') ? '✕' : '☰';
  }
  
  function toggleSubmenu(event) {
    if (window.innerWidth > 768) return;

    const li = event.currentTarget;
    const submenu = li.querySelector(':scope > ul');
    const directLink = li.querySelector(':scope > a');

    if (!submenu) return;

    const clickedInsideDirectLink = directLink ? directLink.contains(event.target) : false;
    const clickedCurrentItem = event.target === li || clickedInsideDirectLink;

    if (!clickedCurrentItem) return;

    const href = directLink ? directLink.getAttribute('href') : '';
    const isPlaceholderLink = !href || href === '#';
    const isOpen = li.classList.contains('active');

    if (!isOpen || isPlaceholderLink) {
      event.preventDefault();

      const siblings = Array.from(li.parentElement.children).filter((item) => item !== li);
      siblings.forEach((item) => item.classList.remove('active'));

      if (isPlaceholderLink && isOpen) {
        li.classList.remove('active');
      } else {
        li.classList.add('active');
      }
    }
  }
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    const nav = document.querySelector('nav');
    const menu = document.getElementById('main-menu');
    const toggle = document.getElementById('menu-toggle');
  
    if (!nav || !menu || !toggle) return;

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
      if (!menu || !toggle) return;
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
