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
        className="on-dark relative block overflow-hidden bg-[#fdfaf5] text-white sm:flex sm:min-h-[700px] sm:items-center sm:pt-24 lg:min-h-[800px]"
      >
        <div className="absolute inset-x-0 bottom-0 top-24 hidden sm:block">
          <Image
            src="/hero-reference.jpg"
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="hero-ken-burns object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(20,20,20,0.05) 0%, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0.08) 70%, rgba(20,20,20,0.05) 100%)",
            }}
          />
        </div>

        <Container className="relative pt-10 pb-12 sm:py-20 lg:py-28">
          <div className="relative mx-auto w-full text-center font-pretendard sm:w-[min(760px,70vw)] [text-shadow:0_1px_6px_rgb(0_0_0_/_5%)]">
            <p
              className="hero-anim mb-6 text-[15px] font-medium tracking-[-0.01em] text-[#555A60] sm:text-[20px] sm:font-semibold sm:text-[#111111]"
              style={{ animationDelay: "50ms" }}
            >
              아이들의 오늘이, 더 안전하고 더 따뜻한 내일이 되도록
            </p>
            <h1
              className="text-balance text-[clamp(42px,11vw,58px)] font-extrabold leading-[1.1] tracking-[-0.045em] [word-break:keep-all] sm:text-[clamp(54px,4.8vw,82px)] sm:leading-[1.12]"
              style={{ fontFamily: '"SUIT", "Pretendard", sans-serif' }}
            >
              <span className="hero-anim inline-block text-[#202124]" style={{ animationDelay: "100ms" }}>
                체험으로 배우는
              </span>
              <br />
              <span className="hero-anim inline-block text-[#4B32B8]" style={{ animationDelay: "200ms" }}>
                안전과 공감
              </span>
            </h1>
            <div
              className="hero-anim mx-auto mt-7 text-[15px] font-medium leading-[1.65] tracking-[-0.02em] text-[#555A60] sm:text-[19px] sm:font-bold sm:text-[#111111]"
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
                className="inline-flex items-center rounded-full bg-[#F5A623] px-7 py-3.5 text-base font-bold text-[#111111] transition duration-200 hover:-translate-y-0.5 hover:bg-[#E89512] sm:px-[30px]"
              >
                교육 문의하기 →
              </Link>
            </div>
          </div>
        </Container>

        <div className="relative mt-8 sm:hidden">
          <Image
            src="/hero-mobile-poster.jpg"
            alt="유치원 안전체험과 학교 장애인식개선 체험 현장"
            width={1029}
            height={841}
            sizes="100vw"
            className="h-auto w-full"
          />
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#fdfaf5] to-transparent" />
        </div>

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
