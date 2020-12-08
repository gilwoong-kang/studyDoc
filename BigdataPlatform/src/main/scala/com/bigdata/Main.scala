package com.bigdata

import org.apache.spark.SparkContext
import org.apache.spark.rdd.RDD

object Main {
  def main(args: Array[String]): Unit = {
    val sc = SparkContext.getOrCreate()
    val iters = 3
    val lines = sc.textFile("s3://leeky-us-east-1-share/bigdata-input.txt")
    val roads = lines.map(s => {
      val splited = s.split("\t")
      (splited(0),splited(1))
    })
    val distinctRoads = roads.distinct()
    val groupedRoads = distinctRoads.groupByKey()

    var results = roads.mapValues(v => 1.0)

    for(i <- 1 to iters){
      val starTime = System.currentTimeMillis()
      val weights = groupedRoads.join(results)
        .values
        .flatMap{ case(a,b) =>
          a.map(x => (x, b/a.size))
        }
      results = weights.reduceByKey((a,b) => a+b).mapValues(y => 0.1 + 0.9*y)

      val interimResult = results.take(10)
      var j = 0
      for( j <- 0 until 10 ){
        var a = interimResult.apply(j)
        println(a._1 + " : " + a._2)
      }
      val endTime = System.currentTimeMillis()
      println(i + " th iteration took "+ (endTime-starTime)/1000 + " seconds")
    }

    var result_sort = results.sortBy(x => x._2,false)
    var j = 0;
    var r = result_sort.take(10)
    for( j <- 0 until 10) {
      var a = r.apply(j)
      println("ID : " + a._1 + " , value : " + a._2)
    }
    results.saveAsTextFile("s3://bigdata-gilwoong/bigdata-output.txt")
  }
}
