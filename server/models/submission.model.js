const mongoose = require("mongoose");

const SubmissionSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: [true, "User name required"],
    },
    category: {
      type: String,
      enum: ['Farm Animals', 'Wildlife', 'Dogs', 'Cats', 'Reptiles', 'Fish', 'Birds', 'Bugs', 'Rodents'],
      required: [true, "Please select a category for your submission"],
    },

    imageURL: {
      type: String,
      required: false,
    },

    videoURL: {
      type: String,
      required: false,
    },

    description: {
      type: String,
      required: [true, "Please leave a description"],
    },
  },
  { timestamps: true }
);

const Submission = mongoose.model("Submission", SubmissionSchema);
module.exports = Submission;
