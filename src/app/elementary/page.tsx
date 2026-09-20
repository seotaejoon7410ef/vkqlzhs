import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageTitle } from "@/components/page-title";
import { ProgramZones } from "@/components/program-zones";

export const metadata: Metadata = {
  title: "초등학교 체험",
};

export default function ElementaryPage() {
  return (
    <>
      {/* TODO 확인 필요: 초등학교 체험 페이지 내용 전체 */}
      <PageTitle
        label="초등학교 체험"
        title="초등학교 체험 프로그램"
        photoPlaceholderLabel="초등학교 체험 대표 사진 추가 필요"
      />
      <Container className="py-16 sm:py-20">
        <ProgramZones level="elementary" />
      </Container>
    </>
  );
}
