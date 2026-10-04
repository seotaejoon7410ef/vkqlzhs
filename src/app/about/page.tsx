import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ClipboardCheck, Hand, MapPin, Phone, type LucideIcon } from "lucide-react";
import { Container } from "@/components/container";
import { CountUp } from "@/components/count-up";
import { Kicker } from "@/components/kicker";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "회사 소개",
};

const PROMISES: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: MapPin,
    title: "찾아갑니다",
    desc: "현장학습 준비 없이, 우리 학교·우리 유치원 교실에서",
  },
  {
    icon: Hand,
    title: "직접 해봅니다",
    desc: "보고 듣는 수업이 아니라 몸으로 느끼는 체험",
  },
  {
    icon: ClipboardCheck,
    title: "꼼꼼하게 준비합니다",
    desc: "체험 장비와 진행 순서를 미리 맞춰, 선생님은 아이들만 챙기시면 됩니다",
  },
];

const STATS = [
  { value: 4, suffix: "개", label: "한 교시 안에 체험하는 체험존" },
  { value: 4, suffix: "학급", label: "동시에 진행 가능한 최대 학급 수" },
  { value: 5, suffix: "개 지역", label: "서울 · 경기 · 인천 · 충남 · 충북" },
];

export default function AboutPage() {
  return (
    <>
      <section
        id="top"
        className="relative flex min-h-[70vh] items-center overflow-hidden bg-gradient-to-br from-[#fff3df] via-[#fbf8ff] to-[#e9e1fa] pt-32 pb-20 sm:min-h-[80vh]"
      >
        <Container className="text-center">
          <p
            className="hero-anim text-sm font-bold tracking-[0.2em] text-[#2E3138]"
            style={{ animationDelay: "50ms" }}
          >
            체험교육센터 행복한길잡이
          </p>
          <h1
            className="text-balance mt-6 break-keep text-3xl font-extrabold leading-[1.3] tracking-[-0.03em] text-[#2E3138] sm:text-5xl lg:text-6xl"
          >
            <span className="hero-anim inline-block" style={{ animationDelay: "150ms" }}>
              나를 <span className="text-[#E07800]">지킬</span> 줄 아는 아이가
            </span>
            <br />
            <span className="hero-anim inline-block" style={{ animationDelay: "250ms" }}>
              <span className="text-[var(--color-primary)]">친구</span>도 지킬 수 있습니다
            </span>
          </h1>
        </Container>
      </section>

      <section className="bg-[var(--color-surface)] py-20 sm:py-28">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <Kicker large>우리의 생각</Kicker>
            <p className="mt-6 break-keep text-2xl font-black leading-relaxed text-[var(--color-text)] sm:text-3xl">
              나를 지킬 줄 아는 아이가 친구도 지킬 수 있고,
              <br />
              친구를 이해하는 아이가 더 안전한 교실을 만듭니다.
            </p>
            <p className="mt-8 break-keep leading-[1.9] text-[var(--color-text-muted)]">
              그래서 행복한길잡이는 안전과 공감을 따로 가르치지 않습니다.
              <br />
              유치원에서는 나를 지키는 법을, 학교에서는 친구와 함께하는 법을
              <br />
              직접 몸으로 체험하며 배웁니다.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-[var(--color-surface-alt)] py-20 sm:py-28">
        <Container>
          <Reveal>
            <Kicker large>우리가 하는 일</Kicker>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="flex h-full flex-col rounded-2xl border-t-4 border-[var(--color-accent)] bg-[var(--color-surface)] p-8 shadow-sm sm:p-10">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-black text-[var(--color-text)]">유치원 안전체험</h3>
                  <span className="rounded-full border border-[var(--color-accent)] px-2.5 py-0.5 text-xs font-bold text-[#B36B00]">
                    2027년 예약 접수 중
                  </span>
                </div>
                <p className="mt-4 font-bold text-[#B36B00]">교통안전 · 화재안전 · 응급처치 · 수상안전</p>
                <p className="mt-4 break-keep leading-relaxed text-[var(--color-text-muted)]">
                  아이가 직접 해보며 위험한 순간 스스로 지키는 법을 익힙니다
                </p>
                <Link
                  href="/kindergarten/traffic"
                  className="mt-auto inline-flex items-center gap-2 pt-8 font-bold text-[#B36B00] hover:underline"
                >
                  안전체험 자세히 보기
                  <ArrowRight aria-hidden="true" size={18} />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="flex h-full flex-col rounded-2xl border-t-4 border-[var(--color-primary)] bg-[var(--color-surface)] p-8 shadow-sm sm:p-10">
                <h3 className="text-2xl font-black text-[var(--color-text)]">초·중등 장애인식개선 체험</h3>
                <p className="mt-4 font-bold text-[var(--color-primary-hover)]">한 교시 안에 4개 체험존을 모두 체험</p>
                <p className="mt-4 break-keep leading-relaxed text-[var(--color-text-muted)]">
                  불편함을 직접 느껴보고, 함께하는 방법을 스스로 찾습니다
                </p>
                <Link
                  href="/elementary"
                  className="mt-auto inline-flex items-center gap-2 pt-8 font-bold text-[var(--color-primary-hover)] hover:underline"
                >
                  장애인식개선 체험 자세히 보기
                  <ArrowRight aria-hidden="true" size={18} />
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-surface)] py-20 sm:py-28">
        <Container>
          <Reveal className="text-center">
            <Kicker large>세 가지 약속</Kicker>
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {PROMISES.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 100} className="text-center">
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary-tint)] text-[var(--color-primary)]">
                    <Icon aria-hidden="true" size={28} />
                  </span>
                  <h3 className="mt-6 text-xl font-black text-[var(--color-text)]">{item.title}</h3>
                  <p className="mt-3 break-keep leading-relaxed text-[var(--color-text-muted)]">{item.desc}</p>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-surface-alt)] py-20 sm:py-28">
        <Container>
          <Reveal className="text-center">
            <Kicker large>숫자로 보는 진행 방식</Kicker>
          </Reveal>
          <div className="mt-12 grid gap-10 text-center md:grid-cols-3">
            {STATS.map((item, index) => (
              <Reveal key={item.label} delay={index * 100}>
                <p className="text-5xl font-black text-[var(--color-primary)] sm:text-6xl">
                  <CountUp to={item.value} suffix={item.suffix} />
                </p>
                <p className="mt-3 break-keep text-[var(--color-text-muted)]">{item.label}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-[#F2A126] to-[var(--color-primary)] py-24 text-white">
        <Container className="text-center">
          <Reveal>
            <h2 className="text-balance break-keep text-3xl font-black leading-tight [text-shadow:0_2px_12px_rgb(0_0_0_/_25%)] sm:text-4xl">
              우리 학교, 우리 유치원에도 찾아갈게요
            </h2>
            <p className="mt-5 break-keep text-lg text-white [text-shadow:0_1px_10px_rgb(0_0_0_/_25%)]">
              문의 한 번으로 일정과 진행 방식까지 안내해 드립니다
            </p>
          </Reveal>
          <Reveal delay={100} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center rounded-full bg-white px-8 text-base font-bold text-[var(--color-primary)] transition-colors hover:brightness-95"
            >
              문의 양식 작성하기
            </Link>
            <a
              href="tel:0312368410"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-white px-8 text-base font-bold text-white transition-colors hover:bg-white/10"
            >
              <Phone aria-hidden="true" size={18} />
              031-236-8410
            </a>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
