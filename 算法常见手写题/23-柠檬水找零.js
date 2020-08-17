// 柠檬水找零
// 在柠檬水摊上，每一杯柠檬水的售价为 5 美元。 顾客排队购买你的产品，（按账单 bills 支付的顺序）一次购买一杯。 每位顾客只买一杯柠檬水，然后向你付 5 美元、10 美元或 20 美元。你必须给每个顾客正确找零，也就是说净交易是每位顾客向你支付 5 美元。

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    const mapCount = {
        fiveCount: 0,
        tenCount: 0,
        twentyCount: 0
    }

    for (let i = 0; i < bills.length; i++) {
        let bill = bills[i];
        if (bill === 5) {
            mapCount.fiveCount++;
        } else if (bill === 10) {
            if (mapCount.fiveCount === 0) {
                return false;
            } else {
                mapCount.fiveCount--;
                mapCount.tenCount++;
            }
        } else if (bill === 20) {
            if (mapCount.fiveCount > 0 && mapCount.tenCount > 0) {
                mapCount.fiveCount--;
                mapCount.tenCount--;
            } else if (mapCount.fiveCount > 2) {
                mapCount.fiveCount = mapCount.fiveCount - 3;
            } else {
                return false;
            }
        }
    }
    return true;
};