# README - Notification Consumer

## 1. Clone Aplikasi Consumer

```sh
git clone https://github.com/Dzaakyy/notification_consumer.git
cd notification_consumer
npm install
```

## 2. Menjalankan Aplikasi Consumer

```sh
node src/cmd/email/app.js
node src/cmd/sms/app.js
node src/cmd/fcm/app.js
```

## 3. Respon yang Diharapkan Ketika Ada yang Publish Message

### Email Consumer
```sh
[EMAIL] Received: {
  OrderID: '12345',
  UserID: '67890',
  Content: 'New order received',
  Timestamp: '2025-03-11T10:00:00Z'
}
sending email ... New order received
```

### SMS Consumer
```sh
[SMS] Received: {
  OrderID: '12345',
  UserID: '67890',
  Content: 'New order received',
  Timestamp: '2025-03-11T10:00:00Z'
}
sending sms ... New order received
```

### FCM Consumer
```sh
[FCM] Received: {
  OrderID: '12345',
  UserID: '67890',
  Content: 'New order received',
  Timestamp: '2025-03-11T10:00:00Z'
}
sending fcm ... New order received
```

