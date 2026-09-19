import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "센터 소개",
  description:
    "행복한길잡이 장애이해교육센터의 미션, 비전, 연혁을 소개합니다.",
};

const HISTORY = [
  { year: "2019", desc: "장애이해교육센터 행복한길잡이 설립 준비" },
  { year: "2020", desc: "학교 대상 장애 인식 개선 교육 프로그램 개발 및 시범 운영" },
  { year: "2022", desc: "기업·공공기관 대상 교육 과정 확대" },
  { year: "2024", desc: "누적 교육 참여 기관 100곳 돌파 (예시 수치)" },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-[var(--color-surface-alt)] py-16 sm:py-20">
        <Container>
          <p className="text-sm font-bold text-[var(--color-primary-hover)]">
            센터 소개
          </p>
          <h1 className="mt-3 text-4xl font-extrabold text-[var(--color-text)]">
            함께 이해하고, 함께 나아갑니다
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-text-muted)]">
            행복한길잡이는 장애에 대한 막연한 거리감을 줄이고, 서로를 있는
            그대로 이해하는 사회를 만들기 위해 설립된 장애이해교육센터입니다.
            배리어프리는 단순한 시설의 문제가 아니라, 마음과 인식의
            문제이기도 하다는 믿음으로 교육을 설계합니다.
          </p>
        </Container>
      </section>

      <section aria-labelledby="mission-heading" className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2
              id="mission-heading"
              className="text-2xl font-extrabold text-[var(--color-text)]"
            >
              미션
            </h2>
            <p className="mt-4 leading-relaxed text-[var(--color-text-muted)]">
              모든 사람이 장애를 이유로 배제되지 않는 사회를 만들기 위해,
              올바른 정보와 따뜻한 태도를 함께 전하는 교육을 제공합니다.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-[var(--color-text)]">
              비전
            </h2>
            <p className="mt-4 leading-relaxed text-[var(--color-text-muted)]">
              누구나 자연스럽게 서로를 이해하고 배려하는 것이 특별한 일이
              아닌, 당연한 일상이 되는 사회를 지향합니다.
            </p>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="history-heading"
        className="bg-[var(--color-surface-alt)] py-16 sm:py-20"
      >
        <Container>
          <h2
            id="history-heading"
            className="text-2xl font-extrabold text-[var(--color-text)]"
          >
            연혁
          </h2>
          <ol className="mt-10 space-y-8 border-l-2 border-[var(--color-border)] pl-8">
            {HISTORY.map((item) => (
              <li key={item.year} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[2.55rem] flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-primary)]"
                />
                <p className="text-sm font-bold text-[var(--color-primary-hover)]">
                  {item.year}
                </p>
                <p className="mt-1 leading-relaxed text-[var(--color-text)]">
                  {item.desc}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm text-[var(--color-text-muted)]">
            ※ 위 연혁은 예시이며, 실제 자료로 교체 예정입니다.
          </p>
        </Container>
      </section>
    </>
  );
}
