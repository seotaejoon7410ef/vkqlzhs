import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Backpack } from "lucide-react";
import { Container } from "@/components/container";
import { PageTitle } from "@/components/page-title";
import { Reveal } from "@/components/reveal";
import { SHOW_KINDERGARTEN } from "@/config";

export const metadata: Metadata = {
  title: "유치원 체험",
};

export default function KindergartenPage() {
  if (!SHOW_KINDERGARTEN) {
    notFound();
  }

  return (
    <>
      <PageTitle
        label="유치원 체험"
        title="유치원 체험 프로그램"
        photoPlaceholderLabel="유치원 체험 대표 사진 추가 필요"
      />
      <Container className="py-16 sm:py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span
            aria-hidden="true"
            className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary-tint)] text-[var(--color-primary-hover)]"
          >
            <Backpack size={24} />
          </span>
          <div className="mt-6 rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] p-7 text-[var(--color-text-muted)]">
            유치원 프로그램 구성은 아직 준비 중입니다. 내용 확인 후 채워
            넣겠습니다.
          </div>
        </Reveal>
      </Container>
    </>
  );
}
