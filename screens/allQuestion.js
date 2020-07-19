const results = [
  {
    category: "Mythology",
    type: "multiple",
    difficulty: "hard",
    question:
      "Talos, the mythical giant bronze man, was the protector of which island?",
    correct_answer: "Crete",
    incorrect_answers: ["Sardinia", "Sicily", "Cyprus"],
  },
  {
    category: "Art",
    type: "multiple",
    difficulty: "hard",
    question:
      "Painter Piet Mondrian (1872 - 1944) was a part of what movement?",
    correct_answer: "Neoplasticism",
    incorrect_answers: ["Precisionism", "Cubism", "Impressionism"],
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question: "Who is the artist of the recent new album the Uncanny Valley?",
    correct_answer: "Perturbator",
    incorrect_answers: ["Carpenter Brut", "GOST", "Dan Terminus "],
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the song &ldquo;The Ultimate Showdown of Ultimate Destiny,&rdquo; who is the only one to survive the battle?",
    correct_answer: "Mr. Rogers",
    incorrect_answers: ["Batman", "Chuck Norris", "Godzilla"],
  },
  {
    category: "Entertainment: Cartoon & Animations",
    type: "multiple",
    difficulty: "easy",
    question:
      "What was the name of the sea witch in the 1989 Disney film &quot;The Little Mermaid&quot;?",
    correct_answer: "Ursula",
    incorrect_answers: ["Madam Mim", "Maleficent", "Lady Tremaine"],
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "Montreal is in which Canadian province?",
    correct_answer: "Quebec",
    incorrect_answers: ["Ontario", "Nova Scotia", "Alberta"],
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "On what day did Germany invade Poland?",
    correct_answer: "September 1, 1939",
    incorrect_answers: ["December 7, 1941", "June 22, 1941", "July 7, 1937"],
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who played Batman in the 1997 film &quot;Batman and Robin&quot;?",
    correct_answer: "George Clooney",
    incorrect_answers: ["Michael Keaton", "Val Kilmer", "Christian Bale"],
  },
  {
    category: "Entertainment: Board Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "At the start of a standard game of the Monopoly, if you throw a double six, which square would you land on?",
    correct_answer: "Electric Company",
    incorrect_answers: ["Water Works", "Chance", "Community Chest"],
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "hard",
    question:
      "The mountainous Khyber Pass connects which of the two following countries?",
    correct_answer: "Afghanistan and Pakistan",
    incorrect_answers: [
      "India and Nepal",
      "Pakistan and India",
      "Tajikistan and Kyrgyzstan",
    ],
  },
  {
    category: "Science: Mathematics",
    type: "boolean",
    difficulty: "medium",
    question: "111,111,111 x 111,111,111 = 12,345,678,987,654,321",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the setting of the show &quot;Parks and Recreation&quot;?",
    correct_answer: "Pawnee, Indiana",
    incorrect_answers: [
      "Eagleton, Indiana",
      "Pasadena, California",
      "London, England",
    ],
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question: "The collapse of the Soviet Union took place in which year?",
    correct_answer: "1991",
    incorrect_answers: ["1992", "1891", "1990"],
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "A factiod is what?",
    correct_answer: "A falsehood",
    incorrect_answers: ["Useless trivia", "A tiny fact", "A scientific figure"],
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "easy",
    question: "Which of these movies did Jeff Bridges not star in?",
    correct_answer: "The Hateful Eight",
    incorrect_answers: ["Tron: Legacy", "The Giver", "True Grit"],
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which band is the longest active band in the world with no breaks or line-up changes?",
    correct_answer: "U2",
    incorrect_answers: ["Radiohead", "Rush", "Rolling Stones"],
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "Which of these colours is NOT featured in the logo for Google?",
    correct_answer: "Pink",
    incorrect_answers: ["Yellow", "Blue", "Green"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "Meryl Silverburgh, a video game character from the Metal Gear series, was originally a character in which game?",
    correct_answer: "Policenauts",
    incorrect_answers: [
      "Gradius",
      "Contra",
      "Castlevania: Symphony of the Night",
    ],
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "The term &quot;scientist&quot; was coined in which year?",
    correct_answer: "1833",
    incorrect_answers: ["1933", "1942", "1796"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the game Paper Mario for the Nintendo 64 the first partner you meet is a Goomba, what is its name?",
    correct_answer: "Goombario",
    incorrect_answers: ["Goombella", "Goombarry", "Goomby"],
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which country does the power metal band &quot;Sabaton&quot; originate from?",
    correct_answer: "Sweden",
    incorrect_answers: ["Germany", "United States", "Finland"],
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "What year did the Boxing Day earthquake &amp; tsunami occur in the Indian Ocean?",
    correct_answer: "2004",
    incorrect_answers: ["2006", "2008", "2002"],
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question: "What is the nickname for the US state Delaware?",
    correct_answer: "The First State",
    incorrect_answers: [
      "The Fiftieth State",
      "The Second State",
      "The Sixteenth State",
    ],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "Who is the leader of Team Instinct in Pok&eacute;mon Go?",
    correct_answer: "Spark",
    incorrect_answers: ["Candela", "Blanche", "Willow"],
  },
  {
    category: "Entertainment: Japanese Anime & Manga",
    type: "multiple",
    difficulty: "easy",
    question:
      "In &quot;Future Diary&quot;, what is the name of Yuno Gasai&#039;s Phone Diary?",
    correct_answer: "Yukiteru Diary",
    incorrect_answers: ["Murder Diary", "Escape Diary ", "Justice Diary "],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the default alias that Princess Garnet goes by in Final Fantasy IX?",
    correct_answer: "Dagger",
    incorrect_answers: ["Dirk", "Garnet", "Quina"],
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "hard",
    question: "The key of sharps does the key of G# minor contain?",
    correct_answer: "5",
    incorrect_answers: ["3", "7", "0"],
  },
  {
    category: "Entertainment: Comics",
    type: "multiple",
    difficulty: "medium",
    question:
      "In &quot;Sonic the Hedgehog&quot; comic, who was the creator of Roboticizer? ",
    correct_answer: "Professor Charles the Hedgehog",
    incorrect_answers: ["Julian Robotnik", "Ivo Robotnik", "Snively Robotnik"],
  },
  {
    category: "Mythology",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which figure from Greek mythology traveled to the underworld to return his wife Eurydice to the land of the living?",
    correct_answer: "Orpheus",
    incorrect_answers: ["Hercules", "Perseus", "Daedalus"],
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "When did Norway become free from Sweden?",
    correct_answer: "1905",
    incorrect_answers: ["1925", "1814", "1834"],
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the 1999 movie Fight Club, which of these is not a rule of the &quot;fight club&quot;?",
    correct_answer: "Always wear a shirt",
    incorrect_answers: [
      "You do not talk about FIGHT CLUB",
      "Only two guys to a fight",
      "Fights will go on as long as they have to",
    ],
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "medium",
    question: "What is the capital of Slovakia?",
    correct_answer: "Bratislava",
    incorrect_answers: ["Sofia", "Ljubljana", "Sarajevo"],
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question: "How many calories are in a 355 ml can of Pepsi Cola?",
    correct_answer: "150",
    incorrect_answers: ["200", "100", "155"],
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "easy",
    question: "What is the name of Sherlock Holmes&#039;s brother?",
    correct_answer: "Mycroft Holmes",
    incorrect_answers: [
      "Mederi Holmes",
      "Martin Holmes",
      "Herbie Hancock Holmes",
    ],
  },
  {
    category: "Entertainment: Japanese Anime & Manga",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the &quot;Sailor Moon&quot; series, what is Sailor Jupiter&#039;s civilian name?",
    correct_answer: "Makoto Kino",
    incorrect_answers: ["Minako Aino", "Usagi Tsukino", "Rei Hino"],
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question:
      "Apple co-founder Steve Jobs died from complications of which form of cancer?",
    correct_answer: "Pancreatic",
    incorrect_answers: ["Bone", "Liver", "Stomach"],
  },
  {
    category: "Politics",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who succeeded Joseph Stalin as General Secretary of the Communist Party of the Soviet Union?",
    correct_answer: "Nikita Khrushchev",
    incorrect_answers: [
      "Leonid Brezhnev",
      "Mikhail Gorbachev",
      "Boris Yeltsin",
    ],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "The walls of the Goldenrod City Gym in &quot;Pok&eacute;mon Gold and Silver&quot; are arranged in the shape of which Pok&eacute;mon?",
    correct_answer: "Clefairy",
    incorrect_answers: ["Bulbasaur", "Pikachu", "Pidgey"],
  },
  {
    category: "Entertainment: Comics",
    type: "multiple",
    difficulty: "medium",
    question:
      "In Calvin and Hobbes, what is the name of the babysitter&#039;s boyfriend?",
    correct_answer: "Charlie",
    incorrect_answers: ["Dave", "Charles", "Nathaniel"],
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "medium",
    question: "On the NBC show Community what was Star Burns&#039; real name?",
    correct_answer: "Alex",
    incorrect_answers: ["Todd", "Neal", "Grimus"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which pop singer was brought in by SEGA to produce the music for &quot;Sonic the Hedgehog 3&quot;?",
    correct_answer: "Michael Jackson ",
    incorrect_answers: ["Prince", "George Michael", "Vanilla Ice "],
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "easy",
    question: "What is the frontman&#039;s name of the metal band Megadeth?",
    correct_answer: "Dave Mustaine",
    incorrect_answers: ["Rob Halford", "Vince Neil", "James Hetfield"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "What song is played during the ending credits of Guitar Hero: World Tour?",
    correct_answer: "Dream Theater - Pull Me Under",
    incorrect_answers: [
      "King Crimson - 21st Century Schizoid Man",
      "Dragonforce - Through The Fire &amp; The Flames",
      "Lynyrd Skynyrd - Free Bird",
    ],
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question: "Where would you find the &quot;Spanish Steps&quot;?",
    correct_answer: "Rome, Italy",
    incorrect_answers: [
      "Barcelona, Spain",
      "Berlin, Germany",
      "London, England",
    ],
  },
  {
    category: "Entertainment: Music",
    type: "boolean",
    difficulty: "easy",
    question:
      "The 2011 movie &quot;The Adventures of Tintin&quot; was directed by Steven Spielberg.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "In 1845, a series of wars named after which indigenous people began in New Zealand?",
    correct_answer: "Māori",
    incorrect_answers: ["Papuans", "Aborigines", "Polynesians"],
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the name of the fictional retro-mod band starring Austin Powers as the lead vocalist?",
    correct_answer: "Ming Tea",
    incorrect_answers: ["Cough Fi", "Spear Mint", "Mister E"],
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "easy",
    question: "Which music publication is often abbreviated to NME?",
    correct_answer: "New Musical Express",
    incorrect_answers: [
      "New Metro Entertainment",
      "Next Musical Enterprise",
      "North Manchester Express",
    ],
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question: "What album did Gorillaz release in 2017?",
    correct_answer: "Humanz",
    incorrect_answers: ["Plastic Beach", "The Fall", "Demon Days"],
  },
];

const array = [];
results.map(({ question, incorrect_answers, correct_answer }) => {
  const answers = [];
  incorrect_answers.map((text, index) => {
    answers.push({ id: index + 1, text });
  });
  answers.push({ id: "4", text: correct_answer, correct: true });
  answers.sort(() => Math.random() - 0.5);
  array.push({
    question,
    answers,
  });
});

export default array;
