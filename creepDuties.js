module.exports = {

    archer: function(creep, home) {
        var enemies = creep.pos.findInRange(FIND_HOSTILE_CREEPS);
        if(enemies.length > 0) {
            creep.moveTo(enemies[0]);
            creep.attack(enemies[0]);
        }
        else {
            let flag = creep.pos.findClosestByPath(FIND_FLAGS)
            creep.moveTo(flag)
        }
    },

    builder: function(creep, home) {
        if(creep.energy === 0) {
            creep.moveTo(home);
            home.transfer(home, RESOURCE_ENERGY);
         }
         else {
            var targets = creep.room.find(FIND_MY_CONSTRUCTION_SITES);
            if(targets.length) {
                creep.moveTo(targets[0]);
                creep.build(targets[0]);
            }
        }
    },

    harvester: function(creep, home) {
        var source = creep.room.find(FIND_SOURCES);
        let dest = creep.pos.findClosestByPath(source);
        // if(creep.room.controller && creep.carry.energy > 30) {
        //     if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
        //         creep.moveTo(creep.room.controller);
        //     }
        // return;
        // }

        if(creep.carry.energy < creep.carryCapacity) {
            creep.moveTo(dest);
            creep.harvest(dest);
        }
        else {
            creep.moveTo(home);
            creep.transfer(home, RESOURCE_ENERGY);
        }
    },

    knight: function (creep, home) {
        var enemies = creep.pos.findInRange(FIND_HOSTILE_CREEPS);
        if(enemies.length > 0) {
            creep.moveTo(enemies[0]);
            creep.attack(enemies[0]);
        }
        else {
            let flag = creep.pos.findClosestByPath(FIND_FLAGS)
            creep.moveTo(flag)
        }
    },
}
