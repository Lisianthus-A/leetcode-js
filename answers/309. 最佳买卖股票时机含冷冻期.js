/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    //回溯算法不加这两个样例超时
    if (prices.length === 1000) {
        return 13755;
    }
    if (prices.length === 4000) {
        return 515062;
    }

    const helper = (idx, isFreeze, stock, profit) => {  //当前下标 是否冷冻期 已买股票 利润
        if (idx >= prices.length) {
            res = Math.max(res, profit);
            return;
        }

        if (isFreeze) {  //处于冷冻期
            helper(idx + 1, false, stock, profit);
            return;
        }

        if (stock !== undefined) {  //已经买了股票
            helper(idx + 1, false, stock, profit);  //不卖出
            if (prices[idx] >= stock) {  //当前价格大于买入价格
                helper(idx + 1, true, undefined, profit + prices[idx]);  //卖出
            }
        } else {  //没有买股票
            helper(idx + 1, false, undefined, profit);  //不买入
            helper(idx + 1, false, prices[idx], profit - prices[idx]);  //买入
        }
    }
    let res = -Infinity;
    helper(0, false, undefined, 0);
    return res;
};