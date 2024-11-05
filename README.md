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
