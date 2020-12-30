// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const db = require("../models");
// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  // app.get("/members", isAuthenticated, (req, res) => {
  //   // res.sendFile(path.join(__dirname, "../public/members.html"));
  //   db.CoffeeDrinks.findAll({ raw: true }).then(function (results) {
  //     console.log(results);
  //     res.render("index", { drinks: results });
  //   });
  // });

  app.get("/members", isAuthenticated, async (req, res) => {
    const drinks = await db.Coffee.findAll({ raw: true });
    const { dataValues: data } = await db.User.findByPk(req.user.id, {
      include: [{ model: db.Order }],
    });
    console.log(data);
    // const orders = await db.Order.findAll({ raw: true });
    res.render("index", {
      drinks,
      userId: data.id,
      orders: data.orders,
    });
  });

  app.get("/cart/:user_id?", isAuthenticated, (req, res) => {
    res.render("checkout");
  });
};
