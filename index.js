const menu = document.querySelector(".icon");
const menu1 = document.querySelector("menu")
const close1 =document.querySelector(".close")
const dts0 = document.getElementById( "dts0" )
const dts1 = document.getElementById( "dts1" )
const dts2 = document.getElementById( "dts2" )
const dts3 = document.getElementById( "dts3" )
const dts4 = document.getElementById( "dts4" )

menu.addEventListener("click", function(){
    menu1.classList.add("active");
    // console.log("i am working");
});

close1.addEventListener("click" , function(){
    menu1.classList.remove("active");
})

dts0.addEventListener(`click`, function(){
    menu1.classList.remove("active");
})

dts1.addEventListener(`click`, function(){
    menu1.classList.remove("active");
})

dts2.addEventListener(`click`, function(){
    menu1.classList.remove("active");
})

dts3.addEventListener(`click`, function(){
    menu1.classList.remove("active");
})

dts4.addEventListener(`click`, function(){
    menu1.classList.remove("active");
})




