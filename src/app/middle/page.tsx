import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Accessibility,
  ArrowDown,
  ArrowRight,
  Camera,
  CircleQuestionMark,
  Eye,
  HeartHandshake,
  RotateCw,
} from "lucide-react";
import { Container } from "@/components/container";
import { Kicker } from "@/components/kicker";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "중학교 체험",
};

// 4. PROGRAM FLOW — 체험 → 관찰 → 질문 → 생각. 초등학교의 '경험하고 이해하고
// 함께한다'는 3단계 흐름보다 한 단계 더 나아가, 느낀 점을 스스로 질문으로
// 만들어보는 과정을 더한 것이 중학교 프로그램의 핵심 차별점입니다.
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

// 5. EXPERIENCE 다이어그램에 들어가는 4개 체험존. 초등학교 페이지의 원형
// 순환 다이어그램과 동일한 구조를 쓰되, 중학생 눈높이에 맞춰 관찰·질문
// 중심으로 다시 쓴 설명을 그대로 사용합니다.
// TODO 확인 필요: 아래 4개 체험 제목/설명이 실제 진행 내용과 다르면 알려주세요.
const MIDDLE_PROGRAM_ZONES = [
  {
    icon: Accessibility,
    title: "지체장애 공감 체험",
    desc: "휠체어를 직접 이용하며 경사로, 좁은 통로, 장애물 등을 경험하고, 어떤 환경이 이동을 어렵게 만드는지 함께 관찰합니다.",
  },
  {
    icon: Eye,
    title: "시각장애 공감 체험",
    desc: "시야를 제한한 상태에서 흰지팡이와 감각을 활용해 이동하며, 다른 사람의 안내가 얼마나 중요한지 직접 경험합니다.",
  },
  {
    icon: HeartHandshake,
    title: "지적장애 공감 체험",
    desc: "친구와 역할을 나누고 서로의 정보와 감각을 활용해 과제를 해결하는 협력형 체험입니다.",
  },
  {
    icon: CircleQuestionMark,
    title: "참여형 퀴즈 · 생각 나누기",
    desc: "체험에서 알게 된 내용을 퀴즈로 정리합니다. 정답을 외우기보다 서로 다른 생각을 이야기하는 과정에 초점을 둡니다.",
  },
];

// MIDDLE_PROGRAM_ZONES 배열 순서(지체/시각/지적/퀴즈)에 맞춰 존별 실제 현장
// 사진을 매핑. 시각·퀴즈 존은 아직 사진이 없어 아이콘 placeholder 유지.
const ZONE_PHOTOS: Record<number, { src: string; alt: string }> = {
  0: {
    src: "/middle-zone-mobility.jpg",
    alt: "지체장애 공감 체험 존에서 학생이 휠체어를 탄 친구를 밀어주고, 다른 학생들이 둘러앉아 지켜보는 모습",
  },
  2: {
    src: "/middle-zone-intellectual.jpg",
    alt: "지적장애 공감 체험 존에서 학생들이 안내 카드를 보며 컵블록 쌓기 체험을 하는 모습",
  },
};

// 다이어그램 중앙 카드 — 초등학교는 수업 운영 타이밍을 3POINT로 보여주지만,
// 중학교는 '체험 후 남는 질문'이 핵심 차별점이라 BEFORE/AFTER 섹션의 실제
// 관점 변화를 3POINT 요약으로 보여줍니다.
const THINK_POINTS = [
  { title: "환경에서 찾는 불편", point: "휠체어 자체보다, 이동을 어렵게 만드는 환경도 문제일 수 있어요" },
  { title: "먼저 묻는 배려", point: "도와주기 전에 필요한지 먼저 물어보는 것도 배려예요" },
  { title: "다름이 아닌 다른 방법", point: "장애는 다름이 아니라 다른 방법으로 생활하는 것뿐이에요" },
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

// 8. 교육 안내 — 초등학교 페이지와 동일한 dl 형식으로 통일.
const INFO_ITEMS = [
  { label: "교육 시간", value: "1교시(45분) 기준, 4개 존 체험" },
  { label: "대상", value: "중학교 (학급 단위 신청)" },
  { label: "동시 진행", value: "학급 수에 맞춰 여러 학급이 순환하며 체험" },
  { label: "진행 방식", value: "체험 → 관찰 → 질문 → 생각의 흐름으로 진행" },
  { label: "강사·장비", value: "강사와 체험 도구를 모두 준비해 학교로 방문, 별도 구매 없음" },
  { label: "학교 준비사항", value: "강당 또는 교실 공간과 참여 학급 수만 알려주시면 됩니다" },
  { label: "도착·셋팅", value: "강사는 수업 1시간 30분 전에 도착해 셋팅합니다" },
];

const APPLY_FLOW = [
  { title: "문의", desc: "전화, 문자, 이메일로 학교와 희망 날짜를 남겨주세요." },
  { title: "일정·견적 안내", desc: "담당자가 연락드려 일정을 잡고 견적을 안내합니다. 나라장터·학교장터로도 계약하실 수 있습니다." },
  { title: "수업 진행", desc: "정해진 날짜에 학교로 찾아가 체험교육을 진행합니다." },
  { title: "만족도 조사", desc: "교육 후 의견을 들어 다음 교육을 더 좋게 만듭니다." },
];

export default function MiddlePage() {
  return (
    <>
      {/* 1. HERO — 초등학교 페이지와 동일한 박스 크기로 통일. */}
      <section id="top" className="on-dark relative isolate overflow-hidden">
        <div className="relative min-h-[480px] w-full sm:min-h-[640px] lg:min-h-[760px]">
          <Image
            src="/middle-hero.jpg"
            alt="학교 중정에서 지체장애·시각장애 공감 체험존을 동시에 진행하며 학생들이 둘러앉아 체험을 지켜보는 모습"
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
                <ul className="mt-8 max-w-[36em] space-y-4 leading-[1.6] text-[var(--color-text-muted)]">
                  <li className="flex gap-3">
                    <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                    친구 관계가 넓어지고, 사회를 바라보는 태도가 형성되는 시기입니다
                  </li>
                  <li className="flex gap-3">
                    <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                    정보 전달보다 생각을 돌아보고, 다른 입장에서 바라보는 경험이 중요합니다
                  </li>
                  <li className="flex gap-3">
                    <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                    시선을잇다는 체험에서 나온 질문으로 학생 스스로 생각하게 합니다
                  </li>
                </ul>
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

      {/* 3. DIFFERENCE — 초등학교와 무엇이 다른지 한눈에 비교 */}
      <section className="bg-[var(--color-surface-alt)] py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <Kicker>ELEMENTARY vs MIDDLE</Kicker>
              <h2 className="text-balance mt-4 text-3xl font-black leading-tight text-[var(--color-text)] sm:text-4xl">
                초등학교와는 조금 다르게 진행합니다
              </h2>
              <p className="mx-auto mt-4 max-w-[36em] leading-relaxed text-[var(--color-text-muted)]">
                같은 체험존이어도, 학년에 맞춰 수업이 묻는 질문의 깊이가
                달라집니다.
              </p>
            </Reveal>
          </div>

          <div className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7">
                <p className="text-sm font-black tracking-[0.15em] text-[var(--color-text-muted)]">
                  초등학교
                </p>
                <p className="mt-2 text-xl font-black text-[var(--color-text)]">
                  겪어보며 이해해요
                </p>
                <ul className="mt-5 space-y-3 leading-relaxed text-[var(--color-text-muted)]">
                  <li>1교시(40분) 기준, 4개 존 체험</li>
                  <li>쉬운 말과 일상 속 상황으로 설명</li>
                  <li>체험 자체에 집중해 재미있게 경험</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="h-full rounded-2xl bg-[var(--color-primary)] p-7 text-white">
                <p className="text-sm font-black tracking-[0.15em] text-white/70">
                  중학교
                </p>
                <p className="mt-2 text-xl font-black">
                  체험에 질문을 더해요
                </p>
                <ul className="mt-5 space-y-3 leading-relaxed text-white/90">
                  <li>1교시(45분) 기준, 4개 존 체험</li>
                  <li>왜 그런지 스스로 질문하도록 유도</li>
                  <li>친구와 생각을 나누며 관점을 넓힘</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 4. TRANSITION — 철학에서 체험으로 */}
      <section className="bg-[var(--color-surface)] pb-20 sm:pb-28">
        <Container>
          <div className="mx-auto max-w-2xl border-t border-[var(--color-border)] pt-14 text-center sm:pt-20">
            <Reveal>
              <p className="text-balance text-2xl font-black text-[var(--color-text)] sm:text-3xl">
                그래서, 체험에 질문을 더합니다.
              </p>
              <p className="mt-4 leading-relaxed text-[var(--color-text-muted)]">
                직접 겪는 것에서 끝나지 않고,
                <br className="hidden sm:block" />
                &quot;왜 그럴까&quot; 하고 한 번 더 묻는 시간.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 5. EXPERIENCE — 초등학교 페이지와 동일한 원형 순환 다이어그램. 중앙
          카드만 '운영 TIP' 대신 체험에서 남는 질문 3POINT로 바꿔, 중학교의
          질문 중심 교육이라는 차별점을 다이어그램 가운데에 드러냅니다. */}
      <section className="bg-[var(--color-surface-alt)] py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <Kicker>EXPERIENCE</Kicker>
              <h2 className="text-balance mt-4 text-3xl font-black text-[var(--color-text)] sm:text-4xl">
                직접 경험하는 4가지 체험존
              </h2>
              <p className="mx-auto mt-4 max-w-[36em] leading-relaxed text-[var(--color-text-muted)]">
                다른 방식으로 보고, 움직이고, 소통하고, 협력하는 경험을
                합니다.
              </p>
              <p className="mx-auto mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary-tint)] px-6 py-2.5 text-base font-bold text-[var(--color-primary-hover)]">
                <RotateCw aria-hidden="true" size={20} />
                한 교시 안에 네 존을 순서대로 도는 로테이션 수업
              </p>
            </Reveal>
          </div>

          {/* xl(1280px) 미만 — 세로 순환 흐름 */}
          <ol className="mx-auto mt-14 flex max-w-[22rem] flex-col items-center sm:max-w-[26rem] lg:max-w-[30rem] xl:hidden">
            {MIDDLE_PROGRAM_ZONES.map((zone, index) => {
              const photo = ZONE_PHOTOS[index];
              const isLast = index === MIDDLE_PROGRAM_ZONES.length - 1;

              return (
                <li key={zone.title} className="flex w-full flex-col items-center">
                  <Reveal delay={index * 100} className="flex w-full flex-col items-center">
                    <div className="relative">
                      <div className="relative h-72 w-72 overflow-hidden rounded-full shadow-lg ring-4 ring-white sm:h-96 sm:w-96 lg:h-[26rem] lg:w-[26rem]">
                        {photo ? (
                          <Image
                            src={photo.src}
                            alt={photo.alt}
                            fill
                            sizes="(min-width: 1024px) 416px, (min-width: 640px) 384px, 288px"
                            className="object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-[var(--color-primary-tint)]">
                            <zone.icon aria-hidden="true" size={64} className="text-[var(--color-primary-hover)]" />
                          </div>
                        )}
                      </div>
                      <span
                        aria-hidden="true"
                        className="absolute -left-2 -top-2 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-text)] text-xl font-black text-white shadow sm:h-16 sm:w-16 sm:text-3xl"
                      >
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-5 text-3xl font-black text-[var(--color-text)] sm:text-4xl">
                      {zone.title}
                    </h3>
                    <p className="mt-2 max-w-[28em] text-center leading-relaxed text-[var(--color-text-muted)]">
                      {zone.desc}
                    </p>
                  </Reveal>

                  {isLast ? (
                    <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary-tint)] px-5 py-2 text-center text-sm font-bold text-[var(--color-primary-hover)]">
                      <RotateCw aria-hidden="true" size={16} />
                      다시 01번 존으로 — 한 교시 안에 네 존을 순환 체험
                    </p>
                  ) : (
                    <ArrowDown aria-hidden="true" size={28} className="my-6 shrink-0 text-[var(--color-primary)]" />
                  )}
                </li>
              );
            })}
          </ol>

          {/* xl(1280px) 미만에서는 중앙 카드 자리가 없으니, 세로 흐름 아래에 같은
              생각 POINT를 보여줍니다. */}
          <div className="mx-auto mt-10 max-w-[32rem] rounded-2xl bg-[var(--color-surface)] p-8 text-left shadow-sm ring-1 ring-[var(--color-border)] xl:hidden">
            <p className="text-lg font-black tracking-[0.2em] text-[var(--color-primary)]">생각 POINT</p>
            <ul className="mt-4 space-y-4">
              {THINK_POINTS.map((tip) => (
                <li key={tip.title} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[var(--color-primary)]" />
                  <p className="text-lg leading-snug text-[var(--color-text)]">
                    <strong className="font-black text-[var(--color-primary-hover)]">{tip.title}</strong> — {tip.point}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* xl(1280px) 이상 — 원형 순환 다이어그램 */}
          <div className="relative mx-auto mt-20 hidden h-[1248px] w-[1248px] xl:block">
            <svg aria-hidden="true" viewBox="0 0 100 100" className="absolute inset-0 z-0 h-full w-full">
              <defs>
                <marker id="middle-zone-arrow" markerUnits="userSpaceOnUse" markerWidth="5" markerHeight="5" refX="3.5" refY="2.5" orient="auto-start-reverse">
                  <path d="M0,0 L5,2.5 L0,5 Z" fill="var(--color-primary)" />
                </marker>
              </defs>
              <path d="M 61.05 25.15 Q 73.33 26.67 74.84 38.95" fill="none" stroke="var(--color-primary)" strokeWidth="1.3" strokeLinecap="round" markerEnd="url(#middle-zone-arrow)" />
              <path d="M 74.84 61.05 Q 73.33 73.33 61.05 74.84" fill="none" stroke="var(--color-primary)" strokeWidth="1.3" strokeLinecap="round" markerEnd="url(#middle-zone-arrow)" />
              <path d="M 38.95 74.84 Q 26.67 73.33 25.15 61.05" fill="none" stroke="var(--color-primary)" strokeWidth="1.3" strokeLinecap="round" markerEnd="url(#middle-zone-arrow)" />
              <path d="M 25.15 38.95 Q 26.67 26.67 38.95 25.15" fill="none" stroke="var(--color-primary)" strokeWidth="1.3" strokeLinecap="round" markerEnd="url(#middle-zone-arrow)" />
            </svg>

            <div className="absolute left-1/2 top-1/2 isolate h-[896px] w-[896px] -translate-x-1/2 -translate-y-1/2">
              <div className="absolute left-1/2 top-1/2 z-10 w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[var(--color-surface)] p-7 text-left shadow-xl ring-1 ring-[var(--color-border)]">
                <p className="text-base font-black tracking-[0.2em] text-[var(--color-primary)]">생각 POINT</p>
                <ul className="mt-3 space-y-3">
                  {THINK_POINTS.map((tip) => (
                    <li key={tip.title} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[var(--color-primary)]" />
                      <p className="text-lg leading-snug text-[var(--color-text)]">
                        <strong className="font-black text-[var(--color-primary-hover)]">{tip.title}</strong> — {tip.point}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {MIDDLE_PROGRAM_ZONES.map((zone, index) => {
                const positionClass = [
                  "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2",
                  "left-full top-1/2 -translate-x-1/2 -translate-y-1/2",
                  "left-1/2 top-full -translate-x-1/2 -translate-y-1/2",
                  "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2",
                ][index];
                const photo = ZONE_PHOTOS[index];

                return (
                  <Reveal key={zone.title} delay={index * 100} className={`absolute z-10 flex w-80 flex-col items-center ${positionClass}`}>
                    <div className="relative h-80 w-80 shrink-0 overflow-hidden rounded-full shadow-lg ring-4 ring-[var(--color-surface-alt)]">
                      {photo ? (
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          sizes="320px"
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-[var(--color-primary-tint)]">
                          <zone.icon aria-hidden="true" size={56} className="text-[var(--color-primary-hover)]" />
                        </div>
                      )}
                    </div>
                    <h3 className="mt-3 max-w-[18rem] text-center text-2xl font-black text-[var(--color-text)]">
                      {zone.title}
                    </h3>
                    <p className="sr-only">{zone.desc}</p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* 6. PROGRAM FLOW — 체험 → 관찰 → 질문 → 생각 (중학교만의 4단계) */}
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

      {/* 7. BEFORE / AFTER — 효과 수치 대신 관점 변화 예시 */}
      <section className="bg-[var(--color-surface-alt)] py-20 sm:py-28">
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
                <div className="grid gap-5 rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)] p-7 sm:grid-cols-2 sm:gap-8">
                  <div>
                    <p className="text-xs font-black tracking-[0.15em] text-[var(--color-text-muted)]">
                      BEFORE
                    </p>
                    <p className="mt-2 leading-relaxed text-[var(--color-text)]">
                      &quot;{item.before}&quot;
                    </p>
                  </div>
                  <div className="border-t border-[var(--color-border)] pt-5 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
                    <p className="text-xs font-black tracking-[0.15em] text-[var(--color-primary-hover)]">
                      AFTER
                    </p>
                    <p className="mt-2 leading-relaxed text-[var(--color-text)]">
                      &quot;{item.after}&quot;
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. GUIDE — 초등학교 페이지와 동일한 dl + 4단계 형식으로 통일 */}
      <section className="bg-[var(--color-surface)] py-20 sm:py-24">
        <Container className="max-w-[900px]">
          <Reveal>
            <Kicker>GUIDE</Kicker>
            <h2 className="mt-3 text-2xl font-black text-[var(--color-text)] sm:text-3xl">
              교육 안내
            </h2>
          </Reveal>

          <dl className="mt-10 grid gap-x-8 gap-y-6 border-t border-[var(--color-border)] pt-8 sm:grid-cols-2">
            {INFO_ITEMS.map((item) => (
              <div key={item.label} className="border-b border-[var(--color-border)] pb-4">
                <dt className="text-xl font-bold text-[var(--color-primary-hover)]">{item.label}</dt>
                <dd className="mt-1 leading-relaxed text-[var(--color-text)]">{item.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-14">
            <h3 className="text-2xl font-black text-[var(--color-text)]">
              신청부터 수업까지 4단계
            </h3>
            <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {APPLY_FLOW.map((step, index) => (
                <li key={step.title} className="rounded-xl bg-[var(--color-surface-alt)] p-6">
                  <span className="text-lg font-black text-[var(--color-primary-hover)]">
                    0{index + 1}
                  </span>
                  <p className="mt-2 text-xl font-bold text-[var(--color-text)]">{step.title}</p>
                  <p className="mt-2 leading-relaxed text-[var(--color-text-muted)]">
                    {step.desc}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-6 max-w-[40em] leading-relaxed text-[var(--color-text-muted)]">
              나라장터·학교장터 등록 업체로, 두 곳을 통한 계약과 세금계산서 발행이 모두 가능합니다.
            </p>
          </div>
        </Container>
      </section>

      {/* 9. CLOSING — 초등학교 페이지와 동일하게, 실제 사진 + 카피 + CTA */}
      <section className="on-dark relative isolate overflow-hidden">
        <div className="relative h-[55vh] min-h-[420px] w-full sm:h-[65vh] sm:min-h-[480px]">
          <Image
            src="/middle-closing.jpg"
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
            className="object-cover brightness-75"
          />
          <Container className="relative flex h-full items-end pb-14 sm:items-center sm:pb-0">
            <div className="max-w-2xl">
              <Reveal>
                <p className="text-balance text-2xl font-black leading-snug text-white [text-shadow:0_2px_16px_rgb(0_0_0_/_60%)] sm:text-4xl">
                  오늘 던진 질문 하나가,
                  <br />
                  내일 세상을 보는 시선이 됩니다.
                </p>
              </Reveal>
              <Reveal delay={100}>
                <p className="mt-5 leading-relaxed text-white [text-shadow:0_1px_10px_rgb(0_0_0_/_60%)]">
                  다름을 이해하고 스스로 생각하는 교실,
                  <br className="hidden sm:block" />
                  시선을잇다가 함께하겠습니다.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-[var(--color-accent)] px-7 text-base font-bold text-[var(--color-secondary)] transition-colors hover:brightness-95"
                >
                  중학교 체험교육 문의하기
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
