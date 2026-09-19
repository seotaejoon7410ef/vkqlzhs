import { Phone } from "lucide-react";

const PHONE_NUMBER = "031-236-8410";
const PHONE_TEL = "tel:0312368410";

export function FloatingCallButton() {
  return (
    <>
      {/* 데스크톱: 화면 우하단 고정 버튼 */}
      <a
        href={PHONE_TEL}
        className="fixed bottom-6 right-6 z-40 hidden min-h-14 items-center gap-2 rounded-full bg-[var(--color-primary)] px-6 text-base font-bold text-white shadow-lg transition-colors hover:bg-[var(--color-primary-hover)] sm:inline-flex"
      >
        <Phone aria-hidden="true" size={20} />
        전화 문의 {PHONE_NUMBER}
      </a>

      {/* 모바일: 화면 하단 고정 바 (항상 눈에 띄게) */}
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
