FROM maven:3.8.1-adoptopenjdk-8

WORKDIR /grpc-java-service
COPY . .
RUN mvn clean package

CMD ["java", "-jar", "target/grpc-java-service-1.0-SNAPSHOT.jar"]


