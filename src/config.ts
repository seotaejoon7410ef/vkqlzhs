// 안전체험(유치원) 메뉴/페이지를 한 곳에서 켜고 끕니다.
export const SHOW_KINDERGARTEN = true;

type NavLeaf = { href: string; label: string };
export type NavGroup =
  | NavLeaf
  | { label: string; children: NavLeaf[] };

const ALL_NAV_GROUPS: NavGroup[] = [
  { href: "/about", label: "회사소개" },
  {
    label: "안전체험",
    children: SHOW_KINDERGARTEN
      ? [
          { href: "/kindergarten/traffic", label: "교통안전" },
          { href: "/kindergarten/fire", label: "화재안전" },
          { href: "/kindergarten/first-aid", label: "응급처치" },
          { href: "/kindergarten/water", label: "수상안전" },
        ]
      : [],
  },
  {
    label: "장애인식개선체험",
    children: [
      { href: "/elementary", label: "초등학교" },
      { href: "/middle", label: "중학교" },
    ],
  },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "문의하기" },
];

export function isNavChildren(item: NavGroup): item is { label: string; children: NavLeaf[] } {
  return "children" in item;
}

// 하위 항목이 하나도 없는 대분류(예: 유치원을 꺼둔 안전체험)는 숨김
export const NAV_GROUPS: NavGroup[] = ALL_NAV_GROUPS.filter(
  (item) => !isNavChildren(item) || item.children.length > 0,
);

// 푸터처럼 평평한 목록이 필요한 곳에서 쓰는 전체 링크 목록
export const NAV_ITEMS: NavLeaf[] = NAV_GROUPS.flatMap((item) =>
  isNavChildren(item) ? item.children : [item],
);
