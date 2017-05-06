var db = require("../models");

// Routes =============================================================
module.exports = function(app) {
  app.get("/burger", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.burger.findAll({}).then(function(results) {
      // We have access to the todos as an argument inside of the callback function
      // res.send(results);
      var hbsObject = {
      burger: results
    };
      console.log(results);
      res.render("index", hbsObject);
      // res.json(results);
    }); // ends function results callback

  }); //ends get route for /index


  // GET route for getting all of the burgers
  app.get("/api/burger", function(req, res) {
    console.log("Pankaj GET called");
    // findAll returns all entries for a table when used with no options
    db.burger.findAll({}).then(function(results) {
      var hbsObject = {
      burgers: results
    };
      console.log(results);
      res.json(results);
      // We have access to the burger as an argument inside of the callback function
    });

  });

  // POST route for saving a new burger
  app.post("/api/burger", function(req, res) {
    // create takes an argument of an object describing the item we want to insert
    // into our table. In this case we just we pass in an object with a text and
    // complete property
    var condition = false;
    db.burgers.create({
      burger_name: req.body.name,
      devoured: false
    }).then(function(results) {
      console.log("creating results:  ...")
      console.log(results);
      res.redirect("/burger");
    }); //end callback results function
  });
  app.post("/burger", function(req, res) {
    // console.log('we made it to api-routes' + req.body.name);
    var condition = false;
    db.burger.create({
      burger_name: req.body.name,
      devoured: false
    }).then(function(results) {
      console.log("creating results:  ...")
      console.log(results);
      res.redirect("/burger");
    }); //end callback results function
  }); 

  // DELETE route for deleting burgers. We can get the id of the burger to be deleted
  // from req.params.id
  app.delete("/api/burger/:id", function(req, res) {
    // Destroy takes in one argument: a "where object describing the burger we want to destroy
    db.burger.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbburger) {
      res.json(dbburger);
    });

  });

  // PUT route for updating burger. We can get the updated burger data from req.body
  app.put("/burger:id", function(req, res) {
    var number = req.params.id;
    var condition = {
        devoured: req.body.devour,
      }
    // Update takes in two arguments, an object describing the properties we want to update,
    // and another "where" object describing the burger we want to update
    db.burger.update(condition,
          {
            where: {
              id: number
            }
          })
        .then(function(results) {
          res.redirect("/burger");
        });

});
}