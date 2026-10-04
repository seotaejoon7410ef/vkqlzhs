import Image from "next/image";
import Link from "next/link";
import { Mouse } from "lucide-react";
import { Container } from "@/components/container";
import { Kicker } from "@/components/kicker";
import { ReviewMarquee } from "@/components/review-marquee";

export default function Home() {
  return (
    <>
      <section
        id="top"
        className="on-dark relative flex min-h-[480px] items-center overflow-hidden text-white sm:min-h-[640px] lg:min-h-[760px]"
      >
        {/* 배경 사진: 실제 체험교육 현장 사진.
            사진이 화면 폭 대비 훨씬 넓어서(2.12:1), 세로로 좁고 긴 모바일
            화면에서 가운데를 기준으로 자르면 인물 없는 빈 배경만 남습니다.
            모바일에서는 오른쪽 끝(인물이 있는 쪽)까지 밀어서 보여주고,
            화면이 넓어지는 sm 이상부터는 원래 구도(가운데)로 되돌립니다. */}
        <Image
          src="/hero-mobile.jpg"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="hero-ken-burns object-cover object-center sm:hidden"
        />
        <Image
          src="/hero-main.jpg"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="hero-ken-burns hidden object-cover object-center sm:block"
        />
        <div className="hero-overlay absolute inset-0" />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 42% 50% at 50% 50%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.45) 45%, rgba(255,255,255,0) 100%)",
          }}
        />

        <Container className="relative pt-14 pb-24 sm:py-20 lg:py-28">
          <div className="relative mx-auto max-w-2xl text-center">
            <p className="hero-anim mx-auto mb-5 text-sm font-bold tracking-wide text-[#2a2a3a] sm:text-base" style={{ animationDelay: "50ms" }}>
              아이들의 오늘이, 더 안전하고 더 따뜻한 내일이 되도록
            </p>
            <h1 className="text-balance text-4xl font-black leading-[1.2] sm:text-5xl">
              <span
                className="hero-anim inline-block text-[#111111]"
                style={{ animationDelay: "100ms" }}
              >
                체험으로 배우는
              </span>
              <br />
              <span className="hero-anim inline-block" style={{ animationDelay: "200ms" }}>
                <span className="text-[#e07800]">안전</span>
                <span className="text-[#111111]">과</span>{" "}
                <span className="text-[var(--color-primary)]">배려</span>
              </span>
            </h1>
            <div
              className="hero-anim mx-auto mt-6 max-w-[36em] text-lg leading-relaxed text-[#2a2a3a]"
              style={{ animationDelay: "300ms" }}
            >
              <p>
                유치원 안전체험부터 초·중학교 장애인식개선체험까지
                <br />
                아이들의 눈높이에 맞춘 체험교육을 제공합니다.
              </p>
            </div>
            <div className="hero-anim mt-8" style={{ animationDelay: "350ms" }}>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center rounded-full border-2 border-[#2a2a3a] bg-white/60 px-8 text-base font-bold text-[#111111] transition-colors hover:bg-[#2a2a3a] hover:text-white"
              >
                교육 문의하기 →
              </Link>
            </div>
            <div
              className="hero-anim mx-auto mt-9 grid max-w-xl gap-4 text-left sm:grid-cols-2"
              style={{ animationDelay: "400ms" }}
            >
              <Link
                href="/kindergarten/traffic"
                className="group flex h-full flex-col rounded-2xl border border-white/15 bg-[#1a2657]/75 p-8 text-left leading-loose shadow-[0_12px_40px_-12px_rgb(0_0_0_/_35%)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]"
              >
                <span className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[var(--color-accent)]">유치원</span>
                  <span className="rounded-full border border-[var(--color-accent)] px-2.5 py-0.5 text-xs font-bold text-[var(--color-accent)]">
                    2027년 예약 접수 중
                  </span>
                </span>
                <span className="mt-2 text-2xl font-black text-white">안전체험</span>
                <span className="font-pretendard mt-3 text-base leading-relaxed text-white">
                  <span className="block">교통·화재·응급처치·수상안전</span>
                  <span className="block">아이가 직접 해보는 안전 체험</span>
                </span>
                <span className="mt-auto flex justify-end pt-6 font-bold text-[var(--color-accent)]">자세히 보기 →</span>
              </Link>
              <Link
                href="/elementary"
                className="group flex h-full flex-col rounded-2xl border border-white/15 bg-[#1a2657]/75 p-8 text-left leading-loose shadow-[0_12px_40px_-12px_rgb(0_0_0_/_35%)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]"
              >
                <span className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[var(--color-accent)]">초·중학교</span>
                </span>
                <span className="mt-2 text-2xl font-black text-white">장애인식개선 체험</span>
                <span className="font-pretendard mt-3 text-base leading-relaxed text-white">
                  <span className="block">직접 움직이고 느끼며</span>
                  <span className="block">친구와 함께하는 법을 배워요</span>
                </span>
                <span className="mt-auto flex justify-end pt-6 font-bold text-[var(--color-accent)]">자세히 보기 →</span>
              </Link>
            </div>
            <div
              className="hero-anim mt-6 flex justify-center"
              style={{ animationDelay: "500ms" }}
            >
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--color-accent)] px-7 text-base font-bold text-[var(--color-secondary)] transition-colors hover:brightness-95"
              >
                문의 양식 작성하기
              </Link>
            </div>
          </div>
        </Container>

        {/* 스크롤 유도 — 모바일은 화면이 좁아 다른 요소와 겹치기 쉬워 숨기고,
            sm 이상에서만 보여줍니다. */}
        <div className="absolute inset-x-0 bottom-8 hidden flex-col items-center gap-2 text-xs font-bold tracking-widest text-white/70 sm:flex">
          <Mouse aria-hidden="true" size={22} className="scroll-bounce" />
          SCROLL
        </div>
      </section>

      <div className="bg-[var(--color-surface-alt)] py-14 sm:py-16">
        <Container>
          <div className="text-center">
            <Kicker color="accent-strong">SCHOOL REVIEW</Kicker>
            <h2 className="mt-3 text-2xl font-black text-[var(--color-text)] sm:text-3xl">
              학교 현장 후기
            </h2>
          </div>
        </Container>
        <div className="mt-6">
          <ReviewMarquee />
        </div>
        <Container>
          <a
            href="https://blog.naver.com/happyguide95"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 block text-center text-sm font-bold text-[var(--color-primary-hover)] hover:underline"
          >
            블로그에서 더 많은 후기 보기 →
          </a>
        </Container>
      </div>
    </>
  );
}
