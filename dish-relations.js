export var foodMap=new Map();
foodMap.set("dosa",addArray(6,20));
foodMap.set("idly",addArray(21,30));
foodMap.set("south indian",addArray(0,53));
foodMap.set("parotta",addArray(33,43));
foodMap.set("biryani",addArray(44,53));
foodMap.set("ice cream",addArray(54,65));
foodMap.set("juices",addArray(66,78));
foodMap.set("burger",addArray(79,89));
foodMap.set("cakes",addArray(90,102));
foodMap.set("chinese",addArray(103,112));
foodMap.set("north indian",addArray(113,137));
foodMap.set("shakes",addArray(138,147));

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
foodDescription.set("desserts","Feast on amazing desserts to satisfy your sweet tooth.");
foodDescription.set("shakes","Tempt your taste buds with cold and thick milkshakes.");

function addArray(start,end){
    var array=[];
    for(var i=start;i<=end;i++){
        array.push(i);
    }
    return array;
}

