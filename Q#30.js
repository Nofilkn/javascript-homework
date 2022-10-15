user = ['Nofil', 'ali', 'admin', 'belly']

for (i=0; i < user.length; i++){


if (user[i] == 'admin'){
    console.log("Hello admin, would you like to see a status report?")
}
else{
    console.log("Hello " + user[i] + ", thank you for logging in again!")

}   
}
