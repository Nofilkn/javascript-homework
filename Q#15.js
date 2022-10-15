//replacing one person and adding another one
let guests = ['Nofil', 'Ali', 'Noman']

for(let i=0; i<guests.length;i++){
    console.log(guests[i],", please come to dinner.")
}

console.log("\nsorry ",guests[1],"not come becaouse he can not make the dinner\n");

guests[1]="Rayyan";
for(let i=0; i<guests.length;i++){
    console.log(guests[i],", please come to dinner.")
}
