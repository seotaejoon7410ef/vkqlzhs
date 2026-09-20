import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Container } from "@/components/container";

export default function Home() {
  return (
    <section
      id="top"
      className="on-dark relative overflow-hidden bg-gradient-to-br from-[var(--color-secondary-hover)] via-[var(--color-secondary)] to-[var(--color-primary)] text-white"
    >
      {/* 장식용 로고 워터마크 (실제 사진 대신 깊이감을 주는 용도, 정보 없음) */}
      <Image
        src="/logo-mark.png"
        alt=""
        aria-hidden="true"
        width={640}
        height={640}
        className="pointer-events-none absolute -right-24 -top-24 h-[26rem] w-[26rem] opacity-10 sm:h-[34rem] sm:w-[34rem]"
      />

      <Container className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-black leading-[1.2] sm:text-5xl">
            <span
              className="hero-anim inline-block text-[var(--color-accent)]"
              style={{ animationDelay: "0ms" }}
            >
              연 1회 의무교육,
            </span>
            <br />
            <span className="hero-anim inline-block" style={{ animationDelay: "100ms" }}>
              저희가 교실로 찾아갑니다
            </span>
          </h1>
          <p
            className="hero-anim mx-auto mt-6 max-w-[36em] text-lg leading-relaxed text-white/80"
            style={{ animationDelay: "200ms" }}
          >
            유치원·초등·중학교로 찾아가는 장애인식개선 체험교육. 문의
            한 번으로 일정과 견적까지 안내해 드려요.
          </p>
          <div
            className="hero-anim mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            style={{ animationDelay: "300ms" }}
          >
            <a
              href="tel:0312368410"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-7 text-base font-bold text-[var(--color-secondary)] transition-colors hover:brightness-95"
            >
              <Phone aria-hidden="true" size={20} />
              전화로 문의하기
            </a>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-white px-7 text-base font-bold text-white transition-colors hover:bg-white/10"
            >
              문의 양식 작성하기
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
