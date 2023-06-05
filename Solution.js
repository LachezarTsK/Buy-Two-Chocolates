
/**
 * @param {number[]} prices
 * @param {number} initialMoney
 * @return {number}
 */
var buyChoco = function (prices, initialMoney) {
    let smallestPrice = Number.MAX_SAFE_INTEGER;
    let secondSmallestPrice = Number.MAX_SAFE_INTEGER;

    for (let price of prices) {
        if (smallestPrice > price) {
            secondSmallestPrice = smallestPrice;
            smallestPrice = price;
        } else if (secondSmallestPrice > price) {
            secondSmallestPrice = price;
        }
    }

    let minMoneyForTwoChocolates = smallestPrice + secondSmallestPrice;
    return minMoneyForTwoChocolates <= initialMoney ? initialMoney - minMoneyForTwoChocolates : initialMoney;
};
