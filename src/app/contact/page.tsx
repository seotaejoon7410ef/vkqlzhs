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
      {/* 이 페이지는 헤더가 항상 불투명(site-header.tsx의 NO_DARK_HERO_PATHS)이라
          lg 이상에서도 헤더 높이(96px)만큼 위쪽 여백을 더 줘야 제목이
          헤더 뒤로 가려지지 않습니다. */}
      <section
        id="inquiry-form"
        aria-label="문의 양식"
        className="scroll-mt-24 bg-[var(--color-surface-alt)] py-16 sm:py-20 lg:pt-32"
      >
        <Container className="max-w-[900px]">
          <h1 className="text-balance text-center text-3xl font-black text-[var(--color-text)] sm:text-4xl">
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
