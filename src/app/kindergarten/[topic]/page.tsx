import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/container";
import { Kicker } from "@/components/kicker";
import { PageTitle } from "@/components/page-title";
import { Reveal } from "@/components/reveal";
import { SHOW_KINDERGARTEN } from "@/config";
import { KINDERGARTEN_TOPICS, findKindergartenTopic } from "@/content/kindergarten-topics";

export function generateStaticParams() {
  return KINDERGARTEN_TOPICS.map((topic) => ({ topic: topic.slug }));
}

type Props = { params: Promise<{ topic: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topic: slug } = await params;
  const topic = findKindergartenTopic(slug);
  return { title: topic ? `유치원 ${topic.title}` : "유치원 안전교육" };
}

const FEATURES = [
  "아이가 직접 해보는 체험형",
  "유치원 교실 안에서 진행",
  "강사 2명이 방문",
];

export default async function KindergartenTopicPage({ params }: Props) {
  if (!SHOW_KINDERGARTEN) {
    notFound();
  }

  const { topic: slug } = await params;
  const topic = findKindergartenTopic(slug);
  if (!topic) {
    notFound();
  }

  return (
    <>
      <PageTitle
        label="안전체험"
        title={`유치원 ${topic.title}`}
        description="유치원 대상 프로그램입니다"
      />

      <Container className="py-14 sm:py-16">
        <div className="inline-flex items-center rounded-full bg-[var(--color-primary-tint)] px-5 py-2 text-sm font-black text-[var(--color-primary-hover)]">
          2027년 예약 접수 중
        </div>
        <p className="mt-6 max-w-[36em] text-lg leading-relaxed text-[var(--color-text)]">
          {topic.summary}
        </p>
      </Container>

      <section className="bg-[var(--color-surface-alt)] py-16 sm:py-20">
        <Container>
          <Reveal>
            <Kicker>FEATURES</Kicker>
          </Reveal>
          <ul className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-3">
            {FEATURES.map((feature) => (
              <li key={feature} className="border-t-2 border-[var(--color-text)] pt-5 text-lg font-black text-[var(--color-text)]">
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[var(--color-primary)] px-7 text-base font-bold text-white transition-colors hover:bg-[var(--color-primary-hover)]"
            >
              {topic.title} 예약 문의하기
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
