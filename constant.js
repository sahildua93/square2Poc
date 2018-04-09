const RABBITMQ_CONF = {
    host: process.env.RABBITMQ_URL || "amqp://localhost",
    queue: {
        name: 'GET_TEMPERATURE',
        durable: true,
        messageTtl: 10000,
    },
};
const SENSOR_CONF = {
  timer: 10,
  event: 'CONTAINER_TEMPERATURE_CHANGE',
};
const ERROR_CONF = {
    message: 'INVALID_TEMPERATURE',
};

module.exports = {
    RABBITMQ_CONF,
    SENSOR_CONF,
    ERROR_CONF,
};