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
guests.push('sumaiya')

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

// # Oh no, the table won't arrive on time!
console.log("\nSorry, we can only invite two people to dinner.")

name = guests.pop()
console.log("Sorry, " + name + " there's no room at the table.")

name = guests.pop()
console.log("Sorry, " + name + " there's no room at the table.")

name = guests.pop()
console.log("Sorry, " + name + " there's no room at the table.")

name = guests.pop()
console.log("Sorry, " + name + " there's no room at the table.")

// # There should be two people left. Let's invite them.
name = guests[0]
console.log(name + ", please come to dinner.")

name = guests[1]
console.log(name + ", please come to dinner.")
// # making list empty

guests.pop();
guests.pop();
// # Prove the list is empty.
console.log(guests)