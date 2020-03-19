////
////  Palindrom.cpp
////  Algorithm
////
////  Created by gil woong kang on 24/09/2019.
////  Copyright © 2019 gil woong kang. All rights reserved.
////
//
//#include <stdio.h>
//#include <iostream>
//#include <list>
//using namespace std;
//
//int palindrom(int number);
//
//int main(){
//    int t; cin >> t;
//    for(int i = 0;i<t;i++){
//        int n; cin >> n;
//        cout << palindrom(n) << endl;
//    }
//}
//
//int palindrom(int number){
//    int result = 0;
//    for(int i = 2 ; i< 65;i++){
//        int numberspace = number;
//        list<int> arrayList;
//        while(numberspace / i > 0){
//            arrayList.push_front(numberspace%i);
//            numberspace /= i;
//        }
//        arrayList.push_front(numberspace);
//
//        list<int>::iterator front_iter = arrayList.begin();
//        list<int>::iterator end_iter = arrayList.end();
//        end_iter--;
//        while(*front_iter == *end_iter){
//            front_iter++;
//            end_iter--;
//            if(front_iter == end_iter)
//                return 1;
//        }
//    }
//    return result;
//}
