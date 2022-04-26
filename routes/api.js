let express = require('express')
let db = require('../models')
let Student = db.Student

let router = express.Router()

router.get('/students', function(req, res, next) {
    Student.findAll().then ( students => {
        return res.json(students)
    })
})

router.post('/students', function(req, res, next) {
    Student.create(req.body).then( (data) => {
        return res.status(201).send('ok')
    })
})

router.patch('/students/:id', function(req, res, next){
    let studentID = req.params.id
    let updatedStudent = req.body
    Student.update( updatedStudent, { where: {id: studentID } } )
        .then( () => {
            return res.send('ok')
        })
})

module.exports = router