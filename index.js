const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./database");
const globalStatController = require("./controller/global-stat.controller");

async function launchServer() {
  const app = express(); // 익스프레스 인스턴스 생성

  app.use(bodyParser.json());

  app.get("/", (req, res) => {
    res.json({ message: "hello CoronaBoard!" });
  });
  app.get("/global-stats", globalStatController.getAll);
  app.post("/global-stats", globalStatController.insertOrUpdate);
  app.delete("/global-stats", globalStatController.remove);

  try {
    await sequelize.sync();
    console.log("Database is ready!");
  } catch (error) {
    console.log("Unable to connect to the database:");
    console.log(error);
    process.exit(1);
  }

  const port = process.env.PORT || 8080; // 포트 기본값(8080) 지정
  app.listen(port, () => {
    console.log(`Server is running port ${port}`);
  });
}

launchServer();
