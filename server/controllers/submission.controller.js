const Submission = require("../models/submission.model");

const showAllSubmissions = (req, res) => {
  // Get all submissions
  Submission.find({})
    .then((allSubmissions) => {
      console.log(allSubmissions);
      res.json(allSubmissions);
    })
    .catch((err) => {
      console.log(`Error in showAllSubmissions: ${err}`);
      res.status(400).json(err);
    });
};

const createSubmission = (req, res) => {
  // Create a new submission
  console.log(req.body);
  Submission.create(req.body)
    .then((newSubmission) => {
      console.log(newSubmission);
      res.json(newSubmission);
    })
    .catch((err) => {
      console.log(`Error in createSubmission: ${err}`);
      res.status(400).json(err);
    });
};

const showOneSubmission = (req, res) => {
  // View single submission
  console.log(req.params.id);
  Submission.findById(req.params.id)
    .then((singleSubmission) => {
      console.log(singleSubmission);
      res.json(singleSubmission);
    })
    .catch((err) => {
      console.log(`Error in showOneSubmission: ${err}`);
      res.status(400).json(err);
    });
};

const showAllByCategory = (req, res) => {
  // View all submissions by category
  console.log(req.params.category);
  Submission.find({ category: req.params.category })
    .then((submissionsByCategory) => {
      console.log(submissionsByCategory);
      res.json(submissionsByCategory);
    })
    .catch((err) => {
      console.log(`Error in showAllByCategory: ${err}`);
      res.status(400).json(err);
    });
};

const updateSubmission = (req, res) => {
  // Update submission
  console.log(req.params.id);
  console.log(req.body);
  Submission.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedSubmission) => {
      console.log(updatedSubmission);
      res.json(updatedSubmission);
    })
    .catch((err) => {
      console.log(`Error in updateSubmission: ${err}`);
      res.status(400).json(err);
    });
};

const deleteSubmission = (req, res) => {
  // Delete submission
  console.log(req.params.id);
  Submission.findByIdAndDelete(req.params.id)
    .then((deletedSubmission) => {
      console.log(deletedSubmission);
      res.json(deletedSubmission);
    })
    .catch((err) => {
      console.log(`Error in deleteSubmission`);
      res.status(400).json(err);
    });
};

module.exports = {
  showAllSubmissions,
  createSubmission,
  showOneSubmission,
  showAllByCategory,
  updateSubmission,
  deleteSubmission,
};
