import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Camera } from "lucide-react";
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
            alt="장애인식개선의 날 행사장 아치 아래 모인 초등학생들이 밝게 웃으며 브이 포즈를 하고 있다"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_22%] brightness-95"
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
                <div className="mt-8 space-y-6 text-[var(--color-text-muted)]">
                  <p className="max-w-[36em] leading-[1.9]">
                    초등학생 시기는 신체적인 성장뿐 아니라 친구와
                    관계를 맺고, 서로의 다름을 이해하며 사회를 바라보는
                    태도가 형성되는 중요한 시기입니다.
                  </p>
                  <p className="max-w-[36em] leading-[1.9]">
                    행복한길잡이는 이 시기의 아이들에게 장애를 단순히
                    지식으로 설명하기보다, 직접 보고, 움직이고, 느끼는
                    경험을 통해 자연스럽게 이해할 수 있도록 교육합니다.
                  </p>
                </div>
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

      {/* 4. EXPERIENCE — 직접 경험하는 프로그램 */}
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
            </Reveal>
          </div>

          <div className="mt-16 grid gap-x-12 gap-y-16 sm:grid-cols-2">
            {ELEMENTARY_ZONES.map((zone, index) => (
              <Reveal key={zone.title} delay={(index % 2) * 100} className="h-full">
                <div className="flex h-full flex-col border-t-2 border-[var(--color-text)] pt-6">
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3">
                      <span aria-hidden="true" className="text-4xl font-black text-[var(--color-primary)] sm:text-5xl">
                        0{index + 1}
                      </span>
                      <zone.icon aria-hidden="true" size={22} className="text-[var(--color-primary-hover)]" />
                    </div>
                    <h3 className="mt-3 text-2xl font-black text-[var(--color-text)]">
                      {zone.title}
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {zone.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[var(--color-surface)] px-3 py-1 text-xs font-bold text-[var(--color-text-muted)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="mt-3 max-w-[32em] leading-relaxed text-[var(--color-text-muted)]">
                      {zone.desc}
                    </p>
                  </div>
                  <div className="relative mt-5 aspect-[4/3] w-full overflow-hidden rounded-sm bg-[var(--color-surface)]">
                    {ZONE_PHOTOS[index] ? (
                      <Image
                        src={ZONE_PHOTOS[index].src}
                        alt={ZONE_PHOTOS[index].alt}
                        fill
                        sizes="(min-width: 640px) 28rem, 90vw"
                        className="object-cover"
                      />
                    ) : (
                      <div
                        aria-hidden="true"
                        className="flex h-full w-full flex-col items-center justify-center gap-2 border border-dashed border-[var(--color-border)] text-[var(--color-text-muted)]"
                      >
                        <Camera size={28} />
                        <p className="text-sm">{zone.title} 사진 추가 필요</p>
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
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
                <dt className="text-sm font-bold text-[var(--color-primary-hover)]">{item.label}</dt>
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
                  행복한길잡이가 함께하겠습니다.
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
