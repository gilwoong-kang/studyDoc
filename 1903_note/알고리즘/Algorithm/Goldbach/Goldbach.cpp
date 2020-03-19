////
////  Goldbach.cpp
////  Algorithm
////
////  Created by gil woong kang on 25/09/2019.
////  Copyright © 2019 gil woong kang. All rights reserved.
////
//
//#include <stdio.h>
//#include <iostream>
//#include <cmath>
//#include <vector>
//
//using namespace std;
//void goldbachConjecture(int num,vector<int> prime);
//
//int main(){
//    vector<int> arr;
//    int num = 1000;
//    int i = 2;
//    
//    for (i = 2; i <= num; i++) {
//        arr.push_back(i-2);
//    }
//    
//    for (i = 2; i <= sqrt(num); i++) {
//        if (arr[i] == 0)
//            continue;
//        for (int j = i + i; j <= num; j += i) {
//            arr[j] = 0;
//        }
//    }
//    
//    int t; cin >> t;
//    for(int i = 0;i<t;i++){
//        int n; cin>>n;
//        goldbachConjecture(n, arr);
//    }
//    return 0;
//}
//void goldbachConjecture(int number,vector<int> prime) {
//    int end = prime.size();
//    int first;
//    int last;
//    int gap = 999;
//    for(int i = 0;i<end;i++){
//        for(int j = 0;j<end;j++){
//            if(prime[i]+prime[j] == number){
//                if(prime[j] > prime[i]){
//                    if(gap>(prime[j] - prime[i])){
//                        gap = prime[j] - prime[i];
//                        first = prime[i];
//                        last = prime[j];
//                    }
//                }else{
//                    if(gap>(prime[i] - prime[j])){
//                        gap = prime[i] - prime[j];
//                        first = prime[i];
//                        last = prime[j];
//                    }
//                }
//            }
//        }
//    }
//    cout << first << " " << last << endl;
//}
