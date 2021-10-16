let movies = [];
async function getMovies(cat='now_playing') {
    let response = await fetch(`https://api.themoviedb.org/3/movie/${cat}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k`)
    let finalRusult = await response.json();
    movies = finalRusult.results;
    displayMovie();
}
getMovies();

let lists = document.querySelectorAll('ul li');
for(let i=0 ; i < lists.length ; i++){
    lists[i].addEventListener('click',()=> getMovies(lists[i].id))
}

function displayMovie() {
    let cartoona = ``;
    for (let i = 0; i < movies.length; i++) {
        cartoona +=
            `<div class="item col-md-4 mb-3">
            <img src="https://image.tmdb.org/t/p/w500/${movies[i].poster_path}" alt="" class="w-100">
            <div class="item-caption text-center p-3 text-dark">
                <h2>${movies[i].original_title}</h2>
                <p>${movies[i].overview}</p>
                <p>${movies[i].vote_average}</p>
                <p>${movies[i].release_date}</p>
            </div>
            </div>`
    };
    document.getElementById("rowData").innerHTML = cartoona;
}

function search(term){
    cartoona= ``;
    for(let i=0 ; i <movies.length ; i++){
        if(movies[i].original_title.toLowerCase().includes(term.toLowerCase())){
            cartoona +=`<div class="item col-md-4 mb-3">
            <img src="https://image.tmdb.org/t/p/w500/${movies[i].poster_path}" alt="" class="w-100">
            <div class="item-caption text-center p-3 text-dark">
                <h2>${movies[i].original_title}</h2>
                <p>${movies[i].overview}</p>
                <p>${movies[i].vote_average}</p>
                <p>${movies[i].release_date}</p>
            </div>
            </div>`
        }
    }
    document.getElementById("rowData").innerHTML = cartoona;

}
$("#currentMovies").keyup(()=> search(document.getElementById("currentMovies").value))
// currentMovies.addEventListener('keyup' ,()=> search(currentMovies))

let allMovies = [];
async function getallMovies(word) {
    let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=eba8b9a7199efdcb0ca1f96879b83c44&query=${word}`)
    let finalRusult = await response.json();
    allMovies = finalRusult.results;
    console.log(allMovies);
    displayAllMovie();
}

function displayAllMovie() {
    let cartoona = ``;
    for (let i = 0; i < allMovies.length; i++) {
        cartoona +=
            `<div class="item col-md-4 mb-3"> 
            <img src="https://image.tmdb.org/t/p/w500/${allMovies[i].poster_path}" alt="" class="w-100">
            <div class="item-caption text-center p-3 text-dark">
                <h2>${movies[i].original_title}</h2>
                <p>${movies[i].overview}</p>
                <p>${movies[i].vote_average}</p>
                <p>${movies[i].release_date}</p>
            </div>
            </div>`
    };
    document.getElementById("rowData").innerHTML = cartoona;
}

$("#allMovies").keyup(()=> getallMovies(document.getElementById("allMovies").value))


let menuWidth = $(".menu").outerWidth();
$(".slider").animate({ left: `-${menuWidth}` }, 0);

$("#toggleBtn").click(function () {
    let menuWidth = $(".menu").outerWidth();

    if ($(".slider").css('left') == "0px") {
        $(".slider").animate({ left: `-${menuWidth}` }, 1000);
        $("#toggleBtn").removeClass("fas fa-times").addClass('fas fa-align-justify');
    }
    else {
        $(".slider").animate({ left: `0px` }, 1000);
        $("#toggleBtn").removeClass('fas fa-align-justify').addClass("fas fa-times");
    }
})



let userName = document.getElementById("name");
let userEmail = document.getElementById("mail");
let userPhone = document.getElementById("phone");
let userAge = document.getElementById("age");
let userPassword = document.getElementById("password");
let userRePassword = document.getElementById("rePassword");

let userNameAlert = document.getElementById("name-alert");
let userEmailAlert = document.getElementById("mail-alert");
let userPhoneAlert = document.getElementById("phone-alert");
let userAgeAlert = document.getElementById("age-alert");
let userpasswordAlert = document.getElementById("password-alert");
let userRepasswordAlert = document.getElementById("repassword-alert");

//validation for name input
function nameInputValid() {
    const regex = /^[a-zA-Z0-9]+$/
    if (regex.test(userName.value) == true) {
        userNameAlert.classList.add("d-none");
        console.log("name tmam");
        return true
    }
    else {
        userNameAlert.classList.replace("d-none", "d-block");
        //userNameAlert.style.display = "block";
        return false
    }
}
userName.addEventListener("keyup", nameInputValid);

//validation for mail input
function mailInputValid() {
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (regex.test(userEmail.value) == true) {
        userEmailAlert.classList.add("d-none");
        console.log("mail");
        return true
    }
    else {
        userEmailAlert.classList.replace("d-none", "d-block");
        return false
    }
}
userEmail.addEventListener("keyup", mailInputValid);

//validation for phone num input
function phoneInputValid() {
    const regex = /^(002)?01[0125][0-9]{8}$/
    if (regex.test(userPhone.value) == true) {
        userPhoneAlert.classList.add("d-none");
        console.log("phone");
        return true
    }
    else {
        userPhoneAlert.classList.replace("d-none", "d-block");
        return false
    }
}
userPhone.addEventListener("keyup", phoneInputValid);

//validation for ageinput
function ageInputValid() {
    const regex = /^([1-9][0-9]?|100)$/
    if (regex.test(userAge.value) == true) {
        userAgeAlert.classList.add("d-none");
        console.log("age");

        return true
    }
    else {
        userAgeAlert.classList.replace("d-none", "d-block");
        return false
    }
}
userAge.addEventListener("keyup", ageInputValid);

//validation for password input
function passwordInputValid() {
    const regex = /^[A-Z]\w{2,7}$/
    if (regex.test(userPassword.value) == true) {
        userpasswordAlert.classList.add("d-none");
        console.log("pass");

        return true
    }
    else {
        userpasswordAlert.classList.replace("d-none", "d-block");
        return false
    }
}
userPassword.addEventListener("keyup", passwordInputValid);

//validation for re-password input
function repasswordInputValid() {
    if (userRePassword.value === userPassword.value) {
        userRepasswordAlert.classList.add("d-none");
        console.log("repass")
        return true
    }
    else {
        userRepasswordAlert.classList.replace("d-none", "d-block");
        console.log("false")

        return false
    }
}
userRePassword.addEventListener("focusout", repasswordInputValid);

function enbale(){
if(nameInputValid() == true && mailInputValid() == true && phoneInputValid() == true && ageInputValid() == true && passwordInputValid() == true && repasswordInputValid() == true){
   console.log("tmam")
    document.getElementById("submitBtn").classList.remove("disabled");
}
else{
    document.getElementById("submitBtn").classList.add("disabled");
    console.log("msh tmam")
}}
