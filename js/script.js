import translation from './translation.js';
// import trans from '../trans.json'



$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});
// let containerSlider = document.getElementsByClassName('containerSlider')[0] ;
// console.log(containerSlider.offsetLeft );

// let x = event.clientX
//   console.log(containerSlider.position);
// containerSlider.style.left='-500px'
// setInterval

// document.onmousedown = function(even){

//    let x= even.screenY  ;
//     }
// document.onmouseup = function(even){

//     console.log( even.screenY ,);
//     }

//         console.log(window.event);

//  addEventListener('mousemove',(even)=>{
//     containerSlider.style.left=`${even.screenY}px` ;
//     // containerSlider.style.left=`500px` ;
//     console.log(even.screenY);
//     // console.log(even.screenX);
//     // var x = even.screenX

// })


// console.log(window.screenX);
// setInterval(function(){console.log(window.screenX)},1000)
//  addEventListener('mousemove',(e)=>{
//     return e.screenX ;
//     console.log(e);
// })

// console.log(x);


// const myWin = window.open("", "", "left=700,top=350,width=200,height=100");
// let x = myWin.screenX;
// let y = myWin.screenY;


// console.log(myWin);
let position = document.getElementById('fixed');
let logo = document.getElementsByClassName('logo')[0];
let home = document.getElementsByClassName('home')[0];
let about_us = document.getElementsByClassName('about_us')[0];
let services = document.getElementsByClassName('services')[0];
let works = document.getElementsByClassName('works')[0];
let blog = document.getElementsByClassName('blog')[0];
let page = document.getElementsByClassName('page')[0];
let contact = document.getElementsByClassName('contact')[0];
let search = document.getElementsByClassName('search')[0]
let phone = document.getElementsByClassName('phone')[0]
let number_phone = document.getElementsByClassName('number_phone')[0]
let angle_down = document.querySelectorAll('.fa-angle-down') ;
let  languageSelector = document.querySelectorAll('.selectLang')[0];
let  languageList = document.querySelector('.selectLang ul ul')  ;
let arr = [logo,home,about_us,services,works,blog,page,contact,search,phone,number_phone,languageSelector]

//  languageSelector[0].style.color=''
let bod = document.body.offsetHeight
let color_1 = '#091D3E'
let color_2 = 'white'
// let arr= [logo,home,about_us,services,works,blog] ;
let counter = document.getElementById('counter');
let upto = 0;
let num = 1

document.onscroll = function () {


    if (document.documentElement.scrollTop > 250) {
        position.style.backgroundColor = "white";
        position.style.boxShadow = "0  1px 10px  0  #9B9B9B";
languageList.style.backgroundColor='#F9F9F9' ;
        // logo.style.color = color_1
        // home.style.color = color_1
        // about_us.style.color = color_1
        // services.style.color = color_1
        // works.style.color = color_1
        // blog.style.color = color_1
        // search.style.color = color_1
        // phone.style.color = color_1
        // number_phone.style.color = color_1;
        arr.forEach((e)=>e.style.color=color_1)
        for(let el of angle_down){
   el.style.color =  color_1
  
        }
        ///Counter



    } else if (document.documentElement.scrollTop < 150) {
        position.style.backgroundColor = "transparent";
        position.style.boxShadow = "0  0 0  0  #9B9B9B";
        languageList.style.backgroundColor='transparent' ;
        // logo.style.color = color_2
        // home.style.color = color_2
        // about_us.style.color = color_2
        // services.style.color = color_2
        // works.style.color = color_2
        // blog.style.color = color_2
        // search.style.color = color_2
        // phone.style.color = color_2
        // number_phone.style.color = color_2
        arr.forEach((e)=>e.style.color=color_2)
        for(let el of angle_down){
            el.style.color =  color_2
        }
        upto = 0;






    }


    // console.log(position.offsetHeight , position.style.backgroundColor
    //     );    
    // document.body.style.backgroundColor = "red";
};
// alert(document.getElementById("myDiv").style.backgroundColor);
// alert(position.style.backgroundColor)

//===================
const limit = setInterval(update);

function update() {

    counter.innerHTML = ++upto
    if (upto > 856) {
        clearInterval(limit)
        console.log('stop');
    }
}

const limitx = setInterval(updatex);

function updatex() {


    if (upto < 856) {
        counter.innerHTML = ++upto
        console.log('stopx');
    }
}

//   const again = setInterval(setagin())
//   function setagin(){
//     console.log(upto);
//     if (document.documentElement.scrollTop < 200){
//         upto = 0 ;
//         counter.innerHTML = ++upto
//        setInterval(update) ;  

//     }
// else{setInterval(setagin())}
//}

// addEventListener('scroll',()=>{
//     // upto = 0 ;
//     // setInterval(update) ;
//     // limit ;
//     // setInterval(update) ;
//     if (document.documentElement.scrollTop < 190){

//         const limit =setInterval(update) ;

//         function  update(){


//         if (upto>856){
//             clearInterval(limit)
//             console.log('stop');

//             if (document.documentElement.scrollTop < 190){
//                 upto = 0 ;
//                 counter.innerHTML = upto

//             }
//         }

//         counter.innerHTML = ++upto
//           }

//     }
// })

// setInterval(limit)

// document.onmousemove = function(even){
//     var x = even.offsetX;
//     var y = event.offsetY;    
//     document.body.style.backgroundPositionX = -x + "px";
//     document.body.style.backgroundPositionY = -y + "px";    

//     }





// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel();
//   });


//   $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// })

$('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    // margin:100,
    // merge:true,

    responsive: {
        678: {
            mergeFit: true
        },
        3000: {
            mergeFit: true
        },
        // 1000:{
        //     mergeFit:false
        // }
    }
});


/////////////////////////translation

const telegram = document.querySelector('.fa-telegram')
// console.log('languageSelector',languageSelector);

addEventListener('click',(even)=>{
    setLanguage(even.target.getAttribute('value'));
    localStorage.setItem("lang",even.target.getAttribute('value')) ;
    console.log(even.target.getAttribute('value'));
    
})

document.addEventListener('DOMContentLoaded',()=>{

    const language = localStorage.getItem('lang') ;
   
    language == null ? "en" : language

     console.log("language",language);

    setLanguage(language)
    
})

const setLanguage = (language)=>{
const elements = document.querySelectorAll('[data-i18n]') ;
// console.log(elements);
elements.forEach((element)=>{
    const translationKet = element.getAttribute('data-i18n') ;
    console.log(language);
   element.textContent = translation[language][translationKet]
   element.placeholder = translation[language][translationKet]
   console.log('elementt =>',element.placeholder);
//    element[0].childNodes[1].attributes.placeholder.nodeValue  = translation[language][translationKet]
   console.log('element.textContent =>', element.textContent ,'translation[language][translationKet]=>' , translation[language][translationKet]);
//    let input = document.getElementsByClassName('input')[0].childNodes[1].attributes.placeholder.nodeValue 
// let input = document.getElementsByClassName('input')[0].childNodes[1].attributes.placeholder 
//    input = translation[language][translationKet]
//    console.log('translation[language][translationKet]',input);
})
document.dir = language === "ar" ?"rtl" : "ltr" ;
console.log(" telegram => ", telegram.getAttribute('dir'));

}

// console.log('trans',trans);
let input = document.getElementsByClassName('input')[0].childNodes[1].attributes.placeholder.nodeValue 
console.log("Input => ", input); 