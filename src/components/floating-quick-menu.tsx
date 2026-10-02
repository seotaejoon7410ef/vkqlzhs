import Image from "next/image";
import { Phone } from "lucide-react";

const PHONE_NUMBER = "031-236-8410";
const PHONE_TEL = "tel:0312368410";

const KAKAO_URL = "https://open.kakao.com/o/seZ3yqOi";
const BLOG_URL = "https://blog.naver.com/happyguide95";

function QuickMenuButton({
  href,
  label,
  bgClass,
  children,
}: {
  href: string;
  label: string;
  bgClass?: string;
  children: React.ReactNode;
}) {
  const pending = href === "";

  if (pending) {
    return (
      <span
        aria-disabled="true"
        title={`${label} 링크 준비 중`}
        className={`flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl sm:h-14 sm:w-14 ${bgClass ?? ""} opacity-50`}
      >
        {children}
        <span className="sr-only">{label} (링크 준비 중)</span>
      </span>
    );
  }

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-105 sm:h-14 sm:w-14 ${bgClass ?? ""}`}
    >
      {children}
      <span className="sr-only">{label}</span>
    </a>
  );
}

export function FloatingQuickMenu() {
  return (
    <>
      {/* 화면 오른쪽 세로 퀵메뉴 (전화 버튼은 PC에서는 숨기고 모바일·태블릿에만 표시) */}
      <div className="fixed right-3 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-2 sm:right-6 sm:gap-3">
        <div className="lg:hidden">
          <QuickMenuButton
            href={PHONE_TEL}
            label={`전화 문의 ${PHONE_NUMBER}`}
            bgClass="bg-[var(--color-primary)]"
          >
            <Phone aria-hidden="true" size={26} className="text-white sm:hidden" />
            <Phone aria-hidden="true" size={30} className="hidden text-white sm:block" />
          </QuickMenuButton>
        </div>

        <QuickMenuButton href={KAKAO_URL} label="카카오톡 문의" bgClass="bg-[#FEE500]">
          <Image
            src="/kakao-icon.png"
            alt=""
            width={56}
            height={56}
            className="h-12 w-12 object-cover sm:h-14 sm:w-14"
          />
        </QuickMenuButton>

        <QuickMenuButton href={BLOG_URL} label="네이버 블로그" bgClass="bg-white border border-[var(--color-border)]">
          <Image
            src="/blog-icon.png"
            alt=""
            width={44}
            height={44}
            className="h-9 w-9 object-contain sm:h-11 sm:w-11"
          />
        </QuickMenuButton>
      </div>

      {/* 모바일: 화면 하단 고정 전화 바 (항상 눈에 띄게) */}
      <a
        href={PHONE_TEL}
        className="fixed inset-x-0 bottom-0 z-40 flex min-h-14 items-center justify-center gap-2 bg-[var(--color-primary)] text-base font-bold text-white sm:hidden"
      >
        <Phone aria-hidden="true" size={20} />
        전화로 바로 문의하기 {PHONE_NUMBER}
      </a>
    </>
  );
}
