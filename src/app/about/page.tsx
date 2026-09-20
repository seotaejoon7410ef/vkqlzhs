import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageTitle } from "@/components/page-title";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "회사 소개",
};

const ABOUT_VALUES = [
  {
    title: "직접 기획한 4가지 체험존",
    desc: "시각장애존, 지체장애존, 감각협력존, 퀴즈형존. 눈으로 보는 교육이 아니라 몸으로 겪는 체험을 직접 만들었습니다.",
  },
  {
    title: "교실로 찾아가는 수업",
    desc: "강사와 장비를 모두 준비해 학교로 갑니다. 선생님의 준비 부담을 최소화했습니다.",
  },
  {
    title: "최대 4학급 동시 체험",
    desc: "학급이 존을 돌아가며 체험해서, 한 번의 방문으로 여러 학급이 함께 교육을 마칠 수 있습니다.",
  },
  {
    title: "수업 후 만족도 조사",
    desc: "수업이 끝나면 선생님의 의견을 받아 프로그램을 계속 다듬어 갑니다.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageTitle
        label="회사 소개"
        title="장애는 불쌍하게 볼 일이 아니라, 함께 사는 방법을 배우는 일입니다."
        photoPlaceholderLabel="행복한길잡이 활동 사진 추가 필요"
      />

      <Container className="py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-sm font-bold text-[var(--color-primary-hover)]">행복한길잡이를 소개합니다</p>
          </Reveal>
          <Reveal delay={100}>
            <p className="mx-auto mt-6 max-w-[36em] leading-relaxed text-[var(--color-text-muted)]">
              장애를 낯선 일로만 여기면 아이들은 어떻게 대해야 할지
              몰라 머뭇거리게 됩니다. 행복한길잡이는 아이들이 직접
              보고, 만지고, 겪어 보면서 불편은 그 사람이 아니라
              환경에서 생긴다는 것을 스스로 알아가도록 돕습니다.
            </p>
            <p className="mx-auto mt-4 max-w-[36em] leading-relaxed text-[var(--color-text-muted)]">
              의무교육이라서 하는 형식적인 수업이 아니라, 수업이 끝난
              뒤 교실에서 친구를 대하는 마음과 행동이 조금 더
              자연스러워지는 것. 그것이 저희의 목표입니다.
            </p>
          </Reveal>
        </div>

        {/* 핵심가치 (행복한길잡이만의 방식) */}
        <div className="mt-16">
          <Reveal>
            <div className="flex items-center gap-5">
              <h2 className="shrink-0 text-2xl font-black text-[var(--color-text)]">
                핵심가치
              </h2>
              <span
                aria-hidden="true"
                className="h-1 w-full bg-[var(--color-text)]"
              />
            </div>
          </Reveal>
          <div className="mt-10 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {ABOUT_VALUES.map((value, index) => (
              <Reveal key={value.title} delay={100}>
                <p className="text-lg font-black text-[var(--color-primary-hover)]">
                  {index + 1}. {value.title}
                </p>
                <span
                  aria-hidden="true"
                  className="mt-2 block h-0.5 w-16 bg-[var(--color-primary)]"
                />
                <p className="mt-3 max-w-[36em] leading-relaxed text-[var(--color-text-muted)]">
                  {value.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
