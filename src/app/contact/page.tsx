import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageTitle } from "@/components/page-title";
import { InquiryForm } from "@/components/inquiry-form";

export const metadata: Metadata = {
  title: "문의하기",
};

export default function ContactPage() {
  return (
    <>
      <PageTitle label="문의하기" title="지금 바로 문의해 주세요" />

      {/* 문의 양식 */}
      <section
        id="inquiry-form"
        aria-label="문의 양식"
        className="scroll-mt-24 bg-[var(--color-surface-alt)] py-16 sm:py-20"
      >
        <Container className="max-w-[900px]">
          <h2 className="text-center text-3xl font-black text-[var(--color-text)]">
            프로그램 견적 문의
          </h2>
          <div className="mt-10 rounded-3xl border border-[var(--color-border)] bg-white p-6 shadow-sm sm:p-10">
            <InquiryForm />
          </div>
        </Container>
      </section>
    </>
  );
}
