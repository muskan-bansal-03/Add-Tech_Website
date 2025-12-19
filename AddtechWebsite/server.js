require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const path = require("path");

const Student = require("./models/Student");
const Report = require("./models/Report");



const app = express();
const PORT = process.env.PORT || 3000;

/* ===================== MIDDLEWARE ===================== */
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "frontend")));


/* ===================== DATABASE ===================== */
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.error("❌ Mongo Error:", err));

/* =====================================================
   1. LOGIN / REGISTER STUDENT
===================================================== */
app.post("/api/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password required"
            });
        }

        let student = await Student.findOne({ email });

        // 🔹 If student does NOT exist → register
        if (!student) {
            const hashedPassword = await bcrypt.hash(password, 10);

            student = await Student.create({
                email,
                password: hashedPassword,
            });

            return res.status(201).json({
                success: true,
                message: "Student registered & logged in",
                data: {
                    id: student._id,
                    email: student.email,
                }
            });
        }

        // 🔹 Student exists → check password
        const isMatch = await bcrypt.compare(password, student.password);

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid password"
            });
        }

        res.status(200).json({
            success: true,
            message: "Login successful",
            data: {
                id: student._id,
                email: student.email,
            }
        });

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
});

/* =====================================================
   2. SAVE QUIZ REPORT
===================================================== */
app.post("/api/reports", async (req, res) => {
    try {
        const report = await Report.create({
            ...req.body,
            date: new Date()
        });

        res.json({
            success: true,
            message: "Quiz report saved successfully",
            reportId: report._id
        });
    } catch (error) {
        console.error("Save report error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to save report"
        });
    }
});

/* =====================================================
   3. GET STUDENT REPORTS
===================================================== */
app.get("/api/reports/:email", async (req, res) => {
    try {
        const reports = await Report.find({ studentEmail: req.params.email })
            .sort({ date: -1 })
            .limit(1);

        res.json({
            success: true,
            count: reports.length,
            reports
        });
    } catch (error) {
        console.error("Get reports error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch reports"
        });
    }
});

/* =====================================================
   4. AI SUGGESTIONS (RULE-BASED)
===================================================== */
app.post("/api/suggestions", (req, res) => {
    const { subjectPerformance } = req.body;

    const weakSubjects = Object.keys(subjectPerformance || {}).filter(
        s => subjectPerformance[s].percentage < 60
    );

    const suggestions =
        weakSubjects.length > 0
            ? `Focus on ${weakSubjects.join(", ")} for better results.`
            : "Excellent performance! Keep practicing.";

    res.json({
        success: true,
        suggestions
    });
});

/* =====================================================
   5. QUIZ QUESTIONS
===================================================== */
app.get("/api/questions", (req, res) => {
    res.json({
        success: true,
        questions: [
            {
                id: 1,
                question: "What is the process by which plants make their own food using sunlight?",
                options: ["Respiration", "Transpiration", "Photosynthesis", "Germination"],
                correctAnswer: "Photosynthesis",
                subject: "science",
                topic: "biology",
                explanation: "Photosynthesis is the process where plants use sunlight, water, and carbon dioxide to create oxygen and energy in the form of glucose. Chlorophyll in plant leaves captures sunlight energy.",
                image: "http://localhost:3000/Photosynthesis.jpg",
                audioText: "Photosynthesis is how plants make food using sunlight. They take carbon dioxide and water, and with sunlight, produce glucose and oxygen."
            },
            {
                id: 2,
                question: "Which planet is known as the 'Red Planet' in our solar system?",
                options: ["Venus", "Mars", "Jupiter", "Saturn"],
                correctAnswer: "Mars",
                subject: "science",
                topic: "astronomy",
                explanation: "Mars appears red due to iron oxide (rust) on its surface. It's the fourth planet from the Sun and has two small moons, Phobos and Deimos.",
                // image: "https://images.unsplash.com/photo-1630699144337-28b6f3f7d6b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFycyUyMHBsYW5ldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80",
                image: "http://localhost:3000/planet.jpg",
                audioText: "Mars is called the Red Planet because its surface has iron oxide, which gives it a reddish color."
            },
            {
                id: 3,
                question: "What is the chemical symbol for Gold?",
                options: ["Go", "Gd", "Au", "Ag"],
                correctAnswer: "Au",
                subject: "science",
                topic: "chemistry",
                explanation: "Gold's chemical symbol is Au, derived from its Latin name 'Aurum'. It's a precious metal that doesn't rust or corrode.",
                audioText: "Gold's chemical symbol is A U, coming from its Latin name Aurum.",
                image: "http://localhost:3000/gold.jpg",
            },

            // GEOGRAPHY QUESTIONS
            {
                id: 4,
                question: "What is the capital city of India?",
                options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
                correctAnswer: "Delhi",
                subject: "geography",
                topic: "world-capitals",
                explanation: "New Delhi is the capital of India and is located in the northern part of the country. It's one of the oldest continually inhabited cities in the world.",
                audioText: "The capital of India is New Delhi, located in northern India.",
                image: "http://localhost:3000/delhi.jpg",
            },
            {
                id: 5,
                question: "Which is the largest continent by land area?",
                options: ["Africa", "North America", "Asia", "Europe"],
                correctAnswer: "Asia",
                subject: "geography",
                topic: "continents",
                explanation: "Asia is the largest continent, covering about 30% of Earth's land area. It's home to about 60% of the world's population.",
                audioText: "Asia is the largest continent, covering thirty percent of Earth's land area.",
                image: "http://localhost:3000/asia.jpg",
            },

            // ENGLISH QUESTIONS
            {
                id: 6,
                question: "Which of these is a proper noun?",
                options: ["city", "ocean", "London", "mountain"],
                correctAnswer: "London",
                subject: "english",
                topic: "grammar",
                explanation: "London is a proper noun because it is the specific name of a city. Proper nouns always begin with capital letters and name specific people, places, or things.",
                image: "http://localhost:3000/london.jpg",
                audioText: "London is a proper noun because it names a specific city. Proper nouns always start with capital letters."
            },
            {
                id: 7,
                question: "What is the synonym of 'happy'?",
                options: ["Sad", "Joyful", "Angry", "Tired"],
                correctAnswer: "Joyful",
                subject: "english",
                topic: "vocabulary",
                explanation: "Synonyms are words with similar meanings. 'Joyful' means feeling great happiness or pleasure, which is the same as 'happy'.",
                audioText: "Joyful is a synonym of happy. Both words mean feeling pleasure or contentment.",
                image: "http://localhost:3000/joyful.jpg",
            },

            // HISTORY QUESTIONS
            {
                id: 8,
                question: "Who was the first President of India?",
                options: ["Jawaharlal Nehru", "Rajendra Prasad", "Mahatma Gandhi", "Sardar Patel"],
                correctAnswer: "Rajendra Prasad",
                subject: "history",
                topic: "indian-history",
                explanation: "Dr. Rajendra Prasad served as the first President of India from 1950 to 1962. He was a key leader in the Indian independence movement.",
                image: "http://localhost:3000/rajendra.png",
                audioText: "Dr. Rajendra Prasad was the first President of India, serving from 1950 to 1962."
            },
            {
                id: 9,
                question: "In which year did World War II end?",
                options: ["1943", "1944", "1945", "1946"],
                correctAnswer: "1945",
                subject: "history",
                topic: "world-history",
                explanation: "World War II ended in 1945. Germany surrendered in May 1945, and Japan surrendered in September 1945 after atomic bombs were dropped on Hiroshima and Nagasaki.",
                image: "http://localhost:3000/war2.jpg",
                audioText: "World War Two ended in nineteen forty five."
            },
            {
                id: 10,
                question: "Which famous monument was built by Shah Jahan in memory of his wife?",
                options: ["Red Fort", "Taj Mahal", "Qutub Minar", "India Gate"],
                correctAnswer: "Taj Mahal",
                subject: "history",
                topic: "monuments",
                explanation: "The Taj Mahal was built by Mughal emperor Shah Jahan in memory of his favorite wife, Mumtaz Mahal. It's considered one of the Seven Wonders of the World.",
                image: "http://localhost:3000/taj.jpg",
                audioText: "The Taj Mahal was built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal."
            }
        ]
    });
});

/* =====================================================
   6. FRONTEND ROUTES
===================================================== */
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./frontend/index.html"));
});

app.get("/quiz", (req, res) => {
    res.sendFile(path.join(__dirname, "./frontend/quiz.html"));
});

app.get("/report", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/report.html"));
});

/* ===================== START SERVER ===================== */
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
