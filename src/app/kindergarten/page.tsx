import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { Kicker } from "@/components/kicker";
import { PageTitle } from "@/components/page-title";
import { Reveal } from "@/components/reveal";
import { SHOW_KINDERGARTEN } from "@/config";

export const metadata: Metadata = {
  title: "유치원 안전체험",
};

const SAFETY_TOPICS = [
  { title: "교통안전", desc: "길과 횡단보도에서 스스로를 지키는 올바른 행동을 직접 해보며 익힙니다." },
  { title: "화재안전", desc: "불이 났을 때 침착하게 대피하는 방법을 직접 움직여 봅니다." },
  { title: "응급처치", desc: "다쳤을 때 도움을 요청하고 기본 응급처치를 따라 해봅니다." },
  { title: "수상안전", desc: "물가와 물놀이에서 지켜야 할 안전 수칙을 몸으로 익힙니다." },
];

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
        title="유치원 안전체험"
        description="유치원 대상 프로그램입니다"
      />

      <Container className="py-14 sm:py-16">
        <div className="inline-flex items-center rounded-full bg-[var(--color-primary-tint)] px-5 py-2 text-sm font-black text-[var(--color-primary-hover)]">
          2027년 예약 접수 중
        </div>
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
            <Kicker>SAFETY</Kicker>
            <h2 className="mt-3 text-2xl font-black text-[var(--color-text)] sm:text-3xl">
              유치원 안전체험 4가지 주제
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {SAFETY_TOPICS.map((topic, index) => (
              <Reveal key={topic.title} delay={index * 80}>
                <div className="border-t-2 border-[var(--color-text)] pt-5">
                  <span className="text-sm font-black text-[var(--color-primary-hover)]">
                    0{index + 1}
                  </span>
                  <p className="mt-2 text-xl font-black text-[var(--color-text)]">{topic.title}</p>
                  <p className="mt-3 leading-relaxed text-[var(--color-text-muted)]">{topic.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
