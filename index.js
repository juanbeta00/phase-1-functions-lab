// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLoc) {
    // pickUpLoc = Math.abs(pickUpLoc);
    let distance = (42 - pickUpLoc);
    return Math.abs(distance);
}

function distanceFromHqInFeet(blocks) {
    let distInFeet = (distanceFromHqInBlocks(blocks) * 264)
    return distInFeet;

}

function distanceTravelledInFeet(start, end) {
    let travInFeet = ((start - end) * 264)
    return Math.abs(travInFeet);
}
// function calculatesFarePrice(start, end) {
//     let distInFeet = ((start - end) * 264)
//     let charge = ''
//     if (distInFeet > 2500) {
//         charge = 'cannot travel that far';
//     } else if (distInFeet > 2000) {
//         charge = 25;     
//     } else if (distInFeet > 400) {
//         charge = ((distInFeet - 400) * 0.02);
//     } else {
//         charge = 0;
//     }
//     return charge;
// }

function calculatesFarePrice(start, end) {
    let dstnce = distanceTravelledInFeet(start, end)
    if (dstnce < 400) {
        return 0;
    } else if (dstnce <= 2000) {
        return (dstnce - 400) * 0.02;
    } else if (dstnce <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}