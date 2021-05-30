#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

vector<string> triplets(vector<int> arr, int sum){

    sort(arr.begin(),arr.end());

    for(int i=0 ;i<arr.size()-3;i++){
        int j = i + 1;
        int k = arr.size() - 1;
        

        while(j < k ){
            
            if(arr[i]+arr[j]+arr[k] == sum){
                result.push_back({arr[i],arr[j],arr[k]});

            }
        } 

    }


}

int main(){
    vector<int> arr{1,2,3,4,5,6,7,8,9,15};
    int s =18;

    auto result = triplets(arr,s);

    return 0;
}
