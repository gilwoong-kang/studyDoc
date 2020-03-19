//
//  TwoNumber.cpp
//  Algorithm
//
//  Created by gil woong kang on 01/10/2019.
//  Copyright 짤 2019 gil woong kang. All rights reserved.
//

#include <stdio.h>
#include <iostream>
#include <fstream>
#include <algorithm>
#include <cstdlib>
#include <list>
using namespace std;

int twoNumber(std::ifstream& inStream);
int get_abs(int n);
int main(void) {
    int t;
    std::ifstream inStream;
    inStream.open("/Users/gilwoongkang/1903_note/알고리즘/Algorithm/TwoNumber/input.txt");
    
    if (inStream.fail())
    {
        std::cerr << "Input file opening failed.";
        return -1;
    }
    
    inStream>>t;
    
    for(int i = 0 ; i < t ;i++){
        cout << twoNumber(inStream) << endl;
    }
    
    inStream.close();
    std::getchar();
    return 0;
}


int twoNumber(std::ifstream& inStream){
    int n,target;
    inStream >> n >> target;
    int count = 0;
    int arr[1000000];
    for(int i = 0 ;i<n;i++){
        inStream >> arr[i];
    }
    int min = 2*100000000;
    sort(arr,arr+n);
    
    int i = 0, j = n-1;
    while (i < j)
    {
        int tmp = target - (arr[i] + arr[j]);
        if (min > get_abs(tmp))
        {
            min = get_abs(tmp);
            count = 1;
        }
        else if (get_abs(tmp) == min)    count++;
        
        
        if (arr[i] + arr[j] <= target) ++i;
        else if (arr[i] + arr[j] > target) --j;
        else break;
    }
    return count;
}
int get_abs(int n){
    if(n>0)
        return n;
    else
        return -1*n;
}
