import type { Metadata } from "next";
import { Camera } from "lucide-react";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "회사소개",
};

// 사진이 아직 없는 자리를 표시하는 자리표시자.
// role="img" + aria-label로 화면낭독기에는 실제 사진이 있을 때와
// 동일하게 대체 설명이 읽히게 하고, 보이는 텍스트는 중복 안내를
// 막기 위해 aria-hidden으로 숨깁니다.
function PhotoPlaceholder({
  alt,
  className = "",
  showLabel = true,
}: {
  alt: string;
  className?: string;
  showLabel?: boolean;
}) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`flex flex-col items-center justify-center gap-2 rounded-sm border border-dashed border-[var(--color-border)] ${
        showLabel
          ? "bg-[var(--color-surface-alt)] text-[var(--color-text-muted)]"
          : "bg-[var(--color-bg)]"
      } ${className}`}
    >
      {showLabel && (
        <>
          <Camera aria-hidden="true" size={32} />
          <p aria-hidden="true" className="text-sm">
            사진 준비 중
          </p>
        </>
      )}
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* 맨 위 큰 사진 */}
      <section className="bg-[var(--color-surface-alt)] pt-14 pb-10 sm:pt-20 sm:pb-14">
        <Container>
          <PhotoPlaceholder
            alt="학생들이 체험존에서 장애 공감 체험을 하고 있는 모습"
            className="aspect-[16/9] w-full sm:aspect-[21/9]"
            showLabel={false}
          />
        </Container>
      </section>

      {/* 페이지 제목 + 인트로 */}
      <section className="bg-[var(--color-surface)] py-16 sm:py-20">
        <Container className="max-w-[820px]">
          <Reveal>
            <h1 className="text-balance text-3xl font-black leading-tight text-[var(--color-text)] sm:text-4xl lg:text-5xl">
              안전과 공감, 아이들의 마음에 길을 냅니다
            </h1>
            <p className="mt-8 text-lg leading-[1.8] text-[var(--color-text)]">
              장애를 이해한다는 건 지식을 외우는 일이 아니라 마음이 움직이는
              일이라고 믿습니다.
            </p>
            <p className="mt-6 text-lg leading-[1.8] text-[var(--color-text)]">
              행복한길잡이는 학교를 직접 찾아가는 장애인식개선 체험교육
              기관입니다. 화면 속 영상이 아니라, 아이들이 직접 걷고, 멈추고,
              부딪혀 보며 다른 사람의 하루를 몸으로 느끼는 교육을 만듭니다.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 직접 만들고, 현장에서 다듬은 프로그램 */}
      <section className="bg-[var(--color-surface-alt)] py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <h2 className="text-balance text-2xl font-black leading-tight text-[var(--color-text)] sm:text-3xl">
                직접 만들고, 현장에서 다듬은 프로그램
              </h2>
              <p className="mt-6 text-lg leading-[1.8] text-[var(--color-text)]">
                모든 체험존은 저희가 직접 기획하고 설계한 자체 개발
                프로그램입니다. 휠체어가 실제로 돌 수 있는 통로 폭, 아이
                눈높이에 맞는 설명, 체험 뒤에 남는 작은 약속 하나까지.
                수업마다 아이들이 어디서 멈추고 어디서 깨닫는지 지켜보며
                계속 고쳐 왔습니다.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <PhotoPlaceholder
                alt="휠체어를 탄 학생이 경사로를 오르는 모습"
                className="aspect-[4/3] w-full"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 학교의 수고는 덜고, 교육의 의미는 더하고 */}
      <section className="bg-[var(--color-surface)] py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal className="lg:order-2">
              <h2 className="text-balance text-2xl font-black leading-tight text-[var(--color-text)] sm:text-3xl">
                학교의 수고는 덜고, 교육의 의미는 더하고
              </h2>
              <p className="mt-6 text-lg leading-[1.8] text-[var(--color-text)]">
                장비와 전기선은 모두 직접 준비해 가며, 강당이 없어도
                필로티나 실내외 공간에서 진행할 수 있습니다. 한 교시 안에
                한 학급이 모든 체험존을 경험하고, 최대 네 학급이 동시에
                참여할 수 있습니다. 학교급에 맞춰 설명과 난이도를
                달리합니다.
              </p>
            </Reveal>
            <Reveal delay={100} className="lg:order-1">
              <PhotoPlaceholder
                alt="필로티 공간에 체험존이 설치된 모습"
                className="aspect-[4/3] w-full"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 법정 의무교육, 의미 있게 채웁니다 */}
      <section className="bg-[var(--color-surface-alt)] py-16 sm:py-20">
        <Container className="max-w-[820px]">
          <Reveal>
            <h2 className="text-balance text-2xl font-black leading-tight text-[var(--color-text)] sm:text-3xl">
              법정 의무교육, 의미 있게 채웁니다
            </h2>
            <p className="mt-6 text-lg leading-[1.8] text-[var(--color-text)]">
              유치원과 초·중·고등학교는 「장애인복지법」에 따라 매년
              장애인식개선교육을 실시해야 하며, 강사를 통한 대면교육이
              포함되어야 합니다. 행복한길잡이는 이 의무교육을 &apos;해야
              하는 교육&apos;에서 &apos;기억에 남는 교육&apos;으로
              바꾸고자 합니다.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 대표 인사 — 사진 없이 글만 */}
      <section className="on-dark bg-[var(--color-secondary)] py-20 sm:py-28">
        <Container className="max-w-[820px] text-center">
          <Reveal>
            <h2 className="text-2xl font-black leading-tight sm:text-3xl">
              대표 인사
            </h2>
            <blockquote className="mt-8 text-balance text-xl leading-[1.8] text-white sm:text-2xl">
              &quot;아이들이 체험을 마치고 나올 때 표정이 달라집니다. 그
              짧은 순간의 변화가 언젠가 누군가에게 열린 길이 되리라
              믿습니다.&quot;
            </blockquote>
            <p className="mt-6 text-lg font-bold text-white">
              — 체험교육센터 행복한길잡이 대표 서태준
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
