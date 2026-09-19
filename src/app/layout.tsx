import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import { AccessibilityBar } from "@/components/accessibility-bar";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SkipLink } from "@/components/skip-link";
import { FloatingCallButton } from "@/components/floating-call-button";
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
    default: "행복한길잡이 | 초등학교 찾아가는 장애 인식 개선 체험교육",
    template: "%s | 행복한길잡이",
  },
  description:
    "행복한길잡이는 초등학교로 직접 찾아가 장애 인식 개선 체험교육을 진행합니다. 시각장애존, 지체장애존, 감각협력존, 전시형존 4개 프로그램을 운영합니다.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <SkipLink />
        <AccessibilityBar />
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <FloatingCallButton />
      </body>
    </html>
  );
}
