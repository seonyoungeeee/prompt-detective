import React from "react";

const TRAINING_LEVELS = [
  {
    title: "LV1. 구체적으로 작성하기",
    skill: "구체성",
    description: "AI는 마음을 읽지 못해요. 원하는 모습을 자세히 말해야 해요.",
    mission: "여러 카드 중 더 구체적인 프롬프트를 3개 찾으세요!",
    target: 3,
    cards: [
      { text: "미래 도시", correct: false, reason: "어떤 미래 도시인지 설명이 부족해요." },
      { text: "검정색 점박이 강아지가 잔디밭에서 뛰어노는 모습", correct: true, reason: "좋아요! 대상, 색, 행동, 장소가 들어있어요." },
      { text: "친절한 도우미 로봇이 길을 안내하는 미래 공원", correct: true, reason: "좋아요! 누가, 어디서, 무엇을 하는지 보여요." },
      { text: "로봇", correct: false, reason: "로봇의 모습이나 행동이 없어요." },
      { text: "하늘 자동차가 날아다니는 밝은 미래 도시", correct: true, reason: "좋아요! 미래 도시의 특징이 자세해요." },
      { text: "강아지", correct: false, reason: "너무 짧아요. 어떤 강아지인지 알 수 없어요." },
    ],
  },
  {
    title: "LV2. 역할 정해주기",
    skill: "역할",
    description: "AI에게 역할을 주면 더 자연스럽고 알맞은 결과가 나와요.",
    mission: "AI에게 역할을 준 프롬프트를 3개 찾으세요!",
    target: 3,
    cards: [
      { text: "학교 설명해줘", correct: false, reason: "누구처럼 설명해야 할지 정해지지 않았어요." },
      { text: "너는 미래 도시 여행 가이드야. 미래 도시를 소개해줘", correct: true, reason: "좋아요! AI에게 여행 가이드 역할을 주었어요." },
      { text: "너는 친절한 박물관 해설사야. 바다 도시를 소개해줘", correct: true, reason: "좋아요! 해설사 역할이 분명해요." },
      { text: "미래 도시 소개해줘", correct: false, reason: "역할이 없어요. 누가 소개하는지 알 수 없어요." },
      { text: "바다 도시 알려줘", correct: false, reason: "역할이 없어서 말투가 평범해질 수 있어요." },
      { text: "너는 우주학교 뉴스 기자야. 우주학교를 소개해줘", correct: true, reason: "좋아요! 뉴스 기자 역할이 들어있어요." },
    ],
  },
  {
    title: "LV3. 목표 설정하기",
    skill: "목표",
    description: "무엇을 위해 필요한 결과인지 알려주면 AI가 더 잘 맞춰줘요.",
    mission: "목표가 들어간 프롬프트를 3개 찾으세요!",
    target: 3,
    cards: [
      { text: "발표에 사용할 미래 도시 설명글을 써줘", correct: true, reason: "좋아요! 발표용이라는 목표가 있어요." },
      { text: "우주학교 알려줘", correct: false, reason: "어디에 쓸 정보인지 알 수 없어요." },
      { text: "전시 포스터에 넣을 로봇 마을 소개 문구를 써줘", correct: true, reason: "좋아요! 포스터용이라는 목표가 있어요." },
      { text: "미래 도시 설명해줘", correct: false, reason: "무엇을 위한 설명인지 목표가 부족해요." },
      { text: "친구들에게 소개할 우주학교 안내문을 써줘", correct: true, reason: "좋아요! 친구 소개용이라는 목표가 분명해요." },
      { text: "로봇 마을 설명", correct: false, reason: "설명 목적이 빠져 있어요." },
    ],
  },
  {
    title: "LV4. 조건 정하기",
    skill: "조건",
    description: "대상, 분위기, 길이 같은 조건을 넣으면 결과가 더 알맞아져요.",
    mission: "조건이 잘 들어간 프롬프트를 3개 찾으세요!",
    target: 3,
    cards: [
      { text: "초등학생이 이해하기 쉽게 짧고 재미있게 설명해줘", correct: true, reason: "좋아요! 대상과 길이, 분위기가 있어요." },
      { text: "설명해줘", correct: false, reason: "대상, 분위기, 길이 조건이 없어요." },
      { text: "밝고 따뜻한 분위기로 3문장만 써줘", correct: true, reason: "좋아요! 분위기와 길이가 분명해요." },
      { text: "멋지게 써줘", correct: false, reason: "멋지게가 너무 애매해요." },
      { text: "아무 말이나 길게 써줘", correct: false, reason: "좋은 조건이 아니에요. 결과가 길고 산만해질 수 있어요." },
      { text: "친구가 읽고 웃을 수 있게 쉽고 생생하게 써줘", correct: true, reason: "좋아요! 대상과 느낌이 잘 드러나요." },
    ],
  },
  {
    title: "LV5. 형식 정하기",
    skill: "형식",
    description: "제목, 본문, 표, 문장 수처럼 결과의 모양을 정할 수 있어요.",
    mission: "출력 형식이 들어간 프롬프트를 3개 찾으세요!",
    target: 3,
    cards: [
      { text: "제목 + 본문 형식으로 미래 도시를 설명해줘", correct: true, reason: "좋아요! 제목과 본문 형식이 있어요." },
      { text: "미래 도시 설명해줘", correct: false, reason: "결과를 어떤 모양으로 받을지 없어요." },
      { text: "그냥 써줘", correct: false, reason: "형식이 없어서 결과가 제각각 나올 수 있어요." },
      { text: "한 줄 광고 문구 3개로 써줘", correct: true, reason: "좋아요! 개수와 형식이 분명해요." },
      { text: "많이 알려줘", correct: false, reason: "얼마나, 어떤 구조로 알려줄지 몰라요." },
      { text: "3문장으로 짧게 소개해줘", correct: true, reason: "좋아요! 문장 수를 정했어요." },
    ],
  },
  {
    title: "LV6. 프롬프트 마스터",
    skill: "종합",
    description: "역할, 목표, 조건, 형식이 함께 들어간 프롬프트를 찾아보세요.",
    mission: "완성도가 높은 프롬프트를 3개 찾으세요!",
    target: 3,
    cards: [
      { text: "멋진 미래 도시 알려줘", correct: false, reason: "너무 짧고 조건이 부족해요." },
      { text: "너는 미래 도시 안내원이야. 초등학생 발표용으로 하늘 자동차가 있는 미래 도시를 제목+본문 형식으로 3문장 소개해줘.", correct: true, reason: "완벽해요! 역할, 목표, 조건, 형식이 모두 들어있어요." },
      { text: "학교 설명해줘", correct: false, reason: "역할, 목표, 조건, 형식이 거의 없어요." },
      { text: "너는 우주학교 뉴스 기자야. 친구들에게 소개할 수 있도록 로봇 선생님이 있는 우주학교를 짧고 재미있게 3문장으로 써줘.", correct: true, reason: "좋아요! 좋은 프롬프트 조건이 잘 들어있어요." },
      { text: "친환경 집", correct: false, reason: "무엇을 해달라는지 지시가 부족해요." },
      { text: "너는 미래 생활 해설가야. 전시 포스터에 넣을 친환경 스마트홈 설명을 초등학생이 이해하기 쉽게 제목+2문장으로 써줘.", correct: true, reason: "좋아요! 거의 모든 조건이 들어있어요." },
    ],
  },
];

const PRACTICE_CARDS = [
  { text: "미래 도시", correct: false, category: "구체성 부족", reason: "너무 짧아서 AI가 어떤 도시를 원하는지 알기 어려워요." },
  { text: "하늘 자동차가 다니는 밝은 미래 도시를 그려줘", correct: true, category: "구체성", reason: "대상과 특징, 분위기가 들어있어요." },
  { text: "너는 미래 도시 여행 가이드야. 2055년 바다 도시를 소개해줘", correct: true, category: "역할", reason: "AI에게 여행 가이드 역할을 주었어요." },
  { text: "학교 설명", correct: false, category: "지시 부족", reason: "무엇을 어떻게 설명해야 하는지 부족해요." },
  { text: "발표에 사용할 우주학교 설명글을 써줘", correct: true, category: "목표", reason: "발표용이라는 목표가 들어있어요." },
  { text: "멋진 로봇", correct: false, category: "애매함", reason: "멋진이라는 말이 너무 넓고 애매해요." },
  { text: "초등학생이 이해하기 쉽게 로봇 선생님이 있는 미래학교를 3문장으로 소개해줘", correct: true, category: "조건+형식", reason: "대상, 내용, 문장 수가 잘 들어있어요." },
  { text: "아무거나 길게 써줘", correct: false, category: "조건 부적절", reason: "좋은 조건이 아니어서 결과가 산만해질 수 있어요." },
  { text: "제목+본문 형식으로 친환경 스마트홈을 소개해줘", correct: true, category: "형식", reason: "출력 형식이 분명해요." },
  { text: "바다 도시 알려줘", correct: false, category: "목표 부족", reason: "무엇을 위한 설명인지 빠져 있어요." },
  { text: "너는 어린이 뉴스 앵커야. 친구들에게 소개할 미래 교통 뉴스를 짧고 재미있게 써줘", correct: true, category: "역할+목표+조건", reason: "역할, 대상, 목적, 분위기가 좋아요." },
  { text: "그냥 잘 써줘", correct: false, category: "형식 부족", reason: "잘이라는 말은 기준이 분명하지 않아요." },
  { text: "로봇 강아지가 있는 미래 공원을 따뜻한 분위기로 설명해줘", correct: true, category: "조건", reason: "대상과 분위기가 들어있어요." },
  { text: "우주", correct: false, category: "너무 짧음", reason: "단어 하나만 있으면 AI가 무엇을 해야 할지 몰라요." },
  { text: "한 줄 광고 문구 3개로 우주호텔을 소개해줘", correct: true, category: "형식", reason: "한 줄 광고 문구 3개라는 형식이 분명해요." },
  { text: "대박나게 해줘", correct: false, category: "애매함", reason: "무엇을 대박나게 해야 하는지 알 수 없어요." },
  { text: "너는 친절한 도서관 사서야. 초등학생에게 AI 책 추천 이유를 2문장으로 알려줘", correct: true, category: "종합", reason: "역할, 대상, 내용, 형식이 모두 들어있어요." },
  { text: "좋은 글 써줘", correct: false, category: "목표 부족", reason: "어떤 좋은 글인지 목표와 조건이 부족해요." },
  { text: "친구가 읽고 웃을 수 있게 미래 급식 메뉴를 재미있게 3가지 추천해줘", correct: true, category: "조건+형식", reason: "대상, 분위기, 개수가 들어있어요." },
  { text: "미래 알려줘", correct: false, category: "범위 넓음", reason: "미래의 무엇을 알고 싶은지 너무 넓어요." },
  { text: "너는 전시회 해설사야. 친환경 하늘도시의 특징 3가지를 표로 정리해줘", correct: true, category: "종합", reason: "역할, 주제, 개수, 형식이 분명해요." },
  { text: "빨리 해줘", correct: false, category: "정보 없음", reason: "빠르게 하라는 말만 있고 내용이 없어요." },
  { text: "초등학생 발표용으로 AI 반려동물의 장점과 주의점을 각각 2개씩 알려줘", correct: true, category: "목표+형식", reason: "목표와 개수가 아주 분명해요." },
  { text: "잘 설명", correct: false, category: "지시 부족", reason: "무엇을, 누구에게, 어떤 방식으로 설명할지 없어요." },
];

const BOSS_QUESTIONS = [
  {
    question: "미래 도시를 소개하는 가장 좋은 프롬프트는?",
    options: [
      { text: "미래 도시 설명해줘", correct: false, feedback: "너무 넓고 조건이 부족해요." },
      { text: "하늘 자동차가 있는 미래 도시 설명해줘", correct: false, feedback: "구체성은 있지만 역할과 형식이 부족해요." },
      { text: "너는 미래 도시 가이드야. 초등학생 발표용으로 하늘 자동차가 있는 미래 도시를 3문장으로 소개해줘.", correct: true, feedback: "정답! 역할, 목표, 조건, 형식이 모두 좋아요." },
    ],
  },
  {
    question: "우주학교 설명글을 만들 때 가장 좋은 프롬프트는?",
    options: [
      { text: "우주학교", correct: false, feedback: "단어만 있어서 AI가 무엇을 해야 할지 몰라요." },
      { text: "우주학교를 재미있게 설명해줘", correct: false, feedback: "조금 좋아졌지만 대상과 형식이 부족해요." },
      { text: "너는 어린이 뉴스 기자야. 친구들에게 소개할 우주학교의 하루를 쉽고 재미있게 제목+본문 형식으로 써줘.", correct: true, feedback: "정답! 좋은 프롬프트 조건이 잘 들어있어요." },
    ],
  },
  {
    question: "AI 반려동물을 소개하는 가장 좋은 프롬프트는?",
    options: [
      { text: "AI 반려동물 알려줘", correct: false, feedback: "목표와 형식이 부족해요." },
      { text: "AI 반려동물의 장점을 알려줘", correct: false, feedback: "주제는 있지만 대상과 형식이 약해요." },
      { text: "초등학생 전시 포스터에 넣을 AI 반려동물의 장점 3가지를 짧은 문장으로 써줘.", correct: true, feedback: "정답! 목표, 대상, 개수, 형식이 분명해요." },
    ],
  },
];

const SKILL_ORDER = ["구체성", "역할", "목표", "조건", "형식", "종합"];

const PHASE_STEPS = [
  { key: "intro", label: "입장", icon: "🚪" },
  { key: "training", label: "훈련", icon: "🧩" },
  { key: "practice", label: "실전", icon: "🎯" },
  { key: "boss", label: "보스", icon: "👑" },
  { key: "result", label: "수료", icon: "🏆" },
];

const PHASE_INDEX = {
  intro: 0,
  training: 1,
  practice: 2,
  boss: 3,
  result: 4,
};

function getCardStyle(isClicked, isCorrect) {
  if (!isClicked) return "bg-white/90 border-orange-100 hover:border-violet-300 hover:-translate-y-1 hover:shadow-xl";
  return isCorrect
    ? "bg-emerald-50 border-emerald-400 shadow-emerald-100"
    : "bg-rose-50 border-rose-400 shadow-rose-100";
}

function shuffleCards(cards) {
  const copied = cards.map((card, originalIndex) => ({ ...card, originalIndex }));

  for (let i = copied.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copied[i], copied[j]] = [copied[j], copied[i]];
  }

  return copied;
}

function hasColumnPattern(cards, columns = 2) {
  const correctByColumn = Array.from({ length: columns }, () => 0);
  const totalByColumn = Array.from({ length: columns }, () => 0);

  cards.forEach((card, index) => {
    const column = index % columns;
    totalByColumn[column] += 1;
    if (card.correct) correctByColumn[column] += 1;
  });

  return correctByColumn.some((count, index) => count === 0 || count === totalByColumn[index]);
}

function makeBalancedShuffle(cards, columns = 2) {
  for (let attempt = 0; attempt < 30; attempt += 1) {
    const shuffled = shuffleCards(cards);
    if (!hasColumnPattern(shuffled, columns)) return shuffled;
  }

  return shuffleCards(cards);
}

function getPhaseTitle(phase) {
  if (phase === "intro") return "입장하기";
  if (phase === "training") return "탐정 훈련소";
  if (phase === "practice") return "실전 미션";
  if (phase === "boss") return "보스 미션";
  if (phase === "result") return "결과 확인";
  return "진행 중";
}

function runSelfTests() {
  console.assert(Array.isArray(TRAINING_LEVELS), "TRAINING_LEVELS should be an array");
  console.assert(TRAINING_LEVELS.length === 6, "There should be 6 training levels");
  TRAINING_LEVELS.forEach((level, index) => {
    const correctCount = level.cards.filter((card) => card.correct).length;
    console.assert(correctCount >= level.target, `Level ${index + 1} must have enough correct cards`);
  });
  console.assert(PRACTICE_CARDS.filter((card) => card.correct).length >= 12, "Practice should have enough correct cards");
  console.assert(BOSS_QUESTIONS.every((q) => q.options.filter((o) => o.correct).length === 1), "Each boss question needs exactly one answer");
  console.assert(getCardStyle(true, true).includes("emerald"), "Correct clicked cards should use success style");
  console.assert(getCardStyle(true, false).includes("rose"), "Wrong clicked cards should use error style");
  console.assert(shuffleCards([{ text: "a", correct: true }])[0].originalIndex === 0, "Shuffled cards should keep originalIndex");
  console.assert(makeBalancedShuffle(PRACTICE_CARDS).length === PRACTICE_CARDS.length, "Balanced shuffle should keep card count");
}

runSelfTests();

export default function PromptDetectiveGame() {
  const [phase, setPhase] = React.useState("intro");
  const [currentLevel, setCurrentLevel] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [found, setFound] = React.useState([]);
  const [message, setMessage] = React.useState("");
  const [showModal, setShowModal] = React.useState(false);
  const [clicked, setClicked] = React.useState({});
  const [practiceClicked, setPracticeClicked] = React.useState({});
  const [practiceFound, setPracticeFound] = React.useState([]);
  const [practiceMistakes, setPracticeMistakes] = React.useState(0);
  const [bossIndex, setBossIndex] = React.useState(0);
  const [bossSelected, setBossSelected] = React.useState(null);
  const [bossCorrect, setBossCorrect] = React.useState(0);
  const [bossFeedback, setBossFeedback] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [nameError, setNameError] = React.useState("");

  const level = TRAINING_LEVELS[currentLevel];
  const shuffledTrainingCards = React.useMemo(
    () => makeBalancedShuffle(level.cards, 2),
    [currentLevel]
  );
  const shuffledPracticeCards = React.useMemo(
    () => makeBalancedShuffle(PRACTICE_CARDS, 3),
    []
  );
  const shuffledBossOptions = React.useMemo(
    () => shuffleCards(BOSS_QUESTIONS[bossIndex].options),
    [bossIndex]
  );
  const isFinalTrainingLevel = currentLevel === TRAINING_LEVELS.length - 1;
  const practiceTarget = 12;
  const practiceComplete = practiceFound.length >= practiceTarget;
  const currentBoss = BOSS_QUESTIONS[bossIndex];

  const resetGame = () => {
    setPhase("intro");
    setCurrentLevel(0);
    setScore(0);
    setFound([]);
    setMessage("");
    setShowModal(false);
    setClicked({});
    setPracticeClicked({});
    setPracticeFound([]);
    setPracticeMistakes(0);
    setBossIndex(0);
    setBossSelected(null);
    setBossCorrect(0);
    setBossFeedback("");
    setUserName("");
    setNameError("");
  };

  const startTraining = () => {
    if (!userName.trim()) {
      setNameError("이름을 입력하면 마지막에 수료증을 받을 수 있어요!");
      return;
    }

    setNameError("");
    setPhase("training");
    setMessage("");
  };

  const handleTrainingCardClick = (index, card) => {
    if (clicked[index] || showModal) return;
    setClicked((prev) => ({ ...prev, [index]: true }));

    if (card.correct) {
      const updated = [...found, index];
      setFound(updated);
      setScore((prev) => prev + 50);
      setMessage(card.reason);
      if (updated.length >= level.target) {
        window.setTimeout(() => setShowModal(true), 500);
      }
    } else {
      setScore((prev) => Math.max(0, prev - 10));
      setMessage(card.reason);
    }
  };

  const nextTrainingLevel = () => {
    setShowModal(false);
    if (!isFinalTrainingLevel) {
      setCurrentLevel((prev) => prev + 1);
      setFound([]);
      setClicked({});
      setMessage("");
      return;
    }
    setPhase("practice");
    setFound([]);
    setClicked({});
    setMessage("실전 미션 시작! 좋은 프롬프트 12개를 찾아보세요.");
  };

  const handlePracticeCardClick = (index, card) => {
    if (practiceClicked[index] || practiceComplete) return;
    setPracticeClicked((prev) => ({ ...prev, [index]: true }));

    if (card.correct) {
      const updated = [...practiceFound, index];
      setPracticeFound(updated);
      setScore((prev) => prev + 30);
      setMessage(`✅ ${card.reason}`);
      if (updated.length >= practiceTarget) {
        window.setTimeout(() => setShowModal(true), 500);
      }
    } else {
      setPracticeMistakes((prev) => prev + 1);
      setScore((prev) => Math.max(0, prev - 10));
      setMessage(`❌ ${card.reason}`);
    }
  };

  const startBoss = () => {
    setShowModal(false);
    setPhase("boss");
    setMessage("가장 좋은 프롬프트 하나를 골라보세요!");
    setBossIndex(0);
    setBossSelected(null);
    setBossFeedback("");
  };

  const handleBossSelect = (optionIndex) => {
    if (bossSelected !== null) return;
    const option = currentBoss.options[optionIndex];
    setBossSelected(optionIndex);
    setBossFeedback(option.feedback);
    if (option.correct) {
      setBossCorrect((prev) => prev + 1);
      setScore((prev) => prev + 70);
    } else {
      setScore((prev) => Math.max(0, prev - 10));
    }
  };

  const nextBoss = () => {
    if (bossIndex < BOSS_QUESTIONS.length - 1) {
      setBossIndex((prev) => prev + 1);
      setBossSelected(null);
      setBossFeedback("");
      setMessage("가장 좋은 프롬프트 하나를 골라보세요!");
      return;
    }
    setPhase("result");
  };

  const renderProgressBoard = () => {
    const activeIndex = PHASE_INDEX[phase] ?? 0;

    return (
      <div className="max-w-6xl mx-auto px-4 pt-5">
        <div className="bg-white/75 backdrop-blur rounded-[2rem] shadow-sm border border-orange-100 px-4 py-3">
          <div className="flex items-center gap-2 overflow-x-auto">
            {PHASE_STEPS.map((step, index) => {
              const isActive = index === activeIndex;
              const isDone = index < activeIndex;
              return (
                <div key={step.key} className="flex items-center gap-2 shrink-0">
                  <div
                    className={`flex items-center gap-2 rounded-full px-4 py-2 font-bold transition ${
                      isActive
                        ? "bg-violet-500 text-white shadow-lg shadow-violet-200"
                        : isDone
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-orange-50 text-gray-500"
                    }`}
                  >
                    <span>{isDone ? "✅" : step.icon}</span>
                    <span>{step.label}</span>
                  </div>
                  {index < PHASE_STEPS.length - 1 && <div className="w-6 h-1 rounded-full bg-orange-100" />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const renderTopBar = () => (
    <div className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-violet-100 border-b border-orange-100">
      <div className="absolute -top-20 -left-20 w-56 h-56 bg-yellow-200/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-10 w-64 h-64 bg-violet-300/30 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-5 py-5 flex flex-col md:flex-row gap-4 justify-between items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-white/70 border border-orange-100 px-4 py-2 rounded-full text-sm font-bold text-violet-700 mb-3">
            ✨ AI 질문 카드게임
          </div>
          <div className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
            좋은 프롬프트 탐정단
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-2 text-sm md:text-base">
          <div className="bg-white/80 border border-white px-4 py-2 rounded-full shadow-sm">🎮 {getPhaseTitle(phase)}</div>
          {userName && <div className="bg-white/80 border border-white px-4 py-2 rounded-full shadow-sm">👤 {userName}</div>}
          <div className="bg-white/80 border border-white px-4 py-2 rounded-full shadow-sm">🏆 {score}점</div>
          {phase === "training" && <div className="bg-white/80 border border-white px-4 py-2 rounded-full shadow-sm">📚 LV {currentLevel + 1}/{TRAINING_LEVELS.length}</div>}
          {phase === "practice" && <div className="bg-white/80 border border-white px-4 py-2 rounded-full shadow-sm">🔍 {practiceFound.length}/{practiceTarget}</div>}
          {phase === "boss" && <div className="bg-white/80 border border-white px-4 py-2 rounded-full shadow-sm">👑 {bossIndex + 1}/{BOSS_QUESTIONS.length}</div>}
        </div>
      </div>
      {renderProgressBoard()}
    </div>
  );

  const renderIntro = () => (
    <div className="max-w-6xl mx-auto p-5 md:p-8">
      <div className="relative overflow-hidden bg-white/85 rounded-[2.5rem] shadow-2xl border border-orange-100 p-8 md:p-12 text-center">
        <div className="absolute top-6 left-6 text-4xl opacity-40">🔎</div>
        <div className="absolute bottom-6 right-8 text-5xl opacity-30">✨</div>
        <div className="text-7xl mb-4">🕵️‍♀️</div>
        <h1 className="text-4xl md:text-6xl font-black text-violet-600 mb-4">좋은 프롬프트 탐정단</h1>
        <p className="text-lg md:text-2xl text-gray-700 mb-8">AI가 좋아하는 좋은 질문의 비밀을 카드게임처럼 찾아보자!</p>

        <div className="max-w-md mx-auto mb-8 text-left bg-orange-50 border border-orange-100 p-5 rounded-3xl">
          <label className="block font-black text-gray-800 mb-2">탐정 이름</label>
          <input
            value={userName}
            onChange={(event) => {
              setUserName(event.target.value);
              setNameError("");
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") startTraining();
            }}
            className="w-full border-2 border-white focus:border-violet-400 outline-none rounded-2xl px-5 py-4 text-xl shadow-inner"
            placeholder="이름을 입력하세요"
            maxLength={12}
          />
          {nameError && <div className="mt-2 text-rose-500 font-bold">{nameError}</div>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left mb-8">
          <div className="bg-violet-50 p-6 rounded-3xl border border-violet-100"><div className="text-3xl mb-2">🧩</div><div className="font-black text-violet-700 mb-2">1단계 훈련소</div><div>좋은 프롬프트 조건을 하나씩 배워요.</div></div>
          <div className="bg-yellow-50 p-6 rounded-3xl border border-yellow-100"><div className="text-3xl mb-2">🎯</div><div className="font-black text-yellow-700 mb-2">2단계 실전미션</div><div>많은 카드 중 좋은 프롬프트를 찾아요.</div></div>
          <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-100"><div className="text-3xl mb-2">🏆</div><div className="font-black text-emerald-700 mb-2">3단계 수료증</div><div>보스미션을 통과하고 수료증을 받아요.</div></div>
        </div>
        <button onClick={startTraining} className="bg-violet-500 hover:bg-violet-600 text-white px-10 py-5 rounded-3xl font-black text-xl transition shadow-xl shadow-violet-200 hover:-translate-y-1">탐정 훈련 시작하기</button>
      </div>
    </div>
  );

  const renderTraining = () => (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      <div className="bg-white/85 border border-orange-100 rounded-[2rem] shadow-xl p-5 md:p-7 mb-5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex bg-violet-100 text-violet-700 px-4 py-2 rounded-full font-black mb-3">{level.title}</div>
            <h2 className="text-2xl md:text-4xl font-black text-gray-900">{level.mission}</h2>
            <p className="mt-3 text-gray-600 text-lg">{level.description}</p>
          </div>
          <div className="flex gap-2 shrink-0">
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl px-4 py-3 text-center"><div className="font-black text-emerald-700 text-xl">{found.length}/{level.target}</div><div className="text-xs">발견</div></div>
            <button onClick={resetGame} className="bg-gray-100 hover:bg-gray-200 transition rounded-2xl px-4 py-3 font-bold">🔄 다시</button>
          </div>
        </div>
      </div>

      {message && <div className="mb-5 bg-white/90 border border-orange-100 rounded-3xl p-4 shadow-sm text-lg font-bold">{message}</div>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {shuffledTrainingCards.map((card, displayIndex) => {
          const index = card.originalIndex;
          const isClicked = Boolean(clicked[index]);
          const style = getCardStyle(isClicked, card.correct);
          return (
            <button key={`${currentLevel}-${index}-${displayIndex}`} onClick={() => handleTrainingCardClick(index, card)} className={`group text-left border-2 rounded-[2rem] p-6 min-h-[145px] transition-all shadow-sm ${style}`}>
              <div className="flex justify-between gap-3 items-start">
                <div className="text-lg md:text-xl font-black whitespace-pre-line leading-relaxed">{card.text}</div>
                <div className="text-2xl opacity-40 group-hover:opacity-100 transition">{isClicked ? (card.correct ? "✅" : "↩️") : "🃏"}</div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );

  const renderPractice = () => (
    <div className="max-w-7xl mx-auto p-4 md:p-6">
      <div className="bg-white/85 border border-orange-100 rounded-[2rem] shadow-xl p-5 md:p-7 mb-5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-black mb-3">🎯 실전 미션</div>
            <h2 className="text-2xl md:text-4xl font-black text-gray-900">좋은 프롬프트 {practiceTarget}개를 찾아내세요!</h2>
            <p className="mt-3 text-gray-600 text-lg">힌트: 구체성, 역할, 목표, 조건, 형식이 들어있는지 살펴보세요.</p>
          </div>
          <div className="grid grid-cols-3 gap-2 shrink-0 text-center">
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl px-4 py-3"><div className="font-black text-emerald-700 text-xl">{practiceFound.length}</div><div className="text-xs">발견</div></div>
            <div className="bg-rose-50 border border-rose-100 rounded-2xl px-4 py-3"><div className="font-black text-rose-700 text-xl">{practiceMistakes}</div><div className="text-xs">실수</div></div>
            <div className="bg-violet-50 border border-violet-100 rounded-2xl px-4 py-3"><div className="font-black text-violet-700 text-xl">{score}</div><div className="text-xs">점수</div></div>
          </div>
        </div>
      </div>

      {message && <div className="mb-5 bg-white/90 border border-orange-100 rounded-3xl p-4 shadow-sm text-lg font-bold">{message}</div>}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 max-h-[650px] overflow-y-auto pr-2">
        {shuffledPracticeCards.map((card, displayIndex) => {
          const index = card.originalIndex;
          const isClicked = Boolean(practiceClicked[index]);
          const style = getCardStyle(isClicked, card.correct);
          return (
            <button key={`practice-${index}-${displayIndex}`} onClick={() => handlePracticeCardClick(index, card)} className={`group text-left border-2 rounded-[2rem] p-5 min-h-[155px] transition-all shadow-sm ${style}`}>
              <div className="flex justify-between gap-3 items-start">
                <div className="text-base md:text-lg font-black whitespace-pre-line leading-relaxed">{card.text}</div>
                <div className="text-xl opacity-40 group-hover:opacity-100 transition">{isClicked ? (card.correct ? "✅" : "❌") : "🃏"}</div>
              </div>
              {isClicked && <div className="mt-4 inline-flex rounded-full bg-white/70 px-3 py-1 text-sm font-black text-gray-600">{card.correct ? `✅ ${card.category}` : `❌ ${card.category}`}</div>}
            </button>
          );
        })}
      </div>
    </div>
  );

  const renderBoss = () => (
    <div className="max-w-5xl mx-auto p-4 md:p-6">
      <div className="bg-white/90 border border-orange-100 rounded-[2.5rem] shadow-2xl p-6 md:p-10">
        <div className="text-center mb-7">
          <div className="text-6xl mb-3">👑</div>
          <div className="inline-flex bg-violet-100 text-violet-700 px-4 py-2 rounded-full font-black mb-3">보스 미션 {bossIndex + 1}</div>
          <h2 className="text-2xl md:text-4xl font-black text-gray-900">{currentBoss.question}</h2>
        </div>
        <div className="space-y-4">
          {shuffledBossOptions.map((option, displayIndex) => {
            const index = option.originalIndex;
            const isSelected = bossSelected === index;
            let style = "bg-white/90 border-orange-100 hover:border-violet-300 hover:-translate-y-1 hover:shadow-xl";
            if (bossSelected !== null) {
              if (option.correct) style = "bg-emerald-50 border-emerald-400 shadow-emerald-100";
              else if (isSelected) style = "bg-rose-50 border-rose-400 shadow-rose-100";
            }
            return (
              <button key={`boss-${bossIndex}-${index}-${displayIndex}`} onClick={() => handleBossSelect(index)} className={`w-full text-left border-2 rounded-[2rem] p-6 transition-all shadow-sm ${style}`}>
                <div className="font-black mb-2 text-violet-600">카드 {displayIndex + 1}</div>
                <div className="text-lg md:text-xl font-bold leading-relaxed">{option.text}</div>
              </button>
            );
          })}
        </div>
        {bossFeedback && <div className="mt-6 bg-yellow-50 border border-yellow-100 rounded-3xl p-5 text-lg font-bold">{bossFeedback}</div>}
        {bossSelected !== null && <div className="text-center mt-6"><button onClick={nextBoss} className="bg-violet-500 hover:bg-violet-600 text-white px-8 py-4 rounded-2xl font-black text-lg transition shadow-lg shadow-violet-200">{bossIndex < BOSS_QUESTIONS.length - 1 ? "다음 보스 문제" : "결과 보기"}</button></div>}
      </div>
    </div>
  );

  const renderResult = () => (
    <div className="max-w-5xl mx-auto p-5 md:p-8">
      <div className="bg-white/90 border border-orange-100 rounded-[2.5rem] shadow-2xl p-8 md:p-12 text-center">
        <div className="text-7xl mb-4">🏆</div>
        <h2 className="text-4xl md:text-6xl font-black text-violet-600 mb-6">탐정 활동 완료!</h2>
        <div className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-violet-50 border-4 border-yellow-300 rounded-[2.5rem] p-7 md:p-10 mb-8 shadow-inner">
          <div className="absolute top-5 left-6 text-4xl opacity-30">⭐</div>
          <div className="absolute bottom-5 right-6 text-4xl opacity-30">🔎</div>
          <div className="text-2xl md:text-4xl font-black text-gray-900 mb-2">프롬프트 탐정 수료증</div>
          <p className="text-lg text-gray-700 mb-4">위 학생은 좋은 프롬프트의 비밀을 찾아낸 탐정입니다.</p>
          <div className="text-4xl md:text-6xl font-black text-violet-600 my-7">{userName || "프롬프트 탐정"}</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm md:text-base font-bold">
            <div className="bg-white/75 rounded-2xl p-3 border border-white">✅ 훈련소 6단계 완료</div>
            <div className="bg-white/75 rounded-2xl p-3 border border-white">✅ 실전 미션 완료</div>
            <div className="bg-white/75 rounded-2xl p-3 border border-white">✅ 보스 미션 완료</div>
          </div>
          <div className="mt-6 text-sm text-gray-500">발급: 좋은 프롬프트 탐정단</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="bg-violet-50 border border-violet-100 rounded-3xl p-6"><div className="text-4xl font-black text-violet-700">{score}</div><div className="font-bold">최종 점수</div></div>
          <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-6"><div className="text-4xl font-black text-emerald-700">{practiceFound.length}</div><div className="font-bold">찾은 좋은 프롬프트</div></div>
          <div className="bg-yellow-50 border border-yellow-100 rounded-3xl p-6"><div className="text-4xl font-black text-yellow-700">{bossCorrect}/{BOSS_QUESTIONS.length}</div><div className="font-bold">보스 정답</div></div>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-3xl p-6 text-left mb-8">
          <div className="font-black text-xl mb-3">오늘의 핵심 정리</div>
          <p>좋은 프롬프트는 AI에게 원하는 것을 정확히 알려주는 질문입니다.</p>
          <p className="mt-2">구체성, 역할, 목표, 조건, 형식을 넣으면 AI 결과가 훨씬 좋아질 수 있어요.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button onClick={() => window.print()} className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-10 py-5 rounded-3xl font-black text-xl transition shadow-lg hover:-translate-y-1">수료증 인쇄하기</button>
          <button onClick={resetGame} className="bg-violet-500 hover:bg-violet-600 text-white px-10 py-5 rounded-3xl font-black text-xl transition shadow-lg shadow-violet-200 hover:-translate-y-1">다시 플레이하기</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-violet-100 text-gray-900">
      {renderTopBar()}
      {phase === "intro" && renderIntro()}
      {phase === "training" && renderTraining()}
      {phase === "practice" && renderPractice()}
      {phase === "boss" && renderBoss()}
      {phase === "result" && renderResult()}

      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-[2.5rem] p-10 text-center shadow-2xl max-w-md w-full mx-4 border-4 border-yellow-200">
            <div className="text-5xl mb-4">🎉</div>
            <div className="text-3xl font-black mb-3">{phase === "training" ? (isFinalTrainingLevel ? "훈련 완료!" : "레벨 완료!") : "실전 미션 완료!"}</div>
            <div className="text-lg mb-2">{phase === "training" ? `Level ${currentLevel + 1}을 완료했습니다!` : `좋은 프롬프트 ${practiceTarget}개를 찾았습니다!`}</div>
            <div className="text-violet-600 font-black text-xl mb-6">+50점 획득!</div>
            {phase === "training" ? (
              <button onClick={nextTrainingLevel} className="bg-violet-500 hover:bg-violet-600 text-white px-8 py-4 rounded-2xl font-black text-lg transition shadow-lg shadow-violet-200">{isFinalTrainingLevel ? "실전 미션 시작하기" : "다음 레벨 도전하기"}</button>
            ) : (
              <button onClick={startBoss} className="bg-violet-500 hover:bg-violet-600 text-white px-8 py-4 rounded-2xl font-black text-lg transition shadow-lg shadow-violet-200">보스 미션 도전하기</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

