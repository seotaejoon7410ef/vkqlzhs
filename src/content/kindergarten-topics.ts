export type KindergartenProgramStep = {
  time: string;
  title: string;
  desc: string;
};

export type KindergartenProgram = {
  slogan: string;
  target: string;
  steps: KindergartenProgramStep[];
};

export type KindergartenTopic = {
  slug: string;
  title: string;
  summary: string;
  heroChip: string;
  heroLead: string;
  heroAccent: string;
  heroChips: string[];
  program?: KindergartenProgram;
};

export const KINDERGARTEN_TOPICS: KindergartenTopic[] = [
  {
    slug: "traffic",
    title: "교통안전",
    summary: "길과 횡단보도에서 스스로를 지키는 올바른 행동을 직접 해보며 익힙니다.",
    heroChip: "안전하게 길을 건너는 방법은?",
    heroLead: "올바른 교통습관으로 안전한 오늘, 즐거운 내일!",
    heroAccent: "#2E7D32",
    heroChips: ["신호등 이해", "횡단보도 건너기", "통학차량 안전"],
    program: {
      slogan: "멈춰요! 살펴요! 건너요!",
      target: "만 5~7세 · 최대 25명 · 약 50분",
      steps: [
        {
          time: "4분",
          title: "오프닝",
          desc: "선생님이 공을 줍다 자동차에 부딪힐 뻔한 장면을 함께 보며 시작해요.",
        },
        {
          time: "6분",
          title: "이론",
          desc: "신호등 약속을 익히고, 운전자에게 내가 잘 안 보이는 이유를 알아봐요.",
        },
        {
          time: "15분",
          title: "횡단보도 체험",
          desc: "신호에 맞춰 왼쪽과 오른쪽을 살피고, 손을 들고 건너요.",
        },
        {
          time: "15분",
          title: "킥보드 체험",
          desc: "헬멧을 쓰고 천천히 타다 멈추고, 횡단보도 앞에서는 내려서 끌고 가요.",
        },
        {
          time: "6분",
          title: "전원 건너기",
          desc: "모든 아이가 한 번씩 횡단보도를 건너며 약속을 몸으로 익혀요.",
        },
        {
          time: "4분",
          title: "마무리",
          desc: "약속을 함께 외치고 로고 스티커를 받아요.",
        },
      ],
    },
  },
  {
    slug: "fire",
    title: "화재안전",
    summary: "불이 났을 때 침착하게 대피하는 방법을 직접 움직여 봅니다.",
    heroChip: "불이 나면 어떻게 해야 할까요?",
    heroLead: "직접 보고, 느끼고, 실천하는 화재 대처 방법!",
    heroAccent: "#E53935",
    heroChips: ["화재 대피체험", "소화기 사용체험", "119 신고체험"],
  },
  {
    slug: "first-aid",
    title: "응급처치",
    summary: "다쳤을 때 도움을 요청하고 기본 응급처치를 따라 해봅니다.",
    heroChip: "위급한 순간, 어떻게 도와야 할까요?",
    heroLead: "소중한 생명을 지키는 첫걸음, 응급처치!",
    heroAccent: "#E53935",
    heroChips: ["119 신고체험", "심폐소생술 체험", "응급상황 대처방법"],
  },
  {
    slug: "water",
    title: "수상안전",
    summary: "물가와 물놀이에서 지켜야 할 안전 수칙을 몸으로 익힙니다.",
    heroChip: "물놀이, 안전이 먼저예요!",
    heroLead: "즐거운 물놀이, 안전한 약속으로 사고를 예방해요!",
    heroAccent: "#1E88E5",
    heroChips: ["구명조끼 착용체험", "물놀이 안전수칙", "구조 요청 방법"],
  },
];

export function findKindergartenTopic(slug: string) {
  return KINDERGARTEN_TOPICS.find((topic) => topic.slug === slug);
}
