const mongoose = require("mongoose");

const wrongAnswerSchema = new mongoose.Schema({
    question: { type: String, required: true },
    studentAnswer: { type: String, required: true },
    correctAnswer: { type: String, required: true },
    subject: { type: String, required: true },
    topic: { type: String },           // optional
    explanation: { type: String }      // optional
}, { _id: false }); // prevent creating extra _id for each wrong answer

const subjectPerformanceSchema = new mongoose.Schema({
    correct: { type: Number, default: 0 },
    total: { type: Number, default: 0 },
    percentage: { type: Number, default: 0 }
}, { _id: false });

const reportSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', },
    studentName: { type: String },
    score: { type: Number, required: true },
    totalQuestions: { type: Number, required: true },
    wrongAnswers: [wrongAnswerSchema],
    studentEmail: { type: String, require: true },
    subjectPerformance: {
        science: { type: subjectPerformanceSchema, default: () => ({}) },
        geography: { type: subjectPerformanceSchema, default: () => ({}) },
        english: { type: subjectPerformanceSchema, default: () => ({}) },
        history: { type: subjectPerformanceSchema, default: () => ({}) }
    },
    topicPerformance: { type: mongoose.Schema.Types.Mixed, default: {} },
    suggestions: {
        text: { type: String, default: "" },
        imageUrl: { type: String, default: "" },
        audioText: { type: String, default: "" }
    },
    timeTaken: { type: String, default: "" },
    date: { type: Date, default: Date.now }
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;
