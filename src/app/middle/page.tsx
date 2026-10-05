import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Accessibility,
  ArrowRight,
  Camera,
  CircleQuestionMark,
  Eye,
  HeartHandshake,
} from "lucide-react";
import { Container } from "@/components/container";
import { Kicker } from "@/components/kicker";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "중학교 체험",
};

// 4. PROGRAM FLOW — 체험 → 관찰 → 질문 → 생각
const THINK_FLOW = [
  {
    eng: "EXPERIENCE",
    kor: "직접 체험하기",
    desc: "휠체어, 흰지팡이 등 다양한 체험을 통해 평소와 다른 환경을 직접 경험합니다.",
  },
  {
    eng: "OBSERVE",
    kor: "불편함 발견하기",
    desc: "체험 과정에서 이동과 생활을 어렵게 만드는 환경적 요소를 직접 찾아봅니다.",
  },
  {
    eng: "QUESTION",
    kor: "질문하기",
    desc: "왜 이런 불편함이 생겼을까? 다른 방법은 없을까? 학생 스스로 질문하도록 유도합니다.",
  },
  {
    eng: "THINK TOGETHER",
    kor: "함께 생각하기",
    desc: "친구들과 의견을 나누며 장애와 환경, 배려에 대한 관점을 넓혀갑니다.",
  },
];

// 6. 주요 체험 프로그램 — 초등 존 체계(program-zones.tsx)와 같은 주제를
// 다루지만, 중학생 눈높이에 맞춰 관찰·질문 중심으로 다시 쓴 설명입니다.
// TODO 확인 필요: 아래 4개 체험 제목/설명/핵심 질문이 실제 진행 내용과
// 다르면 알려주세요.
const MIDDLE_PROGRAMS = [
  {
    icon: Accessibility,
    title: "지체장애 공감 체험",
    tags: ["휠체어 체험", "이동 체험"],
    desc: "휠체어를 직접 이용하며 경사로, 좁은 통로, 장애물 등을 경험합니다. 단순히 이동의 어려움을 느끼는 데서 끝나지 않고 어떤 환경이 이동을 어렵게 만드는지 함께 관찰합니다.",
    question: "사람이 불편한 걸까, 환경이 불편하게 만드는 걸까?",
  },
  {
    icon: Eye,
    title: "시각장애 공감 체험",
    tags: ["흰지팡이 체험", "이동 체험"],
    desc: "시야를 제한한 상태에서 흰지팡이와 감각을 활용해 이동합니다. 시각정보가 제한됐을 때 주변 환경과 다른 사람의 안내가 얼마나 중요한지 직접 경험합니다.",
    question: "보이지 않는 사람에게 필요한 것은 무엇일까?",
  },
  {
    icon: HeartHandshake,
    title: "감각협력 체험",
    tags: ["협력 과제", "감각 체험"],
    desc: "친구와 역할을 나누고 서로의 정보와 감각을 활용해 과제를 해결하는 협력형 체험입니다.",
    question: "혼자 할 때와 함께할 때 무엇이 달라질까?",
  },
  {
    icon: CircleQuestionMark,
    title: "참여형 퀴즈 · 생각 나누기",
    tags: ["퀴즈", "생각 나누기"],
    desc: "체험 과정에서 알게 된 내용을 퀴즈와 질문을 통해 다시 정리합니다. 정답을 외우기보다는 서로 다른 생각을 이야기하는 과정에 초점을 둡니다.",
    question: "내가 가지고 있던 생각은 체험 전과 어떻게 달라졌을까?",
  },
];

// 7. BEFORE / AFTER — 효과 수치가 아니라 관점 변화의 예시입니다.
const BEFORE_AFTER = [
  {
    before: "휠체어를 타면 많이 불편하겠다.",
    after: "휠체어 자체보다 이동하기 어렵게 만들어진 환경도 문제일 수 있구나.",
  },
  {
    before: "도와주는 것이 무조건 배려 아닐까?",
    after: "먼저 필요한지 물어보는 것도 배려구나.",
  },
  {
    before: "장애인은 나와 많이 다른 사람이라고 생각했다.",
    after: "서로 다른 방법으로 생활하는 사람일 뿐이라는 걸 알게 됐다.",
  },
];

// 8. 운영 장점 — TODO 확인 필요: 실제 제공하지 않는 서비스나 미확정 수치는
// 추가하지 않았습니다. 내용이 다르면 알려주세요.
const OPERATION_POINTS = [
  {
    title: "학교로 직접 찾아가는 체험교육",
    desc: "강사와 체험 장비를 준비해 학교로 방문합니다.",
  },
  {
    title: "도착·셋팅 시간",
    desc: "강사는 수업 1시간 30분 전에 도착해 셋팅합니다.",
  },
  {
    title: "체험 장비 일체 준비",
    desc: "휠체어, 흰지팡이 및 프로그램 운영에 필요한 장비를 직접 준비합니다.",
  },
  {
    title: "여러 학급 순환형 운영",
    desc: "프로그램 구성에 따라 여러 학급이 체험존을 순환하며 참여할 수 있습니다.",
  },
  {
    title: "학교 일정에 맞춘 운영",
    desc: "학급 수와 학생 수, 수업시간 등 학교 상황을 확인해 프로그램을 조율합니다.",
  },
];

export default function MiddlePage() {
  return (
    <>
      <section id="top" className="on-dark relative isolate overflow-hidden">
        <div className="relative min-h-[480px] w-full sm:min-h-[640px] lg:min-h-[760px]">
          <Image
            src="/middle-hero.jpg"
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 55%)" }}
          />

          <Container className="absolute inset-x-0 bottom-0 pb-3 sm:pb-8 lg:pb-10">
            <div className="max-w-2xl">
              <Reveal>
                <h1 className="text-balance text-xl font-black leading-tight text-white [text-shadow:0_2px_16px_rgb(0_0_0_/_60%)] sm:text-5xl">
                  중학교 장애인식개선 체험
                </h1>
                <p className="mt-2 text-sm font-bold text-[var(--color-accent)] [text-shadow:0_1px_10px_rgb(0_0_0_/_60%)] sm:mt-3 sm:text-base">
                  중학교 대상 프로그램입니다
                </p>
              </Reveal>
              <Reveal delay={100}>
                <p className="mt-2 max-w-[32em] text-sm leading-snug text-white [text-shadow:0_1px_10px_rgb(0_0_0_/_60%)] sm:mt-5 sm:text-base sm:leading-relaxed">
                  학급 단위로 학교를 직접 찾아가, 몸으로 겪고 느끼는
                  체험으로 진행합니다.
                </p>
              </Reveal>
            </div>
          </Container>
        </div>
      </section>

      {/* 2. WHY MIDDLE SCHOOL — 왜 중학생 시기에 이런 교육이 필요한가 */}
      <section className="bg-[var(--color-surface)] py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 lg:order-1">
              <Reveal>
                <Kicker>WHY MIDDLE SCHOOL</Kicker>
                <h2 className="text-balance mt-4 text-3xl font-black leading-tight text-[var(--color-text)] sm:text-4xl">
                  아는 것에서 끝나지 않고,
                  <br />
                  「왜 그럴까」를 생각하는 교육
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <div className="mt-8 space-y-6 text-[var(--color-text-muted)]">
                  <p className="max-w-[36em] leading-[1.9]">
                    중학생이 되면 세상을 바라보는 기준이 조금씩 구체적으로
                    만들어집니다. 친구와의 관계가 넓어지고, 사회에 대한
                    관심이 커지면서 나와 다른 사람을 어떻게 바라보고
                    대할 것인지에 대한 태도 역시 형성됩니다.
                  </p>
                  <p className="max-w-[36em] leading-[1.9]">
                    이 시기의 장애이해교육은 단순히 정보를 전달하는
                    것보다 이미 가지고 있던 생각을 돌아보고, 다른
                    사람의 입장에서 상황을 바라보는 경험이 중요합니다.
                  </p>
                  <p className="max-w-[36em] leading-[1.9]">
                    행복한길잡이는 체험을 통해 질문을 만들고, 그 질문을
                    통해 학생들이 스스로 생각할 수 있도록 수업을
                    구성합니다.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal className="order-1 lg:order-2">
              <div
                aria-hidden="true"
                className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-2 rounded-sm border border-dashed border-[var(--color-border)] bg-[var(--color-surface-alt)] text-[var(--color-text-muted)]"
              >
                <Camera size={32} />
                <p className="text-sm">중학교 체험 수업 사진 추가 필요</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 3. THINK DIFFERENTLY — 핵심 질문, 타이포그래피 중심 */}
      <section className="bg-[var(--color-surface-alt)] py-20 sm:py-28">
        <Container className="max-w-[900px]">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <Kicker>THINK DIFFERENTLY</Kicker>
              <h2 className="text-balance mt-4 text-3xl font-black leading-tight text-[var(--color-text)] sm:text-4xl">
                체험이 끝난 뒤,
                <br />
                하나의 질문이 남도록
              </h2>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <p className="text-balance mx-auto mt-14 max-w-3xl text-center text-2xl font-black leading-snug text-[var(--color-primary-hover)] sm:text-3xl">
              휠체어가 불편한 걸까요,
              <br />
              휠체어가 이동하기 어려운 환경이 불편한 걸까요?
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mx-auto mt-10 max-w-2xl space-y-4 text-center leading-[1.9] text-[var(--color-text-muted)]">
              <p>
                행복한길잡이의 체험은 단순히 「불편함을 느껴보는 것」에서
                끝나지 않습니다.
              </p>
              <p>
                학생들이 직접 이동하고, 관찰하고, 친구와 의견을 나누면서
                불편함이 개인의 신체에서만 발생하는 것이 아니라 시설,
                환경, 사람들의 태도에서도 만들어질 수 있다는 점을
                자연스럽게 생각해보도록 합니다.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 4. PROGRAM FLOW — 체험 → 관찰 → 질문 → 생각 */}
      <section className="bg-[var(--color-surface)] py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <Kicker>PROGRAM FLOW</Kicker>
              <h2 className="text-balance mt-4 text-3xl font-black text-[var(--color-text)] sm:text-4xl">
                직접 경험하고,
                <br />
                스스로 생각하는 체험교육
              </h2>
              <p className="mx-auto mt-4 max-w-[36em] leading-relaxed text-[var(--color-text-muted)]">
                중학생의 눈높이에 맞춰 체험 → 관찰 → 질문 → 생각의
                과정으로 수업을 진행합니다.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {THINK_FLOW.map((step, index) => (
              <Reveal key={step.eng} delay={(index % 2) * 100}>
                <div className="border-t-2 border-[var(--color-text)] pt-6">
                  <span className="text-4xl font-black text-[var(--color-primary)]">
                    0{index + 1}
                  </span>
                  <p className="mt-3 text-sm font-black tracking-[0.15em] text-[var(--color-primary-hover)]">
                    {step.eng}
                  </p>
                  <h3 className="mt-1 text-lg font-black text-[var(--color-text)]">
                    {step.kor}
                  </h3>
                  <p className="mt-3 leading-relaxed text-[var(--color-text-muted)]">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 5·6. 주요 체험 프로그램 — 체험마다 핵심 질문을 함께 제시 */}
      <section className="bg-[var(--color-surface-alt)] py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <Kicker>PROGRAM</Kicker>
              <h2 className="text-balance mt-4 text-3xl font-black text-[var(--color-text)] sm:text-4xl">
                몸으로 경험하고,
                <br />
                생각으로 완성하는 프로그램
              </h2>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-x-12 gap-y-16 sm:grid-cols-2">
            {MIDDLE_PROGRAMS.map((program, index) => (
              <Reveal key={program.title} delay={(index % 2) * 100}>
                <div className="border-t-2 border-[var(--color-text)] pt-6">
                  <div className="flex items-baseline gap-3">
                    <span aria-hidden="true" className="text-4xl font-black text-[var(--color-primary)] sm:text-5xl">
                      0{index + 1}
                    </span>
                    <program.icon aria-hidden="true" size={22} className="text-[var(--color-primary-hover)]" />
                  </div>
                  <h3 className="mt-3 text-2xl font-black text-[var(--color-text)]">
                    {program.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {program.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[var(--color-surface)] px-3 py-1 text-xs font-bold text-[var(--color-text-muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 max-w-[32em] leading-relaxed text-[var(--color-text-muted)]">
                    {program.desc}
                  </p>
                  <p className="mt-4 border-l-2 border-[var(--color-accent-strong)] pl-4 text-sm font-bold leading-relaxed text-[var(--color-primary-hover)]">
                    “{program.question}”
                  </p>
                  <div
                    aria-hidden="true"
                    className="mt-5 flex aspect-[4/3] w-full flex-col items-center justify-center gap-2 rounded-sm border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-muted)]"
                  >
                    <Camera size={28} />
                    <p className="text-sm">{program.title} 사진 추가 필요</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. BEFORE / AFTER — 효과 수치 대신 관점 변화 예시 */}
      <section className="bg-[var(--color-surface)] py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <Kicker>BEFORE &amp; AFTER</Kicker>
              <h2 className="text-balance mt-4 text-3xl font-black leading-tight text-[var(--color-text)] sm:text-4xl">
                체험 전의 생각이,
                <br />
                체험 후 하나의 관점이 됩니다.
              </h2>
            </Reveal>
          </div>

          <div className="mx-auto mt-14 max-w-3xl space-y-6">
            {BEFORE_AFTER.map((item, index) => (
              <Reveal key={item.before} delay={(index % 2) * 100}>
                <div className="grid gap-5 rounded-sm border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-7 sm:grid-cols-2 sm:gap-8">
                  <div>
                    <p className="text-xs font-black tracking-[0.15em] text-[var(--color-text-muted)]">
                      BEFORE
                    </p>
                    <p className="mt-2 leading-relaxed text-[var(--color-text)]">
                      “{item.before}”
                    </p>
                  </div>
                  <div className="border-t border-[var(--color-border)] pt-5 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
                    <p className="text-xs font-black tracking-[0.15em] text-[var(--color-primary-hover)]">
                      AFTER
                    </p>
                    <p className="mt-2 leading-relaxed text-[var(--color-text)]">
                      “{item.after}”
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. 운영 장점 — 학교 담당자가 바로 파악할 수 있는 실무 정보 */}
      <section className="bg-[var(--color-surface-alt)] py-20 sm:py-24">
        <Container className="max-w-[900px]">
          <Reveal>
            <Kicker>GUIDE</Kicker>
            <h2 className="text-balance mt-3 text-2xl font-black leading-tight text-[var(--color-text)] sm:text-3xl">
              학교에서는 준비 부담 없이,
              <br className="hidden sm:block" />
              학생들은 체험에 집중할 수 있도록
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-x-8 gap-y-8 border-t border-[var(--color-border)] pt-8 sm:grid-cols-2">
            {OPERATION_POINTS.map((item, index) => (
              <Reveal key={item.title} delay={(index % 2) * 100}>
                <div className="border-b border-[var(--color-border)] pb-6">
                  <p className="font-bold text-[var(--color-primary-hover)]">{item.title}</p>
                  <p className="mt-2 leading-relaxed text-[var(--color-text-muted)]">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 9. FINAL CTA — 실제 사진이 없어 브랜드 그라데이션 배경으로 마무리 */}
      <section className="on-dark relative isolate overflow-hidden bg-gradient-to-br from-[var(--color-secondary-hover)] via-[var(--color-secondary)] to-[var(--color-primary)]">
        <Container className="py-20 sm:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="text-balance text-2xl font-black leading-snug text-white sm:text-4xl">
                한 번의 체험이
                <br />
                학생들의 시선을 바꾸는 시작이 될 수 있습니다.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p className="mx-auto mt-5 max-w-[32em] leading-relaxed text-white/85">
                학교 일정과 참여 학급 수를 알려주시면
                <br className="hidden sm:block" />
                교육 운영 방법을 안내해드립니다.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <Link
                href="/contact"
                className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-7 text-base font-bold text-[var(--color-secondary)] transition-colors hover:brightness-95"
              >
                중학교 체험교육 문의하기
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
