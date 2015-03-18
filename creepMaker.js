module.exports = function (home, role) {
    var count=0;
    home.room.find(Game.MY_CREEPS).forEach(function (elem, i) {
        elem.memory.role === role ? count++ : '';
    });
  switch(role) {
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
