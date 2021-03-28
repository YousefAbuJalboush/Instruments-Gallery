
// var selection = prompt('Choose which of my information you want to see : introduce myself , My personal picture , My page is on github ' ,
//  ' introduce , picture , github ');

// if ( selection === "introduce" ) {

//     document.write('<h1> My name is Yousef Abu Jalboush </h1>' +'<br>'+ '<p> I’ve graduated from WISE university, faculty of Information Technology, Software Engineering department, year 2021 with grade Excellent. </p>');
    
// }else if ( selection === "picture" ){

//     document.write('<img src="picture.jpg" />');

// }else if ( selection === "github" ){

//     document.write('<p>This is a link to my page on GitHub : </p>'+'<a href="https://github.com/YousefAbuJalboush">GitHub</a>');

// }else{
//     document.write('<h1> You do not select anything to view or enter something that does not exist </h1>');
// }


// confirm("Thank you for visiting the page")


var selectAsac = prompt('What do you want to see the faculty picture? Information about the software development scholarship :' , ' faculty , scholarship ' );

while( selectAsac !== 'faculty' && selectAsac !== 'scholarship' ){

    selectAsac = prompt('please enter on of the following  ( faculty or scholarship )');
}
console.log(selectAsac);
var numRepeat = prompt( 'How many ' + selectAsac + ' would you like to see ?' );


var Output = '';
console.log(Output);

for( var i = numRepeat ; i > 0 ; i-- ){
    if(selectAsac === 'faculty'){
        Output += '<img src="unnamed.jpg"/>';
    }else if(selectAsac === 'scholarship'){
        Output += '<img src="scholarship.jpg"/>';
    }
}

console.log(Output);
document.write(Output);