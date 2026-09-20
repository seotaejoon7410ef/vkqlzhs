"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { Container } from "./container";
import { NAV_ITEMS } from "@/config";

const PHONE_NUMBER = "031-236-8410";
const PHONE_TEL = "tel:0312368410";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // 모바일 화면은 주소창 축소/스크롤 바운스 등으로 스크롤 위치 기반
  // 투명-불투명 전환이 불안정하게 보일 수 있어, sm 미만에서는 항상
  // 불투명 헤더로 고정합니다(투명 오버레이 효과는 sm 이상에서만).
  const [isNarrow, setIsNarrow] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const mql = window.matchMedia("(min-width: 640px)");
    const onWidthChange = () => setIsNarrow(!mql.matches);
    onWidthChange();
    mql.addEventListener("change", onWidthChange);

    return () => {
      window.removeEventListener("scroll", onScroll);
      mql.removeEventListener("change", onWidthChange);
    };
  }, []);

  const solid = isNarrow || scrolled || menuOpen;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        solid
          ? "border-b border-[var(--color-border)] bg-[var(--color-surface)]/95 backdrop-blur"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex shrink-0 items-center rounded-md">
          <Image
            src={solid ? "/logo-lockup.png" : "/logo-lockup-white-v2.png"}
            alt="행복한길잡이 장애이해교육센터 로고"
            width={224}
            height={92}
            priority
            className="h-14 w-auto sm:h-16"
          />
        </Link>

        {/* 데스크톱 내비게이션 (각 메뉴의 별도 페이지로 이동) */}
        <nav aria-label="주요 메뉴" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`inline-flex min-h-11 items-center text-lg font-medium tracking-wide transition-colors ${
                    solid
                      ? "text-[var(--color-text)] hover:text-[var(--color-primary)]"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* 데스크톱 CTA */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[var(--color-accent)] px-5 text-sm font-bold text-[var(--color-secondary)] transition-colors hover:brightness-95"
          >
            문의하기
          </Link>
        </div>

        {/* 모바일 메뉴 버튼 */}
        <button
          type="button"
          className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border lg:hidden ${
            solid ? "border-[var(--color-border)] text-[var(--color-text)]" : "border-white/60 text-white"
          }`}
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

      {/* 모바일: 탭하지 않아도 항상 보이는 가로 스크롤 메뉴 */}
      <nav
        aria-label="주요 메뉴 (모바일)"
        className={`lg:hidden ${solid ? "border-t border-[var(--color-border)]" : ""}`}
      >
        <div className="scrollbar-hide flex gap-2 overflow-x-auto px-6 py-3">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-bold transition-colors ${
                solid
                  ? "border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                  : "border-white/60 text-white hover:border-white hover:bg-white/10"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* 모바일 내비게이션 (햄버거 버튼으로 열고 닫는 전체 메뉴 + 전화 CTA) */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="모바일 메뉴"
          className="border-t border-[var(--color-border)] bg-[var(--color-surface)] lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-12 items-center rounded-md px-4 text-lg font-medium text-[var(--color-text)]"
              >
                {item.label}
              </Link>
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
