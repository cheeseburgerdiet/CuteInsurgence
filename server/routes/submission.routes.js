const SubmissionController = require("../controllers/submission.controller");

module.exports = function (app) {
  app.get("/api/submissions", SubmissionController.showAllSubmissions);
  app.post("/api/submissions", SubmissionController.createSubmission);
  app.get("/api/submissions/:id", SubmissionController.showOneSubmission);
  app.get(
    "/api/submissions/category/:category",
    SubmissionController.showAllByCategory
  );
  app.put("/api/submissions/:id", SubmissionController.updateSubmission);
  app.delete("/api/submissions/:id", SubmissionController.deleteSubmission);
};
