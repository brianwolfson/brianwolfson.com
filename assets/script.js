function navbarScroll() {
  const navbar = document.querySelector('.fixed-top');
  window.onscroll = () => {
  if (window.scrollY > 50) {
      navbar.classList.add('nav-active');
  } else {
      navbar.classList.remove('nav-active');
  }
  };
}

navbarScroll();
