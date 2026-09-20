"use client";

import Image from "next/image";
import { Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { Container } from "./container";
import { NAV_ITEMS } from "@/config";

const PHONE_NUMBER = "031-236-8410";
const PHONE_TEL = "tel:0312368410";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 맨 위(히어로) 위에서는 투명하게 겹쳐 보이다가, 스크롤하면 흰 배경으로 바뀝니다.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        solid
          ? "border-b border-[var(--color-border)] bg-[var(--color-surface)]/95 backdrop-blur"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between gap-6">
        <a href="#top" className="flex shrink-0 items-center rounded-md">
          <Image
            src={solid ? "/logo-lockup.png" : "/logo-lockup-white-v2.png"}
            alt="행복한길잡이 장애이해교육센터 로고"
            width={224}
            height={92}
            priority
            className="h-14 w-auto sm:h-16"
          />
        </a>

        {/* 데스크톱 내비게이션 (페이지 안 섹션으로 바로 이동) */}
        <nav aria-label="주요 메뉴" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`inline-flex min-h-11 items-center text-lg font-medium tracking-wide transition-colors ${
                    solid
                      ? "text-[var(--color-text)] hover:text-[var(--color-primary)]"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 데스크톱 CTA: 맨 위(투명)에서는 버튼 2개, 스크롤 후에는 전화 버튼 1개 */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          {!solid && (
            <a
              href={PHONE_TEL}
              className="inline-flex min-h-11 items-center rounded-full border-2 border-white/80 px-5 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              전화 문의
            </a>
          )}
          <a
            href={solid ? PHONE_TEL : "#contact"}
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[var(--color-accent)] px-5 text-sm font-bold text-[var(--color-secondary)] transition-colors hover:brightness-95"
          >
            {solid ? (
              <>
                <Phone aria-hidden="true" size={18} />
                {PHONE_NUMBER}
              </>
            ) : (
              "문의하기"
            )}
          </a>
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
                className="flex min-h-12 items-center rounded-md px-4 text-lg font-medium text-[var(--color-text)]"
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
