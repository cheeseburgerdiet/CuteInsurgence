const SubmissionController = require("../controllers/submission.controller");
const {authenticate} = require('../config/jwt.config');

module.exports = function (app) {
  app.get("/api/submissions", authenticate, SubmissionController.showAllSubmissions);
  app.post("/api/submissions",  SubmissionController.createSubmission);
  app.get("/api/submissions/:id", SubmissionController.showOneSubmission);
  app.get(
    "/api/submissions/category/:category", authenticate, SubmissionController.showAllByCategory
  );
  app.put("/api/submissions/:id",  SubmissionController.updateSubmission);
  app.delete("/api/submissions/:id", authenticate, SubmissionController.deleteSubmission);
};
