import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";

const QUICK_LINKS = [
  {
    href: "/about",
    title: "센터 소개",
    desc: "행복한길잡이가 걸어온 길과 지향하는 가치를 소개합니다.",
  },
  {
    href: "/programs",
    title: "교육 프로그램",
    desc: "학교·기업·기관을 위한 장애 인식 개선 교육 과정을 안내합니다.",
  },
  {
    href: "/news",
    title: "소식·자료실",
    desc: "센터의 최근 소식과 교육 자료를 확인할 수 있습니다.",
  },
];

const VALUES = [
  {
    title: "이해",
    desc: "장애를 특별한 것이 아니라 다양성의 한 모습으로 이해하는 교육을 합니다.",
  },
  {
    title: "존중",
    desc: "모든 참여자가 서로를 존중하며 편안하게 배울 수 있는 환경을 만듭니다.",
  },
  {
    title: "동행",
    desc: "일회성 교육이 아닌, 변화가 이어지도록 지속적으로 함께 걷습니다.",
  },
];

export default function Home() {
  return (
    <>
      <section className="bg-[var(--color-surface-alt)]">
        <Container className="grid gap-10 py-16 sm:py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="inline-flex items-center rounded-full bg-[var(--color-primary-tint)] px-4 py-1.5 text-sm font-bold text-[var(--color-primary-hover)]">
              배리어프리 장애이해교육센터
            </p>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-[var(--color-text)] sm:text-5xl">
              모두를 위한 길을 함께
              <br />
              만들어가는 <span className="text-[var(--color-primary)]">행복한길잡이</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-text-muted)]">
              행복한길잡이는 학교, 기업, 공공기관과 함께 장애에 대한 이해를
              넓히는 교육을 설계합니다. 누구나 존중받고, 누구나 참여할 수
              있는 사회를 향한 첫걸음을 안내합니다.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/programs#apply"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--color-primary)] px-7 text-base font-bold text-white transition-colors hover:bg-[var(--color-primary-hover)]"
              >
                교육 신청 문의하기
              </Link>
              <Link
                href="/about"
                className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[var(--color-secondary)] px-7 text-base font-bold text-[var(--color-secondary)] transition-colors hover:bg-[var(--color-secondary-tint)]"
              >
                센터 소개 보기
              </Link>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="flex h-64 items-center justify-center rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] sm:h-80 lg:h-96"
          >
            <div className="flex flex-col items-center gap-4 text-[var(--color-text-muted)]">
              <Image
                src="/logo-mark.png"
                alt=""
                width={128}
                height={128}
                className="h-28 w-28 sm:h-32 sm:w-32"
              />
              <p className="text-sm">대표 이미지 영역 (추후 실제 사진으로 교체)</p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="values-heading" className="py-16 sm:py-24">
        <Container>
          <h2
            id="values-heading"
            className="text-center text-3xl font-extrabold text-[var(--color-text)]"
          >
            행복한길잡이가 지키는 가치
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[var(--color-text-muted)]">
            교육 하나하나에 아래 세 가지 원칙을 담아 진행합니다.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8"
              >
                <h3 className="text-xl font-bold text-[var(--color-primary-hover)]">
                  {value.title}
                </h3>
                <p className="mt-3 leading-relaxed text-[var(--color-text-muted)]">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="quicklinks-heading"
        className="on-dark bg-[var(--color-secondary)] py-16 text-white sm:py-24"
      >
        <Container>
          <h2 id="quicklinks-heading" className="text-3xl font-extrabold">
            무엇이 궁금하신가요?
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex flex-col justify-between rounded-2xl border border-white/20 bg-white/5 p-7 transition-colors hover:bg-white/10"
              >
                <div>
                  <h3 className="text-xl font-bold">{link.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    {link.desc}
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-white">
                  자세히 보기
                  <span
                    aria-hidden="true"
                    className="text-[var(--color-accent)] transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
