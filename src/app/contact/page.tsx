import type { Metadata } from "next";
import { Container } from "@/components/container";
import { InquiryForm } from "@/components/inquiry-form";

export const metadata: Metadata = {
  title: "문의하기",
};

export default function ContactPage() {
  return (
    <>
      {/* 문의 양식 */}
      <section
        id="inquiry-form"
        aria-label="문의 양식"
        className="scroll-mt-24 bg-[var(--color-surface-alt)] py-16 sm:py-20"
      >
        <Container className="max-w-[900px]">
          <h1 className="text-center text-4xl font-black text-[var(--color-text)] sm:text-5xl">
            프로그램 견적 문의
          </h1>
          <div className="mt-10 rounded-3xl border border-[var(--color-border)] bg-white p-6 shadow-sm sm:p-10">
            <InquiryForm />
          </div>
        </Container>
      </section>
    </>
  );
}
