const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  subject: String,
  question: String,
  options: [String],
  correctAnswer: Number,
  explanation: String
});

module.exports = mongoose.model("Quiz", quizSchema);
