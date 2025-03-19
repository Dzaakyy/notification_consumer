const amqp = require("amqplib");
const { sendEmail } = require("../../notification/notfication");
const config = require("../../config/config");


async function startEmailConsumer() {
  try {
    const conn = await amqp.connect(config.rabbitMQ.url);
    const channel = await conn.createChannel();
    
    const queueName = "EMAIL";
    await channel.assertQueue(queueName, { durable: true });
    console.log(`[${queueName}] Listening for messages...`);

    channel.consume(queueName, (msg) => {
      if (msg) {
        const message = JSON.parse(msg.content.toString());
        console.log(`[${queueName}] Received:`, message);
        sendEmail(message);
        channel.ack(msg);
      }
    }, { noAck: false });

  } catch (error) {
    console.error(`[${queueName}] Error:`, error);
  }
}

startEmailConsumer();