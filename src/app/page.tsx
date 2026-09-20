import Image from "next/image";
import {
  Backpack,
  CalendarCheck,
  ChevronDown,
  Mail,
  MapPin,
  Megaphone,
  PackageCheck,
  PartyPopper,
  Phone,
  RefreshCcw,
  // School, -- "함께한 학교" 섹션을 다시 쓸 때 주석 해제
  Truck,
  Users,
} from "lucide-react";
import { Container } from "@/components/container";
import { ProgramZones } from "@/components/program-zones";
import { InquiryForm } from "@/components/inquiry-form";
import { DraftBadge } from "@/components/draft-badge";
import { Reveal } from "@/components/reveal";
import { SHOW_KINDERGARTEN } from "@/config";

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

const MAIN_AREAS = ["서울", "경기", "인천", "충남", "충북"];

// "함께한 학교" 섹션 복원 시 다시 사용 (아래 JSX 주석과 세트)
// const PARTNER_SCHOOLS_PLACEHOLDER_COUNT = 8;

const CLASS_FLOW_STEPS = [
  { icon: Truck, title: "도착·설치", desc: "강사가 학교에 도착해 체험 도구를 설치합니다." },
  { icon: Megaphone, title: "안내", desc: "학생들에게 오늘 체험할 내용을 간단히 안내합니다." },
  { icon: RefreshCcw, title: "학급별 존 체험 로테이션", desc: "학급별로 순서를 정해 4개 존을 돌아가며 체험합니다." },
  { icon: PackageCheck, title: "정리·마무리", desc: "체험 도구를 정리하고 오늘 배운 내용을 간단히 되짚어봅니다." },
];

const APPLY_STEPS = [
  { icon: Phone, title: "문의", desc: "전화, 문자, 이메일로 학교와 희망 날짜를 남겨주세요." },
  { icon: CalendarCheck, title: "일정·견적 안내", desc: "담당자가 연락드려 일정을 잡고 견적을 안내합니다." },
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

export default function Home() {
  return (
    <>
      {/* 1. 히어로: 한 문장 소개 + 전화/문의 버튼 */}
      <section
        id="top"
        className="on-dark relative scroll-mt-24 overflow-hidden bg-gradient-to-br from-[var(--color-secondary-hover)] via-[var(--color-secondary)] to-[var(--color-primary)] text-white"
      >
        {/* 장식용 로고 워터마크 (실제 사진 대신 깊이감을 주는 용도, 정보 없음) */}
        <Image
          src="/logo-mark.png"
          alt=""
          aria-hidden="true"
          width={640}
          height={640}
          className="pointer-events-none absolute -right-24 -top-24 h-[26rem] w-[26rem] opacity-10 sm:h-[34rem] sm:w-[34rem]"
        />

        <Container className="relative py-20 sm:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-black leading-[1.2] sm:text-5xl">
              <span
                className="hero-anim inline-block text-[var(--color-accent)]"
                style={{ animationDelay: "0ms" }}
              >
                연 1회 의무교육,
              </span>
              <br />
              <span className="hero-anim inline-block" style={{ animationDelay: "100ms" }}>
                저희가 교실로 찾아갑니다
              </span>
            </h1>
            <p
              className="hero-anim mx-auto mt-6 max-w-[36em] text-lg leading-relaxed text-white/80"
              style={{ animationDelay: "200ms" }}
            >
              유치원·초등·중학교로 찾아가는 장애인식개선 체험교육. 문의
              한 번으로 일정과 견적까지 안내해 드려요.
            </p>
            <div
              className="hero-anim mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
              style={{ animationDelay: "300ms" }}
            >
              <a
                href="tel:0312368410"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-7 text-base font-bold text-[var(--color-secondary)] transition-colors hover:brightness-95"
              >
                <Phone aria-hidden="true" size={20} />
                전화로 문의하기
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-white px-7 text-base font-bold text-white transition-colors hover:bg-white/10"
              >
                문의 양식 작성하기
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* 회사 소개 */}
      <section id="about" aria-labelledby="about-heading" className="scroll-mt-24">
        {/* 우리가 이 교육을 하는 이유 (큰 문장 배너) */}
        <div className="on-dark bg-gradient-to-br from-[var(--color-secondary-hover)] via-[var(--color-secondary)] to-[var(--color-primary)] py-16 text-white sm:py-24">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <Reveal>
                <p className="text-sm font-bold text-[var(--color-accent)]">
                  우리가 이 교육을 하는 이유
                </p>
                <p className="mx-auto mt-4 max-w-[36em] text-2xl font-black leading-snug sm:text-4xl">
                  장애는 불쌍하게 볼 일이 아니라, 함께 사는 방법을 배우는
                  일입니다.
                </p>
              </Reveal>
            </div>
          </Container>
        </div>

        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="text-sm font-bold text-[var(--color-primary-hover)]">회사 소개</p>
              <h2 id="about-heading" className="mt-3 text-3xl font-black text-[var(--color-text)]">
                행복한길잡이를 소개합니다
              </h2>
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
                <h3 className="shrink-0 text-2xl font-black text-[var(--color-text)]">
                  핵심가치
                </h3>
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
      </section>

      {/* 유치원 체험 (SHOW_KINDERGARTEN으로 켜고 끔) */}
      {SHOW_KINDERGARTEN && (
        <section
          id="kindergarten"
          aria-labelledby="kindergarten-heading"
          className="scroll-mt-24 py-16 sm:py-20"
        >
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <Reveal>
                <div className="flex items-center justify-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary-tint)] text-[var(--color-primary-hover)]"
                  >
                    <Backpack size={24} />
                  </span>
                  <p className="text-sm font-bold text-[var(--color-primary-hover)]">유치원 체험</p>
                  <DraftBadge />
                </div>
                <h2 id="kindergarten-heading" className="mt-4 text-3xl font-black text-[var(--color-text)]">
                  유치원 체험 프로그램
                </h2>
              </Reveal>
            </div>
            <Reveal delay={100}>
              <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] p-7 text-center text-[var(--color-text-muted)]">
                유치원 프로그램 구성은 아직 준비 중입니다. 내용 확인 후 채워
                넣겠습니다.
              </div>
            </Reveal>
          </Container>
        </section>
      )}

      {/* 초등학교 체험 */}
      <section
        id="elementary"
        aria-labelledby="elementary-heading"
        className="scroll-mt-24 py-16 sm:py-20"
      >
        <Container>
          {/* TODO 확인 필요: 초등학교 체험 섹션 내용 전체 */}
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold text-[var(--color-primary-hover)]">초등학교 체험</p>
            <h2 id="elementary-heading" className="mt-3 text-3xl font-black text-[var(--color-text)]">
              초등학교 체험 프로그램
            </h2>
          </Reveal>
          <div className="mt-10">
            <ProgramZones level="elementary" />
          </div>
        </Container>
      </section>

      {/* 중학교 체험 */}
      <section
        id="middle"
        aria-labelledby="middle-heading"
        className="scroll-mt-24 py-16 sm:py-20"
      >
        <Container>
          {/* TODO 확인 필요: 중학교 체험 섹션 내용 전체 */}
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold text-[var(--color-primary-hover)]">중학교 체험</p>
            <h2 id="middle-heading" className="mt-3 text-3xl font-black text-[var(--color-text)]">
              중학교 체험 프로그램
            </h2>
          </Reveal>
          <div className="mt-10">
            <ProgramZones level="middle" />
          </div>
        </Container>
      </section>

      {/* 함께한 학교 — 잠시 숨김 (실제 학교명 확보되면 다시 사용).
          나중에 다시 쓸 때: 위 import의 School 주석 해제, PARTNER_SCHOOLS_PLACEHOLDER_COUNT 주석 해제,
          아래 블록의 주석을 풀면 됩니다.

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
      */}

      {/* 7. 자주 묻는 질문 */}
      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="scroll-mt-24 py-16 sm:py-20"
      >
        <Container className="max-w-[900px]">
          <Reveal className="text-center">
            <p className="text-sm font-bold text-[var(--color-primary-hover)]">자주 묻는 질문</p>
            <h2 id="faq-heading" className="mt-3 text-3xl font-black text-[var(--color-text)]">
              선생님들이 많이 물어보세요
            </h2>
          </Reveal>

          {/* 진행 방식 (FAQ와 함께 묶음) */}
          <Reveal delay={100}>
            <div className="mt-10 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-7">
              <div className="flex items-center gap-2">
                <Truck aria-hidden="true" size={20} className="text-[var(--color-primary-hover)]" />
                <h3 className="text-lg font-bold text-[var(--color-text)]">학교(원)로 직접 찾아갑니다</h3>
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

          {/* 수업 진행 (FAQ와 함께 묶음) */}
          {/* TODO 확인 필요: 수업 진행 4단계 및 안내 문구 */}
          <Reveal delay={100}>
            <div className="mt-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-7">
              <div className="flex items-center gap-2">
                <RefreshCcw aria-hidden="true" size={20} className="text-[var(--color-primary-hover)]" />
                <h3 className="text-lg font-bold text-[var(--color-text)]">수업은 이렇게 진행돼요</h3>
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

          {/* 신청 절차 (FAQ와 함께 묶음) */}
          <Reveal delay={100}>
            <div className="mt-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-7">
              <div className="flex items-center gap-2">
                <CalendarCheck aria-hidden="true" size={20} className="text-[var(--color-primary-hover)]" />
                <h3 className="text-lg font-bold text-[var(--color-text)]">신청부터 수업까지 4단계</h3>
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

          {/* 출강 지역 안내 (FAQ와 함께 묶음) */}
          <Reveal delay={100}>
            <div className="mt-10 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-7 text-center">
              <div className="flex items-center justify-center gap-2">
                <MapPin aria-hidden="true" size={20} className="text-[var(--color-primary-hover)]" />
                <h3 className="text-lg font-bold text-[var(--color-text)]">
                  이 지역으로 자주 찾아가요
                </h3>
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
      </section>

      {/* 8. 문의하기 */}
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="on-dark scroll-mt-24 bg-[var(--color-secondary)] py-16 text-white sm:py-24"
      >
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
              <Reveal delay={100}>
                <p className="text-sm font-bold text-[var(--color-accent)]">문의하기</p>
                <h2 id="contact-heading" className="mt-3 text-3xl font-black sm:text-4xl">
                  지금 바로 문의해 주세요
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-3 text-white/80">
                  행복한길잡이 체험교육 문의 · 학교(원) 일정에 맞춰 상담해드려요
                </p>
              </Reveal>

              <Reveal delay={300}>
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
          <h3 className="text-2xl font-black text-[var(--color-text)]">문의 양식</h3>
          <InquiryForm />
        </Container>
      </section>
    </>
  );
}
