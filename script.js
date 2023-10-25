const quizData=[
  {
    "question": "What is the maximum addressable memory in 8086 microprocessor?",
    "options": ["64 KB", "1 MB", "16 MB", "4 GB"],
    "answer": "1 MB"
  },
  {
    "question": "Which company introduced the 8086 microprocessor?",
    "options": ["Intel", "AMD", "Motorola", "IBM"],
    "answer": "Intel"
  },
  {
    "question": "What is the data bus width of 8086 microprocessor?",
    "options": ["8 bits", "16 bits", "32 bits", "64 bits"],
    "answer": "16 bits"
  },
  {
    "question": "What is the clock speed of the original 8086 microprocessor?",
    "options": ["2 MHz", "4.77 MHz", "1 GHz", "500 MHz"],
    "answer": "4.77 MHz"
  },
  {
    "question": "Which addressing mode of 8086 allows addition of a constant value to the contents of a register?",
    "options": ["Register Indirect", "Immediate", "Direct", "Base Register"],
    "answer": "Immediate"
  },
  {
    "question": "What is the size of the accumulator register in 8051 microcontroller?",
    "options": ["8 bits", "16 bits", "32 bits", "64 bits"],
    "answer": "8 bits"
  },
  {
    "question": "In 8051 microcontroller, what is the function of RST 7.5 pin?",
    "options": ["Reset", "Interrupt", "Power Supply", "Clock Input"],
    "answer": "Reset"
  },
  {
    "question": "Which type of memory is used for both program and data storage in 8051 microcontroller?",
    "options": ["RAM", "ROM", "Cache Memory", "Flash Memory"],
    "answer": "ROM"
  },
  {
    "question": "What is the size of the data bus in 8255 PPI (Programmable Peripheral Interface)?",
    "options": ["4 bits", "8 bits", "16 bits", "32 bits"],
    "answer": "8 bits"
  },
  {
    "question": "How many I/O ports are available in 8255 PPI?",
    "options": ["8", "16", "24", "32"],
    "answer": "24"
  },
  {
    "question": "Which mode of operation in 8255 PPI allows the I/O ports to function as simple input/output ports?",
    "options": ["Mode 0", "Mode 1", "Mode 2", "Mode 3"],
    "answer": "Mode 0"
  },
  {
    "question": "What is the function of the GATE pin in 8254 PIT (Programmable Interval Timer)?",
    "options": ["Start Timer", "Stop Timer", "Enable/Disable Counting", "Reset Timer"],
    "answer": "Enable/Disable Counting"
  },
  {
    "question": "How many counters are there in 8254 PIT?",
    "options": ["1", "2", "3", "4"],
    "answer": "3"
  },
  {
    "question": "What is the maximum number of clock cycles in Mode 2 of 8254 PIT before the output toggles?",
    "options": ["65536", "32768", "16384", "8192"],
    "answer": "65536"
  },
  {
    "question": "Which register is used to configure the mode of operation in 8254 PIT?",
    "options": ["Control Register", "Status Register", "Data Register", "Interrupt Register"],
    "answer": "Control Register"
  },
  {
    "question": "What is the size of the address bus in 8086 microprocessor?",
    "options": ["16 bits", "20 bits", "24 bits", "32 bits"],
    "answer": "20 bits"
  },
  {
    "question": "Which addressing mode of 8086 allows accessing data from a memory location using a base register and an index register?",
    "options": ["Base-Register Indirect", "Indexed", "Base-Indexed", "Relative"],
    "answer": "Base-Indexed"
  },
  {
    "question": "In 8051 microcontroller, which register is used for both input and output operations?",
    "options": ["A Register", "B Register", "D Register", "R Register"],
    "answer": "A Register"
  },
  {
    "question": "What is the purpose of the ALE pin in 8051 microcontroller?",
    "options": ["Address Latch Enable", "Data Latch Enable", "Interrupt Enable", "Clock Enable"],
    "answer": "Address Latch Enable"
  },
  {
    "question": "Which mode of operation in 8254 PIT provides an automatic delay or time measurement?",
    "options": ["Mode 0", "Mode 1", "Mode 2", "Mode 3"],
    "answer": "Mode 2"
  },
  {
    "question": "What is the function of the RD and WR signals in 8086 microprocessor?",
    "options": ["Read and Write Data", "Reset and Wait", "Ready and Wait", "Restart and Write"],
    "answer": "Ready and Wait"
  },
  {
    "question": "In 8051 microcontroller, which register is used to store the address of the next instruction to be executed?",
    "options": ["DPTR", "PC", "R0", "ACC"],
    "answer": "PC"
  },
  {
    "question": "Which type of interrupt has the highest priority in 8051 microcontroller?",
    "options": ["External Interrupt", "Timer Interrupt", "Serial Interrupt", "Software Interrupt"],
    "answer": "External Interrupt"
  },
  {
    "question": "What is the purpose of the GND pin in 8255 PPI?",
    "options": ["Ground", "Data Output", "Clock Input", "Power Supply"],
    "answer": "Ground"
  }
];

  
  const quizContainer = document.getElementById('quiz');
  const resultContainer = document.getElementById('result');
  const submitButton = document.getElementById('submit');
  const retryButton = document.getElementById('retry');
  const showAnswerButton = document.getElementById('showAnswer');
  
  let attempted=[];
  let score = 0;
  let incorrectAnswers = [];
  let i=0;
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  function displayQuestion() {
    do{
      i=Math.floor(Math.random()* quizData.length)
    }while(attempted.includes(i))
    console.log(i);
    console.log(attempted);
    const questionData = quizData[i];
    attempted.push(i);
  
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = questionData.question;
  
    const optionsElement = document.createElement('div');
    optionsElement.className = 'options';
  
    const shuffledOptions = [...questionData.options];
    shuffleArray(shuffledOptions);
  
    for (let i = 0; i < shuffledOptions.length; i++) {
      const option = document.createElement('label');
      option.className = 'option';
  
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'quiz';
      radio.value = shuffledOptions[i];
  
      const optionText = document.createTextNode(shuffledOptions[i]);
  
      option.appendChild(radio);
      option.appendChild(optionText);
      optionsElement.appendChild(option);
    }
  
    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    if (selectedOption) {
      const answer = selectedOption.value;
      if (answer === quizData[i].answer) {
        score++;
      } else {
        incorrectAnswers.push({
          question: quizData[i].question,
          incorrectAnswer: answer,
          correctAnswer: quizData[i].answer,
        });
      }
      selectedOption.checked = false;
      if (attempted.length < 10) {
        displayQuestion();
      } else {
        displayResult();
      }
    }
  }
  
  function displayResult() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'inline-block';
    resultContainer.innerHTML = `You scored ${score} out of ${attempted.length}!`;
  }
  
  function retryQuiz() {
    i = 0;
    score = 0;
    incorrectAnswers = [];
    quizContainer.style.display = 'block';
    submitButton.style.display = 'inline-block';
    retryButton.style.display = 'none';
    showAnswerButton.style.display = 'none';
    resultContainer.innerHTML = '';
    displayQuestion();
  }
  
  function showAnswer() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'none';
  
    let incorrectAnswersHtml = '';
    for (let i = 0; i < incorrectAnswers.length; i++) {
      incorrectAnswersHtml += `
        <p>
          <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
          <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
          <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
        </p>
      `;
    }
  
    resultContainer.innerHTML = `
      <p>You scored ${score} out of ${quizData.length}!</p>
      <p>Incorrect Answers:</p>
      ${incorrectAnswersHtml}
    `;
  }
  
  submitButton.addEventListener('click', checkAnswer);
  retryButton.addEventListener('click', retryQuiz);
  showAnswerButton.addEventListener('click', showAnswer);
  
  displayQuestion();
