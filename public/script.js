 const button = document.getElementById('contact-form')
 button.addEventListener("click", preventDefault)
    function preventDefault(){
    alert('Thank you for your message!');
};


let menubar = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menubar.onclick =() => {
    menubar.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}

menubar.onclick =() =>{
    menubar.classList.remove('bx-x');
    navbar.classList.remove('active');
}




