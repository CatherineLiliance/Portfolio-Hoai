function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  if (window.scrollY > 50) { // Nếu cuộn trang xuống hơn 50px
      header.classList.add('shadow');
  } else {
      header.classList.remove('shadow');
  }
});