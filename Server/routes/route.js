const routes = require('express').Router;

routes.route('/api/catagories')
    .get((req,res) => res.json("Get Request from Catagories"));

module.exports=routes;