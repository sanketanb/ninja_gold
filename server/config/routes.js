var tasks = require('../controllers/tasks.js')
var path = require('path');

module.exports = function(app){
    // app.get('/', function (req, res) {
    //     res.render('index');
    // })
    app.get('/tasks', function (req, res) {
        tasks.show(req,res)
    })
    app.post('/tasks', function (req, res) {
        tasks.create(req, res)
    })
    // app.delete('/tasks/:id', function (req, res) {
    //     tasks.destroy(req, res)
    // })
    // app.get('/tasks/:id', function(req, res) {
    //     tasks.get(req, res)
    // })
    app.patch('/tasks', function(req, res) {
        tasks.update(req, res)
    })
    app.get('*', (req, res) =>{
        res.sendFile(path.resolve('./public/dist/index.html'))
    })
    // just send the file if we are unable to resolve url.. hence at the end
    
}