"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "./container";

const NAV_ITEMS = [
  { href: "/", label: "홈" },
  { href: "/about", label: "센터 소개" },
  { href: "/programs", label: "교육 프로그램" },
  { href: "/news", label: "소식·자료실" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-surface)]/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-md text-lg font-extrabold tracking-tight text-[var(--color-secondary)]"
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
            <span className="block text-xs font-medium text-[var(--color-text-muted)]">
              장애이해교육센터
            </span>
          </span>
        </Link>

        {/* 데스크톱 내비게이션 */}
        <nav aria-label="주요 메뉴" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`inline-flex min-h-11 items-center rounded-md px-4 text-[15px] font-semibold transition-colors ${
                      isActive
                        ? "bg-[var(--color-primary-tint)] text-[var(--color-primary-hover)]"
                        : "text-[var(--color-text)] hover:bg-[var(--color-surface-alt)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Link
            href="/programs#apply"
            className="inline-flex min-h-11 items-center rounded-full bg-[var(--color-primary)] px-5 text-sm font-bold text-white transition-colors hover:bg-[var(--color-primary-hover)]"
          >
            교육 신청 문의
          </Link>
        </div>

        {/* 모바일 메뉴 버튼 */}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[var(--color-border)] md:hidden"
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
          className="border-t border-[var(--color-border)] bg-[var(--color-surface)] md:hidden"
        >
          <Container className="flex flex-col gap-1 py-3">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`flex min-h-12 items-center rounded-md px-4 text-base font-semibold ${
                    isActive
                      ? "bg-[var(--color-primary-tint)] text-[var(--color-primary-hover)]"
                      : "text-[var(--color-text)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/programs#apply"
              onClick={() => setMenuOpen(false)}
              className="mt-2 flex min-h-12 items-center justify-center rounded-full bg-[var(--color-primary)] px-5 text-base font-bold text-white"
            >
              교육 신청 문의
            </Link>
          </Container>
        </nav>
      )}
    </header>
  );
}
