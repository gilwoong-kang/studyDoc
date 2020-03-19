////
////  PizzaBox.cpp
////  Algorithm
////
////  Created by gil woong kang on 24/09/2019.
////  Copyright © 2019 gil woong kang. All rights reserved.
////
//
//#include <stdio.h>
//#include <iostream>
//#include <fstream>
//#include <algorithm>
//#include <string>
//
//using namespace std;
//
//int exceptPos[1005][1005];
//int arr[1005][1005];
//
//void pizzaBox(std::ifstream& inStream);
//
//int main(void) {
//    int t;
//    std::ifstream inStream;
//    inStream.open("/Users/gilwoongkang/1903_note/알고리즘/Algorithm/PizzaBox/input.txt");
//
//    if (inStream.fail())
//    {
//        std::cerr << "Input file opening failed.";
//        return -1;
//    }
//
//    inStream>>t;
//
//    for(int i = 0 ; i < t ;i++){
//        pizzaBox(inStream);
//    }
//
//    inStream.close();
//    std::getchar();
//    return 0;
//}
//
//void pizzaBox(std::ifstream& inStream){
//        int n, m;
//        inStream >> n >> m;
//        long long ans = 0;
//        for (int i = 0; i < n; i++) {
//            for (int j = 0; j < m; j++) {
//                inStream >> arr[i][j];
//            }
//        }
//        for (int i = 0; i < n; i++) {
//            int l = 0, z = 0;
//            for (int j = 0; j < m; j++) {
//                if (l < arr[i][j]) {
//                    l = arr[i][j];
//                    z = j;
//                }
//                ans += arr[i][j];
//            }
//            if(exceptPos[i][z] != 1){
//                ans -= arr[i][z];
//                exceptPos[i][z] = 1;
//            }
//        }
//        for (int j = 0; j < m; j++) {
//            int l = 0, z = 0;
//            for (int i = 0; i < n; i++) {
//                if (l < arr[i][j]) {
//                    l = arr[i][j];
//                    z = i;
//                }
//            }
//            if(exceptPos[z][j] != 1){
//                ans -= arr[z][j];
//                exceptPos[z][j] = 1;
//            }
//        }
//        cout << ans << endl;
//
//        for(int i = 0 ; i <1005;i++)
//            std::fill_n(exceptPos[i],1005,0);
//        for(int i = 0 ; i<1005;i++)
//            std::fill_n(arr[i], 1005, 0);
//
//}
