let sliderImages = document.querySelectorAll("img");
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");
let indicators = document.querySelectorAll(".dot");

let counter = 0; //first image
let imageCounter;

nextBtn.addEventListener("click", sliderNext);

function sliderNext() {
    sliderImages[counter].style.animation = "next1 0.5s ease-in forwards";

    if (counter >= sliderImages.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
    sliderImages[counter].style.animation = "next2 0.5s ease-in forwards";
}
prevBtn.addEventListener("click", sliderPrev);

function sliderPrev() {
    sliderImages[counter].style.animation = "prev1 0.5s ease-in forwards";
    if (counter === 0) {
        counter = sliderImages.length - 1;
    } else {
        counter--;
    }
    sliderImages[counter].style.animation = "prev2 0.5s ease-in forwards";
}
function autoImageSlider() {
    imageCounter = setInterval(sliderNext, 3000)
}
autoImageSlider();

const container = document.querySelector(".container")
container.addEventListener("mouseover",()=>{
    clearInterval(imageCounter);
})
container.addEventListener("mouseout",autoImageSlider);

function updateIndicator(){
    indicators.forEach((dot, index)=>{
        dot.classList.remove("active")

        if(counter === index){
            dot.classList.add("active")
        }
    })
    }
indicators.forEach((dot)=>{
    dot.addEventListener("click",()=>{
        indicators.forEach((dot)=> dot.classList.remove("active"));
        dot.classList.add("active");

        let imageId = parseInt(dot.getAttribute("attr"), 10);

        if(imageId > counter){
            sliderImages[counter].style.animation = "next1 0.5s ease-in forwards"
            counter = imageId;
            sliderImages[counter].style.animation = "next2 0.5s ease-in forwards"
        }else if(imageId < counter){
            sliderImages[counter].style.animation = "prev1 0.5s ease-in forwards";
            counter = imageId;
            sliderImages[counter].style.animation = "prev2 0.5s ease-in forwards";
        }
        updateIndicator();
    })
})