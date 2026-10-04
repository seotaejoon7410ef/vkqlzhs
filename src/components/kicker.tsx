import type { ReactNode } from "react";

type KickerColor = "primary" | "accent" | "accent-strong";

const COLOR_CLASSES: Record<KickerColor, { text: string; bar: string }> = {
  primary: {
    text: "text-[var(--color-primary-hover)]",
    bar: "bg-[var(--color-primary)]",
  },
  // 사진 위에 얹히는 용도라 사진이 밝을 때도 잘 읽히도록 그림자를 둡니다.
  accent: {
    text: "text-[var(--color-accent)] [text-shadow:0_1px_10px_rgb(0_0_0_/_60%)]",
    bar: "bg-[var(--color-accent)] shadow-[0_1px_6px_rgb(0_0_0_/_50%)]",
  },
  "accent-strong": {
    text: "text-[var(--color-accent-strong)]",
    bar: "bg-[var(--color-accent-strong)]",
  },
};

// 섹션 상단 라벨 공통 컴포넌트. 라벨 앞에 짧은 포인트 바를 붙여
// 페이지마다 제각각이던 "작은 라벨 + 큰 제목" 시작부를 하나의
// 시그니처 패턴으로 통일합니다.
export function Kicker({
  children,
  color = "primary",
  large = false,
}: {
  children: ReactNode;
  color?: KickerColor;
  large?: boolean;
}) {
  const { text, bar } = COLOR_CLASSES[color];
  // accent는 사진 위에 얹히는 용도라, 사진 속 색(노란 배너 등)과 겹치면
  // 그림자만으로는 부족해서 어두운 반투명 칩 배경을 함께 둡니다.
  const chip = color === "accent" ? "rounded-full bg-black/45 px-3 py-1.5" : "";

  return (
    <p
      className={`inline-flex items-center gap-2 font-bold tracking-[0.2em] ${large ? "text-lg sm:text-xl" : "text-sm"} ${text} ${chip}`}
    >
      <span aria-hidden="true" className={`h-[3px] w-8 rounded-full ${bar}`} />
      {children}
    </p>
  );
}
