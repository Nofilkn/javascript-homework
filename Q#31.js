usernames = []
if (usernames.length>0){
    for (i=0; i < user.length; i++){


        if (user[i] == 'admin'){
            console.log("Hello admin, would you like to see a status report?")
        }
        else{
            console.log("Hello " + user[i] + ", thank you for logging in again!")
        
        }   
        }}
else {
console.log("We need to find some users!")
}