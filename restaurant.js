const header=document.querySelector('header');// header tag
const grilliLogo=document.querySelector('.left-container>img');// logo
const rightArrow=document.querySelectorAll('.right-arrow');// to scroll right of the food items
const leftArrow=document.querySelectorAll('.left-arrow');// to scroll left
const foodScrollEl=document.querySelectorAll('.food-container-scroll');// used for food items overview 
const features=document.querySelectorAll('.features');// used to rotate the feature img while hovering
const featuresImg=document.querySelectorAll('.features>img'); // used to rotate the img
let lastScroll=0; // used to make header tag to static and sticky
const rightHeader=document.querySelector(".right-container");
const restaurantDetailsContainer=document.querySelector('.restaurant-details');

features.forEach((element,index)=>{
    element.addEventListener('mouseover',()=>{
        featuresImg[index].classList.add('feature-img-rotater');
        setTimeout(()=>{
            featuresImg[index].classList.remove('feature-img-rotater');
        },800);
    });
});
rightArrow.forEach((arrow,index)=>{
    arrow.addEventListener('click',()=>{
        foodScrollEl[index].scrollLeft+=550;
        setTimeout(()=>{
            scrollPosition(index);
        },500);
    });
});
leftArrow.forEach((arrow,index)=>{
    arrow.addEventListener('click',()=>{
        foodScrollEl[index].scrollLeft-=500;
        setTimeout(()=>{
            scrollPosition(index);
        },500);
    });
});
foodScrollEl.forEach((scroll,index)=>{
    scroll.addEventListener('scroll',()=>scrollPosition(index));
});
function scrollPosition(idx){
    const isAtLeft=foodScrollEl[idx].scrollLeft===0;
    const isAtRight=foodScrollEl[idx].scrollLeft===686.6412353515625 || foodScrollEl[idx].scrollLeft===1276.7176513671875;
    if(isAtLeft){
        leftArrow[idx].style.opacity=0.4;
    }else{
        leftArrow[idx].style.opacity=1;
    }
    if(isAtRight){
        rightArrow[idx].style.opacity=0.4;
    }else{
        rightArrow[idx].style.opacity=1;
    }
}

const moreOptHeaderEl=document.getElementById('more-opt');
const moreOptions=document.querySelector(".more-options-details");
const morOpt=document.querySelector(".more-options-container");
const closeMoreOpt=document.querySelector(".fa-xmark");
window.addEventListener('scroll',()=>{
    const curr=document.documentElement.scrollTop;
    headerColorChanger();
    if(curr<lastScroll){
        header.style.top=`0`;
    }else{
        header.style.top=`-30%`;
    }
    lastScroll=curr;
});


moreOptions.addEventListener("click",()=>{
    morOpt.style=`transform:translateX(-100%)`;
});
closeMoreOpt.addEventListener("click",()=>{
    morOpt.style=`transform:translateX(-100%)`;
});
moreOptHeaderEl.addEventListener("click",()=>{
    morOpt.style=`transform:translateX(0%)`;
});

headerColorChanger();
function headerColorChanger(){
    if(window.scrollY>=restaurantDetailsContainer.offsetTop-80){
        grilliLogo.src="images/header/grilli-light-white.svg";
        header.style=`
            background-color: rgb(2, 6, 12);
        `;
        rightHeader.style=`
        color: white;
        `;
        // moreOptHeaderEl.style='color:white';
    }else{
        grilliLogo.src="images/header/grilli-light-black.svg";
        header.style=`
            background-color: white;
        `;
        rightHeader.style=`
        color:rgb(61, 65, 82);
        `;
        moreOptHeaderEl.style=`color:
        rgb(61, 65, 82);
        `;
    }
}
