function theBeatlesPlay (musicians, instruments){
  var array = [];
  for (let i = 0; i < musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(array){
  let i = 0;
  while(i < array.length){
    newArray = [`${array[i]}!!!`];
    i++;
  }
  return[newArray];
}