import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Container } from "@/components/container";
import { Kicker } from "@/components/kicker";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "회사 소개",
};

const CORE_VALUES = [
  {
    number: "01",
    step: "EXPERIENCE",
    title: "직접 경험합니다",
    desc: "눈으로만 배우는 장애이해교육이 아니라 직접 움직이고 느끼며 서로 다른 일상의 방식을 경험합니다.",
  },
  {
    number: "02",
    step: "UNDERSTANDING",
    title: "다름을 이해합니다",
    desc: "체험을 통해 장애를 불편하거나 특별한 누군가의 문제가 아니라 서로 다른 삶의 방식으로 바라봅니다.",
  },
  {
    number: "03",
    step: "TOGETHER",
    title: "자연스럽게 함께합니다",
    desc: "교육의 마지막은 장애를 아는 것이 아닙니다. 장애가 있는 친구와 없는 친구가 서로를 의식하지 않고 자연스럽게 어울리는 것이 우리의 목표입니다.",
  },
];

const HOW_WE_WORK = [
  {
    title: "직접 기획한 4가지 체험존",
    desc: "시각장애존, 지체장애존, 감각협력존, 퀴즈협동존. 눈으로 보는 교육이 아니라 몸으로 겪는 체험을 직접 만들었습니다.",
  },
  {
    title: "교실로 찾아가는 수업",
    desc: "강사와 장비를 모두 준비해 학교로 찾아갑니다. 선생님의 준비 부담을 최소화합니다.",
  },
  {
    title: "최대 4학급 동시 체험",
    desc: "학급이 존을 순환하며 체험하여 한 번의 방문으로 여러 학급이 함께 교육을 마칠 수 있습니다.",
  },
  {
    title: "수업 후 만족도 조사",
    desc: "수업이 끝난 뒤 선생님의 의견을 받아 프로그램을 지속적으로 개선합니다.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* 1. HERO — 실제 현장 사진 + 감성적인 카피 */}
      <section id="top" className="on-dark relative isolate overflow-hidden">
        <div className="relative min-h-[280px] w-full sm:min-h-[640px] lg:min-h-[760px]">
          {/* 실제 체험교육 현장 사진 — 지체장애 공감 체험(휠체어)과
              시각장애 공감 체험 부스가 설치된 체육관 */}
          <Image
            src="/about-hero-2.jpg"
            alt="행복한길잡이 체험교육 현장 — 지체장애 공감 체험(휠체어)과 시각장애 공감 체험 부스가 설치된 체육관"
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-95"
          />

          <Container className="absolute inset-x-0 bottom-0 pb-6 sm:pb-20 lg:pb-24">
            <div className="max-w-2xl">
              <Reveal>
                <h1 className="text-balance text-xl font-black leading-tight text-white [text-shadow:0_2px_16px_rgb(0_0_0_/_60%)] sm:text-5xl">
                  다름을 이해하는 경험이
                  <br />
                  함께 살아가는 아이들을 만듭니다.
                </h1>
              </Reveal>
              <Reveal delay={100}>
                <p className="mt-2 max-w-[36em] text-sm leading-snug text-white [text-shadow:0_1px_10px_rgb(0_0_0_/_60%)] sm:mt-5 sm:text-base sm:leading-relaxed">
                  행복한길잡이는 아이들이 장애를 낯설거나 특별한 것으로
                  바라보지 않고, 서로 다른 모습 그대로 함께 살아가는
                  방법을 배우도록 돕습니다.
                </p>
              </Reveal>
            </div>
          </Container>
        </div>
      </section>

      {/* 2. WHY WE DO IT — 화이트 배경, 사진+텍스트 editorial layout */}
      <section className="bg-[var(--color-surface)] py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <Reveal>
                <Kicker>WHY WE DO IT</Kicker>
                <h2 className="text-balance mt-4 text-3xl font-black leading-tight text-[var(--color-text)] sm:text-4xl">
                  낯섦이 이해가 되고,
                  <br />
                  이해가 자연스러움이 되도록.
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <div className="mt-8 space-y-6 text-[var(--color-text-muted)]">
                  <p className="max-w-[36em] leading-[1.9]">
                    아이들은 경험하지 못한 것을 낯설게 느낄 수 있습니다.
                    장애 역시 마찬가지입니다.
                  </p>
                  <p className="max-w-[36em] leading-[1.9]">
                    그래서 행복한길잡이는 설명하는 데서 그치지 않습니다.
                    직접 보고, 움직이고, 느끼고, 친구와 함께 체험하게
                    합니다. 장애를 누군가의 부족함이 아니라 서로 다른
                    삶의 방식으로 이해할 수 있도록 말입니다.
                  </p>
                  <p className="max-w-[36em] leading-[1.9]">
                    우리가 바라는 변화는 거창하지 않습니다. 교육이 끝난
                    뒤 교실로 돌아간 아이들이 장애가 있는 친구를 만났을
                    때 머뭇거리지 않고 자연스럽게 함께할 수 있는 것.
                    그 작은 변화가 더 좋은 사회의 시작이라고 믿습니다.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal>
              <div className="relative aspect-[1672/941] w-full overflow-hidden rounded-sm">
                <Image
                  src="/about-why.jpg"
                  alt="지체장애 공감 체험(휠체어 타보기)과 시각장애 공감 체험(흰지팡이) 부스에서 학생들이 체험하는 모습"
                  fill
                  sizes="(min-width: 1024px) 40rem, 90vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 3. OUR VALUE — 경험→이해→함께, 하나의 흐름으로 연결 */}
      <section className="bg-[var(--color-surface-alt)] py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <Kicker>OUR VALUE</Kicker>
              <h2 className="text-balance mt-4 text-3xl font-black text-[var(--color-text)] sm:text-4xl">
                경험에서 시작해, 함께하는 태도로.
              </h2>
            </Reveal>
          </div>

          <div className="mt-16 flex flex-col lg:flex-row lg:items-start">
            <Reveal className="flex-1 lg:px-4 lg:text-center">
              <div className="flex items-baseline gap-3 lg:justify-center">
                <span aria-hidden="true" className="text-5xl font-black text-[var(--color-primary)] sm:text-6xl">
                  {CORE_VALUES[0].number}
                </span>
                <span className="text-xs font-bold tracking-[0.2em] text-[var(--color-primary-hover)]">
                  {CORE_VALUES[0].step}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-black text-[var(--color-text)]">
                {CORE_VALUES[0].title}
              </h3>
              <p className="mt-3 leading-relaxed text-[var(--color-text-muted)] lg:mx-auto lg:max-w-[24em]">
                {CORE_VALUES[0].desc}
              </p>
            </Reveal>

            <div aria-hidden="true" className="flex items-center justify-center py-8 lg:px-2 lg:py-16">
              <ArrowDown size={22} className="text-[var(--color-border)] lg:hidden" />
              <ArrowRight size={22} className="hidden text-[var(--color-border)] lg:block" />
            </div>

            <Reveal delay={100} className="flex-1 lg:px-4 lg:text-center">
              <div className="flex items-baseline gap-3 lg:justify-center">
                <span aria-hidden="true" className="text-5xl font-black text-[var(--color-primary)] sm:text-6xl">
                  {CORE_VALUES[1].number}
                </span>
                <span className="text-xs font-bold tracking-[0.2em] text-[var(--color-primary-hover)]">
                  {CORE_VALUES[1].step}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-black text-[var(--color-text)]">
                {CORE_VALUES[1].title}
              </h3>
              <p className="mt-3 leading-relaxed text-[var(--color-text-muted)] lg:mx-auto lg:max-w-[24em]">
                {CORE_VALUES[1].desc}
              </p>
            </Reveal>

            <div aria-hidden="true" className="flex items-center justify-center py-8 lg:px-2 lg:py-16">
              <ArrowDown size={22} className="text-[var(--color-border)] lg:hidden" />
              <ArrowRight size={22} className="hidden text-[var(--color-border)] lg:block" />
            </div>

            <Reveal delay={200} className="flex-1 lg:px-4 lg:text-center">
              <div className="flex items-baseline gap-3 lg:justify-center">
                <span aria-hidden="true" className="text-5xl font-black text-[var(--color-primary)] sm:text-6xl">
                  {CORE_VALUES[2].number}
                </span>
                <span className="text-xs font-bold tracking-[0.2em] text-[var(--color-primary-hover)]">
                  {CORE_VALUES[2].step}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-black text-[var(--color-text)]">
                {CORE_VALUES[2].title}
              </h3>
              <p className="mt-3 leading-relaxed text-[var(--color-text-muted)] lg:mx-auto lg:max-w-[24em]">
                {CORE_VALUES[2].desc}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 4. HOW WE WORK — 2x2 editorial grid, 큰 숫자 */}
      <section className="bg-[var(--color-surface)] py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <Kicker>HOW WE WORK</Kicker>
              <h2 className="text-balance mt-4 text-3xl font-black text-[var(--color-text)] sm:text-4xl">
                좋은 교육이 실제 학교에서 가능하도록.
              </h2>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-x-12 gap-y-14 sm:grid-cols-2">
            {HOW_WE_WORK.map((item, index) => (
              <Reveal key={item.title} delay={(index % 2) * 100}>
                <div className="border-t-2 border-[var(--color-text)] pt-5">
                  <span className="text-sm font-black text-[var(--color-primary-hover)]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-2 text-xl font-black text-[var(--color-text)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-[32em] leading-relaxed text-[var(--color-text-muted)]">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. CLOSING — 넓은 실제 사진 + 카피 + CTA */}
      <section className="on-dark relative isolate overflow-hidden">
        <div className="relative h-[60vh] min-h-[440px] w-full sm:h-[70vh] sm:min-h-[520px]">
          <Image
            src="/about-closing.jpg"
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
            className="object-cover brightness-75"
          />
          <Container className="relative flex h-full items-end pb-14 sm:items-center sm:pb-0">
            <div className="max-w-2xl">
              <Reveal>
                <p className="text-balance text-2xl font-black leading-snug text-white [text-shadow:0_2px_16px_rgb(0_0_0_/_70%)] sm:text-4xl">
                  오늘 한 번의 경험이
                  <br />
                  내일 누군가를 대하는 태도를 바꿉니다.
                </p>
              </Reveal>
              <Reveal delay={100}>
                <p className="mt-5 leading-relaxed text-white [text-shadow:0_1px_10px_rgb(0_0_0_/_70%)]">
                  다름을 이해하고 자연스럽게 함께하는 교실,
                  <br className="hidden sm:block" />
                  행복한길잡이가 함께하겠습니다.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-[var(--color-accent)] px-7 text-base font-bold text-[var(--color-secondary)] transition-colors hover:brightness-95"
                >
                  체험교육 문의하기
                  <ArrowRight aria-hidden="true" size={18} />
                </Link>
              </Reveal>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}
