const mongoose = require("mongoose");

const SubmissionSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: [true, "User name required"],
    },
    category: {
      type: String,
      required: [true, "Please enter a category for your submission"],
    },

    imageURL: {
      type: String,
    },

    videoURL: {
      type: String,
    },

    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const Submission = mongoose.model("Submission", SubmissionSchema);
module.exports = Submission;
