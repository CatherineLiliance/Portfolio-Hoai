function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");

  // Optionally, disable scrolling when the menu is open
  if (menu.classList.contains('open')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}


window.addEventListener('scroll', function() {
  const header = document.getElementById('desktop-nav');
  if (window.scrollY > 5) {
      header.classList.add('shadow');
  } else {
      header.classList.remove('shadow');
  }
});
                        // Dùng cho đoạn viết chữ// 
var typed= new Typed(".text",{
  strings:["21 years old", "a Vietnamese", "a Law Student"], 
  typeSpeed: 50,  // Slow down the typing speed
  backSpeed: 50,  // Slow down the backspace speed
  backDelay: 1500,  // Increase delay before starting to backspace
  startDelay: 500,  // Delay before starting to type the first string
  loop: true,       // Keep looping the animation
  smartBackspace: true,  // Only backspace what doesn't match
  showCursor: true,      // Show a blinking cursor
  cursorChar: '|',       // Customize the cursor character
}); 
                        // END//