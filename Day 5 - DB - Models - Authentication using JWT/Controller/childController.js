const ChildSchema = require("./../Model/ChildModel");

exports.getAllChilds = (req, res, next) => {
    ChildSchema.find({})
        .then((childs) => {
            res.status(200).json({childs});
        })
        .catch((error) => next(error));
};

exports.getChildById = (req, res, next) => {
    ChildSchema.findOne({_id : req.params.id})
        .then((childObject) => {
            if (!childObject) {
                throw new Error("Child not exists.......");
            }
            res.status(200).json({ child : childObject });
        })
        .catch((error) => {next(error)});
};

exports.insertChild = (req, res, next) => {
    let childObject = new ChildSchema(req.body);
    childObject
        .save()
        .then((childObj) => {
            res.status(200).json({ child : childObj, message: "Child Added Successfully......."});
        })
        .catch((error) => next(error));
};

exports.updateChild = (req, res, next) => {
    const id = req.body._id; // Assuming the ID field is 'id', adjust it if it's '_id'
    const update = req.body;

    /*if (!id) {
      return res.status(400).json({ message: "Child ID is required and should be an integer." });
    }*/

    ChildSchema.findByIdAndUpdate(id, update, { new: true })
        .then(childObject => {
            if (!childObject) {
                return res.status(404).json({ message: "Child not exists......." });
            }
            res.status(200).json({ child: childObject, message: "Child updated successfully......." });
        })
        .catch(error => next(error));
};

exports.deleteChildById = (req, res, next) => {
    ChildSchema.deleteOne({_id: req.params.id})
        .then((object) => {
            if(!object.deletedCount){
                throw new Error("Child not exists.......");
            }
            res.status(200).json({ message: "Child Deleted Successfully" });
        })
        .catch((error) => {next(error)})
};