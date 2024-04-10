export var foodMap=new Map();
foodMap.set("dosa",addArray(3,17));
foodMap.set("idly",addArray(18,27));
foodMap.set("south indian",addArray(0,50));
foodMap.set("parotta",addArray(28,40));
foodMap.set("biryani",addArray(41,50));
foodMap.set("ice cream",addArray(51,62));
foodMap.set("juices",addArray(63,75));
foodMap.set("burger",addArray(76,86));
foodMap.set("cakes",addArray(87,99));
foodMap.set("chinese",addArray(100,109));
foodMap.set("north indian",addArray(110,119));

export var foodDescription=new Map();
foodDescription.set("dosa","Satisfy your cravings for South Indian breakfast with these crispy & buttery Dosas.");
foodDescription.set("idly","Deliciously soft and healthy Idlis for an ideal breakfast.");
foodDescription.set("south indian","Explore hot & spicy dishes that are a specialty of South India.");
foodDescription.set("parotta","Bring home a plate of flaky & soft Parottas for a perfect meal.");
foodDescription.set("biryani","Taste these delectable classics, delectable biryanis to make your day.");
foodDescription.set("ice cream","Flavourful ice creams that will make you smile a bit wider.");
foodDescription.set("juices","Sip on these delicious and healthy juices to refresh your day.");
foodDescription.set("burger","Satisfy your cravings with these fresh and flavoursome burgers.");
foodDescription.set("cakes","Feast on amazing cakes to satisfy your sweet tooth.");
foodDescription.set("chinese","Transport your taste buds to the heart of Chinese cuisine with these scrumptious dishes.");
foodDescription.set("north indian","Indulge with the best of North Indian cuisines.");

function addArray(start,end){
    var array=[];
    for(var i=start;i<=end;i++){
        array.push(i);
    }
    return array;
}
