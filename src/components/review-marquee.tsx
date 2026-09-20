import { Camera } from "lucide-react";

// TODO 확인 필요: 실제 후기 사진이 오면 아래 placeholder 카드를
// 실제 사진(Image, alt 포함)으로 교체하세요. 지금은 실제 후기 사진이
// 없어 자리만 표시하는 임시 카드입니다.
const PLACEHOLDER_CARDS = [
  "from-[var(--color-primary-tint)] to-[var(--color-secondary-tint)]",
  "from-[var(--color-secondary-tint)] to-[var(--color-primary-tint)]",
  "from-[var(--color-primary-tint)] via-white to-[var(--color-secondary-tint)]",
  "from-[var(--color-secondary-tint)] via-white to-[var(--color-primary-tint)]",
  "from-[var(--color-primary-tint)] to-[var(--color-secondary-tint)]",
  "from-[var(--color-secondary-tint)] to-[var(--color-primary-tint)]",
];

export function ReviewMarquee() {
  const cards = [...PLACEHOLDER_CARDS, ...PLACEHOLDER_CARDS];

  return (
    <div className="overflow-hidden py-4" aria-hidden="true">
      <div className="marquee-track flex w-max gap-8 px-6">
        {cards.map((gradient, index) => (
          <div
            key={index}
            className={`flex h-64 w-96 shrink-0 flex-col items-center justify-center gap-3 rounded-3xl bg-gradient-to-br ${gradient} text-[var(--color-primary-hover)] sm:h-80 sm:w-[28rem] lg:h-96 lg:w-[34rem]`}
          >
            <Camera size={40} />
            <p className="text-lg font-bold">
              후기 사진 추가 예정 {(index % PLACEHOLDER_CARDS.length) + 1}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
