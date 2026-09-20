import Image from "next/image";
import Link from "next/link";
import { Mouse } from "lucide-react";
import { Container } from "@/components/container";
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
          className="object-cover object-right sm:object-center"
        />
        <div className="hero-overlay absolute inset-0" />

        <Container className="relative pt-14 pb-24 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <p
              className="hero-anim text-base font-bold tracking-wide text-[var(--color-accent)]"
              style={{ animationDelay: "0ms" }}
            >
              함께 배우는, 더 좋은 내일
            </p>
            <span
              aria-hidden="true"
              className="hero-anim mx-auto mt-3 block h-px w-16 bg-white/40"
              style={{ animationDelay: "50ms" }}
            />
            <h1 className="mt-5 text-4xl font-black leading-[1.2] sm:text-5xl">
              <span
                className="hero-anim inline-block text-[var(--color-accent)]"
                style={{ animationDelay: "100ms" }}
              >
                연 1회 의무교육,
              </span>
              <br />
              <span className="hero-anim inline-block" style={{ animationDelay: "200ms" }}>
                저희가 교실로 찾아갑니다
              </span>
            </h1>
            <div
              className="hero-anim mx-auto mt-6 max-w-[36em] text-lg leading-relaxed text-white/80"
              style={{ animationDelay: "300ms" }}
            >
              <p>유치원·초등·중학교로 찾아가는 장애인식개선 체험교육.</p>
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

        {/* 우측 하단 태그라인 */}
        <p className="absolute bottom-24 right-6 hidden text-right text-sm font-bold leading-relaxed text-white/70 sm:right-10 sm:block lg:bottom-28">
          다름이
          <br />
          틀림이 아닌
          <br />
          함께 살아가는 세상
        </p>

        {/* 스크롤 유도 */}
        <div className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-2 text-xs font-bold tracking-widest text-white/70">
          <Mouse aria-hidden="true" size={22} className="scroll-bounce" />
          SCROLL
        </div>
      </section>

      <div className="bg-[var(--color-surface-alt)] py-10">
        <ReviewMarquee />
      </div>
    </>
  );
}
