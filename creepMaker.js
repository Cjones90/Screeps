module.exports = function (home) {
    let creepArmy = {
        harvester: {
            percent: 0.30,
            count: 0
        },
        knight: {
            percent: 0.30,
            count: 0
        },
        archer: {
            percent: 0.20,
            count: 0
        },
        builder: {
            percent: 0.20,
            count: 0
        }
    }

    var spawnCreep = '';

    // Get current total of army
    home.room.find(FIND_MY_CREEPS).forEach(function (creep, i) {
        creepArmy[creep.memory.role]["count"]++
    });

    for(let role in creepArmy) {
        let currentPercent = ( creepArmy[role]["count"] / home.room.find(FIND_MY_CREEPS).length )
        let idealPercent = creepArmy[role]["percent"]

        console.log(role);
        console.log("c:", currentPercent);
        console.log("i:", idealPercent);

        if(currentPercent < idealPercent) {
            spawnCreep = role;
            break;
        }
    }
    // console.log(spawnCreep);
    // console.log(JSON.stringify(creepArmy));

    // Start off with 4 harveters
    if(home.room.find(FIND_MY_CREEPS).length <= 4) { spawnCreep = "harvester" }

    let res = "";
    switch(spawnCreep) {
        case 'harvester':
            res = home.createCreep([WORK, CARRY, MOVE], 'harvester'+(++creepArmy[spawnCreep]["count"]), {role: 'harvester'});
            break;
        case 'builder':
            res = home.createCreep([WORK, WORK, MOVE], 'builder'+(++creepArmy[spawnCreep]["count"]), {role: 'builder'});
            break;
        case 'knight':
            res = home.createCreep([TOUGH, ATTACK, MOVE], 'knight'+(++creepArmy[spawnCreep]["count"]), {role: 'knight'});
            break;
        case 'archer':
            res = home.createCreep([RANGED_ATTACK, TOUGH, MOVE], 'archer'+(++creepArmy[spawnCreep]["count"]), {role: 'archer'});
            break;
        default: '';
    }
    console.log(res);
};
