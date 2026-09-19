"use client";

import Image from "next/image";
import { Phone } from "lucide-react";
import { useState } from "react";
import { Container } from "./container";

// 헤더에는 선생님이 가장 자주 찾을 항목만 노출 (전체 섹션은 페이지 스크롤/푸터에서 접근)
const NAV_ITEMS = [
  { href: "#about", label: "회사소개" },
  { href: "#why-needed", label: "왜 필요한가" },
  { href: "#programs", label: "체험 프로그램" },
  { href: "#areas", label: "출강 지역" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "문의하기" },
];

const PHONE_NUMBER = "031-236-8410";
const PHONE_TEL = "tel:0312368410";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-surface)]/95 backdrop-blur">
      <Container className="flex h-24 items-center justify-between gap-6">
        <a
          href="#top"
          className="flex shrink-0 items-center gap-3 rounded-md text-lg font-bold tracking-wide text-[var(--color-secondary)]"
        >
          <Image
            src="/logo-mark.png"
            alt="행복한길잡이 로고: 나침반을 감싼 두 손"
            width={44}
            height={44}
            priority
            className="h-11 w-11"
          />
          <span>
            행복한길잡이
            <span className="mt-0.5 block text-xs font-normal tracking-normal text-[var(--color-text-muted)]">
              유치원·초등·중학교 찾아가는 장애이해교육
            </span>
          </span>
        </a>

        {/* 데스크톱 내비게이션 (페이지 안 섹션으로 바로 이동) */}
        <nav aria-label="주요 메뉴" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-11 items-center text-[15px] font-medium tracking-wide text-[var(--color-text)] transition-colors hover:text-[var(--color-primary)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={PHONE_TEL}
          className="hidden shrink-0 min-h-11 items-center gap-2 rounded-full bg-[var(--color-primary)] px-5 text-sm font-bold text-white transition-colors hover:bg-[var(--color-primary-hover)] lg:inline-flex"
        >
          <Phone aria-hidden="true" size={18} />
          {PHONE_NUMBER}
        </a>

        {/* 모바일 메뉴 버튼 */}
        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[var(--color-border)] lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">
            {menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          </span>
          <svg
            aria-hidden="true"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </Container>

      {/* 모바일 내비게이션 */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="모바일 메뉴"
          className="border-t border-[var(--color-border)] bg-[var(--color-surface)] lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-12 items-center rounded-md px-4 text-base font-semibold text-[var(--color-text)]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={PHONE_TEL}
              onClick={() => setMenuOpen(false)}
              className="mt-2 flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-5 text-base font-bold text-white"
            >
              <Phone aria-hidden="true" size={18} />
              전화로 문의하기 {PHONE_NUMBER}
            </a>
          </Container>
        </nav>
      )}
    </header>
  );
}
