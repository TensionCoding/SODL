const express = require('express');
const cors = require('cors');
const app = express();
const apiRouter = require('./server/routes/api');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

// app.use('/api', (req, res) => {
//   console.log('In middleware getTrips');
//   const userID = req.params.id;
//   //const username = 'Test4'
//   models.findOne({username: userID}, (err, doc) => {
//     if (err) {
//       //database error
//       return next('Error in dbController.getTrips: ' + JSON.stringify(err));
//     } else {
//       res.locals.trips = doc.trips;
//       return next();
//     }
//   });
// });

app.use('/', apiRouter);

app.use('*', (req, res) => res.sendStatus(404));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occured' },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

//const PORT = process.env.PORT || 8080;
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
