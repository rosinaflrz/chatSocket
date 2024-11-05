const express = require('express');
const AWS = require('aws-sdk');
const bodyParser = require('body-parser');

// Configuración de credenciales de AWS (para entorno de laboratorio)
_aws_access_key_id = 'ASIAXTO7XOPVPEUWUOLZ'
_aws_secret_access_key = 'vhtlfUB/KCectJalLO5cd5Qr8FAWM0G8GOaQiR0K'
_aws_session_token = 'IQoJb3JpZ2luX2VjELr//////////wEaCXVzLXdlc3QtMiJIMEYCIQDV/etQnSps8EhxXaCozzpZsBS7haB/hKdPa7N9kUetJQIhAMKqPGUU/KLHEZnLsWZJovZ/gyPlG6boIgHxCLac69CIKrkCCPP//////////wEQARoMNTIyODQ0NTk5Mjc0IgydZpb5lc9nhrptqcEqjQKrDoLrlaWl9r1/pSIiT4Gldg/ds/cc6wP40SygMBk/gmlzDp2XgOoZkUKpC03hyf1/CO3vjtmEB5fqvg1LrUMY0kyDHsKdxzyw28Jt4X8XESf3/Gs7GG18FcY9luAbp/aFjX+d2lTGBzSUAkIE6XJOp+D5KZtZy2a1E81u/oUZhcnT6aVv9EMX5Knk7b70SLWohFtRrf6MZyqBTywSFIpPF0R4GPUmvIYIbW34hO+0QdtfRVCR21Qu5ikkGcc8bWzcEjcKfJ53UJHkZD0E+NZOKzg0Gm2I/ezN1niNvam55SpiFeabqoM6Mn22M8wUwHL2XCFnCiEGOJ0GsUjzhGQBFij7ysuyaAgA79Rg5zDTpNG3BjqcAUyhGESP7sunQVPncjaQI2FMAWq2z7x4jJ9OE7dJnFhCY6Ew81VyYKNnDn1w3OC2lFp8NioOoobgIsWHUHBXUr3CdJplpr64enaJUAvMqIhxDTPxGirUDtvffCgXstSWW/5XjjcK40rHTpfnpu5RBdenMsZoq0XgJlHsQ+M+ViaiFAModev6AUZUCyDljMYDV3QD+7GEkWJKeeO1MA=='
_region = 'us-east-1'

// Configuración de AWS SDK
AWS.config.update({
  accessKeyId: _aws_access_key_id,
  secretAccessKey: _aws_secret_access_key,
  sessionToken: _aws_session_token,
  region: _region,
});

const sns = new AWS.SNS();
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const sqs = new AWS.SQS();

// Inicializar Express
const app = express();
app.use(bodyParser.json());

// Define tus endpoints aquí
// Ejemplo: Endpoint para enviar mensajes
app.post('/send-message', async (req, res) => {
  const { sender, receiver, message } = req.body;
  
  if (!sender || !receiver || !message) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios: sender, receiver, message' });
  }

  const params = {
    QueueUrl: 'https://sqs.us-east-1.amazonaws.com/123456789012/SocketChat',
    MessageBody: JSON.stringify({ sender, receiver, message, timestamp: Date.now() }),
  };

  try {
    await sqs.sendMessage(params).promise();
    res.status(200).json({ message: 'Mensaje enviado a la cola de procesamiento' });
  } catch (error) {
    console.error('Error al enviar el mensaje a SQS:', error);
    res.status(500).json({ error: 'Error al enviar el mensaje' });
  }
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
