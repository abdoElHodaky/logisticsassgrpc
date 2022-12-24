var express = require('./app.js');

var apiv1 = express.Router();

apiv1.get('/', function(req, res) {
   res.json({"Articles":[
    {
        title:"d",
        id:1,
        url:"d/d/d"
    },
    {
        title:"d",
        id:2,
        url:"d/d/d"
    }
  ]});

});

module.exports = apiv1;
