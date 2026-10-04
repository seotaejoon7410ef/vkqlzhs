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
          src="/hero-photo.png"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="hero-ken-burns object-cover object-right sm:object-center"
        />
        <div className="hero-overlay absolute inset-0" />

        <Container className="relative pt-14 pb-24 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-black leading-[1.2] sm:text-5xl">
              <span
                className="hero-anim inline-block text-[var(--color-accent)] [text-shadow:0_1px_10px_rgb(0_0_0_/_60%)]"
                style={{ animationDelay: "100ms" }}
              >
                안전과 배려를 직접 체험하는,
              </span>
              <br />
              <span className="hero-anim inline-block" style={{ animationDelay: "200ms" }}>
                찾아가는 체험교육센터
              </span>
            </h1>
            <div
              className="hero-anim mx-auto mt-6 max-w-[36em] text-lg leading-relaxed text-white/80"
              style={{ animationDelay: "300ms" }}
            >
              <p>화재·교통·응급처치·수상안전과 장애인식개선을 학교로 찾아가 체험으로 배웁니다.</p>
              <p className="mt-2">문의 한 번으로 일정과 견적까지 안내해 드려요.</p>
            </div>
            <div
              className="hero-anim mt-9 flex justify-center"
              style={{ animationDelay: "400ms" }}
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
