import { foodMap as foodRelations} from "./dish-relations.js";
import { dishes } from "./dishes.js";
import { foodDescription as headerDescription } from "./dish-relations.js";


const header=document.querySelector("header");
const mainEl=document.querySelector("main");
const footerEl=document.querySelector("footer");

var lastScroll=0;
window.addEventListener('scroll',()=>{
    const curr=window.scrollY;
    if(curr<lastScroll){
        header.style=`top:0px;`;
    }else{
        header.style=`top:-30%`;
    }
    lastScroll=curr;
});


// mobile view 
const moreOptHeaderEl=document.getElementById('more-opt');
const moreOptions=document.querySelector(".more-options-details");
const morOpt=document.querySelector(".more-options-container");
const closeMoreOpt=document.querySelector(".fa-xmark");

moreOptions.addEventListener("click",()=>hideMoreOptions());
closeMoreOpt.addEventListener("click",()=>hideMoreOptions());
moreOptHeaderEl.addEventListener("click",()=>showMoreOptions());
function showMoreOptions(){// To show Mobile View Options
    morOpt.style=`transform:translateX(0%)`;
    mainEl.classList.add("active-blur");
    footerEl.classList.add("active-blur");
}
function hideMoreOptions(){// to hide Mobile view Options
    morOpt.style=`transform:translateX(-100%)`;
    mainEl.classList.remove("active-blur");
    footerEl.classList.remove("active-blur");
}

const foodsContainerEl=document.querySelector(".foods-overview-container");
var foodHtml='';
const foodName = new URLSearchParams(window.location.search).get("name");
console.log(foodName)
const foodHeaderEl=document.querySelector(".food-header>h1");
const headerDescriptionEl=document.querySelector(".food-header>div");
const foodVarieties=foodRelations.get(foodName.toLocaleLowerCase());

foodVarieties.forEach((index)=>{
    var dish=dishes[index];
    foodHtml+=`
    <div class="foods-overview">
        <div class="food-order">
            <img src="${dish.img}" alt="picture">
        </div>
        <div class="food-details">
            <div class="food-name">
                ${dish.name}
            </div>
            <div class="price-ratings">
                <div class="ratings-container">
                <div class="rating-star">
                    <img src="images/symbol/rating-star.svg">
                </div> 
                <div class="ratings">${dish.rating}</div>
                </div>
                <div class="price">
                    <del>₹${dish.price}</del>
                    <div>₹${dish.offer}</div>
                </div>
            </div>
            <div class="description">
                ${dish.description}
            </div>
        </div>
    </div>
    `;
});
foodHeaderEl.innerHTML=foodName;
foodsContainerEl.innerHTML=foodHtml;
headerDescriptionEl.innerHTML=headerDescription.get(foodName.toLowerCase());

const foodsEl=document.querySelectorAll(".foods-overview");
// document.documentElement.style.setProperty('--food-name-width',`calc(${foodsEl[0].querySelector(".food-details").offSetWidth}-30px)`);
const foodDisplayEl=document.querySelector(".foods-orders-container");
const foodPrice=document.querySelector('.foods-orders-container .price');
const foodNameEl=document.querySelector('.foodName');
const foodImg=document.querySelector('.foods-orders-container>img');
const foodDescription=document.querySelector('.food-description');
const closeOrder=document.querySelector('.close-order');
const blurItems=document.querySelectorAll("main,footer,header");
const orderbtn=document.querySelectorAll(".ordering");
const orderSuccess=document.querySelector(".ordered-successfull-container");

closeOrder.addEventListener("click",closeOrderFunc);

function closeOrderFunc(){
    foodDisplayEl.style=`
        left:-50vw;
    `;
    blurBackground();
}
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
        foodNameEl.innerHTML=food.querySelector('.food-name').innerHTML;
        foodPrice.innerHTML=food.querySelector(`.price>div`).innerHTML;
        foodImg.src=food.querySelector('.food-order>img').src;
        foodDescription.innerHTML=food.querySelector('.description').innerHTML;
        blurBackground();
    });
});
orderbtn.forEach((order)=>{
    order.addEventListener("click",()=>{
        closeOrderFunc();
        orderSuccess.style=`
            transform: translate(-50%,0%);
        `;
        setTimeout(()=>{
            orderSuccess.style=`transform: translate(-50%,110%);`;
        },3500);
    });
});


function shuffleArray(array) {
    function random(){
        return Math.random()-0.5;
    }
    array.sort(random);
    return array;
}
