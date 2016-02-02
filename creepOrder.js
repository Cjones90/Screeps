
module.exports = function (count) {
  var nextCreep = '';
  switch(count){
    case 0: nextCreep = 'harvester';
    break;
    case 1: nextCreep = 'harvester';
    break;
    case 2: nextCreep = 'harvester';
    break;
    case 3: nextCreep = 'harvester';
    break;
    case 4: nextCreep = 'knight';
    break;
    case 5: nextCreep = 'knight';
    break;
    case 6: nextCreep = 'knight';
    break;
    case 7: nextCreep = 'knight';
    break;
   //Implementing later
  //  case 8: nextCreep = 'archer';
  //  break;
    default: '';
  }
  return nextCreep;
};
