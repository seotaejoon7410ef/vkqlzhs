import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";
import { NAV_ITEMS } from "@/config";

export function SiteFooter() {
  return (
    <footer className="on-dark bg-[#10141c] pb-16 text-white sm:pb-0">
      <Container className="py-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            {/* 안전교육/장애인식개선 체험교육 업종에 어울리는 차분하고
                신뢰감 있는 차콜 네이비 배경. 로고 색은 절대 보정하지
                말고 원본(logo-lockup.png) 그대로 사용 — 배경을 충분히
                어둡게 둬서 대비를 확보. */}
            <Image
              src="/logo-lockup.png"
              alt="행복한길잡이 장애이해교육센터 로고"
              width={236}
              height={92}
              className="h-auto w-40 sm:w-48 lg:w-56"
            />
            <div className="mt-6 space-y-2.5 text-base text-white/70 sm:text-lg lg:text-xl">
              <p>대표 | 서태준</p>
              <p>사업자등록번호 | 549-05-03225</p>
              <p>대표번호 | 031-236-8410</p>
              <p>이메일 | happyguide95@naver.com</p>
              <p>주소 | 경기도 화성시 동탄중심상가1길 36, 8층 801호</p>
            </div>
          </div>

          <div className="flex flex-col gap-7 lg:items-end">
            <nav aria-label="바로가기">
              <ul className="flex flex-wrap gap-x-7 gap-y-3 text-lg font-bold sm:text-xl lg:justify-end lg:text-2xl">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link className="hover:underline" href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-5">
              <a
                href="https://blog.naver.com/happyguide95"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 p-3 transition-colors hover:bg-white/20"
              >
                <Image src="/blog-icon.png" alt="" width={42} height={42} className="h-full w-full object-contain" />
                <span className="sr-only">네이버 블로그</span>
              </a>
              <a
                href="https://open.kakao.com/o/seZ3yqOi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 p-3 transition-colors hover:bg-white/20"
              >
                <Image src="/kakao-icon.png" alt="" width={42} height={42} className="h-full w-full rounded-full object-contain" />
                <span className="sr-only">카카오톡 문의</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex min-h-14 items-center rounded-full bg-[var(--color-accent)] px-8 text-xl font-bold text-[var(--color-secondary)] transition-colors hover:brightness-95"
              >
                문의하기
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-9 text-right text-sm text-white/40 sm:text-base lg:text-lg">
          Copyright © 2026 행복한길잡이. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
