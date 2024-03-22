exports.getAllTeachers = (req, res, next) => {
  console.log(req.query);
  res.status(200).json({ data: [{"name": "teacher 1"},{"name": "teacher 2"}, {"name": "teacher 3"}] });
};

exports.getTeacherById = (req, res, next) => {
  res.status(200).json({ data: req.params });
};

exports.insertTeacher = (req, res, next) => {
  console.log(req.body);
  res.status(200).json({ data: "Teacher Added Successfully" });
};

exports.updateTeacher = (req, res, next) => {
  res.status(200).json({ data: "Teacher Updated Successfully" });
};

exports.deleteTeacherById = (req, res, next) => {
  res.status(200).json({ data: "Teacher Deleted Successfully" });
};

exports.getAllClassSupervisors = (req, res, next) => {
  res.status(200).json({ data: "Teacher supervisor 1" });
};

