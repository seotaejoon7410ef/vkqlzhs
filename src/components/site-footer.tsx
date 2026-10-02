import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";
import { NAV_ITEMS } from "@/config";

export function SiteFooter() {
  return (
    <footer className="on-dark bg-[#0a0712] pb-16 text-white sm:pb-0">
      <Container className="flex flex-col gap-10 py-14 lg:flex-row lg:items-start lg:justify-between">
        <div>
          {/* 로고 색은 원래 브랜드 보라(logo-lockup.png) 그대로 유지하고
              싶다는 요청. 로고 보라 자체가 명도가 낮아(연산상 검정
              배경에서도 대비 한계가 약 2.4:1) 배경을 바꾸는 것만으로는
              완벽한 대비를 낼 수 없지만, 배경을 거의 무채색에 가까운
              검정으로 최대한 밀어 대비를 최대화함. */}
          <Image
            src="/logo-lockup.png"
            alt="행복한길잡이 장애이해교육센터 로고"
            width={236}
            height={92}
            className="h-auto w-52"
          />
          <div className="mt-5 space-y-2 text-lg text-white/70">
            <p>대표 | 서태준</p>
            <p>사업자등록번호 | 549-05-03225</p>
            <p>대표번호 | 031-236-8410</p>
            <p>주소 | 경기도 화성시 동탄중심상가1길 36, 8층 801호</p>
          </div>
          <p className="mt-6 text-base text-white/50">© 행복한길잡이 체험교육센터.</p>
        </div>

        <div className="flex flex-col gap-6 lg:items-end">
          <nav aria-label="바로가기">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-lg font-bold lg:justify-end">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link className="hover:underline" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://blog.naver.com/happyguide95"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 p-3 transition-colors hover:bg-white/20"
            >
              <Image src="/blog-icon.png" alt="" width={40} height={40} className="h-full w-full object-contain" />
              <span className="sr-only">네이버 블로그</span>
            </a>
            <a
              href="https://open.kakao.com/o/seZ3yqOi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 p-3 transition-colors hover:bg-white/20"
            >
              <Image src="/kakao-icon.png" alt="" width={40} height={40} className="h-full w-full rounded-full object-contain" />
              <span className="sr-only">카카오톡 문의</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex min-h-14 items-center rounded-full bg-[var(--color-accent)] px-7 text-lg font-bold text-[var(--color-secondary)] transition-colors hover:brightness-95"
            >
              문의하기
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
