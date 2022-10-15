function show_magicians(magicians){
    // """Print the name of each magician in the list."""
    for (magician=0; magician < magicians.length; magician++){
        console.log(magicians[magician])
    }
}

function  make_great(magicians){
    // """Add 'the Great!' to each magician's name."""
    // # Build a new list to hold the great musicians.
    great_magicians = []

    // # Make each magician great, and add it to great_magicians.
    while (magicians)
    {   magician = magicians.pop()
        great_magician = magician + ' the Great'
        great_magicians.push(great_magician)
    }
    // # Add the great magicians back into magicians.
    for (great_magician=0; great_magician < great_magicians.length ; great_magician++){
        magicians.push(great_magician)}
}
magicians = ['Harry Houdini', 'David Blaine', 'Teller']
show_magicians(magicians)

console.log("\n")
make_great(magicians)
show_magicians(magicians)