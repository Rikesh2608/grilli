const header=document.querySelector('header');// header tag
const mainEl=document.querySelector('main');
const footerEl=document.querySelector("footer");
const grilliLogo=document.querySelector('.left-container>img');// logo
const rightArrow=document.querySelectorAll('.right-arrow');// to scroll right of the food items
const leftArrow=document.querySelectorAll('.left-arrow');// to scroll left
const foodScrollEl=document.querySelectorAll('.food-container-scroll');// used to scroll food items 
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
window.addEventListener('scroll',()=>{
    const curr=document.documentElement.scrollTop;
    if(curr<lastScroll){
        header.style=`top:0px;`;
    }else{
        header.style=`top:-30%`;
    }
    headerColorChanger();
    lastScroll=curr;
});

// mobile view 
const moreOptHeaderEl=document.getElementById('more-opt');
const moreOptions=document.querySelector(".more-options-details");
const morOpt=document.querySelector(".more-options-container");
const closeMoreOpt=document.querySelector(".fa-xmark");

moreOptions.addEventListener("click",()=>{
    morOpt.style=`transform:translateX(-100%)`;
    mainEl.classList.remove("active-blur");
    footerEl.classList.remove("active-blur");
});
closeMoreOpt.addEventListener("click",()=>{
    morOpt.style=`transform:translateX(-100%)`;
    mainEl.classList.remove("active-blur");
    footerEl.classList.remove("active-blur");
});
moreOptHeaderEl.addEventListener("click",()=>{
    morOpt.style=`transform:translateX(0%)`;
    mainEl.classList.add("active-blur");
    footerEl.classList.add("active-blur");
});

headerColorChanger();
function headerColorChanger(){
    if(window.scrollY>=restaurantDetailsContainer.offsetTop-80){
        grilliLogo.src="images/header/grilli-light-white.svg";
        header.classList.add("black");
        rightHeader.style=`
        color: white;
        `;
        console.log("rikesh");
        document.documentElement.style.setProperty('--more-opt-bg','rgb(228, 197, 144)');
    }else{
        grilliLogo.src="images/header/grilli-light-black.svg";
        header.classList.remove("black");
        rightHeader.style=`
        color:rgb(61, 65, 82);
        `;
        moreOptHeaderEl.style=`color:
        rgb(61, 65, 82);
        `;
        document.documentElement.style.setProperty('--more-opt-bg','rgb(61, 65, 82)');
    }
}


const foodsEl=document.querySelectorAll(".food");
const foodDisplayEl=document.querySelector(".foods-orders-container");
const foodPrice=document.querySelector('.price');
const foodName=document.querySelector('.foodName');
const foodImg=document.querySelector('.foods-orders-container>img');
const foodDescription=document.querySelector('.food-description');
const closeOrder=document.querySelector('.close-order');
const blurItems=document.querySelectorAll("main,footer,header");

closeOrder.addEventListener("click",()=>{
    foodDisplayEl.style=`
        left:-50vw;
    `;
    blurBackground();
});
function blurBackground(){
    blurItems.forEach((items)=>{
        items.classList.toggle("active-blur");
    }); 
}
foodsEl.forEach((food)=>{
    food.addEventListener("click",()=>{
        foodDisplayEl.style=`
            left:50vw;
        `;
        document.querySelector('body').style=`overflow-y:hidden;`;
        foodName.innerHTML=food.querySelector('.food-name').innerHTML;
        foodPrice.innerHTML=food.querySelector(`.curr-price>div`).innerHTML;
        foodImg.src=food.querySelector('img').src;
        foodDescription.innerHTML=food.querySelector('.description').innerHTML;
        blurBackground();
    });
});