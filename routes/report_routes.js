var ObjectID = require('mongodb').ObjectID;
module.exports = function(app, db) {
  

//   function handleError(res, reason, message, code) {
//     console.log("ERROR: " + reason);
//     res.status(code || 500).json({"error": message});
//   }

//  /*  "/api/reports"
//  *    GET: finds all reports
//  *    POST: creates a new report
//  */
//   app.get("/api/reports", function(req, res) {
//     db.collection('reports').find({}).toArray(function(err, docs) {
//       if (err) {
//         handleError(res, err.message, "Failed to get reports.");
//       } else {
//         res.status(200).json(docs);
//       }
//     });
//   });


//   app.post("/api/reports", function(req, res) {
//     var newReport = req.body;
//     newReport.createDate = new Date();
  
//     if (!req.body.name) {
//       handleError(res, "Invalid user input", "Must provide a name.", 400);
//     } else {
//       db.collection('reports').insertOne(newReport, function(err, doc) {
//         if (err) {
//           handleError(res, err.message, "Failed to create new report.");
//         } else {
//           res.status(201).json(doc.ops[0]);
//         }
//       });
//     }
//   });


// /*  "/api/reports/:id"
//  *    GET: find report by id
//  *    PUT: update report by id
//  *    DELETE: deletes report by id
//  */
// app.get("/api/reports/:id", function(req, res) {
//   db.collection('reports').findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
//     if (err) {
//       handleError(res, err.message, "Failed to get report");
//     } else {
//       res.status(200).json(doc);
//     }
//   });
// });


// app.put("/api/reports/:id", function(req, res) {
//   var updateDoc = req.body;
//   delete updateDoc._id;

//   db.collection('reports').updateOne({_id: new ObjectID(req.params.id)}, updateDoc, function(err, doc) {
//     if (err) {
//       handleError(res, err.message, "Failed to update report");
//     } else {
//       updateDoc._id = req.params.id;
//       res.status(200).json(updateDoc);
//     }
//   });
// });


// app.delete("/api/reports/:id", function(req, res) {
//   db.collection('reports').deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
//     if (err) {
//       handleError(res, err.message, "Failed to delete report");
//     } else {
//       res.status(200).json(req.params.id);
//     }
//   });
// });










    app.get('/reports/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('reports').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      } 
    });
  });


  app.delete('/reports/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('reports').remove(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send('Report ' + id + ' deleted!');
      } 
    });
  });

  app.post('/reports', (req, res) => {
    const report = { text: req.body.body, title: req.body.title };
    db.collection('reports').insert(report, (err, result) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  app.put('/reports/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const report = { text: req.body.body, title: req.body.title };
    db.collection('reports').update(details, report, (err, result) => {
      if (err) {
          res.send({'error':'An error has occurred'});
      } else {
          res.send(report);
      } 
    });
  });
};