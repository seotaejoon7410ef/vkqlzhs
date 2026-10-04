import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/container";
import { Kicker } from "@/components/kicker";
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
  "강사는 수업 1시간 전에 도착해 셋팅",
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
      <Container className="pt-28 sm:pt-32">
        <div className="relative mx-auto aspect-[21/9] w-full max-w-5xl overflow-hidden rounded-2xl shadow-lg">
          <Image
            src={`/kindergarten-${topic.slug}.jpg`}
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="(min-width: 1024px) 64rem, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center gap-4 p-6 sm:p-12">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-bold text-[#222]">
              <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: topic.heroAccent }} />
              {topic.heroChip}
            </span>
            <h1
              className="text-[clamp(2rem,5vw,4.25rem)] leading-tight text-white [text-shadow:0_2px_12px_rgb(0_0_0_/_45%)]"
              style={{ fontFamily: '"Black Han Sans", sans-serif' }}
            >
              <span style={{ color: topic.heroAccent }}>{topic.title}</span> 체험
            </h1>
            <p className="max-w-[24em] text-base font-medium leading-relaxed text-white [text-shadow:0_1px_8px_rgb(0_0_0_/_45%)] sm:text-lg">
              {topic.heroLead}
            </p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {topic.heroChips.map((chip) => (
                <li key={chip} className="rounded-xl bg-white/95 px-4 py-2 text-sm font-bold text-[#222]">
                  {chip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

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
