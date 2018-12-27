//import { error } from 'util';

const express = require('express');
const router = express.Router();
var bodyparser= require('body-parser');
const Task = require('../models/tasks');
var mongoose = require('mongoose');

var app = express();
const tasks=[];
router.use(bodyparser.json( {type: "*/*"}));
router.use(bodyparser.urlencoded());
//retrieving data
router.get('/tasks',(req,res,next)=>{
    Task.find(function(err, tasks){
        res.json(tasks);
    })
    //res.json({success: true, data: tasks});
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
router.get('tasks/:Task_ID', function(req,res,next){
    Task.find(req.params.Task_ID)
    .then(doc=>{
        if(!doc){ return res.status(404).end();}
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
    console.log("getting task priority"+JSON.stringify(req.body.Priority));
    console.log("getting task"+req.body.Task_ID);
    console.log("parent"+req.body.Parent_Task, req.body.SelectedParent);
    console.log("Dates"+req.body.Start_date + req.body.End_date);
    /*let newTask = new Task({
        Task_ID: req.body.Task_ID,
        Start_date: req.body.Start_date,
        End_date: req.body.End_date,
        Priority: JSON.stringify(req.body.Priority),
        Parent_Task: req.body.SelectedParent
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
    });*/
    let task = req.body;

    console.log(task);
    //tasks.push(task);

    //res.json({success: true, data: tasks});
    var model = new Task(task);
    model.save(function(err){
        if(err){
            res.send("error"+err);
            return next(err);
        }
        res.send("created");
    });
 
});

/*
router.post('/tasks', function(req,res){
    let task = new Task(req.body);
    task.save()
    .then(data =>{
        res.send("saved");
    })

})
*/
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