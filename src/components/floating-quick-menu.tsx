import Image from "next/image";
import { Phone } from "lucide-react";

const PHONE_NUMBER = "031-236-8410";
const PHONE_TEL = "tel:0312368410";

const KAKAO_URL = "https://open.kakao.com/o/seZ3yqOi";
// TODO: 실제 네이버 블로그 주소로 교체해주세요 (예: https://blog.naver.com/아이디)
const BLOG_URL = "";

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
        className={`flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl ${bgClass ?? ""} opacity-50`}
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
      className={`flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-105 ${bgClass ?? ""}`}
    >
      {children}
      <span className="sr-only">{label}</span>
    </a>
  );
}

export function FloatingQuickMenu() {
  return (
    <>
      {/* 데스크톱/태블릿: 화면 오른쪽 세로 퀵메뉴 */}
      <div className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 sm:flex">
        <QuickMenuButton
          href={PHONE_TEL}
          label={`전화 문의 ${PHONE_NUMBER}`}
          bgClass="bg-[var(--color-primary)]"
        >
          <Phone aria-hidden="true" size={30} className="text-white" />
        </QuickMenuButton>

        <QuickMenuButton href={KAKAO_URL} label="카카오톡 문의">
          <Image
            src="/kakao-icon.png"
            alt=""
            width={56}
            height={56}
            className="h-14 w-14 object-cover"
          />
        </QuickMenuButton>

        <QuickMenuButton href={BLOG_URL} label="네이버 블로그" bgClass="bg-white border border-[var(--color-border)]">
          <Image
            src="/blog-icon.png"
            alt=""
            width={44}
            height={44}
            className="h-11 w-11 object-contain"
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
