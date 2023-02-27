const cartButton = document.querySelectorAll(".cart-button");

cartButton.forEach( (button)=>{
    button.addEventListener('click',cartClick);
}); 

function cartClick(){
    let button = this;
    button.classList.add("clicked");  

    setTimeout(()=>{
    button.classList.remove("clicked");
    },2500)
}

