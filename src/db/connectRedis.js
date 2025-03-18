const Redis = require("ioredis");

const redis = new Redis({
  host: "127.0.0.1",
  port: 6379,
});

async function setValue(key, value) {
  redis
    .set(key, value)
    .then(() => redis.get(key))
    .then((val) => {
      console.log("Stored value:", val);
      return val;
    })
    .catch((err) => {
      console.error("Redis error:", err);
      return null;
    });
}

async function getValue(keyName) {
  redis
    .get(key)
    .then((value) => {
      console.log(value);
      return value;
    })
    .catch((err) => {
      console.error("error: " + err);
      return null;
    });
}

module.exports = {
  getValue,
  setValue,
};
