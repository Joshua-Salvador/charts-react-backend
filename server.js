import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

import FavColor from "./models/favColor.model.js";
import PopDog from "./models/popDog.model.js";
import DonutShare from "./models/donutShare.model.js";
import Mvp from "./models/mvp.model.js";
// App Config
const app = express();
const port = process.env.PORT || 5000;
const connectionUrl = `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.jaffd.mongodb.net/<chartDataDB>?retryWrites=true&w=majority`;

// Middleware
app.use(express.json());
app.use(cors());
// DB config
mongoose.connect(connectionUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// API Endpoints

app.get("/", (req, res) => {
  res.status(200).send("API Working");
});

// Pie Chart backend
app.get("/piechart", (req, res) => {
  FavColor.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/piechart", (req, res) => {
  const favColorData = req.body;

  FavColor.create(favColorData, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.put("/piechart/:color", (req, res) => {
  const color = req.params.color;

  FavColor.updateOne(
    { name: color },
    { $inc: { voteCount: 1 } },
    (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(data);
      }
    }
  );
});

// Line Chart Backend
app.get("/linechart", (req, res) => {
  PopDog.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/linechart", (req, res) => {
  const popDogData = req.body;

  PopDog.create(popDogData, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.put("/linechart/:dog", (req, res) => {
  const dog = req.params.dog;

  PopDog.updateOne({ name: dog }, { $inc: { voteCount: 1 } }, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// Doughnut Chart Backend

app.get("/doughnutchart", (req, res) => {
  DonutShare.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/doughnutchart", (req, res) => {
  const donutData = req.body;

  DonutShare.create(donutData, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.put("/doughnutchart/:donut", (req, res) => {
  const donut = req.params.donut;

  DonutShare.updateOne(
    { name: donut },
    { $inc: { voteCount: 1 } },
    (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(data);
      }
    }
  );
});

// Bar Chart Backend
app.get("/barchart", (req, res) => {
  Mvp.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/barchart", (req, res) => {
  const mvpData = req.body;

  Mvp.create(mvpData, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.put("/barchart/:mvp", (req, res) => {
  const mvp = req.params.mvp;

  Mvp.updateOne({ name: mvp }, { $inc: { voteCount: 1 } }, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// Listener
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
