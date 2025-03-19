function sendEmail(message) {
  console.log(`sending email ... ${message.Content}`)
}

function sendFCM(message) {
  console.log(`sending fcm ... ${message.Content}`)
}

function sendSMS(message) {
  console.log(`sending sms ... ${message.Content}`)
}

module.exports = {
  sendEmail,
  sendFCM,
  sendSMS
}