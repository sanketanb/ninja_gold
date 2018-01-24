// var moment = require('moment');

var mongoose = require('mongoose');

var Task = mongoose.model('Task_instance');

module.exports = {
    show: function (req, res) {
        Task.find({}, function (err, tasks) {
            if (err) {
                res.json({ message: "Error!!", error: err })
            }
            else {
                res.json({ message: "Success", data: tasks });
            }
        })
    },
    create: function (req, res) {
        console.log("this is req body",req.body)
        Task.create(req.body, function (err, task) {
            if (err) {
                res.json({ message: "Error!!", error: err })
            }
            else {
                res.json({ message: "Success", data: task });
            }
        })
    },
    // destroy: function (req, res) {
    //     console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 1')
    //     Task.findByIdAndRemove(req.params.id , function (err) {
    //         console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 3')
    //         if (err) {
    //             console.log("something went wrong")
    //         } else {
    //             console.log("task destroyed ")
    //             console.log("this is the destroy id", req.params.id)
    //             res.redirect('/tasks');
    //             // res.json(tasks);
    //         }
    //     })
    //     console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 2')
    // },
    update: function (req, res) {
        console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ XXXXXXXXX')
        Task.update({ _id: req.body._id }, req.body, function (err, task) {
            if (err) {
                res.json({ message: "Error!!", error: err })
            }
            else {
                res.json({ message: "Success", data: task });
            }
        })
    },
    // update: function (req, res) {
    //     Task.update({_id:req.body._id}, req.body, function (err, task) {
    //         if (err) {
    //             console.log("something went wrong")
    //         } else {
    //             console.log("task edited ")
    //             console.log("this is the edited id", req.params.id)
    //             // res.json(task);
    //             res.redirect('/tasks/' + req.params.id);
    //         }
    //     })
    // }

}