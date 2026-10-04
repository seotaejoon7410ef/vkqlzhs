"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Phone } from "lucide-react";
import { useLayoutEffect, useState } from "react";
import { Container } from "./container";
import { NAV_GROUPS, isNavChildren } from "@/config";

// 맨 위에 어두운 배너(히어로/PageTitle)가 없는 페이지 — 투명 오버레이로
// 두면 밝은 배경 위에 흰 글자가 겹쳐 안 보이므로 헤더를 항상 불투명으로 고정
const NO_DARK_HERO_PATHS = ["/contact"];

const PHONE_NUMBER = "031-236-8410";
const PHONE_TEL = "tel:0312368410";

export function SiteHeader() {
  const pathname = usePathname();
  const forceSolid = NO_DARK_HERO_PATHS.includes(pathname);

  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  // 데스크톱: 하위 카테고리를 누르면 드롭다운을 닫고, 마우스가 메뉴를 떠나면 다시 열 수 있게 함
  const [closedDesktopGroup, setClosedDesktopGroup] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  // 모바일 화면은 주소창 축소/스크롤 바운스 등으로 스크롤 위치 기반
  // 투명-불투명 전환이 불안정하게 보일 수 있어, sm 미만에서는 항상
  // 불투명 헤더로 고정합니다(투명 오버레이 효과는 sm 이상에서만).
  const [isNarrow, setIsNarrow] = useState(true);
  // 서버 렌더링 시점에는 실제 화면 폭을 알 수 없어 isNarrow가 true로
  // 시작합니다. 데스크톱에서는 이 초기값이 곧바로 틀린 것으로
  // 정정되는데, 이때 배경색 전환 애니메이션까지 같이 재생되면 로고
  // 위로 흰 배경이 잠깐 번쩍이는 것처럼 보입니다. mounted 이전에는
  // transition을 꺼서 이 첫 정정이 애니메이션 없이 즉시 적용되게 합니다.
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const mql = window.matchMedia("(min-width: 640px)");
    const onWidthChange = () => setIsNarrow(!mql.matches);
    onWidthChange();
    mql.addEventListener("change", onWidthChange);

    const markMounted = () => setMounted(true);
    markMounted();

    return () => {
      window.removeEventListener("scroll", onScroll);
      mql.removeEventListener("change", onWidthChange);
    };
  }, []);

  const solid = isNarrow || scrolled || menuOpen || forceSolid;

  const activeGroup = NAV_GROUPS.find(
    (item) => isNavChildren(item) && item.label === openGroup,
  );

  return (
    <header
      className={`fixed top-0 z-50 w-full ${mounted ? "transition-colors duration-300" : ""} ${
        solid
          ? "border-b border-[var(--color-border)] bg-[var(--color-surface)]/95 backdrop-blur"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container className="flex h-24 items-center justify-between gap-6">
        {/* 로고는 새로고침되도록 next/link 대신 일반 a 태그 사용 */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/" className="flex shrink-0 items-center rounded-md">
          <Image
            src="/logo-lockup.png"
            alt="행복한길잡이 체험교육센터 로고"
            width={236}
            height={92}
            priority
            className="h-16 w-auto sm:h-20"
          />
        </a>

        {/* 데스크톱 내비게이션: 대분류에 마우스를 올리거나 키보드로 포커스하면 하위 메뉴가 펼쳐짐 */}
        <nav aria-label="주요 메뉴" className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {NAV_GROUPS.map((item) =>
              isNavChildren(item) ? (
                <li
                  key={item.label}
                  className="group relative"
                  onMouseLeave={() => setClosedDesktopGroup(null)}
                >
                  <button
                    type="button"
                    aria-haspopup="true"
                    className={`inline-flex min-h-11 items-center gap-1 text-xl font-medium tracking-wide transition-colors ${
                      solid
                        ? "text-[var(--color-text)] hover:text-[var(--color-primary)]"
                        : "text-[#111111] hover:text-[var(--color-primary)]"
                    }`}
                  >
                    {item.label}
                    <ChevronDown aria-hidden="true" size={18} />
                  </button>
                  <div
                    className={`invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition ${
                      closedDesktopGroup === item.label
                        ? ""
                        : "group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100"
                    }`}
                  >
                    <ul className="min-w-[11rem] rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-2 shadow-lg">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          {/* 드롭다운 하위 메뉴는 누르면 새로고침되도록 일반 a 태그 사용 */}
                          <a
                            href={child.href}
                            onClick={() => setClosedDesktopGroup(item.label)}
                            className="block rounded-lg px-4 py-3 text-base font-bold text-[var(--color-text)] hover:bg-[var(--color-primary-tint)] hover:text-[var(--color-primary-hover)]"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`inline-flex min-h-11 items-center text-xl font-medium tracking-wide transition-colors ${
                      solid
                        ? "text-[var(--color-text)] hover:text-[var(--color-primary)]"
                        : "text-[#111111] hover:text-[var(--color-primary)]"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>

        {/* 데스크톱 CTA: 스크롤하면 같은 버튼 안에서 문의하기 → 전화번호로 바뀜.
            PC에서는 전화를 걸 수 없으므로 링크는 항상 문의하기 페이지로 이동 */}
        <div className="hidden shrink-0 items-center lg:flex">
          <Link
            href="/contact"
            className="relative flex h-11 w-[150px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-[var(--color-accent)] text-sm font-bold text-[var(--color-secondary)] transition-colors hover:brightness-95"
          >
            <span
              aria-hidden={scrolled}
              className={`absolute inset-0 flex items-center justify-center gap-2 transition-all duration-300 ${
                scrolled ? "-translate-y-3 opacity-0" : "translate-y-0 opacity-100"
              }`}
            >
              문의하기
            </span>
            <span
              aria-hidden={!scrolled}
              className={`absolute inset-0 flex items-center justify-center gap-1.5 whitespace-nowrap transition-all duration-300 ${
                scrolled ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
            >
              <Phone aria-hidden="true" size={16} />
              {PHONE_NUMBER}
            </span>
          </Link>
        </div>

        {/* 모바일 메뉴 버튼 */}
        <button
          type="button"
          className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border lg:hidden ${
            solid ? "border-[var(--color-border)] text-[var(--color-text)]" : "border-[#111111]/60 text-[#111111]"
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

      {/* 모바일: 탭하지 않아도 항상 보이는 가로 스크롤 메뉴. 대분류를 누르면 하위 메뉴가 아래에 펼쳐짐 */}
      <nav
        aria-label="주요 메뉴 (모바일)"
        className={`lg:hidden ${solid ? "border-t border-[var(--color-border)]" : ""}`}
      >
        <div className="scrollbar-hide flex gap-2 overflow-x-auto px-6 py-3">
          {NAV_GROUPS.map((item) =>
            isNavChildren(item) ? (
              <button
                key={item.label}
                type="button"
                aria-expanded={openGroup === item.label}
                onClick={() => setOpenGroup((current) => (current === item.label ? null : item.label))}
                className={`inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-bold transition-colors ${
                  solid
                    ? "border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                    : "border-[#111111]/60 text-[#111111] hover:border-[#111111] hover:bg-black/5"
                }`}
              >
                {item.label}
                <ChevronDown
                  aria-hidden="true"
                  size={16}
                  className={`transition-transform ${openGroup === item.label ? "rotate-180" : ""}`}
                />
              </button>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-bold transition-colors ${
                  solid
                    ? "border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                    : "border-[#111111]/60 text-[#111111] hover:border-[#111111] hover:bg-black/5"
                }`}
              >
                {item.label}
              </a>
            ),
          )}
        </div>
        {activeGroup && isNavChildren(activeGroup) && (
          <div className="scrollbar-hide flex gap-2 overflow-x-auto px-6 pb-3">
            {activeGroup.children.map((child) => (
              <a
                key={child.href}
                href={child.href}
                className={`shrink-0 whitespace-nowrap rounded-full border-2 px-4 py-1.5 text-sm font-bold transition-colors ${
                  solid
                    ? "border-[var(--color-primary)] bg-[var(--color-primary-tint)] text-[var(--color-primary-hover)]"
                    : "border-[#111111] bg-black/5 text-[#111111]"
                }`}
              >
                {child.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* 모바일 내비게이션 (햄버거 버튼으로 열고 닫는 전체 메뉴 + 전화 CTA) */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="모바일 메뉴"
          className="border-t border-[var(--color-border)] bg-[var(--color-surface)] lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-3">
            {NAV_GROUPS.map((item) =>
              isNavChildren(item) ? (
                <div key={item.label} className="flex flex-col">
                  <p className="px-4 pt-3 text-sm font-bold text-[var(--color-primary-hover)]">
                    {item.label}
                  </p>
                  {item.children.map((child) => (
                    <a
                      key={child.href}
                      href={child.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex min-h-12 items-center rounded-md px-8 text-lg font-medium text-[var(--color-text)]"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-12 items-center rounded-md px-4 text-lg font-medium text-[var(--color-text)]"
                >
                  {item.label}
                </a>
              ),
            )}
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
