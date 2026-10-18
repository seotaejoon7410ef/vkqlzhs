import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, RotateCw } from "lucide-react";
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
  { label: "대상", value: "초등학교 (학급 단위 신청)" },
  { label: "동시 진행", value: "최대 4학급까지 동시 체험 가능" },
  { label: "진행 방식", value: "학급별로 순서를 정해 4개 존을 순환하며 체험" },
  { label: "강사·장비", value: "강사와 체험 도구를 모두 준비해 학교로 방문, 별도 구매 없음" },
  { label: "학교 준비사항", value: "강당 또는 교실 공간과 참여 학급 수만 알려주시면 됩니다" },
  { label: "도착·셋팅", value: "강사는 수업 1시간 30분 전에 도착해 셋팅합니다" },
];

const APPLY_FLOW = [
  { title: "문의", desc: "전화, 문자, 이메일로 학교와 희망 날짜를 남겨주세요." },
  { title: "일정·견적 안내", desc: "담당자가 연락드려 일정을 잡고 견적을 안내합니다." },
  { title: "수업 진행", desc: "정해진 날짜에 학교로 찾아가 체험교육을 진행합니다." },
  { title: "만족도 조사", desc: "교육 후 의견을 들어 다음 교육을 더 좋게 만듭니다." },
];

// 4. EXPERIENCE 존 사진 — ELEMENTARY_ZONES 배열 순서(시각/지체/지적/퀴즈)에
// 맞춰 존별 실제 현장 사진을 매핑. 장애인식개선퀴즈 존은 아직 사진이 없어 placeholder 유지.
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
            alt="체육관에 지적장애·지체장애 공감 체험존이 설치되고 학생들이 컵블록 쌓기와 휠체어 체험에 참여하는 모습"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-95"
          />

          <Container className="absolute inset-x-0 bottom-0 pb-3 sm:pb-8 lg:pb-10">
            <div className="max-w-2xl">
              <Reveal>
                <h1 className="text-balance text-xl font-black leading-tight text-white [text-shadow:0_2px_16px_rgb(0_0_0_/_60%)] sm:text-5xl">
                  초등학교 장애인식개선 체험
                </h1>
                <p className="mt-2 text-sm font-bold text-[var(--color-accent)] [text-shadow:0_1px_10px_rgb(0_0_0_/_60%)] sm:mt-3 sm:text-base">
                  초등학교 대상 프로그램입니다
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
                    시선을 잇다는 이런 체험을 통해 자연스러운 이해를 돕습니다
                  </li>
                </ul>
              </Reveal>
            </div>

            <Reveal>
              <div className="relative aspect-[1672/941] w-full overflow-hidden rounded-sm">
                <Image
                  src="/elementary-why.png"
                  alt="강사가 장애가 있는 위인들을 소개하는 '다름 속의 위대함' 보드 앞에서 초등학생들에게 설명하는 모습"
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
              <p className="mx-auto mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary-tint)] px-5 py-2 text-sm font-bold text-[var(--color-primary-hover)]">
                <RotateCw aria-hidden="true" size={16} />
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
                    <h3 className="mt-5 text-xl font-black text-[var(--color-text)] sm:text-2xl">
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

          {/* xl(1280px) 이상 — 사진 사이 간격 자체를 크게 벌려서, 화살표가 사진
              바로 안쪽 가장자리에 닿을 만큼 바깥으로 나가도 설명 텍스트 박스와
              겹치지 않도록 다시 설계했습니다. Container가 1360px로 꽉 차는
              구간에서만 이만큼의 여유 폭이 나와 xl 전용으로 뺐습니다. */}
          <div className="relative mx-auto mt-20 hidden h-[1248px] w-[1248px] xl:block">
            <svg aria-hidden="true" viewBox="0 0 100 100" className="absolute inset-0 z-0 h-full w-full">
              <defs>
                <marker id="zone-arrow" markerUnits="userSpaceOnUse" markerWidth="4" markerHeight="4" refX="2.8" refY="2" orient="auto-start-reverse">
                  <path d="M0,0 L4,2 L0,4 Z" fill="var(--color-primary)" />
                </marker>
              </defs>
              <path d="M 59.05 23.16 Q 73.33 26.67 76.84 40.95" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" markerEnd="url(#zone-arrow)" />
              <path d="M 76.84 59.05 Q 73.33 73.33 59.05 76.84" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" markerEnd="url(#zone-arrow)" />
              <path d="M 40.95 76.84 Q 26.67 73.33 23.16 59.05" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" markerEnd="url(#zone-arrow)" />
              <path d="M 23.16 40.95 Q 26.67 26.67 40.95 23.16" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" markerEnd="url(#zone-arrow)" />
            </svg>

            <div className="absolute left-1/2 top-1/2 isolate h-[896px] w-[896px] -translate-x-1/2 -translate-y-1/2">
              {/* 중앙 허브 */}
              <div className="absolute left-1/2 top-1/2 z-10 flex h-[88px] w-[88px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-[var(--color-primary)] text-center text-white shadow-lg">
                <RotateCw aria-hidden="true" size={20} />
                <p className="mt-1 text-sm font-black leading-tight">
                  1교시
                  <br />
                  순환 체험
                </p>
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
                      <span
                        aria-hidden="true"
                        className="absolute left-3 top-3 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-text)] text-lg font-black text-white shadow"
                      >
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-3 max-w-[17rem] text-center text-lg font-black text-[var(--color-text)]">
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
      <section className="bg-[var(--color-surface)] py-16 sm:py-20">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-center sm:gap-5">
            <Reveal>
              <div>
                <p className="text-sm font-black tracking-[0.15em] text-[var(--color-primary)]">
                  EXPERIENCE
                </p>
                <p className="mt-1 text-lg font-bold text-[var(--color-text)]">직접 경험하고</p>
              </div>
            </Reveal>
            <ArrowDown aria-hidden="true" size={20} className="text-[var(--color-border)] sm:hidden" />
            <ArrowRight aria-hidden="true" size={20} className="hidden text-[var(--color-border)] sm:block" />
            <Reveal delay={100}>
              <div>
                <p className="text-sm font-black tracking-[0.15em] text-[var(--color-primary)]">
                  UNDERSTANDING
                </p>
                <p className="mt-1 text-lg font-bold text-[var(--color-text)]">다름을 이해하고</p>
              </div>
            </Reveal>
            <ArrowDown aria-hidden="true" size={20} className="text-[var(--color-border)] sm:hidden" />
            <ArrowRight aria-hidden="true" size={20} className="hidden text-[var(--color-border)] sm:block" />
            <Reveal delay={200}>
              <div>
                <p className="text-sm font-black tracking-[0.15em] text-[var(--color-primary)]">
                  TOGETHER
                </p>
                <p className="mt-1 text-lg font-bold text-[var(--color-text)]">자연스럽게 함께합니다</p>
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

          <div className="mt-14">
            <h3 className="text-lg font-black text-[var(--color-text)]">
              신청부터 수업까지 4단계
            </h3>
            <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {APPLY_FLOW.map((step, index) => (
                <li key={step.title} className="rounded-xl bg-[var(--color-surface)] p-5">
                  <span className="text-sm font-black text-[var(--color-primary-hover)]">
                    0{index + 1}
                  </span>
                  <p className="mt-1 font-bold text-[var(--color-text)]">{step.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {step.desc}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* 7. CLOSING — 넓은 실제 사진 + 카피 + CTA */}
      <section className="on-dark relative isolate overflow-hidden">
        <div className="relative h-[55vh] min-h-[420px] w-full sm:h-[65vh] sm:min-h-[480px]">
          <Image
            src="/reviews/yongin-seongji-2.jpg"
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
                  시선을 잇다가 함께하겠습니다.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-[var(--color-accent)] px-7 text-base font-bold text-[var(--color-secondary)] transition-colors hover:brightness-95"
                >
                  초등학교 체험교육 문의하기
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
