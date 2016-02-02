module.exports = function (home) {
    var count=0;
    var ratio = [['harvester', 4, 0, 0.40], ['knight', 4, 0, 0.40],['archer', 2, 0, 0.20]];
    //, ['builder', 1, 0, .1]
    var spawnCreep = '';

    home.room.find(Game.MY_CREEPS).forEach(function (creep, i) {
      ratio.forEach(function (arrCreep, i) {
        creep.memory.role === arrCreep[0] ? arrCreep[2]++ : '';
      });
    });

    for(var i=0; i < ratio.length; i++) {
      if(home.room.find(Game.MY_CREEPS).length >= 10) {
        if( ( (home.room.find(Game.MY_CREEPS).length * ratio[i][3]) / 100 ) <= ratio[i][2] ) {
          spawnCreep = ratio[i][0];
          count = ratio[i][2];
          break;
        }
      }
      if(ratio[i][2] < ratio[i][1]) {
        spawnCreep = ratio[i][0];
        count = ratio[i][2];
        break;
      }
    }

    for(var j=0; j < Game.creeps.length; j++) {
      console.log(Game.creeps[spawnCreep+j]);
      if(!Game.creeps[spawnCreep+(j+1)]) {
        count = j+1;
        break;
      }
    }


    if(home.room.find(Game.MY_CREEPS).length === 0) { spawnCreep = 'harvester'; }

  switch(spawnCreep) {
    case 'harvester':
    home.createCreep([Game.WORK, Game.WORK, Game.CARRY, Game.MOVE, Game.MOVE], 'harvester'+(count+1), {role: 'harvester'});
    break;
    case 'builder':
    home.createCreep([Game.WORK, Game.WORK, Game.WORK, Game.CARRY, Game.MOVE], 'builder'+(count+1), {role: 'builder'});
    break;
    case 'knight':
    home.createCreep([Game.TOUGH, Game.ATTACK, Game.ATTACK, Game.MOVE, Game.MOVE], 'knight'+(count+1), {role: 'knight'});
    break;
    case 'archer':
    home.createCreep([Game.TOUGH, Game.RANGED_ATTACK, Game.RANGED_ATTACK, Game.RANGED_ATTACK, Game.MOVE], 'archer'+(count+1), {role: 'archer'});
    break;
    default: '';
  }
};
