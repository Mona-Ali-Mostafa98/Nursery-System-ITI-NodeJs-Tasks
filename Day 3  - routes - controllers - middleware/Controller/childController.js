exports.getAllChilds = (req, res, next) => {
  console.log(req.query);
  res.status(200).json({ data: [{"name": "child 1"},{"name": "child 2"}, {"name": "child 3"}] });
};


exports.getChildById = (req, res, next) => {
  res.status(200).json({ data: req.params });
};

exports.insertChild = (req, res, next) => {
  console.log(req.body);
  res.status(200).json({ data: "Child Added Successfully" });
};

exports.updateChild = (req, res, next) => {
  res.status(200).json({ data: "Child Updated Successfully" });
};

exports.deleteChildById = (req, res, next) => {
  res.status(200).json({ data: "Child Deleted Successfully" });
};


