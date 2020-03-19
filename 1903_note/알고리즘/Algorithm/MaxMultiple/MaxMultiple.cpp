////
////  MaxMultiple.cpp
////  Algorithm
////
////  Created by gil woong kang on 30/09/2019.
////  Copyright © 2019 gil woong kang. All rights reserved.
////
//
//#include <stdio.h>
//#include <iostream>
//#include <fstream>
//#include <algorithm>
//using namespace std;
//
//void maxMultiple(std::ifstream& inStream);
//
//int main(void) {
//    int t;
//    std::ifstream inStream;
//    inStream.open("/Users/gilwoongkang/1903_note/알고리즘/Algorithm/MaxMultiple/input.txt");
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
//        maxMultiple(inStream);
//    }
//    
//    inStream.close();
//    std::getchar();
//    return 0;
//}
//
//void maxMultiple(std::ifstream& inStream){
//    int n;
//    inStream >> n;
//    
//    int minArr[2] = {1000,1000};
//    int maxArr[3] = {-1000,-1000,-1000};
//    
//    int number;
//    
//    for(int i =0;i<n;i++){
//        inStream >> number;
//        for(int z = 0 ;z<2;z++)
//            if(minArr[z] > number){
//                if(z == 0){
//                    minArr[z+1] = minArr[z];
//                    minArr[z] = number;
//                    break;
//                }else{
//                    minArr[z] = number;
//                    break;
//                }
//            }
//        for(int z = 0;z<3;z++)
//            if(maxArr[z] <number){
//                if(z==0){
//                    maxArr[z+2] = maxArr[z+1];
//                    maxArr[z+1] = maxArr[z];
//                    maxArr[z] = number;
//                    break;
//                } else if(z==1){
//                    maxArr[z+1] = maxArr[z];
//                    maxArr[z] = number;
//                    break;
//                }else{
//                    maxArr[z] = number;
//                    break;}
//            }
//    }
//    
//    cout << max(max(minArr[0]*minArr[1],maxArr[0]*maxArr[1]),
//                max(minArr[0]*minArr[1]*maxArr[0],maxArr[0]*maxArr[1]*maxArr[2]))<<endl;
//    
//}
