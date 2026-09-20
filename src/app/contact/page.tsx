import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { Container } from "@/components/container";
import { PageTitle } from "@/components/page-title";
import { InquiryForm } from "@/components/inquiry-form";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "문의하기",
};

export default function ContactPage() {
  return (
    <>
      <PageTitle label="문의하기" title="지금 바로 문의해 주세요" />

      <section className="on-dark bg-[var(--color-secondary)] py-16 text-white sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[55fr_45fr] lg:items-center">
            <Reveal className="flex justify-center lg:justify-start">
              <div className="relative h-96 w-80 overflow-hidden rounded-3xl sm:h-[30rem] sm:w-96 lg:h-[34rem] lg:w-[26rem]">
                <Image
                  src="/contact-photo.jpg"
                  alt="체육관에서 진행한 장애 인식 개선 체험교육 현장 — 휠체어 체험 구역과 대형 미로형 체험 부스가 설치되어 있다"
                  fill
                  sizes="(min-width: 1024px) 416px, (min-width: 640px) 384px, 320px"
                  className="object-cover object-[center_65%]"
                />
              </div>
            </Reveal>

            <div>
              <Reveal>
                <p className="mt-3 text-white/80">
                  행복한길잡이 체험교육 문의 · 학교(원) 일정에 맞춰 상담해드려요
                </p>
              </Reveal>

              <Reveal delay={100}>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <a
                    href="tel:0312368410"
                    className="hover-lift rounded-2xl border border-white/20 bg-white/5 px-6 py-7 text-center transition-colors hover:bg-white/10"
                  >
                    <span
                      aria-hidden="true"
                      className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[var(--color-accent)]"
                    >
                      <Phone size={22} />
                    </span>
                    <span className="mt-3 block text-lg font-bold text-white">전화 문의</span>
                    <span className="mt-1 block text-white/80">031-236-8410</span>
                  </a>
                  <a
                    href="mailto:happyguide95@naver.com"
                    className="hover-lift rounded-2xl border border-white/20 bg-white/5 px-6 py-7 text-center transition-colors hover:bg-white/10"
                  >
                    <span
                      aria-hidden="true"
                      className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[var(--color-accent)]"
                    >
                      <Mail size={20} />
                    </span>
                    <span className="mt-3 block text-lg font-bold text-white">이메일 문의</span>
                    <span className="mt-1 block whitespace-nowrap text-base text-white/80">
                      happyguide95@naver.com
                    </span>
                  </a>
                </div>

                <a
                  href="#inquiry-form"
                  className="mt-8 inline-flex min-h-14 items-center justify-center rounded-full bg-[var(--color-accent)] px-8 text-base font-bold text-[var(--color-secondary)] transition-colors hover:brightness-95"
                >
                  문의 양식 작성하기
                </a>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* 문의 양식 */}
      <section
        id="inquiry-form"
        aria-label="문의 양식"
        className="scroll-mt-24 bg-[var(--color-surface-alt)] py-16 sm:py-20"
      >
        <Container className="max-w-[900px]">
          <h2 className="text-2xl font-black text-[var(--color-text)]">문의 양식</h2>
          <InquiryForm />
        </Container>
      </section>
    </>
  );
}
