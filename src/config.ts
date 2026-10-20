// 안전체험(유치원) 메뉴/페이지를 한 곳에서 켜고 끕니다.
export const SHOW_KINDERGARTEN = false;
// 중학교 메뉴를 한 곳에서 켜고 끕니다. 페이지 자체는 남겨두고 메뉴에서만 숨깁니다.
export const SHOW_MIDDLE = false;

type NavLeaf = { href: string; label: string };
export type NavGroup =
  | NavLeaf
  | { label: string; children: NavLeaf[] };

const ALL_NAV_GROUPS: NavGroup[] = [
  { href: "/about", label: "회사소개" },
  {
    label: "유치원 안전체험",
    children: SHOW_KINDERGARTEN
      ? [
          { href: "/kindergarten/traffic", label: "교통안전" },
          { href: "/kindergarten/fire", label: "화재안전" },
          { href: "/kindergarten/first-aid", label: "응급처치" },
          { href: "/kindergarten/water", label: "수상안전" },
        ]
      : [],
  },
  // 중학교가 다시 열릴 때까지는 "장애인식개선 체험교육"을 드롭다운 없이
  // 초등학교 페이지로 바로 연결되는 단일 메뉴로 둡니다. SHOW_MIDDLE을 다시
  // true로 켜면 초등학교/중학교 하위 메뉴로 자동 분리됩니다.
  ...(SHOW_MIDDLE
    ? [
        {
          label: "장애인식개선 체험교육",
          children: [
            { href: "/elementary", label: "초등학교" },
            { href: "/middle", label: "중학교" },
          ],
        },
      ]
    : [{ href: "/elementary", label: "장애인식개선 체험교육" }]),
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "체험문의" },
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
