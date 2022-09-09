const models = require('../db.config');
const mongoose = require('mongoose');
const dbController = {};

dbController.createUser = (req, res, next) => {
  const { username, password } = req.body;
  //update this response for error handling
  //I dont like this catch at all
  if (!username || !password) {
    return res.send({ express: 'ENTER VALID CREDENTIALS' });
  }
  models.create({ username, password }, (err, user) => {
    if (err) {
      return res.send({ express: 'ERROR OCCURED IN CREATE' });
    } else {
      res.locals.username = user.username;
      next();
    }
  });
};

dbController.verifyUser = (req, res, next) => {
  console.log('in verify User middleware');
  const { username, password } = req.body;
  models.findOne({ username }, (err, user) => {
    if (err) {
      return next('Error in userController.verifyUser: ' + JSON.stringify(err));
    } else if (!user) {
      res.locals.verify = 'false';
      return next();
    } else {
      console.log('user succesfully verified');
      res.locals.verify = 'true';
      return next();
    }
  });
};

dbController.getTrips = (req, res, next) => {
  console.log('In middleware getTrips');
  const userID = req.params.id;
  //const username = 'Test4'
  models.findOne({ username: userID }, (err, doc) => {
    if (err) {
      //database error
      return next('Error in dbController.getTrips: ' + JSON.stringify(err));
    } else {
      res.locals.trips = doc.trips;
      return next();
    }
  });
};

dbController.addTrip = (req, res, next) => {
  const newTrip = req.body;
  const { username } = newTrip;
  console.log(
    'here is newTrip from req.body-->',
    newTrip,
    'here is userId from newTrip-->',
    username,
  );
  // const userID = req.params.id;
  models.findOneAndUpdate(
    { username: username },
    { $push: { trips: newTrip } },
    { new: true },
    (err, trip) => {
      if (err) {
        return next('Error in dbController.addTrip: ' + JSON.stringify(err));
      } else {
        res.locals.addedTrip = trip.trips;
        return next();
      }
    },
  );
};

dbController.deleteTrip = async (req, res, next) => {
  console.log('In middleware deleteTrip');
  // console.log('req.params-->', req.params);
  const { username, tripId } = req.body;
  console.log('username -->', username, 'tripId--->', tripId);
  //const objID = req.params;
  // const userID = req.params.userID;
  // const objID = req.params.objectID;

  models.findOneAndUpdate(
    { username: username },
    { $pull: { trips: { _id: tripId } } },
    { new: true },
    (err, doc) => {
      if (err) {
        return next('Error in dbController.deleteTrip: ' + JSON.stringify(err));
      } else {
        res.locals.newLog = doc.trips;
        return next();
      }
    }
  );
};

module.exports = dbController;
