import {
  Accessibility,
  Camera,
  ChevronRight,
  CircleQuestionMark,
  Eye,
  HeartHandshake,
} from "lucide-react";

export type Level = "elementary" | "middle";

// TODO 확인 필요: 아래 4존 제목/태그/설명은 실제 진행 내용과 다르면 알려주세요.
export const ELEMENTARY_ZONES = [
  {
    icon: Eye,
    title: "시각장애공감체험 존",
    tags: ["안대 체험", "이동 체험"],
    desc: "안대를 쓰고 이동하며 앞이 보이지 않을 때 어떤 도움이 필요한지 알아봐요.",
  },
  {
    icon: Accessibility,
    title: "지체장애공감체험 존",
    tags: ["휠체어 체험", "이동 체험"],
    desc: "휠체어를 직접 타고 움직이며 이동이 얼마나 다른지 느껴봐요.",
  },
  {
    icon: HeartHandshake,
    title: "지적장애공감체험 존",
    tags: ["협력 과제", "감각 체험"],
    desc: "같은 설명도 어렵게 할 때와 쉽게 할 때 결과가 어떻게 달라지는지, 짝과 함께 컵블록을 쌓으며 비교해 봐요.",
  },
  {
    icon: CircleQuestionMark,
    title: "장애인식개선퀴즈 존",
    tags: ["OX 퀴즈", "객관식"],
    desc: "OX 퀴즈와 객관식 문제 10문항으로, 장애에 대한 흔한 오해와 올바른 에티켓을 배웁니다. 일상 속 상황으로 쉽게 풀어봐요.",
  },
];

export const MIDDLE_ZONES = [
  {
    icon: Eye,
    title: "시각장애존",
    tags: ["안대 체험", "이동 체험"],
    desc: "안대를 쓰고 이동하며 시각장애인이 마주하는 일상의 불편을 체험하고, 어떤 배려가 필요한지 생각해 봐요.",
  },
  {
    icon: Accessibility,
    title: "지체장애존",
    tags: ["휠체어 체험", "이동 체험"],
    desc: "휠체어를 직접 타고 이동하며 주변 환경이 이동에 어떤 영향을 주는지 생각해 봐요.",
  },
  {
    icon: HeartHandshake,
    title: "감각협력존",
    tags: ["협력 과제", "감각 체험"],
    desc: "제한된 감각으로 친구와 협력하며 서로 의지하고 소통하는 방법을 배워요.",
  },
  {
    icon: CircleQuestionMark,
    title: "퀴즈형존 · 오해와 에티켓 퀴즈",
    tags: ["OX 퀴즈", "객관식"],
    desc: "OX 퀴즈와 객관식 문제 10문항으로, 장애에 대한 흔한 오해와 올바른 에티켓을 배웁니다. 편견과 인식을 함께 생각해 봐요.",
  },
];

const ZONES: Record<Level, typeof ELEMENTARY_ZONES> = {
  elementary: ELEMENTARY_ZONES,
  middle: MIDDLE_ZONES,
};

const DURATION_NOTE: Record<Level, string> = {
  elementary: "초등학교는 1교시(40분) 기준으로 4개 존을 체험해요. 쉬운 말과 일상 속 상황으로 이해해요.",
  middle: "중학교는 1교시(45분) 기준으로 4개 존을 체험해요. 생각해 볼 질문과 함께 깊이 이해해요.",
};

// TODO 확인 필요: 실제 수업 사진과 대체 텍스트가 준비되면 아래 placeholder를
// <Image src="..." alt={PHOTO_PLACEHOLDER[level].alt} ... /> 로 교체하세요.
const PHOTO_PLACEHOLDER: Record<Level, { label: string; alt: string }> = {
  elementary: { label: "초등 수업 사진 추가 필요", alt: "" },
  middle: { label: "중등 수업 사진 추가 필요", alt: "" },
};

export function ProgramZones({ level }: { level: Level }) {
  const photo = PHOTO_PLACEHOLDER[level];

  return (
    <>
      <p className="mx-auto max-w-[36em] text-center text-[var(--color-text-muted)]">
        {DURATION_NOTE[level]}
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {ZONES[level].map((zone) => (
          <div
            key={zone.title}
            className="hover-lift flex min-h-64 flex-col justify-between rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8"
          >
            <div className="flex items-center justify-between">
              <span
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary-tint)] text-[var(--color-primary-hover)]"
              >
                <zone.icon size={24} />
              </span>
              <div className="flex flex-wrap justify-end gap-2">
                {zone.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[var(--color-surface-alt)] px-3 py-1 text-xs font-bold text-[var(--color-text-muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-2xl font-black text-[var(--color-text)]">
                {zone.title}
              </h4>
              <p className="mt-3 leading-relaxed text-[var(--color-text-muted)]">
                {zone.desc}
              </p>
            </div>

            <span
              aria-hidden="true"
              className="mt-6 flex h-10 w-10 items-center justify-center self-end rounded-full bg-[var(--color-primary)] text-white"
            >
              <ChevronRight size={20} />
            </span>
          </div>
        ))}
      </div>

      <div
        aria-hidden="true"
        className="mt-8 flex h-64 flex-col items-center justify-center gap-2 rounded-3xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface-alt)] text-[var(--color-text-muted)] sm:h-72"
      >
        <Camera size={32} />
        <p className="text-sm">{photo.label}</p>
      </div>
    </>
  );
}
