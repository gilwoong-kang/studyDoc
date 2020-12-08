name := "BigdataPlatform"

version := "0.1"

scalaVersion := "2.12.12"

// https://mvnrepository.com/artifact/org.apache.spark/spark-core
libraryDependencies += "org.apache.spark" %% "spark-core" % "3.0.1" % "provided"
// https://mvnrepository.com/artifact/org.apache.spark/spark-sql
libraryDependencies += "org.apache.spark" %% "spark-sql" % "3.0.1" % "provided"
// https://mvnrepository.com/artifact/org.scala-sbt/sbt
libraryDependencies += "org.scala-sbt" % "sbt" % "1.3.13" % "provided"



scalacOptions ++= Seq("-unchecked", "-deprecation", "-Xcheckinit","-encoding", "utf8")


mainClass in assembly := Some("com.bigdata.Main")