import Image from "next/image";
import Link from "next/link";
import { Building2, Mail, MapPin, Phone, User } from "lucide-react";
import { Container } from "./container";
import { NAV_ITEMS } from "@/config";

export function SiteFooter() {
  return (
    <footer className="on-dark bg-[#10141c] pb-16 text-white sm:pb-0">
      <Container className="flex flex-col gap-10 py-14 lg:grid lg:grid-cols-[1.3fr_0.8fr_0.9fr] lg:items-start lg:gap-8">
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
            className="h-auto w-52"
          />
          <div className="mt-6 space-y-3 text-base text-white/70">
            <p className="flex items-center gap-2.5">
              <User aria-hidden="true" size={17} className="shrink-0 text-white/40" />
              대표 서태준
            </p>
            <p className="flex items-center gap-2.5">
              <Building2 aria-hidden="true" size={17} className="shrink-0 text-white/40" />
              사업자등록번호 549-05-03225
            </p>
            <p className="flex items-center gap-2.5">
              <Phone aria-hidden="true" size={17} className="shrink-0 text-white/40" />
              031-236-8410
            </p>
            <p className="flex items-center gap-2.5">
              <Mail aria-hidden="true" size={17} className="shrink-0 text-white/40" />
              happyguide95@naver.com
            </p>
            <p className="flex items-start gap-2.5">
              <MapPin aria-hidden="true" size={17} className="mt-0.5 shrink-0 text-white/40" />
              경기도 화성시 동탄중심상가1길 36, 8층 801호
            </p>
          </div>
          <p className="mt-6 text-sm text-white/40">© 체험교육센터 행복한길잡이.</p>
        </div>

        <nav aria-label="바로가기">
          <p className="text-sm font-bold tracking-wide text-white/40">바로가기</p>
          <ul className="mt-4 flex flex-col gap-3 text-lg font-bold">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link className="hover:underline" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-6 lg:items-end">
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
