const express = require('express');
const router = express.Router();
var bodyparser= require('body-parser');
const Task = require('../models/tasks');
var mongoose = require('mongoose');

var app = express();

router.use(bodyparser.json());
//retrieving data
router.get('/tasks',(req,res,next)=>{
    Task.find(function(err, tasks){
        res.json(tasks);
    })
});

//retrieving data based on data
router.get('/tasks/:id',function(req,res,next){
    Task.findById(req.params.id)
    .then(doc=>{
        if(!doc){ return res.status(404).end(); }
        return res.status(200).json(doc); 
    })
    .catch(err => next(err));
})

//update tasks
router.put('/tasks/:id', function(req,res,next){
    console.log("updating value"+req.params.id);
    Task.findByIdAndUpdate(req.params.id, req.body, function(err,post){
        if(err) return next(err);
        res.json(post);
    });
});
//add tasks
router.post('/tasks',(req,res,next)=>{
    //logic to add tasks
    console.log("getting task priority"+req.body.priority);
    console.log("getting task"+req.body.Task_ID);
    console.log("type of priority " + typeof req.body.priority)
    let newTask = new Task({
        Task_ID: req.body.Task_ID,
        Start_date: req.body.start_date,
        End_date: req.body.end_date,
        Priority: req.body.priority,
        Parent_Task: mongoose.mongo.ObjectId(req.body.Parent_Task)
    });

    newTask.save((err,Task)=>{
        if(err)
        {
            console.log("task failed"+err);
            res.json({msg: 'Failed to add task'});
        }
        else
        {
            console.log("task added");
            res.json({msg: 'Task Added'});;
        }
    });
});


//delete tasks
router.delete('/tasks/:id',(req,res,next)=>{
    //logic to delete tasks
    console.log("deleting task");
    Task.remove({_id: req.params.id}, function(err,result){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(result);
        }
    });
});

module.exports = router;