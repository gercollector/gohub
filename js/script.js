// const openingBtn = document.querySelector('.sidebar-hamburger')
// const closingBtn = document.querySelector('.sidebar-close')
// const menuOpened = document.querySelector('.menu')
// const sidebar = document.querySelector('.sidebar')
//
//
// openingBtn.addEventListener('click', function() {
//     sidebar.classList.add('sidebar-opened')
// })
//
// closingBtn.addEventListener('click', function() {
//     sidebar.classList.remove('sidebar-opened')
// })
//
// menuOpened.addEventListener('click', function (){
//     sidebar.classList.add('show-menu')
// })
//
//
// menuOpened.addEventListener('click', function (){
//     sidebar.classList.remove('show-menu')
// })


$('.mobile-btn').on('click',function () {
    $('.mobile-btn').toggleClass('show');
    $('.menu').toggleClass('show-menu');
});
$('.menu-list-item').on('click',function () {
    $('.mobile-btn').removeClass('show');
    $('.menu').removeClass('show-menu');
});