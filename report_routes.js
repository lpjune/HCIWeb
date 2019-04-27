var ObjectID = require('mongodb').ObjectID;
module.exports = function (app, db) {


  app.get('/reports/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('reports').findOne(details, (err, item) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
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
        res.send({ 'error': 'An error has occurred' });
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
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(report);
      }
    });
  });
};