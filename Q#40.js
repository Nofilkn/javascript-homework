function make_album(artist, title){
    // """Build a dictionary containing information about an album."""
    album_dict = {
        'artist': artist,
        'title': title,
        }
    return album_dict
}

album = make_album('metallica', 'ride the lightning')
console.log(album)

album = make_album('beethoven', 'ninth symphony')
console.log(album)

album = make_album('willie nelson', 'red-headed stranger')
console.log(album)