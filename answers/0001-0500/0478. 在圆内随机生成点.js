/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 */
var Solution = function(radius, x_center, y_center) {
    this.radius = radius;
    this.x = x_center;
    this.y = y_center;
};

/**
 * @return {number[]}
 */
Solution.prototype.randPoint = function() {
    const randomRadius = Math.sqrt(Math.random()) * this.radius;  //随机半径
    const randomRadian = Math.random() * Math.PI * 2;  //随机角度
    return [this.x + randomRadius * Math.cos(randomRadian), this.y + randomRadius * Math.sin(randomRadian)];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */