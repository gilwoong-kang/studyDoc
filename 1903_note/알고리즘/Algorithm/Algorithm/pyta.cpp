//#include <iostream>
//#include <fstream>
//#include <cmath>
//
//using namespace std;
//
//int main()
//{
//    std :: ifstream inStream;
//    inStream.open("/Users/gilwoongkang/1903_note/알고리즘/Algorithm/Algorithm/input.txt");
//
//    if(inStream.fail())
//    {
//        std :: cerr << "Input file opening failed.";
//        //exit(1);
//        return -1;
//    }
//
//    int t;
//    inStream >> t;
//
//    for(int i = 0; i < t; i++)
//    {
//
//    int totalTeam;
//    int totalGame;
//
//    int currentTeamA;
//    int currentTeamB;
//    int currentTeamAScore;
//    int currentTeamBScore;
//
//    int totalWin[99];
//    int totalLoose[99];
//
//    int max = 0;
//    int min = 999;
//
//
//        inStream >> totalTeam;
//        inStream >> totalGame;
//        for(int j = 0; j<totalGame;j++){
//            inStream >> currentTeamA;
//            inStream >> currentTeamB;
//            inStream >> currentTeamAScore;
//            inStream >> currentTeamBScore;
//
//            totalWin[currentTeamA] += currentTeamAScore;
//            totalLoose[currentTeamA] += currentTeamBScore;
//
//            totalWin[currentTeamB] += currentTeamBScore;
//            totalLoose[currentTeamB] += currentTeamAScore;
//        }
//
//        for(int z = 1;z<totalTeam+1 ;z++){
//            double pyNumber = ((double)(totalWin[z]*totalWin[z]) / (double)((totalWin[z]*totalWin[z]) + (totalLoose[z]*totalLoose[z])))*1000;
//
//            if(pyNumber > max)
//                max = pyNumber;
//            if(pyNumber < min)
//                min = pyNumber;
//        }
//        cout << max << endl;
//        cout << min << endl;
//
//
//
//    }
//
//    inStream.close();
//    return 0;
//}



//#include <iostream>
//#include <fstream>
//#include <cmath>
//
//using namespace std;
//
//int main()
//{
//
//    int t;
//    cin >> t;
//
//    for(int i = 0; i < t; i++)
//    {
//
//        int totalTeam;
//        int totalGame;
//
//        int currentTeamA;
//        int currentTeamB;
//        int currentTeamAScore;
//        int currentTeamBScore;
//
//        int totalWin[1000] = {0,};
//        int totalLoose[1000] = {0,};
//
//        int max = 0;
//        int min = 999;
//
//
//        cin >> totalTeam;
//        cin >> totalGame;
//
//        for(int j = 0; j<totalGame;j++){
//            cin >> currentTeamA;
//            cin >> currentTeamB;
//            cin >> currentTeamAScore;
//            cin >> currentTeamBScore;
//
//            totalWin[currentTeamA] += currentTeamAScore;
//            totalLoose[currentTeamA] += currentTeamBScore;
//
//            totalWin[currentTeamB] += currentTeamBScore;
//            totalLoose[currentTeamB] += currentTeamAScore;
//        }
//        for(int z = 1;z<totalTeam+1 ;z++){
//            double pyNumber = ((double)(totalWin[z]*totalWin[z]) / (double)((totalWin[z]*totalWin[z]) + (totalLoose[z]*totalLoose[z])))*1000;
//
//            if(pyNumber > max)
//                max = pyNumber;
//            if(pyNumber < min)
//                min = pyNumber;
//        }
//        cout << max << endl;
//        cout << min << endl;
//    }
//    return 0;
//}
