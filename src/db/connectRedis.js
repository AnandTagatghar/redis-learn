const Redis = require("ioredis");

const redis = new Redis({
  host: "127.0.0.1",
  port: 6379,
});

async function setValue(key, value) {
  await redis
    .set(key, JSON.stringify(value))
    .then(() => redis.get(key))
    .then((val) => {
      return val;
    })
    .catch((err) => {
      console.error("Redis error:", err);
      return null;
    });
}

async function getValue(key) {
  return await new Promise((res) => {
    redis
      .get(key)
      .then((value) => {
        res(JSON.parse(value));
      })
      .catch((err) => {
        console.error("error: " + err);
        res(null);
      });
  })
}

async function delValue(key) {
  return await redis.del(key).then(() => {
    return "deleted";
  }).catch(err => {
    console.error("error: " + err);
    return null;
  });
}

module.exports = {
  getValue,
  setValue,
  delValue
};
