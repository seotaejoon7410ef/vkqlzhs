import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, RotateCw, Users } from "lucide-react";
import { Container } from "@/components/container";
import { Kicker } from "@/components/kicker";
import { Reveal } from "@/components/reveal";
import { ELEMENTARY_ZONES } from "@/components/program-zones";

export const metadata: Metadata = {
  title: "초등학교 체험",
};

// 6. 교육 안내 — 기존 FAQ 페이지에 있던 운영 정보를 이 페이지용으로 재정리
const INFO_ITEMS = [
  { label: "교육 시간", value: "1교시(40분) 기준, 4개 존 체험" },
  { label: "대상", value: "초등학교, 중학교 (학급 단위 신청)" },
  { label: "동시 진행", value: "최대 4학급까지 동시 체험 가능" },
  { label: "진행 방식", value: "학급별로 순서를 정해 4개 존을 순환하며 체험" },
  { label: "강사·장비", value: "강사와 체험 도구를 모두 준비해 학교로 방문, 별도 구매 없음" },
  { label: "학교 준비사항", value: "강당 또는 교실 공간과 참여 학급 수만 알려주시면 됩니다" },
  { label: "도착·셋팅", value: "강사는 수업 1시간 30분 전에 도착해 셋팅합니다" },
];

// 4. EXPERIENCE 다이어그램 중앙에 들어가는 운영 팁 — 큰 화면(xl)에서는 원형
// 순환 다이어그램 가운데에, 그보다 좁은 화면에서는 세로 흐름 아래에 보여줍니다.
// 제목+설명 문단 대신 한 줄 3POINT 요약으로 압축해 작은 공간에서도 가독성을 유지합니다.
const OPERATING_TIPS = [
  { title: "10분, 하나의 시선", point: "존마다 10분씩 머물며 네 가지 시선을 모두 만납니다" },
  { title: "열고, 겪고, 남기다", point: "소개 1분, 체험 8분, 정리 및 이동 1분으로 진행합니다" },
  { title: "기다림 없는 동시 체험", point: "최대 4학급이 동시에 체험해 대기 시간이 없습니다" },
];

const APPLY_FLOW = [
  { title: "문의", desc: "전화, 문자, 이메일로 학교와 희망 날짜를 남겨주세요." },
  { title: "일정·견적 안내", desc: "담당자가 연락드려 일정을 잡고 견적을 안내합니다. 나라장터·학교장터로도 계약하실 수 있습니다." },
  { title: "수업 진행", desc: "정해진 날짜에 학교로 찾아가 체험교육을 진행합니다." },
  { title: "만족도 조사", desc: "교육 후 의견을 들어 다음 교육을 더 좋게 만듭니다." },
];

// 4. EXPERIENCE 존 사진 — ELEMENTARY_ZONES 배열 순서(시각/지체/지적/퀴즈)에
// 맞춰 존별 실제 현장 사진을 매핑.
const ZONE_PHOTOS: Record<number, { src: string; alt: string }> = {
  0: {
    src: "/elementary-zone-visual.jpg",
    alt: "시각장애 공감 체험존 배너 앞에서 강사가 체험 진행 방법을 설명하는 모습",
  },
  1: {
    src: "/elementary-zone-mobility.jpg",
    alt: "지체장애 공감 체험 배너와 휠체어들 앞에서 강사가 학생들에게 체험 방법을 설명하는 모습",
  },
  2: {
    src: "/intellectual-zone.jpg",
    alt: "지적장애공감체험 존에서 학생들이 컵블록 쌓기 체험을 하는 모습",
  },
  3: {
    src: "/elementary-zone-quiz.jpg",
    alt: "장애인식개선퀴즈 존에서 강사가 큰 화면으로 퀴즈 결과를 보여주며 학생들과 함께 진행하는 모습",
  },
};

export default function ElementaryPage() {
  return (
    <>
      {/* 1. HERO — 중학교 페이지(/middle)와 동일한 박스 크기로 통일. */}
      <section id="top" className="on-dark relative isolate overflow-hidden">
        <div className="relative min-h-[480px] w-full sm:min-h-[640px] lg:min-h-[760px]">
          {/* 실제 초등학교 장애인식개선의 날 행사 현장 사진 */}
          <Image
            src="/elementary-hero.jpg"
            alt="노란 터널형 지체장애 공감 체험존에서 학생들이 휠체어를 타고 체험에 참여하는 모습"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-95"
          />

          <Container className="absolute inset-x-0 bottom-0 pb-3 sm:pb-8 lg:pb-10">
            <div className="max-w-2xl">
              <Reveal>
                <h1 className="text-balance text-xl font-black leading-tight text-white [text-shadow:0_2px_16px_rgb(0_0_0_/_60%)] sm:text-5xl">
                  찾아가는 장애인식개선교육 체험
                </h1>
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

      {/* 2. WHY — 왜 초등학생 시기에 필요한가 */}
      <section className="bg-[var(--color-surface)] py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <Reveal>
                <Kicker>WHY ELEMENTARY</Kicker>
                <h2 className="text-balance mt-4 text-3xl font-black leading-tight text-[var(--color-text)] sm:text-4xl">
                  몸이 자라는 만큼,
                  <br />
                  세상을 바라보는 시선도 자라는 시기입니다.
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <ul className="mt-8 max-w-[36em] space-y-4 leading-[1.6] text-[var(--color-text-muted)]">
                  <li className="flex gap-3">
                    <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                    신체적 성장과 함께 친구 관계와 사회적 태도가 형성되는 시기입니다
                  </li>
                  <li className="flex gap-3">
                    <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                    장애를 지식이 아닌, 직접 보고 움직이고 느끼는 경험으로 알려줍니다
                  </li>
                  <li className="flex gap-3">
                    <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                    시선을잇다는 이런 체험을 통해 자연스러운 이해를 돕습니다
                  </li>
                </ul>
              </Reveal>
            </div>

            <Reveal>
              <div className="relative aspect-[1672/941] w-full overflow-hidden rounded-sm">
                <Image
                  src="/elementary-why.jpg"
                  alt="시각장애 공감 체험존 앞에서 강사가 체험 진행 방법을 설명하고 학생들이 둘러앉아 듣는 모습"
                  fill
                  sizes="(min-width: 1024px) 40rem, 90vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 3. TRANSITION — 철학에서 체험으로 */}
      <section className="bg-[var(--color-surface)] pb-20 sm:pb-28">
        <Container>
          <div className="mx-auto max-w-2xl border-t border-[var(--color-border)] pt-14 text-center sm:pt-20">
            <Reveal>
              <p className="text-balance text-2xl font-black text-[var(--color-text)] sm:text-3xl">
                그래서, 직접 경험하게 합니다.
              </p>
              <p className="mt-4 leading-relaxed text-[var(--color-text-muted)]">
                설명으로 끝나는 교육이 아니라,
                <br className="hidden sm:block" />
                직접 보고, 움직이고, 느끼며 이해하는 시간.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 4. EXPERIENCE — 4개 존을 단으로 나열하지 않고, 원형 순환 다이어그램 하나로
          "한 교시 안에 네 존을 차례로 도는 로테이션 수업"임을 한눈에 보여줍니다. */}
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

          {/* xl(1280px) 미만 — 큰 원형 사진을 세로로 순서대로 배치하고 화살표로
              잇다가, 마지막에 다시 01번으로 돌아가는 순환 표시로 마무리합니다.
              원형 다이어그램에 사진+설명을 모두 담고, 화살표가 사진 바로
              옆까지 닿게 하려면 사진 사이 간격을 크게 벌려야 하는데, 그 정도
              여유 폭은 1280px 이상에서만 확보되어 그보다 좁은 화면은 세로
              흐름으로 전환합니다. */}
          <ol className="mx-auto mt-14 flex max-w-[22rem] flex-col items-center sm:max-w-[26rem] lg:max-w-[30rem] xl:hidden">
            {ELEMENTARY_ZONES.map((zone, index) => {
              const photo = ZONE_PHOTOS[index];
              const isLast = index === ELEMENTARY_ZONES.length - 1;

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
              운영 팁을 보여줍니다. */}
          <div className="mx-auto mt-10 max-w-[32rem] rounded-2xl bg-[var(--color-surface)] p-8 text-left shadow-sm ring-1 ring-[var(--color-border)] xl:hidden">
            <p className="text-lg font-black tracking-[0.2em] text-[var(--color-primary)]">운영 TIP</p>
            <ul className="mt-4 space-y-4">
              {OPERATING_TIPS.map((tip) => (
                <li key={tip.title} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[var(--color-primary)]" />
                  <p className="text-lg leading-snug text-[var(--color-text)]">
                    <strong className="font-black text-[var(--color-primary-hover)]">{tip.title}</strong> — {tip.point}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* xl(1280px) 이상 — 사진 사이 간격 자체를 크게 벌려서, 화살표가 사진
              바로 안쪽 가장자리에 닿을 만큼 바깥으로 나가도 설명 텍스트 박스와
              겹치지 않도록 다시 설계했습니다. Container가 1360px로 꽉 차는
              구간에서만 이만큼의 여유 폭이 나와 xl 전용으로 뺐습니다. */}
          <div className="relative mx-auto mt-20 hidden h-[1248px] w-[1248px] xl:block">
            <svg aria-hidden="true" viewBox="0 0 100 100" className="absolute inset-0 z-0 h-full w-full">
              <defs>
                <marker id="zone-arrow" markerUnits="userSpaceOnUse" markerWidth="5" markerHeight="5" refX="3.5" refY="2.5" orient="auto-start-reverse">
                  <path d="M0,0 L5,2.5 L0,5 Z" fill="var(--color-primary)" />
                </marker>
              </defs>
              <path d="M 61.05 25.15 Q 73.33 26.67 74.84 38.95" fill="none" stroke="var(--color-primary)" strokeWidth="1.3" strokeLinecap="round" markerEnd="url(#zone-arrow)" />
              <path d="M 74.84 61.05 Q 73.33 73.33 61.05 74.84" fill="none" stroke="var(--color-primary)" strokeWidth="1.3" strokeLinecap="round" markerEnd="url(#zone-arrow)" />
              <path d="M 38.95 74.84 Q 26.67 73.33 25.15 61.05" fill="none" stroke="var(--color-primary)" strokeWidth="1.3" strokeLinecap="round" markerEnd="url(#zone-arrow)" />
              <path d="M 25.15 38.95 Q 26.67 26.67 38.95 25.15" fill="none" stroke="var(--color-primary)" strokeWidth="1.3" strokeLinecap="round" markerEnd="url(#zone-arrow)" />
            </svg>

            <div className="absolute left-1/2 top-1/2 isolate h-[896px] w-[896px] -translate-x-1/2 -translate-y-1/2">
              {/* 중앙 운영 팁 카드 — 화살표 호(반지름 약 237px) 안쪽에 들어가도록
                  대각선 길이를 여유 있게 맞춘 크기입니다. 한 줄 3POINT 요약으로
                  압축해 더 크고 읽기 쉬운 카드로 바꿨습니다. */}
              <div className="absolute left-1/2 top-1/2 z-10 w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[var(--color-surface)] p-7 text-left shadow-xl ring-1 ring-[var(--color-border)]">
                <p className="text-base font-black tracking-[0.2em] text-[var(--color-primary)]">운영 TIP</p>
                <ul className="mt-3 space-y-3">
                  {OPERATING_TIPS.map((tip) => (
                    <li key={tip.title} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[var(--color-primary)]" />
                      <p className="text-lg leading-snug text-[var(--color-text)]">
                        <strong className="font-black text-[var(--color-primary-hover)]">{tip.title}</strong> — {tip.point}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {ELEMENTARY_ZONES.map((zone, index) => {
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

      {/* 5. EDUCATIONAL FLOW — 경험이 태도로 이어지는 과정 (요약) */}
      <section className="bg-[var(--color-surface)] py-20 sm:py-28">
        <Container>
          <div className="flex flex-col items-center gap-10 text-center sm:flex-row sm:justify-between sm:gap-6">
            <Reveal>
              <div>
                <p className="text-lg font-black tracking-[0.15em] text-[var(--color-primary)] sm:text-xl">
                  EXPERIENCE
                </p>
                <p className="mt-2 text-2xl font-black text-[var(--color-text)] sm:text-3xl">직접 경험하고</p>
              </div>
            </Reveal>
            <ArrowDown aria-hidden="true" size={32} className="shrink-0 text-[var(--color-border)] sm:hidden" />
            <ArrowRight aria-hidden="true" size={36} className="hidden shrink-0 text-[var(--color-border)] sm:block" />
            <Reveal delay={100}>
              <div>
                <p className="text-lg font-black tracking-[0.15em] text-[var(--color-primary)] sm:text-xl">
                  UNDERSTANDING
                </p>
                <p className="mt-2 text-2xl font-black text-[var(--color-text)] sm:text-3xl">다름을 이해하고</p>
              </div>
            </Reveal>
            <ArrowDown aria-hidden="true" size={32} className="shrink-0 text-[var(--color-border)] sm:hidden" />
            <ArrowRight aria-hidden="true" size={36} className="hidden shrink-0 text-[var(--color-border)] sm:block" />
            <Reveal delay={200}>
              <div>
                <p className="text-lg font-black tracking-[0.15em] text-[var(--color-primary)] sm:text-xl">
                  TOGETHER
                </p>
                <p className="mt-2 text-2xl font-black text-[var(--color-text)] sm:text-3xl">자연스럽게 함께합니다</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>


      {/* 6. GUIDE — 실제 운영 정보 (감성보다 정보 전달 우선) */}
      <section className="bg-[var(--color-surface-alt)] py-20 sm:py-24">
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

          <div className="mt-8 flex items-start gap-3 rounded-2xl bg-[var(--color-primary-tint)] p-5">
            <Users aria-hidden="true" size={22} className="mt-0.5 shrink-0 text-[var(--color-primary-hover)]" />
            <p className="leading-relaxed text-[var(--color-text)]">
              <strong className="font-bold">학급당 최대 25명</strong>일 때 가장 알차게 운영됩니다. 그보다 인원이 많으면 체험 시간이나 존별 설명이 다소 짧아질 수 있어요.
            </p>
          </div>

          <div className="mt-14">
            <h3 className="text-2xl font-black text-[var(--color-text)]">
              신청부터 수업까지 4단계
            </h3>
            <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {APPLY_FLOW.map((step, index) => (
                <li key={step.title} className="rounded-xl bg-[var(--color-surface)] p-6">
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

      {/* 7. CLOSING — 넓은 실제 사진 + 카피 + CTA */}
      <section className="on-dark relative isolate overflow-hidden">
        <div className="relative h-[55vh] min-h-[420px] w-full sm:h-[65vh] sm:min-h-[480px]">
          <Image
            src="/elementary-closing.jpg"
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
                  아이들이 오늘 경험한 다름이
                  <br />
                  내일 누군가를 대하는 태도가 됩니다.
                </p>
              </Reveal>
              <Reveal delay={100}>
                <p className="mt-5 leading-relaxed text-white [text-shadow:0_1px_10px_rgb(0_0_0_/_60%)]">
                  서로의 다름을 이해하고 자연스럽게 함께하는 교실,
                  <br className="hidden sm:block" />
                  시선을잇다가 함께하겠습니다.
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
