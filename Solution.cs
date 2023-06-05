
using System;

public class Solution
{
    public int BuyChoco(int[] prices, int initialMoney)
    {
        int smallestPrice = int.MaxValue;
        int secondSmallestPrice = int.MaxValue;

        foreach (var price in prices)
        {
            if (smallestPrice > price)
            {
                secondSmallestPrice = smallestPrice;
                smallestPrice = price;
            }
            else if (secondSmallestPrice > price)
            {
                secondSmallestPrice = price;
            }
        }

        int minMoneyForTwoChocolates = smallestPrice + secondSmallestPrice;
        return minMoneyForTwoChocolates <= initialMoney ? initialMoney - minMoneyForTwoChocolates : initialMoney;
    }
}
