import type { Metadata } from "next";
import { CalendarCheck, ChevronDown, MapPin, RefreshCcw, Truck } from "lucide-react";
import { Container } from "@/components/container";
import { PageTitle } from "@/components/page-title";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "FAQ",
};

const MAIN_AREAS = ["서울", "경기", "인천", "충남", "충북"];

const CLASS_FLOW_STEPS = [
  { title: "도착·설치", desc: "강사가 학교에 도착해 체험 도구를 설치합니다." },
  { title: "안내", desc: "학생들에게 오늘 체험할 내용을 간단히 안내합니다." },
  { title: "학급별 존 체험 로테이션", desc: "학급별로 순서를 정해 4개 존을 돌아가며 체험합니다." },
  { title: "정리·마무리", desc: "체험 도구를 정리하고 오늘 배운 내용을 간단히 되짚어봅니다." },
];

const APPLY_STEPS = [
  { title: "문의", desc: "전화, 문자, 이메일로 학교와 희망 날짜를 남겨주세요." },
  { title: "일정·견적 안내", desc: "담당자가 연락드려 일정을 잡고 견적을 안내합니다." },
  { title: "수업 진행", desc: "정해진 날짜에 학교(원)로 찾아가 체험교육을 진행합니다." },
  { title: "만족도 조사", desc: "교육 후 의견을 들어 다음 교육을 더 좋게 만듭니다." },
];

const FAQS = [
  {
    q: "준비물이 필요한가요?",
    a: "따로 준비하실 준비물은 없어요. 체험에 필요한 도구는 저희가 모두 챙겨갑니다.",
  },
  {
    q: "어떤 장소에서 진행되나요?",
    a: "유치원은 강당 및 교실에서, 초등학교·중학교는 강당에서 진행합니다.",
  },
  {
    q: "인원은 몇 명까지 가능한가요?",
    a: "유치원은 1회당 40명으로 제한하고 있어요. 초등학교·중학교는 한 학급부터 최대 4학급까지 동시에 진행할 수 있고, 인원에 맞게 존 구성을 조정합니다.",
  },
  {
    q: "일정은 어떻게 조율하나요?",
    a: "문의 주시면 학교(원) 일정에 맞춰 날짜와 시간을 조율해드려요.",
  },
  {
    q: "출강 가능한 지역은 어디인가요?",
    a: "서울·경기·인천·충남·충북을 중심으로 방문하고, 그 외 지역도 협의 후 진행할 수 있어요. 편하게 문의해 주세요.",
  },
  {
    q: "비용은 얼마인가요?",
    a: "인원, 시간, 지역에 따라 달라져서 정확한 가격은 안내드리기 어려워요. 문의 주시면 견적을 안내해드립니다.",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageTitle
        label="FAQ"
        title="선생님들이 많이 물어보세요"
        photoPlaceholderLabel="교육 후기·현장 사진 추가 필요"
      />

      <Container className="max-w-[900px] py-16 sm:py-20">
        {/* 진행 방식 */}
        <Reveal>
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-7">
            <div className="flex items-center gap-2">
              <Truck aria-hidden="true" size={20} className="text-[var(--color-primary-hover)]" />
              <h2 className="text-lg font-bold text-[var(--color-text)]">학교(원)로 직접 찾아갑니다</h2>
            </div>
            <ul className="mt-4 space-y-3 leading-relaxed text-[var(--color-text-muted)]">
              <li className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-tint)] text-xs font-extrabold text-[var(--color-primary-hover)]"
                >
                  1
                </span>
                강사와 체험 도구가 모두 학교(원)로 이동합니다.
              </li>
              <li className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-tint)] text-xs font-extrabold text-[var(--color-primary-hover)]"
                >
                  2
                </span>
                최대 4학급이 동시에 4개 존을 돌며 체험합니다.
              </li>
            </ul>
          </div>
        </Reveal>

        {/* 수업 진행 */}
        {/* TODO 확인 필요: 수업 진행 4단계 및 안내 문구 */}
        <Reveal delay={100}>
          <div className="mt-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-7">
            <div className="flex items-center gap-2">
              <RefreshCcw aria-hidden="true" size={20} className="text-[var(--color-primary-hover)]" />
              <h2 className="text-lg font-bold text-[var(--color-text)]">수업은 이렇게 진행돼요</h2>
            </div>
            <ol className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {CLASS_FLOW_STEPS.map((step, index) => (
                <li
                  key={step.title}
                  className="flex items-start gap-2 rounded-xl bg-[var(--color-surface)] p-4"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-xs font-extrabold text-white"
                  >
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-[var(--color-text)]">{step.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--color-text-muted)]">
                      {step.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-4 leading-relaxed text-[var(--color-text-muted)]">
              공간(강당 또는 교실)과 참여할 학급 수만 알려주시면 돼요. 체험
              장비와 강사는 저희가 모두 준비해서 찾아가고, 수업이 끝나면
              간단한 만족도 조사로 의견을 들어 다음 교육에 반영합니다.
            </p>
          </div>
        </Reveal>

        {/* 신청 절차 */}
        <Reveal delay={100}>
          <div className="mt-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-7">
            <div className="flex items-center gap-2">
              <CalendarCheck aria-hidden="true" size={20} className="text-[var(--color-primary-hover)]" />
              <h2 className="text-lg font-bold text-[var(--color-text)]">신청부터 수업까지 4단계</h2>
            </div>
            <ol className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {APPLY_STEPS.map((item, index) => (
                <li
                  key={item.title}
                  className="flex items-start gap-2 rounded-xl bg-[var(--color-surface)] p-4"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-xs font-extrabold text-white"
                  >
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-[var(--color-text)]">{item.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--color-text-muted)]">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        {/* 출강 지역 */}
        <Reveal delay={100}>
          <div className="mt-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-7 text-center">
            <div className="flex items-center justify-center gap-2">
              <MapPin aria-hidden="true" size={20} className="text-[var(--color-primary-hover)]" />
              <h2 className="text-lg font-bold text-[var(--color-text)]">
                이 지역으로 자주 찾아가요
              </h2>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {MAIN_AREAS.map((area) => (
                <span
                  key={area}
                  className="rounded-full border-2 border-[var(--color-primary)] px-4 py-1.5 text-sm font-bold text-[var(--color-primary-hover)]"
                >
                  {area}
                </span>
              ))}
            </div>
            <p className="mt-4 leading-relaxed text-[var(--color-text-muted)]">
              위 지역이 아니어도 괜찮아요. 그 외 지역도 협의 후 얼마든지
              찾아갈 수 있으니, 부담 갖지 마시고 편하게 문의해 주세요!
            </p>
          </div>
        </Reveal>

        <div className="mt-10 space-y-3">
          {FAQS.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-2 open:pb-5"
            >
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 text-lg font-bold text-[var(--color-text)]">
                {item.q}
                <ChevronDown
                  aria-hidden="true"
                  size={22}
                  className="shrink-0 text-[var(--color-primary)] transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="leading-relaxed text-[var(--color-text-muted)]">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </>
  );
}
