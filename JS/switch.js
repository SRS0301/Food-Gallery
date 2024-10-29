//WAP to print "weekday" for all weekdays and "holidays" for staturday and sunday

const prompt= require ('prompt-sync') ({sigint:true})
const day= prompt('Enter a day:')

switch(day){
    case 'monday': console.log(`This is a Weekday`);
    break;

    case 'monday': console.log(`This is a Weekday`);
    break;

    case 'tuesday': console.log(`This is a Weekday`);
    break;

    case 'wednesday': console.log(`This is a Weekday`);
    break;

    case 'thursday': console.log(`This is a Weekday`);
    break;

    case 'friday': console.log(`This is a Weekday`);
    break;

    case 'saturday': console.log(`This is a hoiday`);
    break;

    case 'sunday': console.log(`This is a holiday`);
    break;

    default: console.log(`unknown day `);
    

    
}