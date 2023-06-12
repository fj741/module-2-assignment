let cirlce = document.querySelectorAll('.circle');
let closeButton = document.getElementById("closeButton");
let openButton = document.getElementById("operButton");
let navigation = document.getElementById("navigation");

const previous_button = document.getElementById("previous_button");
const next_button = document.getElementById("next_button");


next_button.addEventListener("click", () =>{
    const game_container = document.getElementById("game_container");
    game_container.scrollLeft += 300;
})
previous_button.addEventListener("click", () => {
    const game_container = document.getElementById("game_container");
    game_container.scrollLeft -= 300;

})

const member_form = document.getElementById('member_form');
const error = document.getElementById("error");
let first_name = document.getElementById("first_name").value;
let last_name = document.getElementById("last_name").value;
let email = document.getElementById("email").value;

member_form.addEventListener('submit',(e) =>{
    let errorMessages = [];
    if(first_name === '' || first_name == null){
        errorMessages.push("Please enter your first name");
    }
    if(last_name === '' || last_name == null){
        errorMessages.push("Please enter your last name");
    }
    if(email === '' || email == null){
        errorMessages.push("Please enter a valid email");

    }
    if(errorMessages.length > 0){
        e.preventDefault()
        error.innerText = errorMessages.join (', ')
    }
});

closeButton.addEventListener("click",() =>{
    navigation.style.right = "-200px";
    navigation.style.transition = "0.3s ease-in-out";
})
openButton.addEventListener("click",() =>{
    navigation.style.right = "0px";
    navigation.style.transition = "0.3s ease-in-out";
})

cirlce.forEach(btn =>{
    btn.addEventListener("click",() =>{
        document.querySelector(`.buttons .active`).classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#image_carousel').src= src;
    })
})