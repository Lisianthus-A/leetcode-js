/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    //判断是否可以打开给定索引的门
    const canOpenDoor = (index) => {
        return keys.includes(index);
    }

    let keys = [...rooms[0]];  //当前拥有的钥匙

    let doors = [];  //尚未打开的门索引
    for (let i = 1; i < rooms.length; i++) {  //初始化尚未打开的门
        doors.push(i);
    }

    while (true) {
        const openedDoors = [];  //已经打开的门
        
        for (let i of doors) {  //遍历尚未打开的门
            if (canOpenDoor(i)) {  //可以打开
                openedDoors.push(i);
                keys = [...keys, ...rooms[i]];  //获取该房间的钥匙
            }
        }

        //更新尚未打开的门，过滤所有在openedDoors存在的索引
        doors = doors.filter(e => !openedDoors.includes(e));

        if (doors.length === 0) {  //所有门都已经打开
            return true;
        }

        if (openedDoors.length === 0) {  //已经没有能打开的门了
            return false;
        }
    }

};