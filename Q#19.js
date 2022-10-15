// # Invite some people to dinner.
guests = ['alexander', 'jack', 'smith']

name = guests[0]
console.log(name + ", please come to dinner.")

name = guests[1]
console.log(name + ", please come to dinner.")

name = guests[2]
console.log(name + ", please come to dinner.")

name = guests[1]
console.log("\nSorry, " + name + " can't make it to dinner.")

// # Jack can't make it! Let's invite Gary instead.
guests[1]="Gary";


// # Print the invitations again.
name = guests[0]
console.log("\n" + name + ", please come to dinner.")

name = guests[1]
console.log(name + ", please come to dinner.")

name = guests[2]
console.log(name + ", please come to dinner.")

// # We got a bigger table, so let's add some more people to the list.
console.log("\nWe got a bigger table!")
guests.push('Nofil')
guests.push('ali')
guests.push('farhan')

name = guests[0]
console.log(name + ", please come to dinner.")

name = guests[1]
console.log(name + ", please come to dinner.")

name = guests[2]
console.log(name + ", please come to dinner.")

name = guests[3]
console.log(name + ", please come to dinner.")

name = guests[4]
console.log(name + ", please come to dinner.")

name = guests[5]
console.log(name + ", please come to dinner.")

console.log("number of peple to invite : ",name.length)