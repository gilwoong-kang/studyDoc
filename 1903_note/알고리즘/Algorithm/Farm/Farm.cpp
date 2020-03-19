////
////  Farm.cpp
////  Algorithm
////
////  Created by gil woong kang on 24/09/2019.
////  Copyright © 2019 gil woong kang. All rights reserved.
////
//
//#include <stdio.h>
//#include <iostream>
//using namespace std;
//
//void farm(int a,int b,int n,int w);
//
//int main(){
//    int t; cin >> t;
//    for (int i = 0;i<t;i++){
//        int a; cin >> a;
//        int b; cin >> b;
//        int n; cin >> n;
//        int w; cin >> w;
//        farm(a, b, n, w);
//    }
//}
//
//void farm(int a,int b,int n,int w){
//    int resultCount = 0;
//    int sheep;
//    int goat;
//    
//    for(int i = 1, j = n-i; i < n;i++,j--){
//        if(resultCount > 1)
//            break;
//        if((a*i+b*j) == w){
//            resultCount++;
//            sheep = i;
//            goat = j;
//        }
//    }
//    if(resultCount == 0 || resultCount > 1){
//        cout << -1 << endl;
//    }else{
//        cout << sheep << " " << goat << endl;
//    }
//    return;
//}
