
#include <vector>
using namespace std;

class Solution {
    
public:
    int buyChoco(const vector<int>& prices, int initialMoney) const {
        int smallestPrice = INT_MAX;
        int secondSmallestPrice = INT_MAX;
        
        for (const auto& price : prices) {
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
};
