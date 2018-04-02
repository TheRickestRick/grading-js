exports.getMovements = function (arr) {
    let meow = [];
    let count = 0;

    for(let x = 0; x< arr.length; x++){
      //console.log(arr[x]);
      if(arr[x] < arr[x+1]){
        meow.push('up');
      }else if(arr[x] > arr[x+1]){
        meow.push('down');
      }else if(arr[x] === arr[x+1]){
        meow.push('even');
      }
    }
    return meow;

}

exports.inDecline = function (arr) {
  let meow = [];
  let count = 0;

  for(let x = 0; x< arr.length; x++){
    console.log(arr[x]);
    if(arr[x] < arr[x+1]){
      meow.push('up');
    }else if(arr[x] > arr[x+1]){
      meow.push('down');
    }else if(arr[x] === arr[x+1]){
      meow.push('even');
    }
  }
  for(let x = 0; x<meow.length; x++){
    if(meow[x] === 'down'){
      count ++;
    }else if (meow[x] === 'up'){
      count = 0;
    }
  }
  if(count >= 3){
    console.log(meow);
    return true;
  }else{
    console.log(meow);
    return false;
  }
}
