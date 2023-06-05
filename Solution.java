
public class Solution {

    public int buyChoco(int[] prices, int initialMoney) {
        int smallestPrice = Integer.MAX_VALUE;
        int secondSmallestPrice = Integer.MAX_VALUE;

        for (int price : prices) {
            if (smallestPrice > price) {
                secondSmallestPrice = smallestPrice;
                smallestPrice = price;
            } else if (secondSmallestPrice > price) {
                secondSmallestPrice = price;
            }
        }

        int minMoneyForTwoChocolates = smallestPrice + secondSmallestPrice;
        return minMoneyForTwoChocolates <= initialMoney ? initialMoney - minMoneyForTwoChocolates : initialMoney;
    }
}
