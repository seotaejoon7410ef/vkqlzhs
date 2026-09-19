import Image from "next/image";
import {
  Accessibility,
  Clock,
  Eye,
  GraduationCap,
  HeartHandshake,
  Mail,
  Phone,
  Presentation,
  School,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/container";

const VALUES = [
  {
    title: "이해",
    desc: "장애를 어렵게 설명하지 않아요. 아이들 눈높이에 맞춰 쉽게 이야기해요.",
  },
  {
    title: "존중",
    desc: "누구나 편하게 참여하고, 서로 존중하는 분위기를 만들어요.",
  },
  {
    title: "동행",
    desc: "한 번의 교육으로 끝나지 않도록, 선생님과 계속 소통해요.",
  },
];

const ZONES = [
  {
    icon: Eye,
    title: "시각장애존",
    desc: "안대를 쓰고 걸어봐요. 눈이 안 보이면 어떤 기분인지 몸으로 느껴요.",
  },
  {
    icon: Accessibility,
    title: "지체장애존",
    desc: "휠체어를 직접 타 봐요. 계단과 턱이 왜 힘든지 알게 돼요.",
  },
  {
    icon: HeartHandshake,
    title: "감각협력존",
    desc: "친구와 손발을 맞춰요. 함께 힘을 모으는 즐거움을 배워요.",
  },
  {
    icon: Presentation,
    title: "전시형존",
    desc: "그림과 자료를 보며 궁금한 점을 쉽게 풀어요.",
  },
];

const WHY_US = [
  {
    icon: School,
    title: "학교로 직접 찾아가요",
    desc: "선생님은 신청만 해주세요. 준비물과 강사가 모두 학교로 갑니다.",
  },
  {
    icon: Sparkles,
    title: "체험 중심 수업",
    desc: "설명만 듣지 않고, 직접 해보면서 배워요. 그래서 오래 기억해요.",
  },
  {
    icon: ShieldCheck,
    title: "안전하게 진행해요",
    desc: "모든 체험은 안전 수칙을 지키며, 강사가 계속 함께합니다.",
  },
  {
    icon: Clock,
    title: "시간표를 맞춰드려요",
    desc: "1교시부터 온종일 과정까지, 학교 일정에 맞게 조정해요.",
  },
];

export default function Home() {
  return (
    <>
      {/* 히어로 */}
      <section id="top" className="scroll-mt-24 bg-[var(--color-surface-alt)]">
        <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary-tint)] px-4 py-1.5 text-sm font-bold text-[var(--color-primary-hover)]">
              <GraduationCap aria-hidden="true" size={18} />
              초등학교로 찾아가는 장애 인식 개선 체험교육
            </p>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-[var(--color-text)] sm:text-5xl">
              몸으로 배우는 배리어프리 교실,
              <br />
              <span className="text-[var(--color-primary)]">행복한길잡이</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-text-muted)]">
              행복한길잡이가 학교로 직접 찾아갑니다. 아이들은 체험을 통해
              장애를 자연스럽게 이해하고, 서로를 존중하는 법을 배웁니다.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:0312368410"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-7 text-base font-bold text-white transition-colors hover:bg-[var(--color-primary-hover)]"
              >
                <Phone aria-hidden="true" size={20} />
                전화로 문의하기
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[var(--color-secondary)] px-7 text-base font-bold text-[var(--color-secondary)] transition-colors hover:bg-[var(--color-secondary-tint)]"
              >
                교육 신청 안내 보기
              </a>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="flex h-64 items-center justify-center rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] sm:h-80 lg:h-96"
          >
            <Image
              src="/logo-mark.png"
              alt=""
              width={140}
              height={140}
              className="h-32 w-32 sm:h-36 sm:w-36"
            />
          </div>
        </Container>
      </section>

      {/* 소개 */}
      <section id="about" aria-labelledby="about-heading" className="scroll-mt-24 py-16 sm:py-20">
        <Container>
          <p className="text-sm font-bold text-[var(--color-primary-hover)]">소개</p>
          <h2 id="about-heading" className="mt-3 text-3xl font-extrabold text-[var(--color-text)]">
            행복한길잡이는 이런 마음으로 찾아갑니다
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-text-muted)]">
            대표 서태준이 직접 만든 행복한길잡이는, 장애를 멀게 느끼는 아이들에게
            가까이 다가가고 싶어서 시작했습니다. 어려운 말 대신 체험으로, 교실
            안에서 배리어프리를 만납니다.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8"
              >
                <h3 className="text-xl font-bold text-[var(--color-primary-hover)]">
                  {value.title}
                </h3>
                <p className="mt-3 leading-relaxed text-[var(--color-text-muted)]">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 체험 프로그램 4존 */}
      <section
        id="programs"
        aria-labelledby="programs-heading"
        className="scroll-mt-24 bg-[var(--color-surface-alt)] py-16 sm:py-20"
      >
        <Container>
          <p className="text-sm font-bold text-[var(--color-primary-hover)]">체험 프로그램</p>
          <h2 id="programs-heading" className="mt-3 text-3xl font-extrabold text-[var(--color-text)]">
            체험 프로그램 4존
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-text-muted)]">
            아이들은 4개의 체험존을 돌며 몸으로 배웁니다. 학교 사정에 맞춰
            존 구성과 시간을 조정할 수 있습니다.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ZONES.map((zone) => (
              <div
                key={zone.title}
                className="flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7"
              >
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary-tint)] text-[var(--color-primary-hover)]"
                >
                  <zone.icon size={24} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-[var(--color-text)]">
                  {zone.title}
                </h3>
                <p className="mt-3 leading-relaxed text-[var(--color-text-muted)]">
                  {zone.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 왜 행복한길잡이일까요 */}
      <section
        id="why"
        aria-labelledby="why-heading"
        className="on-dark scroll-mt-24 bg-[var(--color-secondary)] py-16 text-white sm:py-20"
      >
        <Container>
          <h2 id="why-heading" className="text-3xl font-extrabold">
            왜 행복한길잡이일까요
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_US.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/20 bg-white/5 p-7"
              >
                <span aria-hidden="true" className="text-[var(--color-accent)]">
                  <item.icon size={26} />
                </span>
                <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 문의하기 */}
      <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-24 py-16 sm:py-20">
        <Container>
          <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] px-6 py-12 sm:px-10 sm:py-16">
            <p className="text-sm font-bold text-[var(--color-primary-hover)]">문의하기</p>
            <h2
              id="contact-heading"
              className="mt-3 text-3xl font-extrabold text-[var(--color-text)]"
            >
              지금 바로 문의해 주세요
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--color-text-muted)]">
              학교 이름과 희망 날짜만 알려주시면, 대표 서태준이 직접
              전화드립니다.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:max-w-xl">
              <a
                href="tel:0312368410"
                className="flex min-h-16 items-center gap-3 rounded-2xl bg-[var(--color-primary)] px-6 text-lg font-bold text-white transition-colors hover:bg-[var(--color-primary-hover)]"
              >
                <Phone aria-hidden="true" size={24} />
                031-236-8410
              </a>
              <a
                href="mailto:happyguide95@naver.com"
                className="flex min-h-16 items-center gap-3 rounded-2xl border-2 border-[var(--color-secondary)] px-6 text-lg font-bold text-[var(--color-secondary)] transition-colors hover:bg-[var(--color-secondary-tint)]"
              >
                <Mail aria-hidden="true" size={22} />
                happyguide95@naver.com
              </a>
            </div>

            <p className="mt-6 text-[var(--color-text-muted)]">대표 서태준</p>
          </div>
        </Container>
      </section>
    </>
  );
}
