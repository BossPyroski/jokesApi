const { Joke } = require('../models/jokes.model');

module.exports = {
    index: (req, res) => {
        Joke.find()
            .then(data => { res.json({ results: data }) })
            .catch(err => {
                res.json({ message: 'Something went wrong', error: err })
            });
    },
    show: (req,res) => {
        Joke.findOne({ _id: req.params.id})
        .then(data => { res.json({ results: data }) })
        .catch(err => res.json(err.errors));
    },
    create: (req,res) => {
        Joke.create(req.body)
        .then(data => { res.json({ results: data }) })
        .catch(err => res.json(err.errors));
    },
    delete: (req,res) => {
        Joke.deleteOne({ _id: req.params.id})
        .then(data => { res.json({ results: data }) })
        .catch(err => res.json(err.errors));
    },
    update: (req,res) => {
        Joke.findOneAndUpdate({ _id: req.params.id}, req.body, {useFindAndModify:true, runValidators: true})
        .then(data => { res.json({ results: data }) })
        .catch(err => res.json(err.errors));
    },

}
// module.exports.findAllUsers = (req, res) => {
//     User.find()
//         .then(allDaUsers => res.json({ users: allDaUsers }))
//         .catch(err => res.json({ message: 'Something went wrong', error: err }));
// }

// module.exports.findOneSingleUser => (req, res) => {
//     User.findOne({ _id: req.params.id })
//         .then(oneSingleUser => res.json({ user: oneSingleUser }))
//         .catch(err => res.json({ message: 'Something went wrong', error: err }));
// }

// module.exports.createNewUser = (req, res) => {
//     User.create(req.body)
//         .then(newlyCreatedUser => res.json({ user: newlyCreatedUser }))
//         .catch(err => res.json({ message: 'Something went wrong', error: err }));
// }

// module.exports.updateExistingUser = (req, res) => {
//     User.findOneAndUpdate(
//         { _id: req.params.id },
//         req.body,
//         { new: true, runValidators: true }
//     )
//         .then(updatedUser => res.json({ user: updatedUser }))
//         .catch(err => res.json({ message: 'Something went wrong', error: err }));
// }

// module.exports.deleteAnExistingUser = (req, res) => {
//     User.deleteOne({ _id: req.params.id })
//         .then(result => res.json({ result: result }))
//         .catch(err => res.json({ message: 'Something went wrong', error: err }));
// }



























