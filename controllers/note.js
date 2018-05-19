// EXPORT THE CONTROLLER
module.exports = {
    // FIND ONE NOTE
    find: function(req, res) {
        db.Note.find({ _headlineId: req.params.id }).then(function(dbNote) {
            res.json(dbNote);
        });
    },
    // CREATE A NEW NOTE
    create: function(req, res) {
        db.Note.create(req.body).then(function(dbNote) {
            res.json(dbNote);
        });
    },
    // DELETE A NOTE
    delete: function(req, res) {
        db.Note.remove({ _id: req.params.id }).then(function(dbNote) {
            res.json(dbNote);
        });
    }
};