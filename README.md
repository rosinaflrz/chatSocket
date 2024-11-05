# Proyecto de Mensajería en la Nube

Este proyecto es una aplicación de mensajería instantánea basada en Node.js y servicios de Amazon Web Services (AWS). Permite a los usuarios enviar y recibir mensajes, almacenar conversaciones, y recibir notificaciones en tiempo real.

## Descripción

La aplicación está diseñada para:
- **Envío y recepción de mensajes** entre usuarios.
- **Almacenamiento de mensajes** en DynamoDB.
- **Gestión de mensajes en cola** para un procesamiento confiable con SQS.
- **Notificaciones en tiempo real** a través de SNS.

## Tecnologías Utilizadas

- **Node.js**: Plataforma de desarrollo backend.
- **Express**: Framework para construir la API REST.
- **AWS SDK**: Librería de AWS para interactuar con servicios como SNS, SQS y DynamoDB.

## Instalación y Configuración

### 1. Requisitos Previos

- **Node.js**: Asegúrate de tener Node.js instalado en tu sistema. [Descarga Node.js aquí](https://nodejs.org/).

  Para verificar si ya están instalados, ejecuta en la terminal:

  ```bash
  node -v
  npm -v
GPT

Aquí tienes el README.md actualizado con las instrucciones de instalación y ejecución específicas para este proyecto, usando server.js como archivo principal:

markdown

# Proyecto de Mensajería en la Nube

Este proyecto es una aplicación de mensajería instantánea basada en Node.js y servicios de Amazon Web Services (AWS). Permite a los usuarios enviar y recibir mensajes, almacenar conversaciones, y recibir notificaciones en tiempo real.

## Descripción

La aplicación está diseñada para:
- **Envío y recepción de mensajes** entre usuarios.
- **Almacenamiento de mensajes** en DynamoDB.
- **Gestión de mensajes en cola** para un procesamiento confiable con SQS.
- **Notificaciones en tiempo real** a través de SNS.

## Tecnologías Utilizadas

- **Node.js**: Plataforma de desarrollo backend.
- **Express**: Framework para construir la API REST.
- **AWS SDK**: Librería de AWS para interactuar con servicios como SNS, SQS y DynamoDB.

## Instalación y Configuración

### 1. Requisitos Previos

- **Node.js**: Asegúrate de tener Node.js instalado en tu sistema. [Descarga Node.js aquí](https://nodejs.org/).

  Para verificar si ya están instalados, ejecuta en la terminal:

  ```bash
  node -v
  npm -v

### 2. Clonar el Repositorio
Clona este repositorio en tu máquina local:
  ```bash
  git clone [https://github.com/tu-usuario/tu-repositorio.git](https://github.com/rosinaflrz/chatSocket.git)
  ```

### 3. Navegar al Directorio del Proyecto
Cambia al directorio donde se clonó el proyecto:
  ```bash
  cd socket
  ```
### 4. Instalar Dependencias
Ejecuta el siguiente comando para instalar las dependencias necesarias:
  ```bash
  npm install
  ```
Esto instalará las siguientes bibliotecas:

    express: Para crear el servidor y gestionar rutas.
    aws-sdk: Para interactuar con los servicios de AWS.
    body-parser: Para analizar cuerpos de solicitudes HTTP en formato JSON.

Si necesitas instalar las dependencias individualmente, puedes usar:
  ```bash
  npm install express aws-sdk body-parser
  ```
### 5. Configuración de AWS
Asegúrate de que las credenciales de AWS estén configuradas en el archivo de configuración del proyecto o en un archivo .env (no subido al repositorio) para evitar exponer información sensible.

### 6. Ejecución
Una vez instaladas las dependencias, puedes iniciar el servidor ejecutando:
  ```bash
  node server.js
  ```
El servidor se iniciará en el puerto 3000 y estará listo para recibir solicitudes en los endpoints definidos.

