# Proyecto de Mensajería en la Nube

Este proyecto es una aplicación de mensajería instantánea basada en servicios de Amazon Web Services (AWS) y Node.js. Permite enviar y recibir mensajes, almacenar conversaciones y notificar a los usuarios cuando reciben nuevos mensajes.

## Descripción

La aplicación está diseñada para:
- **Envío y recepción de mensajes** entre usuarios.
- **Almacenamiento de mensajes** en una base de datos NoSQL (DynamoDB).
- **Gestión de mensajes en cola** para un procesamiento confiable (usando SQS).
- **Notificaciones en tiempo real** cuando los usuarios reciben nuevos mensajes (usando SNS).

## Tecnologías Utilizadas

- **Node.js**: Plataforma para el desarrollo backend.
- **Express**: Framework para construir la API REST.
- **AWS SDK**: Librería de AWS para interactuar con servicios como SNS, SQS y DynamoDB.
- **Amazon EC2**: Para alojar la aplicación.
- **Amazon SNS**: Para enviar notificaciones de mensajes.
- **Amazon SQS**: Para gestionar la cola de mensajes.
- **Amazon DynamoDB**: Para almacenar y consultar mensajes.

## Configuración y Ejecución

### Requisitos Previos

- **Node.js**: Asegúrate de tener Node.js instalado en tu sistema. [Descarga Node.js](https://nodejs.org/)

### Instalación

1. **Clona este repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
