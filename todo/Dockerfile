FROM maven:3.9.3-eclipse-temurin-17 AS build

WORKDIR /app

# Copy pom.xml first (for caching)
COPY pom.xml .

# Copy source code
COPY src ./src

# Build the project
RUN mvn clean package -DskipTests

# Use JDK-only image for runtime
FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app

COPY --from=build /app/target/todo-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8081

ENTRYPOINT ["java","-jar","app.jar"]
