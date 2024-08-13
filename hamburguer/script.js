let menuIsOpen = true;
const menuIcon =document.querySelector("#menu-icon");
const menuTexto=document.querySelectorAll(".menu-text")

menuIcon.addEventListener('click', function () {

    if (menuIsOpen) {
        
        menuIcon.src="arrow-right.png"
        menuIsOpen = false
        menuTexto.forEach(m =>{
            m.style.display="none";
        });
    } else {
        
        menuIcon.src="arrow-left.png"
        menuIsOpen = true
        menuTexto.forEach(m =>{
            m.style.display="inline"
        })
    }
    
}

)