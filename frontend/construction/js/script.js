 let navbar = document.querySelector('.header .navbar');
//  let searchForm = document.querySelector('.header .search-form');
//  let loginForm = document.querySelector('.header .login-form');
//  let contactInfo = document.querySelector('.contact-info');

 document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
 };

 window.onscroll = () =>{
    navbar.classList.remove('active');
}