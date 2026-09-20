// 유치원 체험 섹션/메뉴를 한 곳에서 켜고 끕니다. 내용 준비되면 true로 바꾸세요.
export const SHOW_KINDERGARTEN = false;

export const NAV_ITEMS = [
  ...(SHOW_KINDERGARTEN ? [{ href: "#kindergarten", label: "유치원 체험" }] : []),
  { href: "#programs", label: "초·중등 체험" },
  { href: "#areas", label: "출강 지역" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "문의하기" },
];
