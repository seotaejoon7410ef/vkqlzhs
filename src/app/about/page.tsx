import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "회사소개",
};

export default function AboutPage() {
  return (
    <>
      {/* 맨 위 큰 사진 — 장식용 배경 사진(alt 없음)이고,
          제목·문구는 실제 글자로 올려 위치를 자유롭게 조정할 수 있게 합니다. */}
      <section className="on-dark relative isolate overflow-hidden lg:pt-24">
        <div className="relative aspect-[1080/1350] w-full sm:aspect-[1920/720]">
          <Image
            src="/about-hero-bg.jpg"
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[40%_center] sm:object-[70%_center]"
          />
          <div className="absolute inset-0 mx-auto flex max-w-[1360px] flex-col items-start justify-center px-6 text-left lg:px-10">
            <Reveal className="max-w-[560px]">
              <p className="text-lg font-bold tracking-wide text-[#F5C518] sm:text-xl">
                체험교육센터 시선을 잇다
              </p>
              <h1
                className="mt-4 text-balance text-2xl leading-[1.5] font-black text-white [text-shadow:0_2px_16px_rgb(0_0_0_/_60%)] sm:text-4xl lg:text-5xl"
                style={{ fontFamily: '"Gowun Batang", serif' }}
              >
                &quot;장애를 이해한다는 건 지식을 외우는 일이 아니라
                <br className="hidden sm:block" /> 마음이 움직이는 일이라고
                믿습니다.&quot;
              </h1>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 인트로 — 히어로에 있던 설명 문구를 이 자리로 이동 */}
      <section className="bg-[var(--color-surface)] py-16 sm:py-20">
        <Container className="max-w-[700px] text-center">
          <Reveal>
            <p className="text-lg font-bold leading-[1.8] text-[var(--color-text-muted)] sm:text-xl">
              &quot;시선을 잇다는 학교를 직접 찾아가는 장애인식개선 체험교육
              기관입니다. 화면 속 영상이 아니라, 아이들이 직접 걷고, 멈추고,
              부딪혀 보며 다른 사람의 하루를 몸으로 느끼는 교육을
              만듭니다.&quot;
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 직접 만들고, 현장에서 다듬은 프로그램 */}
      <section className="bg-[var(--color-surface-alt)] py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <h2 className="text-balance text-2xl font-black leading-tight text-[var(--color-text)] sm:text-3xl">
                직접 만들고, 현장에서 다듬은 프로그램
              </h2>
              <ul className="mt-6 space-y-4 text-lg leading-[1.6] text-[var(--color-text)]">
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                  모든 체험존을 저희가 직접 기획하고 설계했습니다
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                  휠체어 통로 폭부터 아이 눈높이 설명까지 세심하게 구성했습니다
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                  현장에서 아이들을 지켜보며 계속 고쳐 온 프로그램입니다
                </li>
              </ul>
            </Reveal>
            <Reveal delay={100}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
                <Image
                  src="/about-program-zones.jpg"
                  alt="체육관에 설치된 지체장애·시각장애 공감 체험존과 휠체어들이 놓인 모습"
                  fill
                  sizes="(min-width: 1024px) 40rem, 90vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 학교의 수고는 덜고, 교육의 의미는 더하고 */}
      <section className="bg-[var(--color-surface)] py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal className="lg:order-2">
              <h2 className="text-balance text-2xl font-black leading-tight text-[var(--color-text)] sm:text-3xl">
                학교의 수고는 덜고, 교육의 의미는 더하고
              </h2>
              <ul className="mt-6 space-y-4 text-lg leading-[1.6] text-[var(--color-text)]">
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                  장비·전기선까지 모두 준비해 방문하니, 강당이 없어도 진행할 수 있습니다
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                  한 교시 안에 한 학급이 모든 체험존을 경험합니다
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                  최대 네 학급까지 동시 참여, 학교급에 맞춰 난이도를 조절합니다
                </li>
              </ul>
            </Reveal>
            <Reveal delay={100} className="lg:order-1">
              <div className="relative aspect-[1200/1060] w-full overflow-hidden rounded-sm">
                <Image
                  src="/about-four-zones.jpg"
                  alt="시각장애·지체장애·지적장애 공감 체험존과 퀴즈존, 네 가지 체험 사진과 한 교시에 네 존을 모두 체험한다는 안내"
                  fill
                  sizes="(min-width: 1024px) 40rem, 90vw"
                  className="object-contain"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 법정 의무교육, 의미 있게 채웁니다 */}
      <section className="bg-[var(--color-surface-alt)] py-16 sm:py-20">
        <Container className="max-w-[820px]">
          <Reveal>
            <h2 className="text-balance text-2xl font-black leading-tight text-[var(--color-text)] sm:text-3xl">
              법정 의무교육, 의미 있게 채웁니다
            </h2>
            <ul className="mt-6 space-y-4 text-lg leading-[1.6] text-[var(--color-text)]">
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                유치원과 초·중·고등학교는 「장애인복지법」에 따라 매년 장애인식개선교육을 실시해야 합니다
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                강사를 통한 대면교육이 반드시 포함되어야 합니다
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                시선을 잇다는 이 의무교육을 &apos;해야 하는 교육&apos;에서 &apos;기억에 남는 교육&apos;으로 바꾸고자 합니다
              </li>
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* 대표 인사 */}
      <section className="on-dark relative isolate overflow-hidden bg-[var(--color-secondary)] py-20 sm:py-28">
        <Image
          src="/about-ceo-bg.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[var(--color-secondary)]/70"
        />
        <Container className="relative max-w-[820px] text-center">
          <Reveal>
            <h2 className="text-2xl font-black leading-tight sm:text-3xl">
              대표 인사
            </h2>
            <blockquote className="mt-8 text-balance text-xl leading-[1.8] text-white sm:text-2xl">
              &quot;아이들이 체험을 마치고 나올 때 표정이 달라집니다. 그
              짧은 순간의 변화가 언젠가 누군가에게 열린 길이 되리라
              믿습니다.&quot;
            </blockquote>
            <p className="mt-6 text-lg font-bold text-white">
              — 체험교육센터 시선을 잇다 대표 서태준
            </p>
            <p className="mt-1 text-sm text-white/70">
              장애인식개선교육 프로그램 지도사
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
