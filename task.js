'use strict';

function convertFahrToCelsius(temp) {
    
    let celcius ;
    if(typeof temp === Number || typeof temp === String){
        return celcius = (temp - 32) * 5/9 ;
    }
     else{
        return `${temp} is not a valid number but an ${typeof temp}`;
     } 
}

convertFahrToCelsius(33);
