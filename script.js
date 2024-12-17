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

// Dùng cho đoạn viết chữ
var typed = new Typed(".text", {
  strings: ["22 years old", "a Vietnamese", "a Paralegal"], 
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

// Modal logic for displaying articles
function openArticleModal(pdfUrl) {
  const modal = document.getElementById('article-modal');
  const pdfViewer = document.getElementById('pdf-viewer');

  if (!modal || !pdfViewer) {
    console.error("Modal or PDF viewer element not found.");
    return;
  }

  pdfViewer.src = pdfUrl; // Set the PDF source dynamically
  modal.classList.remove('hidden'); // Show the modal
  document.body.style.overflow = 'hidden'; // Disable background scrolling
}

function closeArticleModal() {
  const modal = document.getElementById('article-modal');
  const pdfViewer = document.getElementById('pdf-viewer');

  if (!modal || !pdfViewer) {
    console.error("Modal or PDF viewer element not found.");
    return;
  }

  pdfViewer.src = ''; // Clear the PDF source
  modal.classList.add('hidden'); // Hide the modal
  document.body.style.overflow = ''; // Enable background scrolling
}

// Add click event to images to open articles
function addImageClickEvents() {
  const slides = document.querySelectorAll('.slide');

  slides.forEach(slide => {
    const img = slide.querySelector('img');
    const button = slide.querySelector('.details-button');

    if (img && button) {
      const pdfUrl = button.getAttribute('onclick').match(/'(.*?)'/)?.[1]; // Extract URL from button onclick

      if (pdfUrl) {
        img.addEventListener('click', () => openArticleModal(pdfUrl));
      }
    }
  });
}

window.onload = function() {
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const dots = document.querySelectorAll('.slider .dots li');
  const slides = document.querySelectorAll('.slide');
  let activeSlide = 0;

  // Function to update the slider
  function updateSlider() {
    slides.forEach((slide, index) => {
      slide.style.display = index === activeSlide ? 'block' : 'none';
    });
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === activeSlide);
    });
  }

  // Next button event listener
  next.onclick = function() {
    activeSlide = (activeSlide + 1) % slides.length;
    updateSlider();
  };

  // Previous button event listener
  prev.onclick = function() {
    activeSlide = (activeSlide - 1 + slides.length) % slides.length;
    updateSlider();
  };

  // Dot click event listener
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      activeSlide = index;
      updateSlider();
    });
  });

  addImageClickEvents(); // Add events to images
  updateSlider(); // Initial update
};

function openArticleModal(pdfUrl) {
  const modal = document.getElementById('article-modal');
  const pdfViewer = document.getElementById('pdf-viewer');

  pdfViewer.src = pdfUrl; // Gán đường dẫn PDF
  modal.classList.remove('hidden'); // Hiển thị modal
  document.body.style.overflow = 'hidden'; // Vô hiệu hóa cuộn nền
}

function closeArticleModal() {
  const modal = document.getElementById('article-modal');
  const pdfViewer = document.getElementById('pdf-viewer');

  pdfViewer.src = ''; // Xóa PDF khi đóng modal
  modal.classList.add('hidden'); // Ẩn modal
  document.body.style.overflow = ''; // Cho phép cuộn lại
}

// Gắn sự kiện click cho ảnh bài báo
document.addEventListener('DOMContentLoaded', () => {
  const projectImages = document.querySelectorAll('.slide img');

  projectImages.forEach((img, index) => {
    img.addEventListener('click', () => {
      // Đổi URL PDF tương ứng từng bài báo
      const pdfUrls = [
        './assets/2.pdf',
        './assets/article-linguistics.pdf',
        './assets/article-marketing.pdf',
        './assets/article-books.pdf',
      ];
      openArticleModal(pdfUrls[index]);
    });
  });
});

function openPDF(pdfUrl) {
  const isMobile = window.innerWidth <= 768; // Kiểm tra thiết bị màn hình nhỏ (điện thoại)

  if (isMobile) {
    // Mở PDF trên tab mới nếu là điện thoại
    window.open(pdfUrl, "_blank");
  } else {
    // Hiển thị PDF trong modal nếu là máy tính
    const modal = document.getElementById('article-modal');
    const pdfViewer = document.getElementById('pdf-viewer');

    pdfViewer.src = pdfUrl;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Tắt cuộn nền
  }
}

// Sự kiện click cho ảnh slide
document.addEventListener('DOMContentLoaded', () => {
  const projectImages = document.querySelectorAll('.slide img');

  projectImages.forEach((img, index) => {
    const pdfUrls = [
      './assets/2.pdf',
      './assets/article-linguistics.pdf',
      './assets/article-marketing.pdf',
      './assets/article-books.pdf',
    ];

    img.addEventListener('click', () => openPDF(pdfUrls[index]));
  });
});
