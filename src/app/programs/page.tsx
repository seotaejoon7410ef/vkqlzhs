import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "교육 프로그램",
  description:
    "행복한길잡이의 학교·기업·기관 대상 장애 인식 개선 교육 프로그램을 안내합니다.",
};

const PROGRAMS = [
  {
    title: "학교 대상 프로그램",
    audience: "초·중·고등학교",
    duration: "1교시(45~50분) ~ 하루 과정",
    desc: "눈높이에 맞춘 이야기와 체험 활동으로 장애에 대한 편견을 줄이고 또래 존중 문화를 만듭니다.",
  },
  {
    title: "기업 대상 프로그램",
    audience: "임직원, 신입사원 오리엔테이션",
    duration: "1시간 ~ 반일 과정",
    desc: "장애인 동료·고객을 대하는 태도와 법정 의무교육 기준을 함께 충족하는 실무 중심 교육입니다.",
  },
  {
    title: "공공·기관 대상 프로그램",
    audience: "공공기관, 복지·의료 기관 종사자",
    duration: "기관 협의 후 결정",
    desc: "현장 응대 매뉴얼과 연계한 맞춤형 커리큘럼으로 실질적인 서비스 개선을 돕습니다.",
  },
];

const STEPS = [
  { step: "1", title: "문의 접수", desc: "전화 또는 이메일로 기관 정보와 희망 일정을 남겨주세요." },
  { step: "2", title: "상담 및 설계", desc: "대상과 목적에 맞춰 커리큘럼과 강사를 조율합니다." },
  { step: "3", title: "일정 확정", desc: "세부 일정과 장소, 준비 사항을 함께 확정합니다." },
  { step: "4", title: "교육 진행", desc: "현장 또는 비대면으로 교육을 진행하고 후기를 공유합니다." },
];

export default function ProgramsPage() {
  return (
    <>
      <section className="bg-[var(--color-surface-alt)] py-16 sm:py-20">
        <Container>
          <p className="text-sm font-bold text-[var(--color-primary-hover)]">
            교육 프로그램
          </p>
          <h1 className="mt-3 text-4xl font-extrabold text-[var(--color-text)]">
            대상에 맞춘 장애 인식 개선 교육
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-text-muted)]">
            학교, 기업, 공공·복지 기관 각각의 환경에 맞춰 커리큘럼을
            조정합니다. 모든 과정은 체험과 대화를 중심으로 진행되어
            참여자의 실질적인 태도 변화를 목표로 합니다.
          </p>
        </Container>
      </section>

      <section aria-labelledby="programs-heading" className="py-16 sm:py-20">
        <Container>
          <h2 id="programs-heading" className="sr-only">
            프로그램 목록
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {PROGRAMS.map((program) => (
              <article
                key={program.title}
                className="flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8"
              >
                <h3 className="text-xl font-bold text-[var(--color-text)]">
                  {program.title}
                </h3>
                <dl className="mt-4 space-y-2 text-sm text-[var(--color-text-muted)]">
                  <div className="flex gap-2">
                    <dt className="font-semibold text-[var(--color-text)]">대상</dt>
                    <dd>{program.audience}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-semibold text-[var(--color-text)]">소요 시간</dt>
                    <dd>{program.duration}</dd>
                  </div>
                </dl>
                <p className="mt-4 flex-1 leading-relaxed text-[var(--color-text-muted)]">
                  {program.desc}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="steps-heading"
        className="bg-[var(--color-surface-alt)] py-16 sm:py-20"
      >
        <Container>
          <h2
            id="steps-heading"
            className="text-2xl font-extrabold text-[var(--color-text)]"
          >
            신청 절차
          </h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((item) => (
              <li
                key={item.step}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
              >
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)] text-base font-extrabold text-white"
                >
                  {item.step}
                </span>
                <p className="mt-4 font-bold text-[var(--color-text)]">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {item.desc}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section
        id="apply"
        aria-labelledby="apply-heading"
        className="scroll-mt-24 py-16 sm:py-20"
      >
        <Container>
          <div className="on-dark rounded-3xl bg-[var(--color-secondary)] px-8 py-14 text-white sm:px-14">
            <h2 id="apply-heading" className="text-3xl font-extrabold">
              교육 신청·문의
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-white/80">
              아래 연락처로 기관명, 대상 인원, 희망 일정을 남겨주시면
              1~2일 내 담당자가 연락드립니다.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:0212345678"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 text-base font-bold text-[var(--color-secondary)]"
              >
                전화 문의 02-1234-5678
              </a>
              <a
                href="mailto:info@happyguide.example.org"
                className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-white px-7 text-base font-bold text-white"
              >
                이메일 문의하기
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
