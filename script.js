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
  strings:["22 years old", "a Vietnamese", "a Paralegal"], 
  typeSpeed: 50,  // Slow down the typing speed
  backSpeed: 50,  // Slow down the backspace speed
  backDelay: 1500,  // Increase delay before starting to backspace
  startDelay: 500,  // Delay before starting to type the first string
  loop: true,       // Keep looping the animation
  smartBackspace: true,  // Only backspace what doesn't match
  showCursor: true,      // Show a blinking cursor
  cursorChar: '|',       // Customize the cursor character
}); 

function animateOnScroll() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  const windowHeight = window.innerHeight;

  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    
    if (elementPosition < windowHeight - 100) { // Adjust threshold as needed
      element.classList.add('animated');
    }
  });
}

window.addEventListener('scroll', animateOnScroll);


/*keo xuong skill*/ 
function toggleSkills(element) {
  const parentContainer = element.parentNode; // Find the parent .details-container
  parentContainer.classList.toggle('open'); // Toggle the open class
}


window.onload = function() {
  const slider = document.querySelector('.slider .list');
  const items = document.querySelectorAll('.slider .list .item');
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const dots = document.querySelectorAll('.slider .dots li');
  let lengthItems = items.length - 1;
  let active = 0;

  let startX = 0;
  let endX = 0;

  // Function to update the slider
  function updateSlider() {
    let itemWidth = items[active].clientWidth;
    slider.style.transform = `translateX(-${active * itemWidth}px)`;
    document.querySelector('.slider .dots li.active').classList.remove('active');
    dots[active].classList.add('active');
  }

  // Next button event listener
  next.onclick = function() {
    active = active + 1 <= lengthItems ? active + 1 : 0;
    updateSlider();
    resetInterval();
  };

  // Previous button event listener
  prev.onclick = function() {
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    updateSlider();
    resetInterval();
  };

  // Dots click event to navigate to a specific slide
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      active = index;
      updateSlider();
      resetInterval();
    });
  });

  // Swipe functionality for mobile devices
  slider.addEventListener('touchstart', function(event) {
    startX = event.touches[0].clientX;
  });

  slider.addEventListener('touchmove', function(event) {
    endX = event.touches[0].clientX;
  });

  slider.addEventListener('touchend', function() {
    if (startX - endX > 50) {
      // Swipe left (go to next slide)
      active = active + 1 <= lengthItems ? active + 1 : 0;
      updateSlider();
      resetInterval();
    } else if (endX - startX > 50) {
      // Swipe right (go to previous slide)
      active = active - 1 >= 0 ? active - 1 : lengthItems;
      updateSlider();
      resetInterval();
    }
  });

  // Auto slide
  let refreshInterval = setInterval(() => { next.click(); }, 3000);

  // Function to reset the auto-slide interval
  function resetInterval() {
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => { next.click(); }, 3000);
  }

  updateSlider(); // Initial update
};
