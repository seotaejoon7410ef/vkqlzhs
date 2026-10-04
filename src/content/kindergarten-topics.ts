export type KindergartenTopic = {
  slug: string;
  title: string;
  summary: string;
};

export const KINDERGARTEN_TOPICS: KindergartenTopic[] = [
  {
    slug: "traffic",
    title: "교통안전",
    summary: "길과 횡단보도에서 스스로를 지키는 올바른 행동을 직접 해보며 익힙니다.",
  },
  {
    slug: "fire",
    title: "화재안전",
    summary: "불이 났을 때 침착하게 대피하는 방법을 직접 움직여 봅니다.",
  },
  {
    slug: "first-aid",
    title: "응급처치",
    summary: "다쳤을 때 도움을 요청하고 기본 응급처치를 따라 해봅니다.",
  },
  {
    slug: "water",
    title: "수상안전",
    summary: "물가와 물놀이에서 지켜야 할 안전 수칙을 몸으로 익힙니다.",
  },
];

export function findKindergartenTopic(slug: string) {
  return KINDERGARTEN_TOPICS.find((topic) => topic.slug === slug);
}
