FROM maven:3.8.1-openjdk-17 AS MAVEN_BUILD

COPY pom.xml /build/
COPY src /build/src/

WORKDIR /build/
RUN mvn package

FROM openjdk:17

WORKDIR /app

COPY --from=MAVEN_BUILD /build/target/*.jar /app/backend-api.jar

ENTRYPOINT ["java", "-jar", "backend-api.jar"]