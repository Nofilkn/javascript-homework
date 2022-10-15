function range(start, end) {
    return Array(end - start ).fill().map((_, idx) => start + idx)
  }
  var result = range(0, 10); // [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
  console.log(result);
for (number=0;number< result.length;number++){
    if (result[number] == 1){
        console.log("1st")}
    else if (result[number] == 2){
        console.log("2nd")}
    else if (result[number] == 3){
        console.log("3rd")}
    else{
        console.log(result[number].toString(),"th")
    }
}