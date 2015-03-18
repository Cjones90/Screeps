
module.exports = function (creep, home) {
  let enemies = creep.pos.findInRange(Game.HOSTILE_CREEPS, 8);
  if(enemies.length > 0)
    creep.moveTo(enemies[0]);
    creep.attack(enemies[0]);
}
