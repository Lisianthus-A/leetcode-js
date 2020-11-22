/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.limit = capacity;
    this.data = new Map();
    this.recentKeys = [];
};

//更新最近使用的key
LRUCache.prototype.update = function (key, str = 'put') {
    if (this.data.has(key)) {  //数据中有该key
        let idx = this.recentKeys.indexOf(key);
        if (idx !== -1) {  //该key为最近使用的key
            this.recentKeys.splice(idx, 1);
            this.recentKeys.push(key);
        } else {  //最近使用的key不包含该key
            if (this.data.size === this.limit) {  //达到上限值
                this.recentKeys.shift();
                this.recentKeys.push(key);
            } else {  //未达到上限值
                this.recentKeys.push(key);
            }
        }
    } else {  //数据中没有该key
        if (str === 'get') {
            return;
        }
        
        let idx = this.recentKeys.indexOf(key);
        if (this.data.size === this.limit) {  //达到上限值
            this.recentKeys.shift();
            this.recentKeys.push(key);
        } else {  //未达到上限值
            this.recentKeys.push(key);
        }
    }
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    this.update(key, 'get');
    return this.data.get(key) || -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.data.size < this.limit) {  //未超过上限
        this.update(key);
        this.data.set(key, value);
    } else {  //超过上限
        if (this.data.has(key)) {  //重复的key
            this.update(key);
            this.data.set(key, value);
        } else {  //非重复key，删去最久未使用的数据，然后添加进data
            this.data.delete(this.recentKeys.shift());
            this.data.set(key, value);
            this.recentKeys.push(key);
        }
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */