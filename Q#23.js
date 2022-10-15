let car = ['subaru','toyota','honda'];

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')            //printitng false
console.log(car[0] == 'subaru')        //printitng true
console.log(car[0] == 'toyota')        //printitng false   
console.log(car[1] == 'toyota')         //true
console.log(car[2] == 'toyota')         //false    
console.log(car[2] == 'honda')          //true
console.log(car[0,1] == ['toyota','honda']) //salse
console.log(car[0,1] == 'toyota')           //true
console.log(car[0,2] == 'honda')            //true
console.log(car[2,2] == 'toyota')           //false
