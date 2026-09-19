import Link from "next/link";
import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-secondary)] text-white">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-lg font-extrabold">행복한길잡이</p>
          <p className="mt-1 text-sm text-white/70">장애이해교육센터</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/80">
            모두가 차별 없이 이해하고 연결되는 사회를 위해, 장애 인식 개선
            교육으로 함께 걷는 길잡이가 되겠습니다.
          </p>
        </div>

        <nav aria-label="바로가기">
          <h2 className="text-sm font-bold text-white/90">바로가기</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link className="hover:underline" href="/about">
                센터 소개
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/programs">
                교육 프로그램
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/news">
                소식·자료실
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold text-white/90">연락처</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li>
              대표전화{" "}
              <a className="hover:underline" href="tel:0212345678">
                02-1234-5678
              </a>
            </li>
            <li>
              이메일{" "}
              <a className="hover:underline" href="mailto:info@happyguide.example.org">
                info@happyguide.example.org
              </a>
            </li>
            <li>주소 (예시) 서울특별시 어딘가구 배리어프리로 10</li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold text-white/90">접근성 안내</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/80">
            본 웹사이트는 대한민국 웹 접근성 지침(WCAG 2.1 AA)을 준수하기
            위해 노력하고 있습니다. 이용에 불편이 있으시면 위 연락처로
            알려주세요.
          </p>
        </div>
      </Container>

      <div className="border-t border-white/15 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} 행복한길잡이 장애이해교육센터. All
        rights reserved.
      </div>
    </footer>
  );
}
