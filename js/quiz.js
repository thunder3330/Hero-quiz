   // Create the questions
let questions = [
    {
    id: 1,
    question: "Whick flavor cake do you want?",
    answer: "Wakanda",       
    options: [
    "Lambina",
    "Wakanda",
    "Makanda",
    "Wallanda",
    ]
    },
    {
    id: 2,
    question: "Who is Thanos the son of?",
    answer: "A'lars",
    options: [
    "Karen",
    "A'lars",
    "En Sabah Nur",
    "Joe"
    ]
    },
    {
    id: 3,
    question: "What is the name of Thor's mother?",
    answer: "Frigga",
    options: [
    "Karen",
    "Frigga",
    "Aegir",
    "Alfdis"
    ]
    },
    {
    id: 4,
    question: "What was Captain America's height before he was transformed into a super-soldier?",
    answer: "5'4",
    options: [
    "4'11",
    "5'1",
    "5'9",
    "5'4"
    ]
    },
    {
      id: 5,
      question: "In which movie does peter parker works with Doctor strange",
      answer: "Spider-man no way Home",
      options: [
      "Spider-man no way Home",
      "Spider into spider verse",
      "Avengers Infinity war",
      "Avengers Endgame"
      ]
      },
      {  
    id: 6,
    question: "What was the name of the dwarf on Nidavellir",
    answer: "Eitri",
    options: [
    "Steve",
    "Walsh",
    "Eitri",
    "Erik"
    ]
    },
    {
         
    id: 7,
    question: "Finish this line from Captain America: And Hulk, ___",
    answer: "Kick ass",
    options: [
    "Smash",
    "Kick ass",
    "Do it",
    "Good Luck"
    ]
    },
   ]
    
    let value = JSON.stringify(questions);
    localStorage.setItem("question", value);
    
    
    let question_count = 0;
    let points = 0;
    
    window.onload = function() {
    show(question_count);
    };
    
    function next() {
    // if the question is last then redirect to final page
    if (question_count == questions.length - 1)
    {
    location.href = "end.html";
    }
    console.log(question_count);
    
    let user_answer = document.querySelector("li.option.active").innerHTML;
    // check the answer is right or wrong
    if (user_answer == questions[question_count].answer) {
    points += 1;
    sessionStorage.setItem("points", points);
    }
    else{
    points += 0;
    sessionStorage.setItem("points", points);
    }
    console.log(points);
    
    question_count++;
    show(question_count);
    }
    
    function show(count) {
    let question = document.getElementById("questions");
    let [first, second, third, fourth] = questions[count].options;
    
    question.innerHTML = `
    <h2>${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>
    `;
    toggleActive();
    }
    
    function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
    for (let i = 0; i < option.length; i++) {
    if (option[i].classList.contains("active"))
    {
    option[i].classList.remove("active");
    }
    }
    option[i].classList.add("active");
    };
    }
    }