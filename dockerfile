# Utilizar la imagen oficial de Jenkins con soporte para Node.js
FROM jenkins/jenkins:lts

# Instalar Node.js y npm
USER root
RUN apt-get update && \
    apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_14.x | bash && \
    apt-get install -y nodejs xvfb && \
    apt-get install -y wget unzip openjdk-11-jre

# Set environment variables
ENV ALLURE_VERSION 2.14.0
ENV ALLURE_HOME /opt/allure-$ALLURE_VERSION
ENV PATH $PATH:$ALLURE_HOME/bin

# Install Allure
RUN wget -O allure.zip https://repo.maven.apache.org/maven2/io/qameta/allure/allure-commandline/$ALLURE_VERSION/allure-commandline-$ALLURE_VERSION.zip && \
    unzip allure.zip -d /opt && \
    rm allure.zip

# Copiar los archivos del proyecto al contenedor
WORKDIR /app
COPY package*.json ./
COPY cypress.config.js /app/cypress.config.js
COPY cypress/ /app/cypress/
COPY launch.json /app/launch.json
COPY install_dependencies.sh /app/install_dependencies.sh

# Instalar las dependencias del proyecto
RUN npm install
RUN npm install esbuild --save-dev

# Install necessary dependencies
RUN chmod +x install_dependencies.sh && ./install_dependencies.sh