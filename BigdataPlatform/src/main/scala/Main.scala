import org.apache.spark.{SparkContext, sql}
import org.apache.spark.rdd.RDD
import org.apache.spark.sql.{SQLContext, SparkSession}
import java.lang

import com.sun.prism.PixelFormat.DataType
import org.apache.spark.sql.catalyst.expressions
import org.apache.spark.sql.catalyst.expressions.IsNaN
import org.apache.spark.sql
import org.apache.spark.sql.types.{DoubleType, IntegerType, StringType, StructType}

import scala.util.Random


object Main {
  def main(args: Array[String]) {
    var sc = SparkContext.getOrCreate()
//    val moviepath = "/BigdataPlatform/ml-20m/movies.csv"
    val moviepath = "/user/ml-20m/movies.csv"
    val movies = sc.textFile(moviepath)


    val tagpath = "/BigdataPlatform/ml-20m/tags.csv"
    val tags = sc.textFile(tagpath)

//    val ratings_path ="/BigdataPlatform/ml-20m/ratings.csv"
    val ratings_path = "/user/ml-20m/ratings.csv"
    var ratings = sc.textFile(ratings_path)

  }

  /**
   * movies.csv 파일에 있는 영화의 장르 중 "Action" 이 포함된 영화의 갯수를 세어서 출력하는 스파크 프로그램을 작성하세요.
   * @param movies movies.csv파일을 읽어들인 RDD
   */
  def number2(movies : RDD[String]){
    var action_movies = movies.filter(movie => movie.contains("Action"))
    print(action_movies.count())
  }

  /**
   * movies.csv에있는 영화 이름 중 unique한 값 만을 추출해 낸 후 해당 rdd로부터 임의의 (random) 제목만 10개를 선정하여 출력하는 프로그램을 작성하세요.
   * @param movies movies.csv파일을 읽어들인 RDD
   */
  def number3(movies : RDD[String]){
    var movie_info = movies.map(movie => movie.split(',').apply(1)) // movie name 추출
    var movie_name_pair = movie_info.map(movieName => (movieName,1))  // pair로 변경
    var movie_one = movie_name_pair.reduceByKey((x,y) => (x+y)) // 중복 이름 합치기
    var movie_unique = movie_one.map( movie => {if(movie._2 == 1)  movie._1}) // 값이 1인 key만 추출.
    movie_unique.takeSample(false,10).foreach(x => {println(x)})  // unique 중 랜덤 10개 출력
  }

  /**
   * tags.csv 파일에서 가장 많이 태그된 값과 해당 태그가 사용된 횟수를 함께 출력하는 프로그램을 작성하세요.
   * @param tags tags.csv 파일을 읽어들인 RDD
   */
  def number4(tags : RDD[String]){
    var tag_info = tags.map(tag => tag.split(",").apply(2))
    var tag_pair = tag_info.map(tag => (tag,1))
    var tag_one = tag_pair.reduceByKey((x,y) => x+y)
    var tag_popular = tag_one.sortBy(tag => tag._2,false).take(1)
    print(tag_popular.apply(0)._1 + " : " + tag_popular.apply(0)._2)
  }

  /**
   * ratings.csv 에 표현된 전체 영화의 평점을 계산하는 프로그램을 작성하세요
   * @param ratings ratings.csv 파일을 읽어들인 RDD
   */
  def number5(ratings : RDD[String]){
    var rating = ratings.map(x => x.split(",").apply(2))
    var data = rating.map(x => {
      if(x.equals("rating")) 0
      else x.toFloat
    })
    var data_sum = data.reduce((x,y) => x+y)
    println(data_sum/(data.count()-1))
  }

  /**
   * ratings.csv 에 표현된 영화별 평점을 계산하여 movieid 와 평균 평점을 계산하여 평점이
   * 가장 높은 상위 100개 영화의 movie id 와 평균 평점을 출력하는 프로그램을 작성하세요.
   *
   * @param ratings ratings.csv 파일을 읽어들인 RDD
   */
  def number6(ratings : RDD[String]): Unit ={
    var info_count = ratings.map(x => {
      var i = x.split(",")
      if(i.apply(2).equals("rating")) (i.apply(1),(0,"0".toFloat))
      else (i.apply(1),(1,i.apply(2).toFloat))// movieId,count,score
    })
    var duplicate_info = info_count.reduceByKey((x,y) =>{
      (x._1+y._1,x._2+y._2)
    })
    var score_avg = duplicate_info.map(x =>{
      (x._1,x._2._2/x._2._1)
    })
    var sort_result = score_avg.sortBy(x => x._2,false)
    println(sort_result.take(100))
  }

  /**
   * ratings.csv 파일로 부터 영화별 평점을 계산 한 후 영화 평점이 기록된 횟수가 100회
   * 이상인 영화 중 평점기준 상위 10개 영화를 영화 아이디, 영화 제목 (movies.csv 참조), 평점을 출력하는 프로그램을 작성하세요.
   * 함수말고 개별로 실행해볼것.
   * @param ratings
   */
  def number7(ratings : RDD[String],movies : RDD[String]): Unit ={
    var info_count = ratings.map(x => {
      var i = x.split(",")
      if(i.apply(2).equals("rating")) (i.apply(1),(0,"0".toFloat))
      else (i.apply(1),(1,i.apply(2).toFloat))// movieId,count,score
    })
    var duplicate_info = info_count.reduceByKey((x,y) =>{
      (x._1+y._1,x._2+y._2)
    })
    var score_avg = duplicate_info.map(x => {
      if(x._2._1 >= 100) (x._1,x._2._2/x._2._1)
      else ("0","0".toFloat)
    })
    score_avg = score_avg.reduceByKey((x,y) => {
      x+y
    })

    var movies_info = movies.map(x => {
      var i = x.split(",")
      (i.apply(0),i.apply(1))
    })
    var join_movies = score_avg.join(movies_info)
    var sort = join_movies.sortBy(x => x._2._1,false)
    sort.take(10)
  }
}
