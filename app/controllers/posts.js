const db = require("../models");
const moment = require("moment");

// Defining methods for the postController
module.exports = {
  findAll: function(req, res) {
    if(req.params.auth === process.env.DBKEY){
      db.Post.find(req.query)
      .then(dbPost => res.json(dbPost))
      .catch(err => res.status(422).json(err));
    }
    else res.status(401).send({message:"You are not authorized to see that info"})
  },
  // Find only approved posts
  findApprovedPosts: function(req,res){
    console.log("Find Approved posts request");
    db.Post.find({show:true})
     .then(dbPost => {
       console.log("dbPost", dbPost);
       res.json(dbPost);
     })
     .catch(err => res.status(422).json(err));
  },
  findDraftPosts: function(req,res){
    if(req.params.auth === process.env.DBKEY){
      db.Post.find({show:false})
       .then(dbPost => {
        console.log("dbPost", dbPost);
        res.json(dbPost)
      })
      .catch(err => res.status(422).json(err));
    }
    else res.status(401).send({message:"You are not authorized to see that info"})
  },
  findById: function(req, res) {
    // If a request parameter has an id search db 
    if(req.params.id){
      db.Post.findById(req.params.id)
      .then(dbPost => res.json(dbPost))
      .catch(err => res.status(422).json(err));
    }
    // If no id present return custom error
    else{
      res.send({
        message: "There is no id present in your request.",
        data: {givenId: req.params.id}
      })
    }
  },
  create: function(req, res) {
    console.log("Create post function called");
    console.log("Params", req.params);
    console.log("Body", req.body);
    
    let postInfo = req.body;

    // Check to see request actually has a body with values
    if(Object.keys(postInfo).length){

      // Use the backend runtime to handle created at timestamp
      Object.assign(postInfo, {createdAt: moment().format("dddd, MMMM Do YYYY, h:mm:ss a")});

      //  Send info to the db
      db.Post.create(postInfo)
      .then(dbPost => res.json(dbPost))
      .catch(err => res.status(422).json(err));
    }
    // If there is not values in request body send custom error
    else{
      res.send({
        message: "There is no data in request body.",
        data: {
          givenData: postInfo
        }
      });
    }
  },
  update: function(req, res) {
    console.log("Edit post request", req.params.id, req.body);
    // If the request does not have an id param or request body return a custom error
    if(!req.params.id || req.body === {}){
      res.status(204).send({
        message: "There is missing data in your request",
        data: {
          givenId: req.params.id,
          givenData: req.body
        }
      })
    }
    else{
      // Use the backend runtime to handle updatedAt timestamp
      Object.assign(req.body, {updatedAt: moment().format("dddd, MMMM Do YYYY, h:mm:ss a")});

      db.Post.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbPost => (res.json(dbPost)))
      .catch(err => res.status(422).json(err));
    }
  },
  remove: function(req, res) {
    // console.log("Delete post request", req.params);
    if(req.params.id){
      db.Post.findById(req.params.id)
      .then(dbPost => dbPost.remove())
      .catch(err =>  res.status(417).send({
        message: "The id submitted does not match with any in db.", 
        data:{givenId:req.params.id}
      }))
      .then(dbPost => res.json(dbPost))
      .catch(err => res.status(422).json(err));
    }
    // Otherwise return custom error
    else{
      res.status(204).send({
        message: "There is no id present in your request.",
        data: {givenId: req.params.id}
      })
    }
  }
};