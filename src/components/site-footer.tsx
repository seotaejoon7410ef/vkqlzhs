import Image from "next/image";
import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer className="on-dark border-t border-[var(--color-border)] bg-[var(--color-secondary)] pb-16 text-white sm:pb-0">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <Image
            src="/logo-lockup.png"
            alt="행복한길잡이 장애이해교육센터 로고"
            width={224}
            height={92}
            className="h-auto w-48"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/80">
            유치원, 초등학교, 중학교를 직접 찾아가서 장애 인식 개선
            체험교육을 진행합니다.
          </p>
        </div>

        <nav aria-label="바로가기">
          <h2 className="text-sm font-bold text-white/90">바로가기</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a className="hover:underline" href="#about">
                회사소개
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#why-needed">
                의무교육 안내
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#programs">
                체험 프로그램
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#process">
                진행 방식
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#areas">
                출강 지역
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#class-flow">
                수업 진행
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#apply">
                신청 절차
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#faq">
                자주 묻는 질문
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#contact">
                문의하기
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold text-white/90">연락처</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li>대표 서태준</li>
            <li>
              전화{" "}
              <a className="hover:underline" href="tel:0312368410">
                031-236-8410
              </a>
            </li>
            <li>
              이메일{" "}
              <a className="hover:underline" href="mailto:happyguide95@naver.com">
                happyguide95@naver.com
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/15 py-5 text-center text-xs text-white/60">
        © 행복한길잡이 장애이해교육센터.
      </div>
    </footer>
  );
}
