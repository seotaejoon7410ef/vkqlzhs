// 안전체험(유치원) 메뉴/페이지를 한 곳에서 켜고 끕니다.
export const SHOW_KINDERGARTEN = true;

export const NAV_ITEMS = [
  { href: "/about", label: "회사소개" },
  ...(SHOW_KINDERGARTEN ? [{ href: "/kindergarten", label: "안전체험" }] : []),
  { href: "/elementary", label: "장애인식개선체험" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "문의하기" },
];
