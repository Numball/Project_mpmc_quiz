const quizData = [
    {
      question: 'KAKA',
      options: ['sas', 'ds', 'wa', 'sdz'],
      answer: 'sas',
    },
    {
      question: 'fuas',
      options: ['jdsas', 'sadka', 'asda', 'saod'],
      answer: 'saod',
    },
    {
      question: 'suyagd',
      options: ['bab', 'sda', 'dwa', 'sdaw'],
      answer: 'sdaw',
    },
    {
      question: 'taws',
      options: ['sadwas', 'sad', 'bad', 'dad'],
      answer: 'sadwas',
    },
    {
      question: 'dsawsa',
      options: ['sdaw', 'wsad', 'dwa', 'wads'],
      answer: 'wads',
    },
    {
      question: 'Wsad',
      options: ['as', 'vs', 'we', 'Fe'],
      answer: 'we',
    },
    {
      question: 'jhgjh',
      options: ['wreae', 'Vax', 'dsf', 'tyw'],
      answer: 'tyw',
    },
    {
      question: 'oiajsa',
      options: ['asdw', 'twe', 'zszd', 'dsa'],
      answer: 'asdw',
    },
    {
      question: 'wadsa',
      options: ['rweas', 'tw', 'ws', 'rw'],
      answer: 'rw',
    },
    {
      question: 'sda',
      options: ['sdads', 'fe', 'zs', 'sa'],
      answer: 'zs',
    },
    {
      question:'hello',
      options: ['bye','he','haha','ka'],
      answer:'ka',
    },
    {
      question:'jello',
      options: ['bye','he','haha','ka'],
      answer:'ka',
    },
    {
      question:'BAHAH',
      options: ['bye','he','haha','ka'],
      answer:'ka',
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