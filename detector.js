// Speed  Gun Detector
/*This is a program that input the speed of a car e.g 80. If the speed is less than 70, it prints “Ok”. 
Otherwise, for every 5 km/s above the speed limit (70),it gives the driver one demerit point and print the total number of demerit points.*/
function speedGun(speed){
if(speed<70){
    console.log('Ok');
}else {console.log("Points:"+((speed-70)/5));}

if((speed-70)/5 >12) { console.log('License suspended');}}
speedGun(60);