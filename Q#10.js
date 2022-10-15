// converting text in uppercase lower case and titlr case

let name="Nofil Khan";
console.log("lower case : ",name.toLowerCase());
console.log("uppert case : ",name.toUpperCase());

var nameTitle= name.toLowerCase().split(" ");       //converting string into array
for(var i = 0; i< nameTitle.length; i++){
 nameTitle[i] = nameTitle[i][0].toUpperCase() + nameTitle[i].slice(1);  //make 1 elemt upper and join the array without first element 
}
ans=nameTitle.join(" ");                //converting array into string
console.log("Title Case : ",ans)