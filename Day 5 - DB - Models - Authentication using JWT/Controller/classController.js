const ClassSchema = require("./../Model/ClassModel");

exports.getAllClasses = (req, res, next) => {
  ClassSchema.find({})
      .then((classes) => {
        res.status(200).json({classes});
      })
      .catch((error) => next(error));
};

exports.getClassById = (req, res, next) => {
  ClassSchema.findOne({_id : req.params.id})
      .then((classObject) => {
        if (!classObject) {
          throw new Error("Class not exists.......");
        }
        res.status(200).json({ class : classObject });
      })
      .catch((error) => {next(error)});
};

exports.insertClass = (req, res, next) => {
  let classObject = new ClassSchema(req.body);
  classObject
      .save()
      .then((classObj) => {
        res.status(200).json({ class : classObj, message: "Class Added Successfully......."});
      })
      .catch((error) => next(error));
};

exports.updateClass = (req, res, next) => {
  const id = req.body._id; // Assuming the ID field is 'id', adjust it if it's '_id'
  const update = req.body;

  /*if (!id) {
    return res.status(400).json({ message: "Class ID is required and should be an integer." });
  }*/

  ClassSchema.findByIdAndUpdate(id, update, { new: true })
      .then(classObject => {
        if (!classObject) {
          return res.status(404).json({ message: "Class not exists......." });
        }
        res.status(200).json({ class: classObject, message: "Class updated successfully......." });
      })
      .catch(error => next(error));
};

exports.deleteClassById = (req, res, next) => {
  ClassSchema.deleteOne({_id: req.params.id})
      .then((object) => {
        if(!object.deletedCount){
          throw new Error("Class not exists.......");
        }
        res.status(200).json({ message: "Class Deleted Successfully" });
      })
      .catch((error) => {next(error)})
};

exports.getAllClassChildren = (req, res, next) => {
    const classId = req.params.id;

    ClassSchema.findById(classId)
        .populate('children')
        .then((classObject) => {
            if (!classObject) {
                throw new Error("Class not exists.......");
            }

            res.status(200).json({ childs : classObject.children});
        })
        .catch((error) => {
            next(error)
        })

};

exports.getAllClassSupervisorInfo = (req, res, next) => {
    const classId = req.params.id;

    ClassSchema.findById(classId)
        .populate('supervisor')
        .then((classObject) => {
            if (!classObject) {
                throw new Error("Class not exists.......");
            }

            res.status(200).json({ supervisors : classObject.supervisor});
        })
        .catch((error) => {
            next(error)
        })
};
