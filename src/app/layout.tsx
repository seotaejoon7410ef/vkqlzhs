import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingQuickMenu } from "@/components/floating-quick-menu";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  // 800(extrabold)을 빼먹으면 브라우저가 700을 가짜로 두껍게 합성해서
  // 특히 한글에서 뭉개져 보입니다. 실제 800 굵기 폰트 파일을 로드합니다.
  weight: ["400", "500", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "행복한길잡이 | 유치원·초중학교 찾아가는 장애 인식 개선 체험교육",
    template: "%s | 행복한길잡이",
  },
  description:
    "행복한길잡이는 유치원, 초등학교, 중학교로 직접 찾아가 장애 인식 개선 체험교육을 진행합니다. 시각장애존, 지체장애존, 감각협력존, 퀴즈형존 4개 프로그램을 운영합니다.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${notoSansKr.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {/* 자바스크립트가 꺼져 있으면 Reveal 애니메이션 클래스가 절대 안 붙으므로,
            콘텐츠가 숨겨진 채로 남지 않도록 강제로 보이게 처리 */}
        <noscript>
          <style>{".reveal{opacity:1 !important;transform:none !important;}"}</style>
        </noscript>
        <SiteHeader />
        {/* lg 미만에서는 헤더 아래 항상 보이는 메뉴 줄이 추가돼 고정 헤더가
            더 높아졌으므로(메인 줄 96px + 메뉴 줄 약 64px, 약 160px),
            그만큼 본문 콘텐츠를 아래로 밀어 헤더에 가려지지 않게 합니다.
            lg 이상은 헤더가 얇고(96px) 히어로 사진 위에 투명하게 겹치는
            연출이 있어 그대로 둡니다. */}
        <main id="main-content" className="flex-1 pt-40 lg:pt-0">
          {children}
        </main>
        <SiteFooter />
        <FloatingQuickMenu />
      </body>
    </html>
  );
}
