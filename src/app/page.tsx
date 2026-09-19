import Image from "next/image";
import {
  Camera,
  CalendarCheck,
  ChevronDown,
  FileCheck,
  Mail,
  MapPin,
  PartyPopper,
  Phone,
  School,
  Users,
} from "lucide-react";
import { Container } from "@/components/container";
import { ProgramZones } from "@/components/program-zones";
import { InquiryForm } from "@/components/inquiry-form";

const MAIN_AREAS = ["서울", "경기", "인천", "충남", "충북"];

// 실제 협력 학교(원) 목록으로 교체해주세요. 지어낸 이름이 아니라 빈 자리만 만들어둡니다.
const PARTNER_SCHOOLS_PLACEHOLDER_COUNT = 8;

const APPLY_STEPS = [
  { icon: Phone, title: "문의", desc: "전화, 이메일, 문의 양식으로 학교와 희망 날짜를 남겨주세요." },
  { icon: CalendarCheck, title: "일정·견적 안내", desc: "대표 서태준이 연락드려 일정을 잡고 견적을 안내합니다." },
  { icon: Users, title: "수업 진행", desc: "정해진 날짜에 학교(원)로 찾아가 체험교육을 진행합니다." },
  { icon: PartyPopper, title: "만족도 조사", desc: "교육 후 의견을 들어 다음 교육을 더 좋게 만듭니다." },
];

const FAQS = [
  {
    q: "준비물이 필요한가요?",
    a: "따로 준비하실 준비물은 없어요. 체험에 필요한 도구는 저희가 모두 챙겨갑니다.",
  },
  {
    q: "어떤 장소에서 진행되나요?",
    a: "교실이나 강당처럼 학교(원) 안 실내 공간이면 충분해요.",
  },
  {
    q: "인원은 몇 명까지 가능한가요?",
    a: "한 학급부터 최대 4학급까지 동시에 진행할 수 있어요. 인원에 맞게 존 구성을 조정합니다.",
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

export default function Home() {
  return (
    <>
      {/* 1. 히어로: 한 문장 소개 + 전화/문의 버튼 */}
      <section id="top" className="scroll-mt-24 bg-[var(--color-surface-alt)]">
        <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo-mark.png"
                alt=""
                aria-hidden="true"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <p className="text-lg font-extrabold text-[var(--color-secondary)]">
                행복한길잡이
              </p>
            </div>
            <h1 className="mt-6 text-3xl font-black leading-snug text-[var(--color-text)] sm:text-4xl">
              유치원·초등학교·중학교로 찾아가는
              <br />
              장애 인식 개선 체험교육입니다.
            </h1>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:0312368410"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-7 text-base font-bold text-white transition-colors hover:bg-[var(--color-primary-hover)]"
              >
                <Phone aria-hidden="true" size={20} />
                전화로 문의하기
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[var(--color-secondary)] px-7 text-base font-bold text-[var(--color-secondary)] transition-colors hover:bg-[var(--color-secondary-tint)]"
              >
                문의 양식 작성하기
              </a>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="flex h-64 flex-col items-center justify-center gap-2 rounded-3xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-muted)] sm:h-80"
          >
            <Camera size={32} />
            <p className="text-sm">대표 사진 (준비 중)</p>
          </div>
        </Container>
      </section>

      {/* 2. 왜 필요한가 */}
      <section id="why-needed" aria-labelledby="why-heading" className="scroll-mt-24 py-16 sm:py-20">
        <Container>
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary-tint)] text-[var(--color-primary-hover)]"
            >
              <FileCheck size={24} />
            </span>
            <p className="text-sm font-bold text-[var(--color-primary-hover)]">왜 필요한가</p>
          </div>
          <h2 id="why-heading" className="mt-4 text-3xl font-black text-[var(--color-text)]">
            장애 인식개선교육, 매년 실시해야 하는 의무교육입니다
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-text-muted)]">
            「장애인복지법」 제25조 제2항에 따라 유치원, 초·중·고 각급
            학교의 장은 매년 소속 학생을 대상으로 장애인 인식개선교육을
            실시해야 합니다. 행복한길잡이는 이 의무교육을 체험 중심으로
            쉽고 재미있게 진행해드립니다.
          </p>
        </Container>
      </section>

      {/* 3. 체험 프로그램: 유치원 / 초·중등 */}
      <section
        id="programs"
        aria-labelledby="programs-heading"
        className="scroll-mt-24 bg-[var(--color-surface-alt)] py-16 sm:py-20"
      >
        <Container>
          <p className="text-sm font-bold text-[var(--color-primary-hover)]">체험 프로그램</p>
          <h2 id="programs-heading" className="mt-3 text-3xl font-black text-[var(--color-text)]">
            눈높이에 맞춘 체험 프로그램
          </h2>
          <div className="mt-10">
            <ProgramZones />
          </div>
        </Container>
      </section>

      {/* 4. 진행 방식 */}
      <section id="process" aria-labelledby="process-heading" className="scroll-mt-24 py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold text-[var(--color-primary-hover)]">진행 방식</p>
            <h2 id="process-heading" className="mt-3 text-3xl font-black text-[var(--color-text)]">
              학교(원)로 직접 찾아갑니다
            </h2>
            <ul className="mt-6 space-y-4 text-lg leading-relaxed text-[var(--color-text)]">
              <li className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-tint)] text-xs font-extrabold text-[var(--color-primary-hover)]"
                >
                  1
                </span>
                강사와 체험 도구가 모두 학교(원)로 이동합니다.
              </li>
              <li className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-tint)] text-xs font-extrabold text-[var(--color-primary-hover)]"
                >
                  2
                </span>
                최대 4학급이 동시에 4개 존을 돌며 체험합니다.
              </li>
            </ul>
          </div>
          <div
            aria-hidden="true"
            className="flex h-64 flex-col items-center justify-center gap-2 rounded-3xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface-alt)] text-[var(--color-text-muted)] sm:h-72"
          >
            <Camera size={32} />
            <p className="text-sm">현장 진행 사진 (준비 중)</p>
          </div>
        </Container>
      </section>

      {/* 5. 출강 지역 안내 */}
      <section
        id="areas"
        aria-labelledby="areas-heading"
        className="scroll-mt-24 bg-[var(--color-surface-alt)] py-16 sm:py-20"
      >
        <Container>
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary-tint)] text-[var(--color-primary-hover)]"
            >
              <MapPin size={24} />
            </span>
            <p className="text-sm font-bold text-[var(--color-primary-hover)]">출강 지역</p>
          </div>
          <h2 id="areas-heading" className="mt-4 text-3xl font-black text-[var(--color-text)]">
            이 지역으로 자주 찾아가요
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {MAIN_AREAS.map((area) => (
              <span
                key={area}
                className="rounded-full border-2 border-[var(--color-primary)] px-5 py-2 text-base font-bold text-[var(--color-primary-hover)]"
              >
                {area}
              </span>
            ))}
          </div>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-text-muted)]">
            위 지역이 아니어도 괜찮아요. 그 외 지역도 협의 후 얼마든지
            찾아갈 수 있으니, 부담 갖지 마시고 편하게 문의해 주세요!
          </p>
        </Container>
      </section>

      {/* 5-1. 함께한 학교 (실제 자료 필요 — 지금은 자리만) */}
      <section
        id="schools"
        aria-labelledby="schools-heading"
        className="scroll-mt-24 py-16 sm:py-20"
      >
        <Container>
          <div className="flex flex-wrap items-center gap-3">
            <span
              aria-hidden="true"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary-tint)] text-[var(--color-primary-hover)]"
            >
              <School size={24} />
            </span>
            <p className="text-sm font-bold text-[var(--color-primary-hover)]">함께한 학교</p>
            <span className="inline-flex items-center rounded-full border border-dashed border-[var(--color-accent-strong)] px-2.5 py-0.5 text-xs font-bold text-[var(--color-accent-strong)]">
              실제 학교명 확인 필요
            </span>
          </div>
          <h2 id="schools-heading" className="mt-4 text-3xl font-black text-[var(--color-text)]">
            지금까지 함께한 학교(원)
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--color-text-muted)]">
            실제로 함께한 학교·유치원 이름을 알려주시면 이 자리에 채워
            넣겠습니다. (공개 전에 학교 측 동의를 한 번 확인해주세요.)
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {Array.from({ length: PARTNER_SCHOOLS_PLACEHOLDER_COUNT }).map((_, index) => (
              <li
                key={index}
                className="flex h-16 items-center justify-center rounded-xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface-alt)] text-sm text-[var(--color-text-muted)]"
              >
                학교명 입력 필요
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 6. 신청 절차 4단계 */}
      <section id="apply" aria-labelledby="apply-heading" className="scroll-mt-24 py-16 sm:py-20">
        <Container>
          <p className="text-sm font-bold text-[var(--color-primary-hover)]">신청 절차</p>
          <h2 id="apply-heading" className="mt-3 text-3xl font-black text-[var(--color-text)]">
            신청부터 수업까지 4단계
          </h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {APPLY_STEPS.map((item, index) => (
              <li
                key={item.title}
                className="flex flex-col gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7"
              >
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-primary)] text-base font-extrabold text-white"
                >
                  {index + 1}
                </span>
                <div className="flex items-center gap-2">
                  <item.icon aria-hidden="true" size={20} className="text-[var(--color-primary-hover)]" />
                  <p className="font-bold text-[var(--color-text)]">{item.title}</p>
                </div>
                <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {item.desc}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* 7. 자주 묻는 질문 */}
      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="scroll-mt-24 bg-[var(--color-surface-alt)] py-16 sm:py-20"
      >
        <Container className="max-w-3xl">
          <p className="text-sm font-bold text-[var(--color-primary-hover)]">자주 묻는 질문</p>
          <h2 id="faq-heading" className="mt-3 text-3xl font-black text-[var(--color-text)]">
            선생님들이 많이 물어보세요
          </h2>

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
      </section>

      {/* 8. 문의하기 */}
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="on-dark scroll-mt-24 bg-[var(--color-secondary)] py-16 text-white sm:py-24"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="flex justify-center lg:justify-start">
              <div className="flex h-64 w-64 items-center justify-center rounded-3xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary-hover)] sm:h-72 sm:w-72">
                <Image
                  src="/logo-mark.png"
                  alt=""
                  aria-hidden="true"
                  width={140}
                  height={140}
                  className="h-32 w-32 sm:h-36 sm:w-36"
                />
              </div>
            </div>

            <div>
              <p className="text-sm font-bold text-[var(--color-accent)]">문의하기</p>
              <h2 id="contact-heading" className="mt-3 text-3xl font-black sm:text-4xl">
                지금 바로 문의해 주세요
              </h2>
              <p className="mt-3 text-white/80">
                행복한길잡이 체험교육 문의 · 학교(원) 일정에 맞춰 상담해드려요
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <a
                  href="tel:0312368410"
                  className="rounded-2xl border border-white/20 bg-white/5 px-6 py-7 text-center transition-colors hover:bg-white/10"
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
                  className="rounded-2xl border border-white/20 bg-white/5 px-6 py-7 text-center transition-colors hover:bg-white/10"
                >
                  <span
                    aria-hidden="true"
                    className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[var(--color-accent)]"
                  >
                    <Mail size={20} />
                  </span>
                  <span className="mt-3 block text-lg font-bold text-white">이메일 문의</span>
                  <span className="mt-1 block break-all text-white/80">
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
        <Container className="max-w-3xl">
          <h3 className="text-2xl font-black text-[var(--color-text)]">문의 양식</h3>
          <InquiryForm />
        </Container>
      </section>
    </>
  );
}
