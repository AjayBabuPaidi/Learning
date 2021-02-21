// function to determine hours of sleep for a given day
let getSleepHours = day =>{
    day = day.toLowerCase();
    switch(day){
        case "monday" : return 8;
        break;
        case "tuesday": return 8;
        break;
        case "wednesday": return 8;
        break;
        case "thursday" : return 8;
        break;
        case "friday": return 9;
        break;
        case "saturday": return 10;
        break;
        case "sunday" : return 11;
    }
}

// function to claculate the actual total sleep hours

let getActualSleepHours = () =>{

    const monday = getSleepHours("monday");
    const tuesday = getSleepHours("tuesday");
    const wednesday = getSleepHours("wednesday");
    const thursday = getSleepHours("thursday");
    const friday = getSleepHours("friday");
    const saturday = getSleepHours("saturday");
    const sunday = getSleepHours("sunday");

    return monday + tuesday + wednesday + thursday + friday + saturday + sunday;

}

// function to find out the ideal sleep hours

let getIdealSleepHours = () => {
    const idealSleepHours = 8;
    return idealSleepHours *7;
}

// function to find out the sleep debt if any

let calculateSleepDebt = ()=>{
    actualSleepHours = getActualSleepHours();
    idealSleepHours = getIdealSleepHours();
    if(actualSleepHours === idealSleepHours){
        console.log("user got the perfect amount of sleep.");
    }
    else if(actualSleepHours > idealSleepHours){
        console.log(`user got ${actualSleepHours - idealSleepHours} more hours sleep than needed.`);
    }
    else{
        console.log(`user should get some rest, by taking ${idealSleepHours - actualSleepHours} hours more rest`);
    }
}