// require mongoose

var mongoose = require('mongoose');
// create the schema
var TaskSchema = new mongoose.Schema({
    total: Number,
    log: [String]
}, {timestamps: true})

var Task = mongoose.model('Task_instance', TaskSchema);
