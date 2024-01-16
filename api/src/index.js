const express = require("express");
const fs = require("fs").promises;
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");
const { connectDatabase } = require("./dataBase");
const { User } = require("./model/user.model");
const { Category } = require("./model/category.model");
const { Record } = require("./model/record.model");
const { log } = require("util");

const app = express();

connectDatabase();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log(req);
  res.send("Helloww11ww");
});

app.get("/test", (req, res) => {
  res.send("testZp");
});

// SIGN IN MONGO DB
app.post("/sign-in", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email, password: password });
  if (!user) {
    return res.status(401).json({ message: "Auth nashi" });
  }

  const id = user._id;

  const token = jwt.sign({ id }, "secret-key");
  res.json({
    token,
  });
});

// SIGN UP MONGODB
app.post("/sign-up", async (req, res) => {
  const { email, password } = req.body;

  const userExist = await User.find({ email: email });

  if (userExist.length) {
    return res.json({ message: "user is already exist" });
  }

  await User.create({
    email,
    password,
    createdAt: new Date(),
  });

  return res.json({ message: "User created Successfully" });
});

// Get Record MongoDB
app.get("/records", async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Auth nashi",
    });
  }

  try {
    const payload = jwt.verify(authorization, "secret-key");

    const { id } = payload;

    const records = await Record.find({ userId: id });

    res.json({
      records: records,
    });
  } catch (err) {
    return res.status(401).json({
      message: "err",
    });
  }
});

// GET Categories MONGODB
app.get("/categories", async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Auth nashi",
    });
  }

  try {
    const payload = jwt.verify(authorization, "secret-key");

    const { id } = payload;

    const categories = await Category.find({ userId: id });

    res.json({
      categories: categories,
    });
  } catch (err) {
    return res.status(401).json({
      message: "err",
    });
  }
});

// POST Records MONGODB
app.post("/records", async (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      message: "Auth nashi",
    });
  }

  try {
    const payload = jwt.verify(authorization, "secret-key");

    const { id } = payload;
    const {
      type,
      category,
      amount,
      date,
      payee,
      note,
      // categoryColor,
      iconName,
    } = req.body;

    await Record.create({
      type,
      userId: id,
      category,
      amount,
      date,
      payee,
      note,
      // categoryColor,
      iconName,
      updatedAt: new Date(),
      createdAt: new Date(),
    });

    res.json({
      message: "Record Created",
    });
  } catch (err) {
    console.log(err);
    return res.status(401).json({
      message: "err",
    });
  }
});

// POST Category
app.post("/categories", async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Auth nashi",
    });
  }

  try {
    const payload = jwt.verify(authorization, "secret-key");

    const { id } = payload;

    const { name, icon } = req.body;

    await Category.create({
      userId: id,
      name,
      icon,
      updatedAt: new Date(),
      createdAt: new Date(),
    });

    res.json({
      message: "Category created",
    });
  } catch (err) {
    return res.status(401).json({
      message: "err",
    });
  }
});
// app.post("/categories", async (req, res) => {
//   const { authorization } = req.headers;

//   if (!authorization) {
//     return res.status(401).json({
//       message: "Auth nashi",
//     });
//   }

//   try {
//     const payload = jwt.verify(authorization, "secret-key");

//     const { email } = payload;

//     const { icon, category } = req.body;

//     const filePath = "src/data/categories.json";

//     const categoriesRaw = await fs.readFile(filePath, "utf8");

//     const categories = JSON.parse(categoriesRaw);

//     categories.push({
//       icon,
//       category,
//       id: uuidv4(),
//       userEmail: email,
//     });

//     await fs.writeFile(filePath, JSON.stringify(categories));

//     res.json({
//       message: "Category created",
//     });
//   } catch (err) {
//     return res.status(401).json({
//       message: "err",
//     });
//   }
// });

// app.post("/categories", (req, res) => {
//   const { icon, name } = req.body;

//   categories.push({ icon, name, id: uuidv4() });

//   return res.json(categories);
// });

const port = 3002;

app.listen(port, () => {
  console.log(`aaawaa${port}`);
});
