// // ======================
// // CONFIGURATION
// // ======================
// const API_BASE = 'http://localhost:3000/api';

// // ======================
// // 10 MULTI-SUBJECT QUESTIONS
// // ======================
// const quizQuestions = [
//     // SCIENCE QUESTIONS
//     {
//         id: 1,
//         question: "What is the process by which plants make their own food using sunlight?",
//         options: ["Respiration", "Transpiration", "Photosynthesis", "Germination"],
//         correctAnswer: "Photosynthesis",
//         subject: "science",
//         topic: "biology",
//         explanation: "Photosynthesis is the process where plants use sunlight, water, and carbon dioxide to create oxygen and energy in the form of glucose. Chlorophyll in plant leaves captures sunlight energy.",
//         image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG9zeW50aGVzaXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80",
//         audioText: "Photosynthesis is how plants make food using sunlight. They take carbon dioxide and water, and with sunlight, produce glucose and oxygen."
//     },
//     {
//         id: 2,
//         question: "Which planet is known as the 'Red Planet' in our solar system?",
//         options: ["Venus", "Mars", "Jupiter", "Saturn"],
//         correctAnswer: "Mars",
//         subject: "science",
//         topic: "astronomy",
//         explanation: "Mars appears red due to iron oxide (rust) on its surface. It's the fourth planet from the Sun and has two small moons, Phobos and Deimos.",
//         image: "https://images.unsplash.com/photo-1630699144337-28b6f3f7d6b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFycyUyMHBsYW5ldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80",
//         audioText: "Mars is called the Red Planet because its surface has iron oxide, which gives it a reddish color."
//     },
//     {
//         id: 3,
//         question: "What is the chemical symbol for Gold?",
//         options: ["Go", "Gd", "Au", "Ag"],
//         correctAnswer: "Au",
//         subject: "science",
//         topic: "chemistry",
//         explanation: "Gold's chemical symbol is Au, derived from its Latin name 'Aurum'. It's a precious metal that doesn't rust or corrode.",
//         image: "https://images.unsplash.com/photo-1589923186741-b7d59d6b2c4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29sZCUyMGJhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80",
//         audioText: "Gold's chemical symbol is A U, coming from its Latin name Aurum."
//     },

//     // GEOGRAPHY QUESTIONS
//     {
//         id: 4,
//         question: "What is the capital city of India?",
//         options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
//         correctAnswer: "Delhi",
//         subject: "geography",
//         topic: "world-capitals",
//         explanation: "New Delhi is the capital of India and is located in the northern part of the country. It's one of the oldest continually inhabited cities in the world.",
//         image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWElMjBtYXB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80",
//         audioText: "The capital of India is New Delhi, located in northern India."
//     },
//     {
//         id: 5,
//         question: "Which is the largest continent by land area?",
//         options: ["Africa", "North America", "Asia", "Europe"],
//         correctAnswer: "Asia",
//         subject: "geography",
//         topic: "continents",
//         explanation: "Asia is the largest continent, covering about 30% of Earth's land area. It's home to about 60% of the world's population.",
//         image: "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXNpYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80",
//         audioText: "Asia is the largest continent, covering thirty percent of Earth's land area."
//     },

//     // ENGLISH QUESTIONS
//     {
//         id: 6,
//         question: "Which of these is a proper noun?",
//         options: ["city", "ocean", "London", "mountain"],
//         correctAnswer: "London",
//         subject: "english",
//         topic: "grammar",
//         explanation: "London is a proper noun because it is the specific name of a city. Proper nouns always begin with capital letters and name specific people, places, or things.",
//         image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhbW1hcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80",
//         audioText: "London is a proper noun because it names a specific city. Proper nouns always start with capital letters."
//     },
//     {
//         id: 7,
//         question: "What is the synonym of 'happy'?",
//         options: ["Sad", "Joyful", "Angry", "Tired"],
//         correctAnswer: "Joyful",
//         subject: "english",
//         topic: "vocabulary",
//         explanation: "Synonyms are words with similar meanings. 'Joyful' means feeling great happiness or pleasure, which is the same as 'happy'.",
//         image: "https://images.unsplash.com/photo-1542372147193-a7aca54189f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8am95ZnVsJTIwcGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=80",
//         audioText: "Joyful is a synonym of happy. Both words mean feeling pleasure or contentment."
//     },

//     // HISTORY QUESTIONS
//     {
//         id: 8,
//         question: "Who was the first President of India?",
//         options: ["Jawaharlal Nehru", "Rajendra Prasad", "Mahatma Gandhi", "Sardar Patel"],
//         correctAnswer: "Rajendra Prasad",
//         subject: "history",
//         topic: "indian-history",
//         explanation: "Dr. Rajendra Prasad served as the first President of India from 1950 to 1962. He was a key leader in the Indian independence movement.",
//         image: "https://images.unsplash.com/photo-1627556704306-a6ec603b0c1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwaGlzdG9yeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80",
//         audioText: "Dr. Rajendra Prasad was the first President of India, serving from 1950 to 1962."
//     },
//     {
//         id: 9,
//         question: "In which year did World War II end?",
//         options: ["1943", "1944", "1945", "1946"],
//         correctAnswer: "1945",
//         subject: "history",
//         topic: "world-history",
//         explanation: "World War II ended in 1945. Germany surrendered in May 1945, and Japan surrendered in September 1945 after atomic bombs were dropped on Hiroshima and Nagasaki.",
//         image: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ybGQlMjB3YXIlMjAyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=80",
//         audioText: "World War Two ended in nineteen forty five."
//     },
//     {
//         id: 10,
//         question: "Which famous monument was built by Shah Jahan in memory of his wife?",
//         options: ["Red Fort", "Taj Mahal", "Qutub Minar", "India Gate"],
//         correctAnswer: "Taj Mahal",
//         subject: "history",
//         topic: "monuments",
//         explanation: "The Taj Mahal was built by Mughal emperor Shah Jahan in memory of his favorite wife, Mumtaz Mahal. It's considered one of the Seven Wonders of the World.",
//         image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80",
//         audioText: "The Taj Mahal was built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal."
//     }
// ];

// // ======================
// // GLOBAL VARIABLES
// // ======================
// let currentQuestionIndex = 0;
// let score = 0;
// let wrongAnswers = [];
// let studentAnswers = [];
// let selectedOptionIndex = -1;
// let quizStartTime = null;

// // ======================
// // HELPER FUNCTIONS
// // ======================
// function getSubjectColor(subject) {
//     const colors = {
//         science: '#2196F3',
//         geography: '#4CAF50',
//         english: '#FF9800',
//         history: '#9C27B0'
//     };
//     return colors[subject] || '#607D8B';
// }

// function getSubjectIcon(subject) {
//     const icons = {
//         science: 'fa-flask',
//         geography: 'fa-globe-asia',
//         english: 'fa-book',
//         history: 'fa-landmark'
//     };
//     return icons[subject] || 'fa-question';
// }

// function formatTopicName(topic) {
//     return topic.split('-')
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(' ');
// }

// function getSubjectClass(subject) {
//     return subject + '-indicator';
// }

// // ======================
// // LOGIN PAGE FUNCTIONALITY
// // ======================
// if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
//     document.addEventListener('DOMContentLoaded', () => {
//         const loginForm = document.getElementById('loginForm');
//         const errorMessage = document.getElementById('errorMessage');
        
//         loginForm.addEventListener('submit', async (e) => {
//             e.preventDefault();
            
//             const email = document.getElementById('email').value;
//             const password = document.getElementById('password').value;
            
//             // Basic validation
//             if (!email || !password) {
//                 errorMessage.textContent = "Please fill in both email and password fields";
//                 errorMessage.style.display = 'block';
//                 return;
//             }
            
//             // Simulate login for demo
//             try {
//                 localStorage.setItem('studentEmail', email);
//                 localStorage.setItem('studentName', email.split('@')[0]);
//                 localStorage.setItem('loginTime', new Date().toISOString());
                
//                 // Redirect to quiz page
//                 window.location.href = 'quiz.html';
//             } catch (error) {
//                 errorMessage.textContent = "Login failed. Please try again.";
//                 errorMessage.style.display = 'block';
//             }
//         });
        
//         // Clear any previous quiz data
//         localStorage.removeItem('quizReport');
//     });
// }

// // ======================
// // QUIZ PAGE FUNCTIONALITY
// // ======================
// if (window.location.pathname.includes('quiz.html')) {
//     document.addEventListener('DOMContentLoaded', () => {
//         quizStartTime = new Date();
//         showInstructions();
//         loadQuestion();
//     });
// }

// function showInstructions() {
//     const modal = document.getElementById('instructionsModal');
//     if (modal) modal.style.display = 'flex';
// }

// function hideInstructions() {
//     const modal = document.getElementById('instructionsModal');
//     if (modal) modal.style.display = 'none';
// }

// function loadQuestion() {
//     if (currentQuestionIndex >= quizQuestions.length) {
//         submitQuiz();
//         return;
//     }
    
//     const question = quizQuestions[currentQuestionIndex];
//     const quizBox = document.getElementById('quizBox');
    
//     // Update progress
//     document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
//     document.getElementById('currentScore').textContent = score;
    
//     const progressPercentage = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
//     document.getElementById('progressFill').style.width = `${progressPercentage}%`;
    
//     // Update subject tracker
//     document.getElementById('currentSubject').innerHTML = 
//         `<i class="fas ${getSubjectIcon(question.subject)}"></i> ${question.subject.toUpperCase()} - ${formatTopicName(question.topic)}`;
    
//     // Create question HTML
//     quizBox.innerHTML = `
//         <div class="question-card">
//             <div class="subject-indicator ${getSubjectClass(question.subject)}">
//                 <i class="fas ${getSubjectIcon(question.subject)}"></i>
//                 ${question.subject.toUpperCase()} • ${formatTopicName(question.topic)}
//             </div>
            
//             <h3>Question ${currentQuestionIndex + 1}: ${question.question}</h3>
            
//             <div class="options-grid">
//                 ${question.options.map((option, index) => `
//                     <button class="option-btn" onclick="selectOption(${index})" id="option${index}">
//                         <span class="option-letter">${String.fromCharCode(65 + index)}</span>
//                         ${option}
//                     </button>
//                 `).join('')}
//             </div>
            
//             <button onclick="checkAnswer()" class="btn-next" id="submitBtn">
//                 <i class="fas fa-paper-plane"></i> Submit Answer
//             </button>
//         </div>
//     `;
    
//     // Reset selection
//     selectedOptionIndex = -1;
// }

// function selectOption(index) {
//     // Remove selection from all options
//     for (let i = 0; i < 4; i++) {
//         const option = document.getElementById(`option${i}`);
//         if (option) {
//             option.classList.remove('selected');
//         }
//     }
    
//     // Add selection to clicked option
//     const option = document.getElementById(`option${index}`);
//     option.classList.add('selected');
//     selectedOptionIndex = index;
// }

// function checkAnswer() {
//     if (selectedOptionIndex === -1) {
//         alert('Please select an answer before submitting!');
//         return;
//     }
    
//     const question = quizQuestions[currentQuestionIndex];
//     const selectedAnswer = question.options[selectedOptionIndex];
//     const isCorrect = selectedAnswer === question.correctAnswer;
    
//     // Record answer
//     studentAnswers.push({
//         question: question.question,
//         answer: selectedAnswer,
//         correct: isCorrect,
//         subject: question.subject,
//         topic: question.topic,
//         timeTaken: new Date() - quizStartTime
//     });
    
//     if (isCorrect) {
//         score++;
//         currentQuestionIndex++;
//         loadQuestion();
//     } else {
//         // Record wrong answer
//         wrongAnswers.push({
//             question: question.question,
//             studentAnswer: selectedAnswer,
//             correctAnswer: question.correctAnswer,
//             subject: question.subject,
//             topic: question.topic,
//             explanation: question.explanation
//         });
        
//         showExplanation(question, selectedAnswer);
//     }
// }

// function showExplanation(question, selectedAnswer) {
//     const quizBox = document.getElementById('quizBox');
//     const explanationBox = document.getElementById('explanationBox');
//     const explanationHeader = document.getElementById('explanationHeader');
//     const explanationText = document.getElementById('explanationText');
//     const explanationImage = document.getElementById('explanationImage');
//     const explanationAudio = document.getElementById('explanationAudio');
    
//     // Hide quiz, show explanation
//     quizBox.style.display = 'none';
//     explanationBox.style.display = 'block';
    
//     // Set explanation header
//     explanationHeader.innerHTML = `
//         <div class="wrong-answer-header">
//             <h3><i class="fas fa-times-circle"></i> Incorrect Answer</h3>
//             <p>Let's understand why this was wrong</p>
//         </div>
//     `;
    
//     // Set explanation content
//     explanationText.innerHTML = `
//         <p><strong>Your answer:</strong> <span style="color: #f44336;">${selectedAnswer}</span></p>
//         <p><strong>Correct answer:</strong> <span style="color: #4CAF50;">${question.correctAnswer}</span></p>
//         <br>
//         <p><strong>Detailed Explanation:</strong></p>
//         <p>${question.explanation}</p>
//     `;
    
//     // Set image
//     explanationImage.src = question.image;
//     explanationImage.alt = `Explanation for ${question.topic}`;
    
//     // Set up audio explanation
//     if ('speechSynthesis' in window) {
//         const speech = new SpeechSynthesisUtterance();
//         speech.text = `You selected ${selectedAnswer}. The correct answer is ${question.correctAnswer}. ${question.audioText}`;
//         speech.rate = 0.9;
//         speech.pitch = 1;
//         speechSynthesis.speak(speech);
//     }
// }

// function playAudio() {
//     if ('speechSynthesis' in window) {
//         const question = quizQuestions[currentQuestionIndex];
//         const speech = new SpeechSynthesisUtterance(question.audioText);
//         speech.rate = 0.9;
//         speechSynthesis.speak(speech);
//     }
// }

// function nextQuestion() {
//     const quizBox = document.getElementById('quizBox');
//     const explanationBox = document.getElementById('explanationBox');
    
//     // Hide explanation, show next question
//     explanationBox.style.display = 'none';
//     quizBox.style.display = 'block';
    
//     currentQuestionIndex++;
//     loadQuestion();
// }

// async function submitQuiz() {
//     // Calculate subject-wise performance
//     const subjectPerformance = {
//         science: { correct: 0, total: 0, percentage: 0 },
//         geography: { correct: 0, total: 0, percentage: 0 },
//         english: { correct: 0, total: 0, percentage: 0 },
//         history: { correct: 0, total: 0, percentage: 0 }
//     };
    
//     // Calculate topic-wise performance
//     const topicPerformance = {};
    
//     studentAnswers.forEach(answer => {
//         // Update subject performance
//         if (subjectPerformance[answer.subject]) {
//             subjectPerformance[answer.subject].total++;
//             if (answer.correct) {
//                 subjectPerformance[answer.subject].correct++;
//             }
//         }
        
//         // Update topic performance
//         const topic = answer.topic;
//         if (!topicPerformance[topic]) {
//             topicPerformance[topic] = { correct: 0, total: 0 };
//         }
//         topicPerformance[topic].total++;
//         if (answer.correct) {
//             topicPerformance[topic].correct++;
//         }
//     });
    
//     // Calculate percentages
//     for (const subject in subjectPerformance) {
//         if (subjectPerformance[subject].total > 0) {
//             subjectPerformance[subject].percentage = Math.round(
//                 (subjectPerformance[subject].correct / subjectPerformance[subject].total) * 100
//             );
//         }
//     }
    
//     // Calculate topic percentages
//     const topicPercentages = {};
//     for (const [topic, data] of Object.entries(topicPerformance)) {
//         if (data.total > 0) {
//             topicPercentages[topic] = Math.round((data.correct / data.total) * 100);
//         }
//     }
    
//     // Generate AI suggestions
//     const suggestions = generateAISuggestions(subjectPerformance, topicPercentages);
    
//     // Calculate total time taken
//     const totalTime = new Date() - quizStartTime;
//     const timeInMinutes = Math.floor(totalTime / 60000);
//     const timeInSeconds = Math.floor((totalTime % 60000) / 1000);
    
//     // Create report
//     const report = {
//         score,
//         totalQuestions: quizQuestions.length,
//         wrongAnswers,
//         subjectPerformance,
//         topicPerformance: topicPercentages,
//         suggestions,
//         timeTaken: `${timeInMinutes}m ${timeInSeconds}s`,
//         date: new Date().toISOString(),
//         studentName: localStorage.getItem('studentName') || 'Student'
//     };
    
//     // Save report
//     localStorage.setItem('quizReport', JSON.stringify(report));
    
//     // Simulate API call
//     try {
//         if (API_BASE) {
//             await fetch(`${API_BASE}/reports`, {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(report)
//             });
//         }
//     } catch (error) {
//         console.log('Report saved locally (API offline)');
//     }
    
//     // Redirect to report page
//     window.location.href = 'report.html';
// }

// function generateAISuggestions(subjectPerformance, topicPercentages) {
//     // Find weak subjects (below 60%)
//     const weakSubjects = [];
//     const strongSubjects = [];
//     const allSubjects = ['science', 'geography', 'english', 'history'];
    
//     allSubjects.forEach(subject => {
//         const data = subjectPerformance[subject];
//         if (data.total > 0) {
//             if (data.percentage < 60) {
//                 weakSubjects.push(subject);
//             } else if (data.percentage >= 80) {
//                 strongSubjects.push(subject);
//             }
//         }
//     });
    
//     // Find specific weak topics
//     const weakTopics = [];
//     for (const [topic, percentage] of Object.entries(topicPercentages)) {
//         if (percentage < 50) {
//             weakTopics.push(topic);
//         }
//     }
    
//     let suggestionText = "";
//     let imageUrl = "";
//     let audioText = "";
    
//     // Generate personalized suggestions
//     if (weakSubjects.length > 0) {
//         suggestionText = `Based on your performance, here are areas to focus on:\n\n`;
        
//         weakSubjects.forEach(subject => {
//             const percentage = subjectPerformance[subject].percentage;
//             switch(subject) {
//                 case 'science':
//                     suggestionText += `🔬 **Science (${percentage}%):** Review biology concepts like photosynthesis and chemistry fundamentals. Practice astronomy facts.\n\n`;
//                     imageUrl = "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2NpZW5jZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80";
//                     break;
//                 case 'geography':
//                     suggestionText += `🌍 **Geography (${percentage}%):** Practice world capitals and continent locations. Study maps regularly.\n\n`;
//                     imageUrl = "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2VvZ3JhcGh5fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=80";
//                     break;
//                 case 'english':
//                     suggestionText += `📚 **English (${percentage}%):** Focus on grammar rules and vocabulary building. Read more to improve comprehension.\n\n`;
//                     imageUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW5nbGlzaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80";
//                     break;
//                 case 'history':
//                     suggestionText += `🏛️ **History (${percentage}%):** Create timelines of important events. Focus on dates and historical significance.\n\n`;
//                     imageUrl = "https://images.unsplash.com/photo-1627556704306-a6ec603b0c1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGlzdG9yeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80";
//                     break;
//             }
//         });
        
//         if (weakTopics.length > 0) {
//             suggestionText += `\n**Specific topics needing attention:** ${weakTopics.map(t => formatTopicName(t)).join(', ')}`;
//         }
        
//         suggestionText += `\n\n💡 **Recommendation:** Spend 20 minutes daily on these subjects. Use flashcards for quick revision.`;
//         audioText = `Focus on improving ${weakSubjects.join(' and ')}. Practice these subjects for 20 minutes daily.`;
        
//     } else if (strongSubjects.length === allSubjects.length) {
//         suggestionText = `🎉 **Outstanding Performance!**\n\nYou've demonstrated excellent knowledge across all subjects. Keep up the great work!\n\nMaintain your knowledge with weekly revision and try more challenging questions.`;
//         imageUrl = "https://images.unsplash.com/photo-1536922246289-88c42f957773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VjY2Vzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80";
//         audioText = "Excellent work! You have mastered all subjects. Keep practicing to maintain your high level of knowledge.";
//     } else {
//         suggestionText = `👍 **Good Performance!**\n\nYou're doing well overall. Here's how to improve further:\n\n`;
        
//         strongSubjects.forEach(subject => {
//             suggestionText += `✅ **${subject.charAt(0).toUpperCase() + subject.slice(1)}:** Excellent!\n`;
//         });
        
//         suggestionText += `\n📈 **Next Steps:**\n1. Maintain strong subjects with weekly revision\n2. Aim for consistency across all subjects\n3. Practice time management for better scores\n\n⏰ **Study Tip:** Create a study schedule with 30-minute focused sessions.`;
//         imageUrl = "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1wcm92ZW1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80";
//         audioText = "Good performance overall. Focus on maintaining your strong areas while improving consistency across all subjects.";
//     }
    
//     return {
//         text: suggestionText,
//         imageUrl: imageUrl,
//         audioText: audioText
//     };
// }

// function logout() {
//     if (confirm('Are you sure you want to logout? Your current progress will be lost.')) {
//         localStorage.removeItem('quizReport');
//         localStorage.removeItem('studentEmail');
//         localStorage.removeItem('studentName');
//         window.location.href = 'index.html';
//     }
// }

// // ======================
// // REPORT PAGE FUNCTIONALITY
// // ======================
// if (window.location.pathname.includes('report.html')) {
//     document.addEventListener('DOMContentLoaded', () => {
//         displayReport();
//     });
// }

// function displayReport() {
//     const report = JSON.parse(localStorage.getItem('quizReport'));
//     if (!report) {
//         window.location.href = 'index.html';
//         return;
//     }
    
//     // Set report date
//     const reportDate = new Date(report.date);
//     document.getElementById('reportDate').textContent = 
//         `Date: ${reportDate.toLocaleDateString()} | Time: ${reportDate.toLocaleTimeString()}`;
    
//     // Display overall score
//     document.getElementById('score').textContent = `${report.score}/${report.totalQuestions}`;
//     const percentage = Math.round((report.score / report.totalQuestions) * 100);
//     document.getElementById('percentage').textContent = `${percentage}%`;
    
//     // Update correct/wrong counts
//     document.getElementById('correctCount').textContent = report.score;
//     document.getElementById('wrongCount').textContent = report.totalQuestions - report.score;
    
//     // Animate score circle
//     const circle = document.getElementById('scoreCircle');
//     circle.style.background = `conic-gradient(#4CAF50 0% ${percentage}%, #e0e0e0 ${percentage}% 100%)`;
    
//     // Display subject-wise performance
//     const subjectsPerformance = document.getElementById('subjectsPerformance');
//     subjectsPerformance.innerHTML = '';
    
//     for (const [subject, data] of Object.entries(report.subjectPerformance)) {
//         if (data.total > 0) {
//             const percentage = data.percentage;
//             const subjectCard = document.createElement('div');
//             subjectCard.className = `subject-card ${subject}`;
//             subjectCard.innerHTML = `
//                 <div class="subject-icon ${subject}">
//                     <i class="fas ${getSubjectIcon(subject)}"></i>
//                 </div>
//                 <div class="subject-info">
//                     <div class="subject-name">
//                         ${subject.charAt(0).toUpperCase() + subject.slice(1)}
//                         <span style="float: right; color: ${percentage >= 70 ? '#4CAF50' : percentage >= 50 ? '#FF9800' : '#f44336'};">
//                             ${percentage}%
//                         </span>
//                     </div>
//                     <div class="subject-stats">
//                         <span>${data.correct}/${data.total} correct</span>
//                         <span>${data.total} questions</span>
//                     </div>
//                     <div class="subject-progress">
//                         <div class="progress-bar-small">
//                             <div class="progress-fill-small ${subject}" style="width: ${percentage}%"></div>
//                         </div>
//                     </div>
//                 </div>
//             `;
//             subjectsPerformance.appendChild(subjectCard);
//         }
//     }
    
//     // Display topic-wise analysis
//     const topicsAnalysis = document.getElementById('topicsAnalysis');
//     topicsAnalysis.innerHTML = '';
    
//     for (const [topic, percentage] of Object.entries(report.topicPerformance)) {
//         const topicCard = document.createElement('div');
//         topicCard.className = 'topic-card';
        
//         let levelClass = 'high';
//         if (percentage < 50) levelClass = 'low';
//         else if (percentage < 70) levelClass = 'medium';
        
//         topicCard.innerHTML = `
//             <div class="topic-name">
//                 ${formatTopicName(topic)}
//                 <span class="topic-percentage ${levelClass}">${percentage}%</span>
//             </div>
//             <div class="progress-bar-small">
//                 <div class="progress-fill-small" style="width: ${percentage}%; background: ${percentage >= 70 ? '#4CAF50' : percentage >= 50 ? '#FF9800' : '#f44336'}"></div>
//             </div>
//             <div class="topic-details">
//                 Performance: ${percentage >= 70 ? 'Excellent' : percentage >= 50 ? 'Good' : 'Needs Improvement'}
//             </div>
//         `;
//         topicsAnalysis.appendChild(topicCard);
//     }
    
//     // Display AI suggestions
//     document.getElementById('aiSuggestionText').textContent = report.suggestions.text;
//     document.getElementById('suggestionImage').src = report.suggestions.imageUrl;
    
//     // Display wrong answers if any
//     if (report.wrongAnswers.length > 0) {
//         document.getElementById('wrongAnswersSection').style.display = 'block';
//         const wrongAnswersList = document.getElementById('wrongAnswersList');
//         wrongAnswersList.innerHTML = '';
        
//         report.wrongAnswers.forEach((wrong, index) => {
//             const question = quizQuestions.find(q => q.question === wrong.question);
//             const wrongCard = document.createElement('div');
//             wrongCard.className = 'wrong-answer-card';
//             wrongCard.innerHTML = `
//                 <div class="wrong-subject" style="background: ${getSubjectColor(question.subject)}">
//                     ${question.subject.toUpperCase()}
//                 </div>
//                 <div class="wrong-question">
//                     ${index + 1}. ${wrong.question}
//                 </div>
//                 <div class="answer-comparison">
//                     <div class="your-answer">
//                         <h4><i class="fas fa-times"></i> Your Answer</h4>
//                         ${wrong.studentAnswer}
//                     </div>
//                     <div class="correct-answer">
//                         <h4><i class="fas fa-check"></i> Correct Answer</h4>
//                         ${wrong.correctAnswer}
//                     </div>
//                 </div>
//                 <p style="margin-top: 10px; color: #666; font-size: 14px;">
//                     <strong>Learning:</strong> ${wrong.explanation || question.explanation}
//                 </p>
//             `;
//             wrongAnswersList.appendChild(wrongCard);
//         });
//     }
// }

// function playSuggestionAudio() {
//     const report = JSON.parse(localStorage.getItem('quizReport'));
//     if (report && report.suggestions.audioText && 'speechSynthesis' in window) {
//         const speech = new SpeechSynthesisUtterance(report.suggestions.audioText);
//         speech.rate = 0.9;
//         speech.pitch = 1;
//         speechSynthesis.speak(speech);
//     }
// }

// function retakeQuiz() {
//     if (confirm('Start a new quiz? Your current report will be saved.')) {
//         // Reset quiz state
//         currentQuestionIndex = 0;
//         score = 0;
//         wrongAnswers = [];
//         studentAnswers = [];
//         selectedOptionIndex = -1;
//         quizStartTime = null;
        
//         // Redirect to quiz page
//         window.location.href = 'quiz.html';
//     }
// }

// function viewDetailedReport() {
//     const report = JSON.parse(localStorage.getItem('quizReport'));
//     if (!report) return;
    
//     // Create a printable report
//     const printWindow = window.open('', '_blank');
//     printWindow.document.write(`
//         <html>
//         <head>
//             <title>Quiz Report - ${report.studentName}</title>
//             <style>
//                 body { font-family: Arial, sans-serif; padding: 20px; }
//                 h1 { color: #333; }
//                 .score { font-size: 24px; margin: 20px 0; }
//                 .subject { margin: 15px 0; padding: 10px; border-left: 4px solid #2196F3; }
//                 .suggestion { background: #f0f7ff; padding: 15px; border-radius: 5px; margin: 20px 0; }
//             </style>
//         </head>
//         <body>
//             <h1>📊 Quiz Performance Report</h1>
//             <p>Student: ${report.studentName}</p>
//             <p>Date: ${new Date(report.date).toLocaleString()}</p>
            
//             <div class="score">
//                 <h2>Overall Score: ${report.score}/${report.totalQuestions} (${Math.round((report.score/report.totalQuestions)*100)}%)</h2>
//             </div>
            
//             <h3>Subject-wise Performance:</h3>
//             ${Object.entries(report.subjectPerformance).map(([subject, data]) => `
//                 <div class="subject">
//                     <strong>${subject.toUpperCase()}:</strong> ${data.correct}/${data.total} (${data.percentage}%)
//                 </div>
//             `).join('')}
            
//             <div class="suggestion">
//                 <h3>AI Suggestions:</h3>
//                 <p>${report.suggestions.text.replace(/\n/g, '<br>')}</p>
//             </div>
            
//             <p><small>Generated by EdTech Quiz Portal</small></p>
//             <script>
//                 window.onload = function() { window.print(); }
//             </script>
//         </body>
//         </html>
//     `);
//     printWindow.document.close();
// }


// ======================
// CONFIGURATION
// ======================
const API_BASE = "http://localhost:3000/api";

// ======================
// GLOBAL VARIABLES
// ======================
let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let wrongAnswers = [];
let studentAnswers = [];
let selectedOptionIndex = -1;
let quizStartTime = null;

// ======================
// COMMON HELPERS
// ======================
function stopAudio() {
  if ("speechSynthesis" in window) {
    speechSynthesis.cancel();
  }
}

function getSubjectIcon(subject) {
  return {
    science: "fa-flask",
    geography: "fa-globe",
    english: "fa-book",
    history: "fa-landmark"
  }[subject] || "fa-question";
}

function formatTopicName(topic) {
  return topic
    .split("-")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

// ======================
// LOGIN PAGE
// ======================
if (location.pathname.includes("index.html") || location.pathname === "/") {
 document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("errorMessage");

    if (!loginForm) return;

    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        errorMessage.textContent = "";

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        try {
            const res = await fetch(`${API_BASE}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();
            console.log('data: ', data);

            if (!res.ok) {
                errorMessage.textContent = data.message || "Login failed";
                return;
            }

            // SAVE USER
            localStorage.setItem("studentId", data.data.id);
            localStorage.setItem("studentEmail", data.data.email);

            // REDIRECT
            window.location.href = "quiz.html";

        } catch (err) {
            console.log('err: ', err);
            errorMessage.textContent = "Server not reachable";
        }
    });
});
}

// ======================
// QUIZ PAGE
// ======================
if (location.pathname.includes("quiz.html")) {
  document.addEventListener("DOMContentLoaded", async () => {
    quizStartTime = new Date();

    const res = await fetch(`${API_BASE}/questions`);
    quizQuestions = (await res.json()).questions;

    loadQuestion();
  });
}

async function fetchQuestions() {
    try {
        const response = await fetch("https://your-api-endpoint.com/quiz"); // <-- replace with your API URL
        if (!response.ok) throw new Error("Failed to fetch questions from API");
        questions = await response.json();

        if (questions.length === 0) {
            alert("No questions available at the moment.");
            return;
        }

        // Start the quiz after fetching
        hideInstructions();
    } catch (error) {
        console.error(error);
        alert("Error fetching questions. Please try again later.");
    }
}


function loadQuestion() {
    const quizBox = document.getElementById("quizBox");
    const q = questions[currentQuestionIndex];

    quizBox.innerHTML = `
        <h3>${q.subject}: ${q.question}</h3>
        <ul class="options-list">
            ${q.options.map((opt, idx) => `<li><button onclick="submitAnswer(${idx})">${opt}</button></li>`).join('')}
        </ul>
    `;

    // Update progress
    document.getElementById("currentSubject").innerText = q.subject;
    document.getElementById("currentQuestion").innerText = currentQuestionIndex + 1;
}


function selectOption(i) {
  quizQuestions[currentQuestionIndex].options.forEach((_, idx) => {
    document.getElementById(`opt${idx}`).classList.remove("selected");
  });

  document.getElementById(`opt${i}`).classList.add("selected");
  selectedOptionIndex = i;
}

function checkAnswer() {
  if (selectedOptionIndex === -1) return alert("Select an answer");

  const q = quizQuestions[currentQuestionIndex];
  const selected = q.options[selectedOptionIndex];
  const correct = selected === q.correctAnswer;

  studentAnswers.push({
    question: q.question,
    answer: selected,
    correct,
    subject: q.subject,
    topic: q.topic
  });

  if (correct) {
    score++;
    currentQuestionIndex++;
    loadQuestion();
  } else {
    wrongAnswers.push({
      question: q.question,
      studentAnswer: selected,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation
    });

    showExplanation(q, selected);
  }
}

function showExplanation(q, selected) {
  stopAudio();

  document.getElementById("quizBox").innerHTML = `
    <h3>❌ Incorrect</h3>
    <p>Your answer: ${selected}</p>
    <p>Correct answer: ${q.correctAnswer}</p>
    <p>${q.explanation}</p>
    <button onclick="nextQuestion()">Next</button>
  `;

  if ("speechSynthesis" in window) {
    const speech = new SpeechSynthesisUtterance(q.audioText);
    speechSynthesis.speak(speech);
  }
}

function nextQuestion() {
  stopAudio();
  currentQuestionIndex++;
  loadQuestion();
}

// ======================
// SUBMIT QUIZ
// ======================
async function submitQuiz() {
  const subjectPerformance = {};

  studentAnswers.forEach(a => {
    if (!subjectPerformance[a.subject]) {
      subjectPerformance[a.subject] = { correct: 0, total: 0 };
    }
    subjectPerformance[a.subject].total++;
    if (a.correct) subjectPerformance[a.subject].correct++;
  });

  Object.keys(subjectPerformance).forEach(s => {
    const d = subjectPerformance[s];
    d.percentage = Math.round((d.correct / d.total) * 100);
  });

  const report = {
    studentEmail: localStorage.getItem("studentEmail"),
    studentName: localStorage.getItem("studentName"),
    score,
    totalQuestions: quizQuestions.length,
    wrongAnswers,
    subjectPerformance,
    date: new Date()
  };

  await fetch(`${API_BASE}/reports`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(report)
  });

  localStorage.setItem("quizReport", JSON.stringify(report));
  window.location.href = "report.html";
}

// ======================
// REPORT PAGE
// ======================
if (location.pathname.includes("report.html")) {
  document.addEventListener("DOMContentLoaded", () => {
    const report = JSON.parse(localStorage.getItem("quizReport"));
    if (!report) return (location.href = "index.html");

    document.getElementById("score").textContent =
      report.score + "/" + report.totalQuestions;

    const container = document.getElementById("subjects");
    container.innerHTML = "";

    Object.entries(report.subjectPerformance).forEach(([s, d]) => {
      container.innerHTML += `
        <div>
          <strong>${s.toUpperCase()}</strong> : ${d.percentage}%
        </div>
      `;
    });
  });
}

// ======================
// LOGOUT
// ======================
function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}
