import Image from "next/image";
import { Container } from "./container";
import { NAV_ITEMS } from "@/config";

export function SiteFooter() {
  return (
    <footer className="on-dark bg-[var(--color-secondary)] pb-16 text-white sm:pb-0">
      <Container className="flex flex-col gap-10 py-14 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <Image
            src="/logo-lockup.png"
            alt="행복한길잡이 장애이해교육센터 로고"
            width={224}
            height={92}
            className="h-auto w-44"
          />
          <div className="mt-5 space-y-2 text-lg text-white/70">
            <p>대표 | 서태준</p>
            <p>
              대표번호 |{" "}
              <a className="hover:underline" href="tel:0312368410">
                031-236-8410
              </a>
            </p>
            <p>
              이메일 |{" "}
              <a className="hover:underline" href="mailto:happyguide95@naver.com">
                happyguide95@naver.com
              </a>
            </p>
          </div>
          <p className="mt-6 text-base text-white/50">© 행복한길잡이 장애이해교육센터.</p>
        </div>

        <div className="flex flex-col gap-6 lg:items-end">
          <nav aria-label="바로가기">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-lg font-bold lg:justify-end">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a className="hover:underline" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://blog.naver.com/happyguide95"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 p-2.5 transition-colors hover:bg-white/20"
            >
              <Image src="/blog-icon.png" alt="" width={28} height={28} className="h-full w-full object-contain" />
              <span className="sr-only">네이버 블로그</span>
            </a>
            <a
              href="https://open.kakao.com/o/seZ3yqOi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-white/10 p-1.5 transition-colors hover:bg-white/20"
            >
              <Image src="/kakao-icon.png" alt="" width={32} height={32} className="h-full w-full rounded-full object-cover" />
              <span className="sr-only">카카오톡 문의</span>
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-11 items-center rounded-full bg-[var(--color-accent)] px-6 text-base font-bold text-[var(--color-secondary)] transition-colors hover:brightness-95"
            >
              문의하기
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
