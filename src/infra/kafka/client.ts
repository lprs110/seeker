import { Kafka, logLevel } from 'kafkajs';

const kafka = new Kafka({
  brokers: ['localhost:9092'],
  logLevel: logLevel.WARN,
  clientId: 'seeker',
});

export default kafka;
