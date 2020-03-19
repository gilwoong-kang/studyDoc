////
////  Trucks.cpp
////  Algorithm
////
////  Created by gil woong kang on 29/09/2019.
////  Copyright © 2019 gil woong kang. All rights reserved.
////
//
//#include <stdio.h>
//#include <iostream>
//#include <fstream>
//#include <list>
//using namespace std;
//
//struct truckState{
//    int position;
//    int weight;
//};
//
//void trucks(std::ifstream& inStream);
//int main(void) {
//    int t;
//    std::ifstream inStream;
//    inStream.open("/Users/gilwoongkang/1903_note/알고리즘/Algorithm/Trucks/input.txt");
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
//        trucks(inStream);
//    }
//
//    inStream.close();
//    std::getchar();
//    return 0;
//}
//void trucks(std::ifstream& inStream){
//    int truckCount,length,maxweight;
//    int time = 0;
//    inStream >> truckCount >> length >> maxweight;
//    
//    list<int> arrlist;
//    for(int i =0;i<truckCount;i++){
//        int truckWeight;
//        inStream >> truckWeight;
//        arrlist.push_back(truckWeight);
//    }
//    
//    list<int>::iterator iter = arrlist.begin();
//    list<truckState> briedge;
//    while(iter != arrlist.end()){
//        if(maxweight - *iter > 0){
//            maxweight -= *iter;
//            briedge.push_back(new truckState = {length,*iter});
//        }
//    }
//}
