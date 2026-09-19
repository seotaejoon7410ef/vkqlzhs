import Image from "next/image";
import {
  Accessibility,
  Camera,
  ChevronDown,
  Clock,
  Eye,
  GraduationCap,
  HeartHandshake,
  Mail,
  MapPinned,
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
    desc: "아이들 눈높이에 맞춰 쉽게 이야기해요.",
  },
  {
    title: "존중",
    desc: "누구나 편하게 참여하는 분위기를 만들어요.",
  },
  {
    title: "동행",
    desc: "교육이 끝난 뒤에도 선생님과 계속 소통해요.",
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

const GALLERY_PLACEHOLDERS = [
  "시각장애존 체험 모습",
  "지체장애존 체험 모습",
  "감각협력존 체험 모습",
  "전시형존 체험 모습",
  "학교 현장 진행 모습",
  "아이들 참여 모습",
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

const FAQS = [
  {
    q: "어떤 학년이 참여할 수 있나요?",
    a: "초등 전 학년이 참여할 수 있어요. 학년에 맞게 눈높이와 활동 난이도를 조정합니다.",
  },
  {
    q: "인원은 몇 명까지 가능한가요?",
    a: "한 학급부터 전교생까지 가능해요. 인원에 맞게 체험존 개수와 진행 방식을 조정합니다.",
  },
  {
    q: "교육 시간은 얼마나 걸리나요?",
    a: "1교시(45~50분)부터 온종일 과정까지, 학교 일정에 맞춰드려요.",
  },
  {
    q: "비용은 얼마인가요?",
    a: "인원, 시간, 지역에 따라 달라져요. 전화나 이메일로 문의하시면 정확히 안내해드립니다.",
  },
  {
    q: "비가 오는 날에도 진행되나요?",
    a: "대부분의 체험은 교실이나 강당 같은 실내에서도 진행할 수 있어요. 날씨 걱정은 크게 안 하셔도 됩니다.",
  },
  {
    q: "전국 어디든 방문 가능한가요?",
    a: "전국 초등학교로 찾아갑니다. 지역에 따라 일정 조율이 필요할 수 있으니 미리 문의해주세요.",
  },
];

const APPLY_STEPS = [
  { step: "1", title: "문의", desc: "전화나 이메일로 학교 이름과 희망 날짜를 남겨주세요." },
  { step: "2", title: "일정 조율", desc: "대표 서태준이 직접 연락드려 인원과 시간을 맞춥니다." },
  { step: "3", title: "교육 진행", desc: "정해진 날짜에 학교로 찾아가 체험교육을 진행합니다." },
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

      {/* 소개: 텍스트 + 이미지 2단 구성으로 다른 섹션과 리듬을 다르게 */}
      <section id="about" aria-labelledby="about-heading" className="scroll-mt-24 py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold text-[var(--color-primary-hover)]">소개</p>
            <h2 id="about-heading" className="mt-3 text-3xl font-extrabold text-[var(--color-text)]">
              행복한길잡이는 이런 마음으로 찾아갑니다
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-text-muted)]">
              대표 서태준이 직접 만든 행복한길잡이는, 장애를 멀게 느끼는
              아이들에게 가까이 다가가고 싶어서 시작했습니다. 어려운 말 대신
              체험으로, 교실 안에서 배리어프리를 만납니다.
            </p>

            <ul className="mt-8 space-y-4">
              {VALUES.map((value) => (
                <li key={value.title} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-tint)] text-xs font-extrabold text-[var(--color-primary-hover)]">
                    {value.title[0]}
                  </span>
                  <p className="leading-relaxed text-[var(--color-text)]">
                    <span className="font-bold">{value.title}</span> — {value.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div
            aria-hidden="true"
            className="flex h-64 items-center justify-center rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] sm:h-80"
          >
            <div className="flex flex-col items-center gap-3 text-[var(--color-text-muted)]">
              <Camera aria-hidden="true" size={36} />
              <p className="text-sm">대표 소개 사진 (준비 중)</p>
            </div>
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

      {/* 체험 사진 갤러리 */}
      <section id="gallery" aria-labelledby="gallery-heading" className="scroll-mt-24 py-16 sm:py-20">
        <Container>
          <p className="text-sm font-bold text-[var(--color-primary-hover)]">체험 사진</p>
          <h2 id="gallery-heading" className="mt-3 text-3xl font-extrabold text-[var(--color-text)]">
            현장에서는 이렇게 진행해요
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-text-muted)]">
            실제 체험 사진은 준비되는 대로 채워 넣을 예정입니다.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY_PLACEHOLDERS.map((label) => (
              <div
                key={label}
                className="flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface-alt)] text-[var(--color-text-muted)]"
              >
                <Camera aria-hidden="true" size={28} />
                <p className="text-sm">{label}</p>
                <p className="text-xs">(준비 중)</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 왜 행복한길잡이일까요: 카드 그리드 대신 가로형 리스트로 리듬 변화 */}
      <section
        id="why"
        aria-labelledby="why-heading"
        className="on-dark scroll-mt-24 bg-[var(--color-secondary)] py-16 text-white sm:py-20"
      >
        <Container>
          <h2 id="why-heading" className="text-3xl font-extrabold text-white">
            왜 행복한길잡이일까요
          </h2>
          <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {WHY_US.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-[var(--color-accent)]"
                >
                  <item.icon size={24} />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-white/80">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 자주 묻는 질문 */}
      <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-24 py-16 sm:py-20">
        <Container className="max-w-3xl">
          <p className="text-sm font-bold text-[var(--color-primary-hover)]">자주 묻는 질문</p>
          <h2 id="faq-heading" className="mt-3 text-3xl font-extrabold text-[var(--color-text)]">
            선생님들이 많이 물어보세요
          </h2>

          <div className="mt-10 space-y-3">
            {FAQS.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-2 open:pb-5"
              >
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 text-lg font-bold text-[var(--color-text)]">
                  {item.q}
                  <ChevronDown
                    aria-hidden="true"
                    size={22}
                    className="shrink-0 text-[var(--color-primary)] transition-transform group-open:rotate-180"
                  />
                </summary>
                <p className="leading-relaxed text-[var(--color-text-muted)]">{item.a}</p>
              </details>
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

            <ol className="mt-10 grid gap-6 sm:grid-cols-3 sm:max-w-2xl">
              {APPLY_STEPS.map((item) => (
                <li key={item.step} className="flex flex-col gap-2">
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-extrabold text-white"
                  >
                    {item.step}
                  </span>
                  <p className="font-bold text-[var(--color-text)]">{item.title}</p>
                  <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {item.desc}
                  </p>
                </li>
              ))}
            </ol>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:max-w-xl">
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

            <p className="mt-6 flex items-center gap-2 text-[var(--color-text-muted)]">
              <MapPinned aria-hidden="true" size={18} />
              대표 서태준 · 전국 초등학교 방문 가능
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
