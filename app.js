"use strict";

const STORAGE_KEY = "oceanExplorerProgressV1";
const TEACHER_PIN = "0000";

const levels = [
  {
    title: "Sunlight Zone",
    subtitle: "Where ocean life meets the light",
    icon: "☀",
    image: "https://images.unsplash.com/photo-1530053969600-caed2596d242?auto=format&fit=crop&w=1200&q=82",
    imageAlt: "A sea turtle swimming through clear sunlit ocean water",
    fieldNote: "Surface light · 0–200 m",
    questions: [
      { prompt: "What powers most food chains in the Sunlight Zone?", options: ["Sunlight", "Moonlight", "Ocean currents", "Sand"], correct: 0, hint: "Think about what plants need to make food.", fact: "Tiny phytoplankton use sunlight to make food and support huge ocean food webs." },
      { prompt: "Which ocean animal must surface to breathe air?", options: ["Tuna", "Sea turtle", "Jellyfish", "Starfish"], correct: 1, hint: "This animal has lungs and lays eggs on beaches.", fact: "Sea turtles have lungs, so even deep-diving turtles return to the surface for air." },
      { prompt: "Why do many fish have dark backs and pale bellies?", options: ["To stay warm", "To store sunlight", "To hide from above and below", "To swim faster"], correct: 2, hint: "Predators may look down from above or up from below.", fact: "This camouflage is called countershading." },
      { prompt: "Which tiny ocean organisms make food using sunlight?", options: ["Phytoplankton", "Crabs", "Clams", "Sea stars"], correct: 0, hint: "Their name ends with plankton and they act like tiny plants.", fact: "Phytoplankton create much of Earth's oxygen while supporting ocean food webs." },
      { prompt: "Why is the Sunlight Zone warmer than deeper water?", options: ["Waves make heat", "Sun energy warms it", "Fish warm it", "Sand releases fire"], correct: 1, hint: "Think about the energy reaching the ocean surface.", fact: "Sunlight transfers heat to the upper ocean." },
      { prompt: "Which adaptation helps a dolphin move quickly through water?", options: ["A streamlined body", "Feathers", "Sticky feet", "A square shell"], correct: 0, hint: "A smooth shape reduces resistance from the water.", fact: "Streamlined bodies reduce drag and help marine animals swim efficiently." }
    ]
  },
  {
    title: "Coral City",
    subtitle: "A busy reef neighborhood",
    icon: "♒",
    image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=1200&q=82",
    imageAlt: "Colorful fish swimming above a living coral reef",
    fieldNote: "Reef survey · Tropical shelf",
    questions: [
      { prompt: "Is coral a rock, a plant, or an animal?", options: ["Rock", "Plant", "Animal", "Shell"], correct: 2, hint: "A reef is built by colonies of tiny living polyps.", fact: "Coral polyps are animals, often living with algae that share food with them." },
      { prompt: "What does a cleaner wrasse do for larger fish?", options: ["Builds nests", "Removes parasites", "Finds warm water", "Makes oxygen"], correct: 1, hint: "Its name describes a helpful job.", fact: "Cleaner fish eat parasites and dead skin from visiting reef fish." },
      { prompt: "Warm water can make coral lose its colorful algae. What is this called?", options: ["Coral blooming", "Reef shining", "Coral bleaching", "Tide turning"], correct: 2, hint: "The coral becomes pale or white.", fact: "Bleached coral is stressed and can recover if conditions improve soon enough." },
      { prompt: "Why are coral reefs important to young fish?", options: ["They provide shelter", "They remove all salt", "They stop every wave", "They make the moon shine"], correct: 0, hint: "The reef has many small spaces where animals can hide.", fact: "Reef structures provide nursery habitat and protection for many young animals." },
      { prompt: "What do parrotfish use their beak-like teeth to scrape?", options: ["Algae from reef surfaces", "Clouds from the sky", "Oil from boats", "Feathers from birds"], correct: 0, hint: "This food grows on hard reef surfaces.", fact: "Parrotfish grazing can keep algae from overwhelming coral." },
      { prompt: "Which action best helps protect a coral reef?", options: ["Anchoring on coral", "Touching every animal", "Using reef-safe practices", "Taking coral home"], correct: 2, hint: "Choose the action that leaves the habitat undamaged.", fact: "Careful boating, diving, and waste choices reduce stress on reefs." }
    ]
  },
  {
    title: "Twilight Zone",
    subtitle: "Dim water and daily migrations",
    icon: "◐",
    image: "https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&w=1200&q=82",
    imageAlt: "A school of fish silhouetted in deep blue ocean water",
    fieldNote: "Fading light · 200–1,000 m",
    questions: [
      { prompt: "How much sunlight reaches the Twilight Zone?", options: ["Bright sunlight", "Dim light", "No light at all", "Only red light"], correct: 1, hint: "The zone is between bright surface water and total darkness.", fact: "The mesopelagic Twilight Zone extends roughly 200 to 1,000 meters deep." },
      { prompt: "Why do lanternfish travel upward at night?", options: ["To sleep", "To find warmer rocks", "To feed near the surface", "To breathe air"], correct: 2, hint: "Darkness offers cover from visual predators.", fact: "This nightly journey is part of the largest animal migration on Earth." },
      { prompt: "Which color disappears first as sunlight travels deeper?", options: ["Red", "Blue", "Violet", "Green"], correct: 0, hint: "It has the longest wavelength in visible light.", fact: "Red light is absorbed quickly, so red animals can look black in deep water." },
      { prompt: "What large eyes help Twilight Zone animals do?", options: ["See in dim light", "Breathe underwater", "Make warmer water", "Grow coral"], correct: 0, hint: "Very little sunlight reaches this depth.", fact: "Large, sensitive eyes collect scarce light and help animals find food or avoid predators." },
      { prompt: "What is vertical migration?", options: ["Moving up and down each day", "Swimming around one rock", "Leaving the ocean forever", "Drifting only east"], correct: 0, hint: "Many animals change depth between day and night.", fact: "Billions of animals rise toward the surface at night and descend by day." },
      { prompt: "Why might a Twilight Zone animal have light organs underneath?", options: ["To match light from above", "To heat the whole ocean", "To grow seaweed", "To create air"], correct: 0, hint: "A predator below may look upward.", fact: "Counterillumination uses bioluminescence to hide an animal's silhouette." }
    ]
  },
  {
    title: "Midnight Zone",
    subtitle: "Life beyond all sunlight",
    icon: "✦",
    image: "https://images.unsplash.com/photo-1559825481-12a05cc00344?auto=format&fit=crop&w=1200&q=82",
    imageAlt: "A diver surrounded by dark blue water and shafts of light",
    fieldNote: "No sunlight · 1,000–4,000 m",
    questions: [
      { prompt: "What produces bioluminescence?", options: ["Reflected sunlight", "A chemical reaction", "Hot seawater", "Tiny batteries"], correct: 1, hint: "Living cells combine special chemicals to release light.", fact: "Bioluminescence can attract prey, confuse predators, or help animals communicate." },
      { prompt: "At 2,000 meters, what is the greatest physical challenge?", options: ["Strong sunlight", "Very low pressure", "Enormous water pressure", "Dry air"], correct: 2, hint: "Imagine the weight of all the water overhead.", fact: "Pressure increases by about one atmosphere for every 10 meters of depth." },
      { prompt: "Why are many deep-sea animals soft-bodied?", options: ["Rigid air spaces can collapse", "They need to fly", "They live on beaches", "Soft bodies make sunlight"], correct: 0, hint: "Gas-filled spaces respond badly to pressure.", fact: "Flexible tissues and few gas spaces help animals tolerate immense pressure." },
      { prompt: "How does an anglerfish attract prey in darkness?", options: ["With a glowing lure", "With sunlight", "With a loud bell", "With green leaves"], correct: 0, hint: "A special light hangs near its mouth.", fact: "The anglerfish's bioluminescent lure draws curious prey close enough to catch." },
      { prompt: "What is the main source of food in much of the Midnight Zone?", options: ["Material sinking from above", "Grass fields", "Tree fruit", "Bread from ships"], correct: 0, hint: "Food falls from productive surface waters.", fact: "Sinking particles and animals carry energy from upper waters into the deep sea." },
      { prompt: "Why can sound be useful in dark ocean water?", options: ["It travels without light", "It creates sunshine", "It removes pressure", "It grows plants"], correct: 0, hint: "Animals cannot rely on vision in total darkness.", fact: "Sound helps some marine animals communicate and sense their surroundings when light is absent." }
    ]
  },
  {
    title: "The Abyss",
    subtitle: "Survival on the deep seafloor",
    icon: "⌄",
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=1200&q=82",
    imageAlt: "A deep underwater reef fading into dark ocean water",
    fieldNote: "Abyssal plain · 4,000 m+",
    questions: [
      { prompt: "What is marine snow?", options: ["Frozen seawater", "Falling bits of organic material", "White sand", "Deep-sea bubbles"], correct: 1, hint: "It drifts down from life in the upper ocean.", fact: "Marine snow carries food and carbon from surface waters into the deep ocean." },
      { prompt: "How can life thrive around a hydrothermal vent without sunlight?", options: ["Chemosynthesis", "Photosynthesis", "Moonlight", "Wind power"], correct: 0, hint: "Microbes use energy stored in vent chemicals.", fact: "Chemosynthetic microbes form the base of vent food webs." },
      { prompt: "Which tool safely visits the crushing depths of the abyss?", options: ["Sailboat", "Snorkel", "Pressure-resistant submersible", "Surfboard"], correct: 2, hint: "It needs a strong hull and cameras.", fact: "Crewed submersibles and remotely operated vehicles reveal deep-sea ecosystems." },
      { prompt: "What are hydrothermal vents?", options: ["Hot, mineral-rich seafloor springs", "Floating ice caves", "Underwater clouds", "Sunlit beaches"], correct: 0, hint: "Heated water escapes through cracks in the seafloor.", fact: "Vents release superheated, mineral-rich water and support unusual ecosystems." },
      { prompt: "Why do many abyss animals grow slowly?", options: ["Food is scarce and water is cold", "There is too much sunlight", "They breathe dry air", "Waves are too tall"], correct: 0, hint: "Life has less energy available in this cold, deep habitat.", fact: "Cold temperatures and limited food often lead to slow growth and long lifespans." },
      { prompt: "What does an ROV allow scientists to do?", options: ["Explore remotely with cameras", "Dry the ocean floor", "Turn salt into sugar", "Create sunlight"], correct: 0, hint: "ROV means remotely operated vehicle.", fact: "ROVs send video and measurements to scientists aboard a ship." }
    ]
  },
  {
    title: "Ocean Guardian",
    subtitle: "Use science to protect the sea",
    icon: "◎",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=82",
    imageAlt: "An ocean researcher diving beside a coral reef",
    fieldNote: "Field mission · Protect what lives",
    questions: [
      { prompt: "A plastic bottle is blowing toward a storm drain. What is the best action?", options: ["Leave it", "Put it in the correct recycling bin", "Kick it into the road", "Bury it"], correct: 1, hint: "Storm drains can carry litter directly to waterways.", fact: "Stopping litter on land helps keep it out of rivers and oceans." },
      { prompt: "Which seafood choice best supports healthy oceans?", options: ["Any endangered species", "Only the largest fish", "A verified sustainable choice", "Fish caught in protected nurseries"], correct: 2, hint: "Look for trusted guidance about how seafood was caught or farmed.", fact: "Sustainable seafood choices reduce pressure on vulnerable species and habitats." },
      { prompt: "What protects both coastal communities and young fish?", options: ["Healthy mangrove forests", "More concrete everywhere", "Removing seagrass", "Brighter beach lights"], correct: 0, hint: "Its tangled roots slow waves and shelter small animals.", fact: "Mangroves store carbon, reduce coastal erosion, and provide nursery habitat." },
      { prompt: "What is the best way to observe a tide pool animal?", options: ["Watch gently without moving it", "Take it home", "Poke it with a stick", "Leave litter beside it"], correct: 0, hint: "Wild animals are safest when their habitat is left as you found it.", fact: "Respectful observation protects delicate animals from stress and injury." },
      { prompt: "Why should people use less single-use plastic?", options: ["It can become long-lasting ocean litter", "It makes fish fly", "It removes all waves", "It cools the sun"], correct: 0, hint: "Many plastic items are used briefly but remain for years.", fact: "Reducing disposable plastic prevents waste before it can reach waterways." },
      { prompt: "Which project gives scientists useful information about a beach?", options: ["Recording litter during a cleanup", "Hiding every shell", "Feeding wild animals", "Driving over dunes"], correct: 0, hint: "Good science begins with careful observations and records.", fact: "Citizen-science cleanup data helps researchers find and reduce major sources of litter." }
    ]
  }
];

const achievementCatalog = [
  { id: "first-dive", icon: "⚑", name: "First Dive", description: "Complete your first level" },
  { id: "perfect-dive", icon: "★", name: "Perfect Dive", description: "Finish a level with no wrong answers" },
  { id: "deep-diver", icon: "◒", name: "Deep Diver", description: "Reach the Midnight Zone" },
  { id: "resilient", icon: "↻", name: "Resilient Researcher", description: "Learn from a retry" },
  { id: "guardian", icon: "✓", name: "Ocean Guardian", description: "Complete all six levels" },
  { id: "master", icon: "♛", name: "Master Explorer", description: "Earn at least 1,500 points" }
];

const preschoolQuestions = [
  [
    ["What shines on top of the ocean?", ["The sun", "A shoe", "A bed"], 0, "The sun is bright.", "Sunlight helps ocean plants grow."],
    ["Which animal has a shell and flippers?", ["Sea turtle", "Cat", "Chicken"], 0, "It swims and visits beaches.", "Sea turtles swim with strong flippers."],
    ["What do fish use to swim?", ["Fins", "Hands", "Wheels"], 0, "Look at the sides of a fish.", "Fins help fish move and turn."],
    ["Where does a dolphin come to breathe?", ["The surface", "The sand", "A tree"], 0, "It needs air.", "Dolphins breathe air at the surface."],
    ["Which one lives in the ocean?", ["Jellyfish", "Lion", "Cow"], 0, "It has soft, wiggly arms.", "Jellyfish drift and swim in seawater."],
    ["What color is clear ocean water often?", ["Blue", "Orange", "Brown"], 0, "Look at the moving picture.", "Water looks blue because of how light travels through it."]
  ],
  [
    ["Which animal builds a coral reef?", ["Tiny coral", "Dog", "Duck"], 0, "Coral is alive.", "Tiny coral animals build reefs together."],
    ["Where can a little reef fish hide?", ["In the coral", "In a cloud", "Under a chair"], 0, "Coral has many small spaces.", "Reefs are safe homes for young fish."],
    ["Which fish helps clean other fish?", ["Cleaner fish", "Flying fish", "Toy fish"], 0, "Its name tells its job.", "Cleaner fish remove tiny pests."],
    ["What should we do near coral?", ["Look gently", "Stand on it", "Break it"], 0, "Keep the reef safe.", "Gentle visitors help coral stay healthy."],
    ["Is coral an animal?", ["Yes", "No", "A car"], 0, "Tiny polyps are animals.", "A coral colony is made of many little animals."],
    ["What lives around a healthy reef?", ["Many fish", "Farm horses", "Snowmen"], 0, "Reefs are busy ocean homes.", "Healthy reefs support many kinds of life."]
  ],
  [
    ["Is the Twilight Zone bright or dim?", ["Dim", "Very bright", "Dry"], 0, "Only a little light reaches it.", "The Twilight Zone has faint light."],
    ["When do lanternfish swim up?", ["At night", "At lunch", "Never"], 0, "Darkness helps them hide.", "Lanternfish rise at night to eat."],
    ["What helps a fish see in dim water?", ["Big eyes", "Big shoes", "A hat"], 0, "Eyes collect light.", "Large eyes help animals see faint light."],
    ["Which light color vanishes quickly underwater?", ["Red", "Blue", "White"], 0, "Red does not travel far down.", "Red light is absorbed near the surface."],
    ["Do animals move up and down here?", ["Yes", "No", "Only on land"], 0, "They follow food each day.", "Many animals change depth every day."],
    ["What might a deep fish make?", ["A little glow", "A campfire", "A rainbow road"], 0, "Some animals make their own light.", "Ocean animals can glow with bioluminescence." ]
  ],
  [
    ["Is there sunlight in the Midnight Zone?", ["No", "Lots", "Only at noon"], 0, "It is very deep.", "No sunlight reaches the Midnight Zone."],
    ["What can an anglerfish use to find food?", ["A glowing lure", "A kite", "A flower"], 0, "It hangs near its mouth.", "An anglerfish uses light to attract prey."],
    ["Is deep ocean pressure strong?", ["Yes", "No", "It is dry"], 0, "Lots of water presses down.", "Deep water creates enormous pressure."],
    ["What falls down as food?", ["Marine snow", "Hot toast", "Leaves from trees"], 0, "Tiny food bits sink.", "Sinking ocean bits feed deep animals."],
    ["Which body is good in deep water?", ["A soft body", "A balloon body", "A paper body"], 0, "Soft bodies handle pressure.", "Flexible animals cope with deep pressure."],
    ["Can sound travel in dark water?", ["Yes", "No", "Only in sunshine"], 0, "Sound does not need light.", "Sound helps animals in darkness." ]
  ],
  [
    ["What machine explores very deep water?", ["Submersible", "Bicycle", "Bus"], 0, "It has a strong ocean shell.", "Submersibles carry cameras into the deep."],
    ["Are deep-sea vents hot or cold?", ["Hot", "Frozen", "Dry"], 0, "Warm water comes from the seafloor.", "Hydrothermal vents release hot water."],
    ["What does an ROV have to help us see?", ["A camera", "A pillow", "A sail"], 0, "Scientists watch its video.", "ROVs show us the deep seafloor."],
    ["Is food easy to find in the abyss?", ["No", "Yes", "There is cake"], 0, "Very little food reaches it.", "Abyss animals save energy because food is scarce."],
    ["Where is the abyss?", ["On the deep seafloor", "In the sky", "On a playground"], 0, "It is far below the waves.", "The abyss is a vast deep-ocean habitat."],
    ["Can tiny life grow near a vent?", ["Yes", "No", "Only in trees"], 0, "It uses vent chemicals.", "Microbes make food near deep-sea vents." ]
  ],
  [
    ["Where should a plastic bottle go?", ["Recycling bin", "Ocean", "Beach sand"], 0, "Keep it out of the water.", "Bins stop litter reaching the sea."],
    ["How should we watch tide-pool animals?", ["Gently", "By poking", "By taking them"], 0, "Let wild animals stay home.", "Gentle watching protects small animals."],
    ["What can we pick up at a beach cleanup?", ["Litter", "Living coral", "Baby fish"], 0, "Choose rubbish people left.", "Beach cleanups keep trash out of the ocean."],
    ["Which plant home protects baby fish?", ["Mangroves", "Apple trees", "Grass lawn"], 0, "Its roots grow by the sea.", "Mangrove roots shelter young fish."],
    ["Should we use fewer throw-away plastics?", ["Yes", "No", "Only in the ocean"], 0, "Less trash is better.", "Using less plastic protects ocean animals."],
    ["Who can help the ocean?", ["Everyone", "Nobody", "Only fish"], 0, "Small helpful choices matter.", "Everyone can be an Ocean Guardian." ]
  ]
].map(level => level.map(([prompt, options, correct, hint, fact]) => ({ prompt, options, correct, hint, fact })));

const progressDefaults = () => ({
  unlockedLevel: 1,
  completedLevels: [],
  score: 0,
  answers: {},
  answerLog: [],
  achievements: [],
  startedAt: null,
  completedAt: null
});

const defaultState = () => ({
  version: 2,
  activeLearnerId: null,
  learners: []
});

const progressFields = Object.keys(progressDefaults());
const learnerFields = ["learnerName", "learnerAge", "currentRoundId", "rounds"];

function shuffled(items) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const randomValues = new Uint32Array(1);
    crypto.getRandomValues(randomValues);
    const swapIndex = randomValues[0] % (index + 1);
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

function ageBand(age) {
  if (age <= 5) return "preschool";
  if (age <= 9) return "junior";
  if (age >= 13) return "teen";
  return "explorer";
}

function adaptQuestion(question, age, levelIndex, questionIndex) {
  const choices = shuffled(question.options.map((text, index) => ({ text, correct: index === question.correct })));
  const band = ageBand(age);
  const leadIns = band === "preschool"
    ? ["Look and choose!", "Ocean friend asks:", "Can you spot it?"]
    : band === "junior"
      ? ["Ocean clue:", "Dive challenge:", "Explorer question:"]
      : band === "teen"
        ? ["Research challenge:", "Science briefing:", "Field question:"]
        : ["Ocean question:", "Expedition clue:", "Dive research:"];
  const leadIn = leadIns[Math.floor(Math.random() * leadIns.length)];
  const prompt = band === "preschool"
    ? `${leadIn} ${question.prompt}`
    : band === "junior"
      ? `${leadIn} ${question.prompt}`
    : band === "teen"
      ? `${leadIn} ${question.prompt} Choose the most scientifically accurate answer.`
      : `${leadIn} ${question.prompt}`;
  return {
    id: `level-${levelIndex + 1}-concept-${questionIndex + 1}`,
    prompt,
    options: choices.map(choice => choice.text),
    correct: choices.findIndex(choice => choice.correct),
    hint: band === "preschool" || band === "junior" ? `Try this: ${question.hint}` : question.hint,
    fact: band === "teen" ? `Research note: ${question.fact}` : question.fact
  };
}

function visualForAge(levelIndex, age) {
  const sourceIndexes = ageBand(age) === "junior" || ageBand(age) === "preschool"
    ? [0, 1, 2, 3, 4, 0]
    : ageBand(age) === "teen"
      ? [0, 5, 2, 3, 4, 5]
      : [0, 1, 2, 3, 4, 5];
  const source = levels[sourceIndexes[levelIndex]];
  return {
    image: source.image,
    imageAlt: ageBand(age) === "junior" || ageBand(age) === "preschool" ? `Moving 3D cartoon scene for ${levels[levelIndex].title}` : source.imageAlt,
    cartoonLevel: ageBand(age) === "junior" || ageBand(age) === "preschool" ? levelIndex : null,
    preschool: ageBand(age) === "preschool",
    fieldNote: `${levels[levelIndex].fieldNote} · Ages ${ageBand(age) === "preschool" ? "3–5" : ageBand(age) === "junior" ? "6–9" : ageBand(age) === "teen" ? "13+" : "10–12"}`
  };
}

function createRound(age, number) {
  const id = `round-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  return {
    id,
    number,
    age,
    ...progressDefaults(),
    startedAt: new Date().toISOString(),
    questionSets: levels.map((level, levelIndex) => {
      const source = ageBand(age) === "preschool" ? preschoolQuestions[levelIndex] : level.questions;
      return shuffled(source.map((question, questionIndex) => adaptQuestion(question, age, levelIndex, questionIndex)));
    }),
    visuals: levels.map((level, levelIndex) => visualForAge(levelIndex, age))
  };
}

function attachProgressAccessors(savedState) {
  learnerFields.forEach(field => {
    Object.defineProperty(savedState, field, {
      configurable: true,
      get() {
        const learner = getActiveLearner(savedState);
        if (field === "learnerName") return learner?.name || "";
        if (field === "learnerAge") return learner?.age || null;
        return learner?.[field] ?? (field === "rounds" ? [] : null);
      },
      set(value) {
        const learner = getActiveLearner(savedState);
        if (!learner) return;
        if (field === "learnerName") learner.name = value;
        else if (field === "learnerAge") learner.age = value;
        else learner[field] = value;
      }
    });
  });
  progressFields.forEach(field => {
    Object.defineProperty(savedState, field, {
      configurable: true,
      get() {
        return getCurrentRound(savedState)?.[field] ?? progressDefaults()[field];
      },
      set(value) {
        const round = getCurrentRound(savedState);
        if (round) round[field] = value;
      }
    });
  });
  return savedState;
}

function getActiveLearner(savedState = state) {
  return savedState.learners.find(learner => learner.id === savedState.activeLearnerId) || null;
}

function getCurrentRound(savedState = state) {
  const learner = getActiveLearner(savedState);
  return learner?.rounds.find(round => round.id === learner.currentRoundId) || learner?.rounds.at(-1) || null;
}

function createLearner(name, age) {
  const learner = {
    id: `learner-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    name,
    age,
    createdAt: new Date().toISOString(),
    currentRoundId: null,
    rounds: []
  };
  state.learners.push(learner);
  state.activeLearnerId = learner.id;
  return learner;
}

function switchLearner(learnerId) {
  if (!state.learners.some(learner => learner.id === learnerId)) return;
  state.activeLearnerId = learnerId;
  editingProfile = false;
  saveState();
  renderHome();
}

function getRoundLevel(index) {
  const round = getCurrentRound();
  return {
    ...levels[index],
    ...(round?.visuals?.[index] || visualForAge(index, state.learnerAge || 10)),
    questions: round?.questionSets?.[index] || levels[index].questions
  };
}

function beginNewRound() {
  const nextRound = createRound(state.learnerAge, state.rounds.length + 1);
  state.rounds.push(nextRound);
  state.currentRoundId = nextRound.id;
  saveState();
  renderMap();
}

let state = loadState();
let activeLevel = 0;
let activeQuestion = 0;
let wrongChoices = new Set();
let teacherAuthenticated = false;
let editingProfile = false;
let creatingLearner = false;
let choosingLearner = false;
let toastTimer;

const app = document.getElementById("app");
const scoreElement = document.getElementById("header-score");

function loadState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!parsed || typeof parsed !== "object") return attachProgressAccessors(defaultState());
    const normalizeRounds = (rounds, learnerAge) => (rounds || []).map((round, index) => ({
      ...progressDefaults(),
      ...round,
      number: round.number || index + 1,
      age: Number(round.age) || learnerAge || 10,
      visuals: ageBand(Number(round.age) || learnerAge || 10) === "junior"
        ? levels.map((level, levelIndex) => visualForAge(levelIndex, Number(round.age) || learnerAge || 10))
        : round.visuals,
      unlockedLevel: Math.min(6, Math.max(1, Number(round.unlockedLevel) || 1)),
      completedLevels: [...new Set(round.completedLevels || [])].filter(level => level >= 1 && level <= 6),
      achievements: [...new Set(round.achievements || [])].filter(id => achievementCatalog.some(item => item.id === id)),
      score: Math.max(0, Number(round.score) || 0)
    }));
    if (Array.isArray(parsed.learners)) {
      const clean = { ...defaultState(), ...parsed };
      clean.learners = clean.learners.map((learner, index) => {
        const age = Number(learner.age) || 10;
        const rounds = normalizeRounds(learner.rounds, age);
        return {
          ...learner,
          id: learner.id || `learner-imported-${index + 1}`,
          name: learner.name || `Explorer ${index + 1}`,
          age,
          rounds,
          currentRoundId: rounds.some(round => round.id === learner.currentRoundId) ? learner.currentRoundId : rounds.at(-1)?.id || null
        };
      });
      if (!clean.learners.some(learner => learner.id === clean.activeLearnerId)) clean.activeLearnerId = clean.learners[0]?.id || null;
      return attachProgressAccessors(clean);
    }
    const clean = defaultState();
    const age = Number(parsed.learnerAge) || 10;
    if (parsed.learnerName) {
      let rounds;
      if (Array.isArray(parsed.rounds)) rounds = normalizeRounds(parsed.rounds, age);
      else {
        const legacyRound = createRound(age, 1);
        Object.assign(legacyRound, Object.fromEntries(progressFields.map(field => [field, parsed[field] ?? progressDefaults()[field]])));
        rounds = [legacyRound];
      }
      const learner = { id: `learner-migrated-${Date.now()}`, name: parsed.learnerName, age, createdAt: parsed.startedAt || new Date().toISOString(), rounds, currentRoundId: parsed.currentRoundId || rounds.at(-1)?.id || null };
      clean.learners.push(learner);
      clean.activeLearnerId = learner.id;
    }
    return attachProgressAccessors(clean);
  } catch {
    return attachProgressAccessors(defaultState());
  }
}

function saveState() {
  const learner = getActiveLearner();
  if (learner) learner.lastActiveAt = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  scoreElement.textContent = state.score.toLocaleString();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"]/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[character]));
}

function formatDate(value) {
  return value ? new Intl.DateTimeFormat(undefined, { year: "numeric", month: "long", day: "numeric" }).format(new Date(value)) : "Not yet completed";
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function renderCartoonScene(levelIndex, alt) {
  const subjects = [
    `<g class="cartoon-subject turtle" transform="translate(210 110)"><ellipse class="cartoon-accent" cx="90" cy="74" rx="72" ry="50"/><path class="cartoon-highlight" d="M48 48 Q90 16 132 48 Q90 86 48 48Z"/><circle class="cartoon-success" cx="168" cy="67" r="30"/><circle class="cartoon-eye" cx="178" cy="59" r="6"/><path class="cartoon-line" d="M175 76 Q186 84 194 75 M42 108 Q4 132 18 78 M132 108 Q168 138 166 91 M47 43 Q12 15 24 69 M134 42 Q162 10 160 68"/></g>`,
    `<g class="cartoon-subject reef"><path class="cartoon-accent cartoon-line" d="M90 306 Q86 222 124 188 M124 306 Q128 214 174 176 M164 306 Q160 246 202 226 M458 306 Q458 224 426 194 M426 306 Q420 244 390 225"/><g transform="translate(210 112)"><ellipse class="cartoon-warning" cx="90" cy="62" rx="82" ry="48"/><path class="cartoon-accent" d="M12 62 L-46 20 L-38 104Z"/><circle class="cartoon-eye" cx="125" cy="50" r="7"/><path class="cartoon-line" d="M137 72 Q148 80 158 68 M53 37 Q74 62 53 87 M92 27 Q112 62 92 97"/></g></g>`,
    `<g class="cartoon-subject twilight"><g transform="translate(92 105)"><path class="cartoon-accent" d="M0 54 Q62 0 126 54 Q62 108 0 54Z"/><path class="cartoon-warning" d="M126 54 L176 18 L168 91Z"/><circle class="cartoon-eye" cx="35" cy="44" r="7"/><circle class="cartoon-glow" cx="62" cy="55" r="10"/></g><g transform="translate(330 205) scale(.7)"><path class="cartoon-success" d="M0 54 Q62 0 126 54 Q62 108 0 54Z"/><path class="cartoon-accent" d="M126 54 L176 18 L168 91Z"/><circle class="cartoon-eye" cx="35" cy="44" r="7"/><circle class="cartoon-glow" cx="62" cy="55" r="10"/></g></g>`,
    `<g class="cartoon-subject angler" transform="translate(150 92)"><path class="cartoon-accent" d="M34 102 Q66 24 168 42 Q250 54 258 126 Q232 202 126 194 Q38 188 34 102Z"/><path class="cartoon-line" d="M170 54 Q184 -6 242 22 L242 66"/><circle class="cartoon-glow" cx="242" cy="75" r="18"/><circle class="cartoon-eye" cx="174" cy="92" r="10"/><path class="cartoon-mouth" d="M173 138 Q211 166 242 125 Q211 144 173 138Z"/><path class="cartoon-warning" d="M34 102 L-28 52 L-14 146Z"/></g>`,
    `<g class="cartoon-subject abyss"><path class="cartoon-line" d="M110 308 Q112 218 92 175 M154 308 Q158 206 184 164 M486 308 Q482 218 508 180"/><circle class="cartoon-glow" cx="92" cy="164" r="14"/><circle class="cartoon-glow" cx="187" cy="152" r="12"/><circle class="cartoon-glow" cx="510" cy="168" r="14"/><g transform="translate(205 95)"><path class="cartoon-warning" d="M20 70 Q94 12 192 76 L178 148 Q91 184 4 132Z"/><circle class="cartoon-window" cx="99" cy="95" r="42"/><circle class="cartoon-eye" cx="87" cy="90" r="5"/><circle class="cartoon-eye" cx="112" cy="90" r="5"/><path class="cartoon-line" d="M87 109 Q99 119 112 109 M16 103 L-22 80 M184 102 L230 72 M96 44 L96 12"/></g></g>`,
    `<g class="cartoon-subject guardian"><g transform="translate(180 68)"><circle class="cartoon-success" cx="112" cy="86" r="58"/><path class="cartoon-window" d="M66 75 Q112 42 158 75 L149 110 Q112 128 75 110Z"/><circle class="cartoon-eye" cx="94" cy="86" r="7"/><circle class="cartoon-eye" cx="130" cy="86" r="7"/><path class="cartoon-line" d="M99 112 Q112 122 126 112 M112 144 L112 238 M112 166 L54 204 M112 166 L172 202 M112 238 L70 292 M112 238 L158 292"/><path class="cartoon-accent" d="M42 188 Q62 160 83 188 Q64 225 42 188Z M180 188 Q200 160 221 188 Q202 225 180 188Z"/></g><path class="cartoon-warning" d="M458 88 Q490 48 522 88 Q490 130 458 88Z"/></g>`
  ];
  return `<svg class="cartoon-ocean cartoon-level-${levelIndex + 1}" viewBox="0 0 600 360" role="img" aria-label="${escapeHtml(alt)}">
    <rect class="cartoon-water" width="600" height="360" rx="12"/>
    <path class="cartoon-wave" d="M0 62 Q75 28 150 62 T300 62 T450 62 T600 62 V0 H0Z"/>
    <path class="cartoon-sand" d="M0 308 Q90 278 180 310 T360 308 T540 302 T660 312 V360 H0Z"/>
    <g class="cartoon-bubbles"><circle cx="70" cy="104" r="10"/><circle cx="95" cy="72" r="6"/><circle cx="530" cy="138" r="12"/><circle cx="505" cy="105" r="7"/></g>
    ${subjects[levelIndex]}
  </svg>`;
}

function renderFieldImage(level, compact = false) {
  const media = Number.isInteger(level.cartoonLevel)
    ? renderCartoonScene(level.cartoonLevel, level.imageAlt)
    : `<img src="${level.image}" alt="${escapeHtml(level.imageAlt)}" loading="${compact ? "lazy" : "eager"}" decoding="async">`;
  return `
    <figure class="field-image ${Number.isInteger(level.cartoonLevel) ? "cartoon-field" : ""} ${level.preschool ? "preschool-field" : ""} ${compact ? "field-image-compact" : ""}">
      ${media}
      <figcaption><span aria-hidden="true">✎</span> ${escapeHtml(level.fieldNote)}</figcaption>
    </figure>`;
}

function mount(markup, title) {
  app.innerHTML = markup;
  app.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "smooth" });
  document.title = `${title} | Ocean Explorer`;
  scoreElement.textContent = state.score.toLocaleString();
}

function renderHome() {
  const returning = Boolean(state.learnerName && state.learnerAge && !editingProfile && !creatingLearner && !choosingLearner);
  const currentRound = getCurrentRound();
  const showChooser = choosingLearner && state.learners.length > 0;
  mount(`
    <section class="screen home-grid">
      <div>
        <p class="eyebrow">A six-zone science expedition</p>
        <h1>Dive into the unknown.</h1>
        <p class="lead">Journey from sunlit waves to the abyss, meet remarkable ocean life, and become an Ocean Guardian.</p>
        ${returning ? `
          <h2>Welcome back, ${escapeHtml(state.learnerName)}.</h2>
          <p class="muted">Age ${state.learnerAge} · ${state.rounds.length} saved ${state.rounds.length === 1 ? "session" : "sessions"}</p>
          <div class="button-row">
            <button class="primary-button" id="continue-button" type="button">${currentRound?.completedAt ? "Review latest session" : "Continue expedition"}</button>
            <button class="secondary-button" id="new-round-button" type="button">New question session</button>
            <button class="secondary-button" id="change-name-button" type="button">Edit learner profile</button>
            <button class="secondary-button" id="exit-session-button" type="button">Exit learner session</button>
          </div>
        ` : showChooser ? `
          <section class="learner-chooser" aria-labelledby="learner-chooser-title">
            <h2 id="learner-chooser-title">Who is exploring?</h2>
            <p class="muted">Choose your name to continue, or add a new learner.</p>
            <div class="learner-list">
              ${state.learners.map(learner => `<button class="learner-choice" type="button" data-learner-id="${learner.id}"><span class="learner-avatar" aria-hidden="true">${escapeHtml(learner.name.charAt(0).toUpperCase())}</span><span><strong>${escapeHtml(learner.name)}</strong><small>Age ${learner.age} · ${learner.rounds.length} ${learner.rounds.length === 1 ? "session" : "sessions"}</small></span><span aria-hidden="true">›</span></button>`).join("")}
            </div>
            <button class="primary-button" id="chooser-new-learner" type="button">Add new learner</button>
          </section>
        ` : `
          <form class="name-form" id="name-form">
            <label for="learner-name">Explorer name</label>
            <input id="learner-name" name="learnerName" maxlength="32" autocomplete="name" required placeholder="Enter your name" value="${creatingLearner ? "" : escapeHtml(state.learnerName)}">
            <label for="learner-age">Age</label>
            <input id="learner-age" name="learnerAge" type="number" inputmode="numeric" min="3" max="18" required placeholder="3–18" value="${creatingLearner ? "" : state.learnerAge || ""}">
            <p class="muted small">Ages 3–5 get easy questions with moving 3D pictures. Other explorers receive age-matched science challenges.</p>
            <div class="button-row">
              <button class="primary-button" type="submit">${creatingLearner ? "Add learner" : state.rounds.length ? "Save profile" : "Begin expedition"}</button>
              ${state.learners.length ? `<button class="secondary-button" id="cancel-profile" type="button">Cancel</button>` : ""}
            </div>
          </form>
        `}
      </div>
      <div class="hero-art">
        ${renderFieldImage(getCurrentRound() ? getRoundLevel(1) : levels[1])}
        <div class="depth-tag" aria-hidden="true"><strong>6</strong><span>ocean missions</span></div>
      </div>
    </section>`, "Home");

  if (returning) {
    document.getElementById("continue-button").addEventListener("click", renderMap);
    document.getElementById("new-round-button").addEventListener("click", beginNewRound);
    document.getElementById("change-name-button").addEventListener("click", () => {
      editingProfile = true;
      renderHome();
    });
    document.getElementById("exit-session-button").addEventListener("click", () => {
      choosingLearner = true;
      renderHome();
    });
  } else if (showChooser) {
    document.querySelectorAll("[data-learner-id]").forEach(button => button.addEventListener("click", () => {
      choosingLearner = false;
      switchLearner(button.dataset.learnerId);
    }));
    document.getElementById("chooser-new-learner").addEventListener("click", () => {
      choosingLearner = false;
      creatingLearner = true;
      renderHome();
    });
  } else {
    document.getElementById("cancel-profile")?.addEventListener("click", () => {
      editingProfile = false;
      creatingLearner = false;
      choosingLearner = true;
      renderHome();
    });
    document.getElementById("name-form").addEventListener("submit", event => {
      event.preventDefault();
      const name = new FormData(event.currentTarget).get("learnerName").trim();
      const age = Number(new FormData(event.currentTarget).get("learnerAge"));
      if (!name || !Number.isFinite(age) || age < 3 || age > 18) return;
      if (creatingLearner || !getActiveLearner()) createLearner(name, age);
      const currentRound = getCurrentRound();
      const needsAgeMatchedRound = !currentRound || currentRound.age !== age;
      state.learnerName = name;
      state.learnerAge = age;
      editingProfile = false;
      creatingLearner = false;
      if (currentRound && currentRound.age !== age && !currentRound.answerLog.length && !currentRound.completedLevels.length) {
        const refreshedRound = createRound(age, currentRound.number);
        refreshedRound.id = currentRound.id;
        Object.assign(currentRound, refreshedRound);
        saveState();
        renderMap();
      } else if (needsAgeMatchedRound) beginNewRound();
      else {
        saveState();
        renderMap();
      }
    });
  }
}

function renderMap() {
  if (!state.learnerName || !state.learnerAge) return renderHome();
  if (!getCurrentRound()) return beginNewRound();
  const cards = levels.map((level, index) => {
    level = getRoundLevel(index);
    const number = index + 1;
    const unlocked = number <= state.unlockedLevel;
    const completed = state.completedLevels.includes(number);
    return `
      <article class="level-card ${unlocked ? "" : "locked"} ${completed ? "completed" : ""}">
        ${renderFieldImage(level, true)}
        <div class="level-number" aria-hidden="true">${completed ? "✓" : number}</div>
        <p class="eyebrow">Level ${number}</p>
        <h3>${level.title}</h3>
        <p>${level.subtitle}</p>
        <button class="level-action" type="button" data-level="${index}" ${unlocked ? "" : "disabled"}>
          ${completed ? "Dive again" : unlocked ? "Start level" : "Locked"}
        </button>
      </article>`;
  }).join("");

  mount(`
    <section class="screen">
      <div class="screen-heading">
        <div><p class="eyebrow">Question session ${getCurrentRound().number} · Age ${getCurrentRound().age}</p><h1>Choose your next dive.</h1></div>
        <button class="secondary-button" id="map-new-round" type="button">New session</button>
      </div>
      <div class="round-strip" aria-label="Saved question sessions">
        ${state.rounds.map(round => `<button class="round-chip ${round.id === state.currentRoundId ? "active" : ""}" type="button" data-round-id="${round.id}"><strong>Session ${round.number}</strong><span>${round.completedAt ? "Completed" : `${round.completedLevels.length}/6 levels`}</span></button>`).join("")}
      </div>
      <div class="level-grid">${cards}</div>
    </section>`, "Expedition Map");

  document.querySelectorAll("[data-level]:not(:disabled)").forEach(button => {
    button.addEventListener("click", () => startLevel(Number(button.dataset.level)));
  });
  document.getElementById("map-new-round").addEventListener("click", beginNewRound);
  document.querySelectorAll("[data-round-id]").forEach(button => button.addEventListener("click", () => {
    state.currentRoundId = button.dataset.roundId;
    saveState();
    renderMap();
  }));
}

function startLevel(index) {
  if (index + 1 > state.unlockedLevel) return renderMap();
  activeLevel = index;
  activeQuestion = 0;
  wrongChoices = new Set();
  renderQuestion();
}

function renderQuestion() {
  const level = getRoundLevel(activeLevel);
  const question = level.questions[activeQuestion];
  const progress = ((activeQuestion + 1) / level.questions.length) * 100;
  mount(`
    <section class="screen">
      <div class="mission-bar">
        <div>
          <p class="eyebrow">Level ${activeLevel + 1} · ${escapeHtml(level.title)}</p>
          <div class="progress-track" aria-label="Question ${activeQuestion + 1} of ${level.questions.length}">
            <div class="progress-fill" style="width: ${progress}%"></div>
          </div>
        </div>
        <strong>${activeQuestion + 1} / ${level.questions.length}</strong>
      </div>
      <div class="question-layout">
        <aside class="question-scene" aria-label="Habitat observation">
          ${renderFieldImage(level)}
          <p><strong>Observe the habitat.</strong> Use what you know about this ocean zone to investigate the challenge.</p>
        </aside>
        <article class="question-card">
        <p class="eyebrow">Research challenge</p>
        <h2>${escapeHtml(question.prompt)}</h2>
        <div class="answers" id="answers">
          ${question.options.map((option, index) => `<button class="answer-button" type="button" data-answer="${index}">${escapeHtml(option)}</button>`).join("")}
        </div>
        <div class="feedback" id="feedback" role="status" aria-live="polite">
          <span class="muted">Select the best scientific answer.</span>
        </div>
        <div class="button-row">
          <button class="secondary-button" id="leave-level" type="button">Return to map</button>
          <button class="primary-button" id="next-question" type="button" hidden>${activeQuestion === level.questions.length - 1 ? "Finish level" : "Next challenge"}</button>
        </div>
        </article>
      </div>
    </section>`, `Level ${activeLevel + 1}`);

  document.querySelectorAll("[data-answer]").forEach(button => button.addEventListener("click", handleAnswer));
  document.getElementById("leave-level").addEventListener("click", renderMap);
  document.getElementById("next-question").addEventListener("click", () => {
    if (activeQuestion < level.questions.length - 1) {
      activeQuestion += 1;
      wrongChoices = new Set();
      renderQuestion();
    } else {
      completeLevel();
    }
  });
}

function handleAnswer(event) {
  const selected = Number(event.currentTarget.dataset.answer);
  const question = getRoundLevel(activeLevel).questions[activeQuestion];
  const key = `${activeLevel + 1}-${activeQuestion + 1}`;
  const correct = selected === question.correct;
  state.answerLog.push({ level: activeLevel + 1, question: activeQuestion + 1, questionId: question.id, selected, correct, at: new Date().toISOString() });

  if (!correct) {
    wrongChoices.add(selected);
    event.currentTarget.classList.add("wrong");
    event.currentTarget.disabled = true;
    const feedback = document.getElementById("feedback");
    feedback.className = "feedback error";
    feedback.innerHTML = `<strong>Keep exploring.</strong>${escapeHtml(question.hint)}`;
    saveState();
    return;
  }

  const firstRecordedAnswer = !state.answers[key];
  const points = firstRecordedAnswer ? (wrongChoices.size === 0 ? 100 : 50) : 0;
  if (firstRecordedAnswer) {
    state.answers[key] = { correct: true, attempts: wrongChoices.size + 1, points };
    state.score += points;
  }
  document.querySelectorAll("[data-answer]").forEach(button => {
    button.disabled = true;
    if (Number(button.dataset.answer) === question.correct) button.classList.add("correct");
  });
  const feedback = document.getElementById("feedback");
  feedback.className = "feedback success";
  feedback.innerHTML = `<strong>Correct${points ? ` · +${points} points` : ""}</strong>${escapeHtml(question.fact)}`;
  document.getElementById("next-question").hidden = false;
  saveState();
}

function evaluateAchievements(levelNumber) {
  const earned = [];
  const add = id => {
    if (!state.achievements.includes(id)) {
      state.achievements.push(id);
      earned.push(achievementCatalog.find(item => item.id === id));
    }
  };
  if (state.completedLevels.length >= 1) add("first-dive");
  const levelAnswers = getRoundLevel(levelNumber - 1).questions.map((question, index) => state.answers[`${levelNumber}-${index + 1}`]);
  if (levelAnswers.every(answer => answer?.attempts === 1)) add("perfect-dive");
  if (state.completedLevels.includes(4)) add("deep-diver");
  if (Object.values(state.answers).some(answer => answer.attempts > 1)) add("resilient");
  if (state.completedLevels.length === 6) add("guardian");
  if (state.score >= 1500) add("master");
  return earned;
}

function completeLevel() {
  const levelNumber = activeLevel + 1;
  const firstCompletion = !state.completedLevels.includes(levelNumber);
  if (firstCompletion) state.completedLevels.push(levelNumber);
  state.completedLevels.sort((a, b) => a - b);
  if (levelNumber < 6) state.unlockedLevel = Math.max(state.unlockedLevel, levelNumber + 1);
  if (state.completedLevels.length === 6) state.completedAt ||= new Date().toISOString();
  const earned = evaluateAchievements(levelNumber);
  saveState();

  mount(`
    <section class="screen panel completion">
      <div class="completion-symbol" aria-hidden="true">${levels[activeLevel].icon}</div>
      <p class="eyebrow">Level ${levelNumber} complete</p>
      <h1>${firstCompletion ? "Dive accomplished." : "Research refreshed."}</h1>
      <p class="lead">${levelNumber < 6 ? `${escapeHtml(levels[levelNumber].title)} is now ready to explore.` : "You have completed the entire Ocean Explorer expedition."}</p>
      ${earned.map(item => `<div class="achievement-pop"><strong>${item.icon} Achievement unlocked: ${escapeHtml(item.name)}</strong></div>`).join("")}
      <div class="button-row">
        ${levelNumber < 6 ? `<button class="primary-button" id="next-level" type="button">Dive to Level ${levelNumber + 1}</button>` : `<button class="primary-button" id="certificate-button" type="button">View certificate</button>`}
        <button class="secondary-button" id="completion-map" type="button">Expedition map</button>
      </div>
    </section>`, "Level Complete");

  document.getElementById("completion-map").addEventListener("click", renderMap);
  if (levelNumber < 6) document.getElementById("next-level").addEventListener("click", () => startLevel(activeLevel + 1));
  else document.getElementById("certificate-button").addEventListener("click", renderCertificate);
}

function renderProgress() {
  if (!state.learnerName) return renderHome();
  const percent = Math.round((state.completedLevels.length / 6) * 100);
  mount(`
    <section class="screen">
      <div class="screen-heading">
        <div><p class="eyebrow">Explorer log</p><h1>${escapeHtml(state.learnerName)}'s progress</h1></div>
        <button class="secondary-button" id="progress-map" type="button">Expedition map</button>
      </div>
      <div class="stats-grid">
        <div class="stat-card"><span class="stat-value">${percent}%</span><span>Expedition complete</span></div>
        <div class="stat-card"><span class="stat-value">${state.score.toLocaleString()}</span><span>Total points</span></div>
        <div class="stat-card"><span class="stat-value">${state.completedLevels.length}/6</span><span>Levels complete</span></div>
        <div class="stat-card"><span class="stat-value">${state.achievements.length}/6</span><span>Achievements</span></div>
      </div>
      <section class="panel round-history">
        <div class="section-heading"><div><p class="eyebrow">Saved question sessions</p><h2>Session history</h2></div><button class="secondary-button" id="progress-new-round" type="button">New session</button></div>
        <div class="round-list">
          ${state.rounds.slice().reverse().map(round => `<button class="round-row ${round.id === state.currentRoundId ? "active" : ""}" type="button" data-progress-round="${round.id}"><span><strong>Session ${round.number}</strong><small>Age ${round.age} · ${formatDate(round.startedAt)}</small></span><span class="round-status">${round.completedAt ? "Completed" : `${round.completedLevels.length}/6 levels`}</span><span>${round.score.toLocaleString()} pts</span></button>`).join("")}
        </div>
      </section>
      <div class="panel">
        <h2>Achievements</h2>
        <div class="achievement-grid" style="margin-top: 18px">
          ${achievementCatalog.map(item => {
            const earned = state.achievements.includes(item.id);
            return `<article class="achievement-card ${earned ? "" : "locked"}"><div class="badge-icon" aria-hidden="true">${earned ? item.icon : "?"}</div><div><h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(item.description)}</p></div></article>`;
          }).join("")}
        </div>
        ${state.completedLevels.length === 6 ? `<div class="button-row"><button class="primary-button" id="progress-certificate" type="button">View certificate</button></div>` : ""}
      </div>
    </section>`, "My Progress");
  document.getElementById("progress-map").addEventListener("click", renderMap);
  document.getElementById("progress-new-round").addEventListener("click", beginNewRound);
  document.querySelectorAll("[data-progress-round]").forEach(button => button.addEventListener("click", () => {
    state.currentRoundId = button.dataset.progressRound;
    saveState();
    renderProgress();
  }));
  document.getElementById("progress-certificate")?.addEventListener("click", renderCertificate);
}

function renderCertificate() {
  if (state.completedLevels.length < 6) {
    showToast("Complete all six levels to earn your certificate.");
    return renderProgress();
  }
  mount(`
    <section class="screen">
      <div class="certificate">
        <p class="eyebrow">Ocean Explorer Learning Lab</p>
        <h1>Certificate of Exploration</h1>
        <p class="lead" style="margin-inline: auto">Awarded with distinction to</p>
        <div class="certificate-name">${escapeHtml(state.learnerName)}</div>
        <p>for completing all six ocean zones and demonstrating the knowledge to protect our blue planet.</p>
        <p><strong>Question session ${getCurrentRound().number} · Final score: ${state.score.toLocaleString()} points</strong></p>
        <div class="signature-row">
          <div class="signature">${formatDate(state.completedAt)}<br><span class="muted small">Date completed</span></div>
          <div class="signature">Ocean Science Team<br><span class="muted small">Expedition leader</span></div>
        </div>
      </div>
      <div class="button-row" style="justify-content: center">
        <button class="primary-button" id="print-certificate" type="button">Print certificate</button>
        <button class="secondary-button" id="certificate-progress" type="button">My progress</button>
      </div>
    </section>`, "Certificate");
  document.getElementById("print-certificate").addEventListener("click", () => window.print());
  document.getElementById("certificate-progress").addEventListener("click", renderProgress);
}

function renderTeacher() {
  if (!teacherAuthenticated) return renderTeacherLogin();
  const learner = getActiveLearner();
  const correctAnswers = state.answerLog.filter(entry => entry.correct).length;
  const accuracy = state.answerLog.length ? Math.round((correctAnswers / state.answerLog.length) * 100) : 0;
  const recent = state.answerLog.slice(-12).reverse();
  const summaries = state.learners.map(item => {
    const answerLog = item.rounds.flatMap(round => round.answerLog || []);
    const correct = answerLog.filter(entry => entry.correct).length;
    return {
      ...item,
      sessions: item.rounds.length,
      levels: item.rounds.reduce((total, round) => total + round.completedLevels.length, 0),
      score: item.rounds.reduce((total, round) => total + round.score, 0),
      accuracy: answerLog.length ? Math.round((correct / answerLog.length) * 100) : 0
    };
  });
  mount(`
    <section class="screen">
      <div class="screen-heading">
        <div><p class="eyebrow">Teacher Mode</p><h1>Classroom dashboard</h1></div>
        <button class="secondary-button" id="exit-teacher" type="button">Exit Teacher Mode</button>
      </div>
      <div class="stats-grid">
        <div class="stat-card"><span class="stat-value">${state.learners.length}</span><span>Learners</span></div>
        <div class="stat-card"><span class="stat-value">${summaries.reduce((total, item) => total + item.sessions, 0)}</span><span>Saved sessions</span></div>
        <div class="stat-card"><span class="stat-value">${learner ? `${accuracy}%` : "—"}</span><span>Selected accuracy</span></div>
        <div class="stat-card"><span class="stat-value">${learner ? state.score.toLocaleString() : "—"}</span><span>Selected score</span></div>
      </div>
      <section class="panel classroom-roster">
        <div class="section-heading"><div><p class="eyebrow">All learners on this device</p><h2>Class roster</h2></div></div>
        ${summaries.length ? `<div class="data-table-wrap"><table><thead><tr><th>Learner</th><th>Age</th><th>Sessions</th><th>Levels</th><th>Accuracy</th><th>Points</th><th>Last active</th></tr></thead><tbody>${summaries.map(item => `<tr class="roster-row ${item.id === state.activeLearnerId ? "selected" : ""}" data-teacher-learner="${item.id}" tabindex="0"><td><strong>${escapeHtml(item.name)}</strong></td><td>${item.age}</td><td>${item.sessions}</td><td>${item.levels}</td><td>${item.accuracy}%</td><td>${item.score.toLocaleString()}</td><td>${formatDate(item.lastActiveAt || item.createdAt)}</td></tr>`).join("")}</tbody></table></div>` : `<div class="empty-state muted">No learners have joined yet.</div>`}
      </section>
      <div class="teacher-layout">
        <section class="panel">
          <h2>${escapeHtml(learner?.name || "Selected learner")} controls</h2>
          <p class="muted">Choose a roster row to inspect and manage that learner.</p>
          <div class="button-row">
            <button class="secondary-button" id="unlock-all" type="button" ${learner?.rounds.length ? "" : "disabled"}>Unlock all levels</button>
            <button class="danger-button" id="reset-progress" type="button" ${learner ? "" : "disabled"}>Reset selected learner</button>
          </div>
        </section>
        <section class="panel">
          <h2>Expedition record</h2>
          <p><strong>Selected session:</strong> ${getCurrentRound() ? `${getCurrentRound().number} (age ${getCurrentRound().age})` : "None"}</p>
          <p><strong>Started:</strong> ${formatDate(state.startedAt)}</p>
          <p><strong>Completed:</strong> ${formatDate(state.completedAt)}</p>
          <p><strong>Achievements:</strong> ${state.achievements.length} of 6</p>
        </section>
      </div>
      <section class="panel" style="margin-top: 20px">
        <h2>Recent answers</h2>
        ${recent.length ? `<div class="data-table-wrap" style="margin-top: 16px"><table><thead><tr><th>Level</th><th>Challenge</th><th>Response</th><th>Result</th></tr></thead><tbody>${recent.map(entry => `<tr><td>${entry.level}</td><td>${entry.question}</td><td>${escapeHtml(getRoundLevel(entry.level - 1).questions[entry.question - 1]?.options[entry.selected] || "Unknown")}</td><td>${entry.correct ? "Correct" : "Try again"}</td></tr>`).join("")}</tbody></table></div>` : `<div class="empty-state muted">No answers recorded yet.</div>`}
      </section>
    </section>`, "Teacher Mode");

  document.getElementById("exit-teacher").addEventListener("click", () => { teacherAuthenticated = false; renderHome(); });
  document.querySelectorAll("[data-teacher-learner]").forEach(row => {
    const selectLearner = () => {
      state.activeLearnerId = row.dataset.teacherLearner;
      saveState();
      renderTeacher();
    };
    row.addEventListener("click", selectLearner);
    row.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") selectLearner();
    });
  });
  document.getElementById("unlock-all").addEventListener("click", () => {
    if (!learner?.rounds.length) return;
    learner.rounds.forEach(round => { round.unlockedLevel = 6; });
    saveState();
    showToast(`All levels are unlocked for ${learner.name}.`);
    renderTeacher();
  });
  document.getElementById("reset-progress").addEventListener("click", () => {
    if (!learner || !window.confirm(`Reset all progress for ${learner.name}? This cannot be undone.`)) return;
    learner.rounds = [];
    learner.currentRoundId = null;
    saveState();
    showToast(`${learner.name}'s progress has been reset.`);
    renderTeacher();
  });
}

function renderTeacherLogin() {
  mount(`
    <section class="screen panel teacher-login">
      <p class="eyebrow">Educator access</p>
      <h1>Teacher Mode</h1>
      <p class="muted">Enter the classroom PIN to view learner results and controls.</p>
      <form class="name-form" id="teacher-login-form">
        <label for="teacher-pin">4-digit PIN</label>
        <input id="teacher-pin" name="pin" type="password" inputmode="numeric" pattern="[0-9]{4}" maxlength="4" required autocomplete="off">
        <button class="primary-button" type="submit">Open dashboard</button>
        <button class="secondary-button" id="cancel-teacher" type="button">Cancel</button>
      </form>
      <p class="muted small">Classroom demo PIN: 0000</p>
    </section>`, "Teacher Login");
  document.getElementById("cancel-teacher").addEventListener("click", renderHome);
  document.getElementById("teacher-login-form").addEventListener("submit", event => {
    event.preventDefault();
    const pin = new FormData(event.currentTarget).get("pin");
    if (pin !== TEACHER_PIN) {
      showToast("That PIN is not correct.");
      document.getElementById("teacher-pin").select();
      return;
    }
    teacherAuthenticated = true;
    renderTeacher();
  });
}

document.getElementById("brand-button").addEventListener("click", renderHome);
document.getElementById("map-button").addEventListener("click", () => state.learnerName ? renderMap() : renderHome());
document.getElementById("progress-button").addEventListener("click", renderProgress);
document.getElementById("teacher-button").addEventListener("click", renderTeacher);

saveState();
renderHome();