const express = require('express');
const router = express.Router();

const Task = require('../models/tasks');

//retrieving data
router.get('/tasks',(req,res,next)=>{
    Task.find(function(err, tasks){
        res.json(tasks);
    })
});

//add tasks
router.post('/tasks',(req,res,next)=>{
    //logic to add tasks
    console.log("getting task");
    let newTask = new Task({
        Task_ID: req.body.Task_ID,
        Start_date: req.body.start_date,
        End_date: req.body.end_date,
        Priority: req.body.priority,
        Parent_Task: req.body.Parent_Task
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