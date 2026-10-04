import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { Kicker } from "@/components/kicker";
import { PageTitle } from "@/components/page-title";
import { Reveal } from "@/components/reveal";
import { SHOW_KINDERGARTEN } from "@/config";

export const metadata: Metadata = {
  title: "안전체험 (유치원)",
};

const SAFETY_TOPICS = [
  { title: "화재 안전", desc: "불이 났을 때 침착하게 대피하는 방법을 익힙니다." },
  { title: "교통 안전", desc: "길과 횡단보도에서 스스로를 지키는 올바른 행동을 배웁니다." },
  { title: "응급처치", desc: "다쳤을 때 도움을 요청하고 기본 응급처치를 익힙니다." },
  { title: "수상 안전", desc: "물가와 물놀이에서 지켜야 할 안전 수칙을 배웁니다." },
];

export default function KindergartenPage() {
  if (!SHOW_KINDERGARTEN) {
    notFound();
  }

  return (
    <>
      <PageTitle
        label="안전체험 (유치원)"
        title="유치원 안전체험 프로그램"
        photoPlaceholderLabel="안전체험 대표 사진 추가 필요"
      />
      <Container className="py-16 sm:py-20">
        <Kicker>SAFETY</Kicker>
        <h2 className="mt-3 text-2xl font-black text-[var(--color-text)] sm:text-3xl">
          생활 속 안전을 몸으로 익힙니다
        </h2>
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
    </>
  );
}
