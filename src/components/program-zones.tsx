import {
  Accessibility,
  ChevronRight,
  Eye,
  HeartHandshake,
  Presentation,
} from "lucide-react";

const ZONES = [
  {
    icon: Eye,
    title: "시각장애존",
    tags: ["안대 체험", "이동 훈련"],
    desc: "안대를 쓰고 이동하며 시각장애인이 느끼는 하루를 체험해요.",
  },
  {
    icon: Accessibility,
    title: "지체장애존",
    tags: ["휠체어 체험", "이동 훈련"],
    desc: "휠체어를 직접 타고 움직이며 이동이 얼마나 다른지 느껴봐요.",
  },
  {
    icon: HeartHandshake,
    title: "감각협력존",
    tags: ["협동 놀이", "감각 체험"],
    desc: "제한된 감각으로 친구와 협력해 함께 과제를 해결해요.",
  },
  {
    icon: Presentation,
    title: "전시형존",
    tags: ["자료 전시", "질의응답"],
    desc: "자료와 전시물로 장애에 대한 궁금증을 쉽게 풀어봐요.",
  },
];

export function ProgramZones() {
  return (
    <>
      <p className="mx-auto max-w-2xl text-center text-[var(--color-text-muted)]">
        초등학교와 중학교가 함께 체험하는 4개 존이에요. 1교시 기준 초등
        40분 · 중학교 45분이 걸려요.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {ZONES.map((zone) => (
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
      <p className="mt-4 text-xs text-[var(--color-text-muted)]">
        * 4존 설명은 초안입니다. 실제 진행 내용과 다르면 알려주세요.
      </p>
    </>
  );
}
