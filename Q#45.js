function  make_car(manufacturer, model, options){
// """Make a dictionary representing a car."""
car_dict = {
    'manufacturer': manufacturer,
    'model': model,
    }
for ( value=0; value< options.length;value++){
    car_dict[options[value]] = value}

return car_dict
}

my_outback = make_car('subaru', 'outback', color='blue', tow_package=true)
console.log(my_outback)

my_accord = make_car('honda', 'accord', year=1991, color='white',
    headlights='popup')
console.log(my_accord)