const mongoose = require('mongoose');

const TaskParentSchema = mongoose.Schema({
    Task_ID:{
        type: String,
        required: true,
        dropDups: true
    },
    Start_date:{
        type: Date,
        default: Date.now
    },
    End_date:{
        type: Date,
        default: Date.now
    },
    Priority:{
        type:Number,
        min: 0,
        max: 30
    },
    Finished:{
        type: Boolean,
        default: false
    },
    Parent_Task:{
        type: mongoose.Schema.ObjectId, ref: 'Task1' , required: false
    }
});

const Task = module.exports = mongoose.model('Task1',TaskParentSchema);