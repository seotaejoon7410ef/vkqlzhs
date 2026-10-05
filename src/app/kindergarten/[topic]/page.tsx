// 메뉴 다시 켤 때 제목과 문구 다시 확인할 것 (안전교육은 2028년 예정)
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
        <div className="relative mx-auto aspect-[4/5] w-full max-w-5xl overflow-hidden rounded-2xl shadow-lg sm:aspect-[21/9]">
          <Image
            src={`/kindergarten-${topic.slug}.jpg`}
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="(min-width: 1024px) 64rem, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/45 to-transparent sm:bg-gradient-to-r sm:from-black/70 sm:via-black/40 sm:to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end gap-4 p-6 sm:justify-center sm:p-12">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-bold text-[#222]">
              <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: topic.heroAccent }} />
              {topic.heroChip}
            </span>
            <h1
              className="text-[clamp(2rem,5vw,4.25rem)] leading-tight text-white [text-shadow:0_2px_12px_rgb(0_0_0_/_45%)]"
              style={{ fontFamily: '"Black Han Sans", sans-serif' }}
            >
              <span style={{ color: topic.heroAccent }}>{topic.title}</span> <span className="text-white">체험</span>
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

      {topic.program && (
        <section className="py-16 sm:py-20">
          <Container>
            <Reveal>
              <Kicker>수업 흐름</Kicker>
              <p className="mt-6 text-2xl font-black text-[var(--color-text)] sm:text-3xl">{topic.program.slogan}</p>
              <p className="mt-3 text-[var(--color-text-muted)]">{topic.program.target}</p>
            </Reveal>
            <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {topic.program.steps.map((step, index) => (
                <Reveal key={step.title} delay={index * 60}>
                  <div className="border-t-2 border-[var(--color-text)] pt-5">
                    <p className="text-sm font-bold text-[var(--color-primary-hover)]">{step.time}</p>
                    <p className="mt-2 text-xl font-black text-[var(--color-text)]">{step.title}</p>
                    <p className="mt-3 leading-relaxed text-[var(--color-text-muted)]">{step.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="mt-12 rounded-2xl bg-[var(--color-surface-alt)] p-8 sm:p-10">
                <p className="text-lg font-black text-[var(--color-text)]">선생님께 부탁드릴 것</p>
                <ul className="mt-5 space-y-3 leading-relaxed text-[var(--color-text-muted)]">
                  {topic.program.teacherPrep.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </Container>
        </section>
      )}

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
