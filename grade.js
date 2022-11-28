// Student Grade Generator.
/*Write that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 

A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.*/

let totalMarks= 100
let percentage=(78/100)*100
console.log(percentage);
if (percentage>79){
    console.log('Grade A')
}else if(percentage>=60&&percentage<=79){
    console.log('Grade B');
}else if(percentage>=49&&percentage<=59){
    console.log('Grade C');
}else if(percentage>=40&&percentage<=49){
    console.log('Grade D');
}else if(percentage<40){
    console.log('Grad E');
}