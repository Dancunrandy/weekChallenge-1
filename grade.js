// Student Grade Generator.
/*prompts the user to input student marks. The input is between 0 and 100. 
A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.*/

function studentGrade(marks){
if (marks>=80&&marks<=100){//returns Grade A
    console.log('Grade A');
}else if(marks>=60&&marks<=79){
    console.log('Grade B');}//returns Grade B
    else if(marks>=59&&marks<=49){
        console.log('Grade C');//returns Grade C
    }else if(marks>=40&&marks<=49){
        console.log('Grade D');//returns Grade D
    }else if(marks<=39){
        console.log('Grade E');//returns Grade E
    }else{
        console.log('Invalid marks')// if the marks are invalid retuns invalid marks
    }
}
studentGrade(38)