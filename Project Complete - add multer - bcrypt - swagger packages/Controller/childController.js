const ChildSchema = require("./../Model/ChildModel");
const fs = require('fs');

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
    console.log(req.body)
    const childData = {
        fullname: req.body.fullname,
        username: req.body.username,
        age: req.body.age,
        level: req.body.level,
        address: {
            city: req.body.address.city,
            street: req.body.address.street,
            building: req.body.address.building
        },
        password: req.body.password,
        email: req.body.email,
        image: req.file ? req.file.path : null
    };

    console.log("File path:", req.file ? req.file.path : "No file uploaded");

    if (req.file && !fs.existsSync(req.file.path)) {
        return res.status(400).json({ message: "Uploaded file not found or file path is incorrect" });
    }

    let childObject = new ChildSchema(childData);
    childObject
        .save()
        .then((child) => {
            res.status(200).json({ child, message: "Child Added Successfully......."});
        })
        .catch((error) => next(error));
};

exports.updateChild = (req, res, next) => {
    const filter = { _id: req.body._id };
    const update = req.body;

    // Change old logic findOneAndUpdate to findById to handel error in remove old image
    ChildSchema.findById(req.body._id)
        .then(child => {
            if (!child) {
                return res.status(404).json({ message: "Child not exists......." });
            }

            if (req.file && req.file.path !== child.image) {
                if (child.image && fs.existsSync(child.image)) {
                    fs.unlinkSync(child.image);
                }
                update.image = req.file.path;
            }

            return ChildSchema.findOneAndUpdate(filter, update, { new: true });
        })
        .then(updatedChild => {
            res.status(200).json({ child: updatedChild, message: "Child updated successfully......." });
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


/*old code*/
/*exports.insertChild = (req, res, next) => {
    let childObject = new ChildSchema(req.body);
    childObject
        .save()
        .then((childObj) => {
            res.status(200).json({ child : childObj, message: "Child Added Successfully......."});
        })
        .catch((error) => next(error));
};*/

/*
exports.updateChild = (req, res, next) => {
    const id = req.body._id;
    const update = req.body;

    /!*if (!id) {
      return res.status(400).json({ message: "Child ID is required and should be an integer." });
    }*!/

    ChildSchema.findByIdAndUpdate(id, update, { new: true })
        .then(childObject => {
            if (!childObject) {
                return res.status(404).json({ message: "Child not exists......." });
            }
            res.status(200).json({ child: childObject, message: "Child updated successfully......." });
        })
        .catch(error => next(error));
};
*/
