import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";
import { NAV_ITEMS } from "@/config";

export function SiteFooter() {
  return (
    <footer className="on-dark mt-[113px] bg-[#10141c] pb-16 text-white sm:pb-0">
      <Container className="py-14">
        {/* 1행: 로고와 메뉴를 같은 높이로 정렬 */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          {/* 안전교육/장애인식개선 체험교육 업종에 어울리는 차분하고
              신뢰감 있는 차콜 네이비 배경. 로고 색은 절대 보정하지
              말고 원본(logo-lockup.png) 그대로 사용 — 배경을 충분히
              어둡게 둬서 대비를 확보. */}
          <Image
            src="/logo-lockup.png"
            alt="행복한길잡이 장애이해교육센터 로고"
            width={236}
            height={92}
            className="h-auto w-36 sm:w-44 lg:w-48"
          />

          <nav aria-label="바로가기">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-lg font-bold lg:justify-end lg:text-xl">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link className="hover:underline" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* 2행: 연락처 정보와 소셜 아이콘+문의 버튼 */}
        <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-2 text-base text-white/70 lg:text-lg">
            <p>대표 | 서태준</p>
            <p>사업자등록번호 | 549-05-03225</p>
            <p>대표번호 | 031-236-8410</p>
            <p>이메일 | happyguide95@naver.com</p>
            <p>주소 | 경기도 화성시 동탄중심상가1길 36, 8층 801호</p>
          </div>

          <div className="flex items-center gap-4">
            {/* 어두운 배경에서 반투명(white/10) 아이콘 배경이 거의 안 보인다는
                피드백 — 플로팅 퀵메뉴와 같은 방식(브랜드 색 배경)으로 통일 */}
            <a
              href="https://blog.naver.com/happyguide95"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-lg transition-transform hover:scale-105"
            >
              <Image src="/blog-icon.png" alt="" width={44} height={44} className="h-9 w-9 object-contain" />
              <span className="sr-only">네이버 블로그</span>
            </a>
            <a
              href="https://open.kakao.com/o/seZ3yqOi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-[#FEE500] shadow-lg transition-transform hover:scale-105"
            >
              <Image src="/kakao-icon.png" alt="" width={56} height={56} className="h-12 w-12 object-cover" />
              <span className="sr-only">카카오톡 문의</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center rounded-full bg-[var(--color-accent)] px-7 text-lg font-bold text-[var(--color-secondary)] transition-colors hover:brightness-95"
            >
              문의하기
            </Link>
          </div>
        </div>

        <p className="mt-8 text-left text-sm text-white/40 lg:text-right lg:text-base">
          Copyright © 2026 행복한길잡이. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
