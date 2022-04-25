//show skill
let showSkill = document.getElementById("showSkill");
showSkill.addEventListener("click", function(){
  document.getElementsByClassName("skill")[0].style.display = 'block';
})
let skillClose = document.getElementById("skillClose");
skillClose.addEventListener("click", function(){
  document.getElementsByClassName("skill")[0].style.display = 'none';
})

//show expectation
let showExpectation = document.getElementById("showExpectation");
showExpectation.addEventListener("click", function(){
  document.getElementsByClassName("expectation")[0].style.display = 'block';
})
let exClose = document.getElementById("exClose");
exClose.addEventListener("click", function(){
  document.getElementsByClassName("expectation")[0].style.display = 'none';
})

//show toRacer
let showToRacer = document.getElementById("showToRacer");
showToRacer.addEventListener("click", function(){
  document.getElementsByClassName("toRacer")[0].style.display = 'block';
})
let racerClose = document.getElementById("racerClose");
racerClose.addEventListener("click", function(){
  document.getElementsByClassName("toRacer")[0].style.display = 'none';
})

let addFollower = document.getElementById("addFollower");
let followerNum = document.getElementById("addFollower-btn");
let count = 0;
followerNum.addEventListener("click", function(){
  count++;
  addFollower.innerText = count;
})
let sendMessage = document.getElementById("sendMessage-btn");
sendMessage.addEventListener("click", function(){
  alert("메세지는 보낼 수 없습니다‼")
})
// my info story
let myInfo = document.getElementsByClassName("infoImage");
let myInfoStory = document.getElementsByClassName("storyContent");
let myInfoClose = document.getElementsByClassName("exit");
let storyNav = document.getElementsByClassName("storyNav");

myInfo[0].addEventListener("click", function(){
  myInfoStory[0].style.display = "block";
  storyNav[0].style.display = "block";
})
myInfoClose[0].addEventListener("click", function(){
  myInfoStory[0].style.display = "none";
  storyNav[0].style.display = "none"
})
////image slide
document.getElementById("prevArrow").onclick = function () {
  let currentSlide = document.querySelector(".active");
  let previousSlide = currentSlide.previousElementSibling;
  if(previousSlide === null){
    previousSlide = currentSlide.parentElement.lastElementChild;
  }

  currentSlide.animate(
    [{transform:"translateX(0px)"}, {transform:"translateX(740px)"}]
  ,{
    duration:300,
    easing:"linear",
    iteration:1,
    fill:"both"
  });
  currentSlide.classList.remove("active");
  previousSlide.animate(
    [{transform:"translateX(-740px)"}, {transform:"translateX(0px)"}]
  ,{
    duration:300,
    easing:"linear",
    iteration:1,
    fill:"both"
  })
  previousSlide.classList.add("active");
}

document.getElementById("nextArrow").onclick = function () {
  let currentSlide = document.querySelector(".active");
  let nextSlide = currentSlide.nextElementSibling;
  if(nextSlide === null){
    nextSlide = currentSlide.parentElement.firstElementChild;
  }

  currentSlide.animate(
    [{transform:"translateX(0px)"}, {transform:"translateX(-740px)"}]
  ,{
    duration:300,
    easing:"linear",
    iteration:1,
    fill:"both"
  });
  currentSlide.classList.remove("active");
  nextSlide.animate(
    [{transform:"translateX(740px)"}, {transform:"translateX(0px)"}], {
    duration:300,
    easing:"linear",
    iteration:1,
    fill:"both"
  })
  nextSlide.classList.add("active");
}
