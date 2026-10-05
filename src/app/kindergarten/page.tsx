// 메뉴 다시 켤 때 제목과 문구 다시 확인할 것 (안전교육은 2028년 예정)
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { Kicker } from "@/components/kicker";
import { PageTitle } from "@/components/page-title";
import { Reveal } from "@/components/reveal";
import { SHOW_KINDERGARTEN } from "@/config";
import { KINDERGARTEN_TOPICS } from "@/content/kindergarten-topics";

export const metadata: Metadata = {
  title: "유치원 안전교육",
};

const FEATURES = [
  { title: "아이가 직접 해보는 체험형", desc: "듣고 보는 교육이 아니라, 아이가 직접 움직이며 배웁니다." },
  { title: "유치원 교실 안에서 진행", desc: "아이들이 익숙한 공간에서 편하게 참여할 수 있습니다." },
  { title: "강사 2명이 방문", desc: "강사 2명이 함께 방문해 아이들이 충분히 체험할 수 있도록 돕습니다." },
];

export default function KindergartenPage() {
  if (!SHOW_KINDERGARTEN) {
    notFound();
  }

  return (
    <>
      <PageTitle
        label="안전체험"
        title="유치원 안전교육"
        description="유치원 대상 프로그램입니다"
      />

      <Container className="py-14 sm:py-16">
        <div className="inline-flex items-center rounded-full bg-[var(--color-primary-tint)] px-5 py-2 text-sm font-black text-[var(--color-primary-hover)]">
          2027년 예약 접수 중
        </div>
        <p className="mt-6 text-lg text-[var(--color-text)]">
          강사는 수업 1시간 전에 도착해 셋팅합니다.
        </p>
      </Container>

      <Container className="pb-16 sm:pb-20">
        <Kicker>FEATURES</Kicker>
        <div className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-3">
          {FEATURES.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <div className="border-t-2 border-[var(--color-text)] pt-5">
                <p className="text-lg font-black text-[var(--color-text)]">{item.title}</p>
                <p className="mt-3 leading-relaxed text-[var(--color-text-muted)]">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>

      <section className="bg-[var(--color-surface-alt)] py-16 sm:py-20">
        <Container>
          <Reveal>
            <Kicker>TOPICS</Kicker>
            <h2 className="mt-3 text-2xl font-black text-[var(--color-text)] sm:text-3xl">
              원하는 주제를 골라 예약하세요
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {KINDERGARTEN_TOPICS.map((topic, index) => (
              <Reveal key={topic.slug} delay={index * 80}>
                <Link
                  href={`/kindergarten/${topic.slug}`}
                  className="flex h-full flex-col gap-2 rounded-2xl border-2 border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-primary)]"
                >
                  <span className="text-sm font-black text-[var(--color-primary-hover)]">0{index + 1}</span>
                  <span className="text-xl font-black text-[var(--color-text)]">{topic.title}</span>
                  <span className="leading-relaxed text-[var(--color-text-muted)]">{topic.summary}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
