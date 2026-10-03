import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";
import { NAV_ITEMS } from "@/config";

export function SiteFooter() {
  return (
    <footer className="on-dark bg-[#10141c] pb-16 text-white sm:pb-0">
      <Container className="py-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
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
              className="h-auto w-40"
            />
            <div className="mt-3 space-y-1 text-sm text-white/70">
              <p>대표 | 서태준</p>
              <p>사업자등록번호 | 549-05-03225</p>
              <p>대표번호 | 031-236-8410</p>
              <p>이메일 | happyguide95@naver.com</p>
              <p>주소 | 경기도 화성시 동탄중심상가1길 36, 8층 801호</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:items-end">
            <nav aria-label="바로가기">
              <ul className="flex flex-wrap gap-x-5 gap-y-2 text-base font-bold lg:justify-end">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link className="hover:underline" href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="https://blog.naver.com/happyguide95"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
              >
                <Image src="/blog-icon.png" alt="" width={28} height={28} className="h-full w-full object-contain" />
                <span className="sr-only">네이버 블로그</span>
              </a>
              <a
                href="https://open.kakao.com/o/seZ3yqOi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
              >
                <Image src="/kakao-icon.png" alt="" width={28} height={28} className="h-full w-full rounded-full object-contain" />
                <span className="sr-only">카카오톡 문의</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex min-h-10 items-center rounded-full bg-[var(--color-accent)] px-5 text-sm font-bold text-[var(--color-secondary)] transition-colors hover:brightness-95"
              >
                문의하기
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-6 text-right text-xs text-white/40">
          © 체험교육센터 행복한길잡이. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
