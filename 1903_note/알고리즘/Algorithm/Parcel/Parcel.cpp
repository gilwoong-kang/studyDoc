////
////  Parcel.cpp
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
//#include <map>
//#include <vector>
//using namespace std;
//
//void parcel(std::ifstream& inStream);
//
//int main(void) {
//    int t;
//    std::ifstream inStream;
//    inStream.open("/Users/gilwoongkang/1903_note/알고리즘/Algorithm/Parcel/input.txt");
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
//        parcel(inStream);
//    }
//    
//    inStream.close();
//    std::getchar();
//    return 0;
//}
//
//void parcel(std::ifstream& inStream){
//    int w, n;
//    bool flag = false;
//    inStream >> w>>n;
//    std::vector<int> A(n), S(w,-1);
//    
//    for (int i = 0; i < n; i++)
//        inStream>>A[i];
//    sort(A.begin(), A.end());
//    
//    for (int i = 0; i < n-1; ++i) {
//        for (int j = i + 1; j < n; ++j) {
//            int s = A[i] + A[j];
//            if (s >= w) break;
//            if (S[s] == -1) S[s] = A[i];
//        }
//    }
//    
//    for (int s = 2; s < w; ++s) {
//        int i = S[s], k = S[w - s];
//        if (i == -1 || k == -1) continue;
//        if (s - i < k) {
//            flag = true;
//            break;
//        }
//    }
//    
//    if (flag) cout << "YES" << endl;
//    else cout << "NO" << endl;
//}
