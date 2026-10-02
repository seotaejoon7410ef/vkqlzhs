import Image from "next/image";
import { Camera } from "lucide-react";

// TODO 확인 필요: 새 학교 후기가 생기면 여기에 { id, school, photos, postUrl }
// 형태로 추가하고, 아래 PLACEHOLDER_GRADIENTS에서 하나를 지우세요.
// postUrl은 블로그 첫 화면이 아니라 해당 후기 글의 실제 주소여야 합니다.
type Review = {
  id: string;
  school: string;
  photos: string[];
  postUrl: string;
};

const REVIEWS: Review[] = [
  {
    id: "yongin-seongji",
    school: "경기도 용인 OO초",
    photos: [
      "/reviews/yongin-seongji-1.jpg",
      "/reviews/yongin-seongji-2.jpg",
      "/reviews/yongin-seongji-3.jpg",
      "/reviews/yongin-seongji-4.jpg",
      "/reviews/yongin-seongji-5.jpg",
      "/reviews/yongin-seongji-6.jpg",
    ],
    postUrl: "https://blog.naver.com/happyguide95/224314050461",
  },
  {
    id: "gwangjin-oo",
    school: "서울 광진구 OO초",
    photos: [
      "/reviews/gwangjin-oo-1.jpg",
      "/reviews/gwangjin-oo-2.jpg",
      "/reviews/gwangjin-oo-3.jpg",
      "/reviews/gwangjin-oo-4.jpg",
      "/reviews/gwangjin-oo-5.jpg",
      "/reviews/gwangjin-oo-6.jpg",
    ],
    postUrl: "https://blog.naver.com/happyguide95/224428336191",
  },
];

// 아직 후기가 없는 자리는 실제 후기 사진이 없을 때 쓰던 것과 같은
// placeholder 카드로 채워, 1개짜리 후기가 그대로 복제된 것처럼
// 보이지 않고 자연스럽게 여러 장이 흘러가는 느낌을 줍니다.
const PLACEHOLDER_GRADIENTS = [
  "from-[var(--color-primary-tint)] to-[var(--color-secondary-tint)]",
  "from-[var(--color-secondary-tint)] to-[var(--color-primary-tint)]",
  "from-[var(--color-primary-tint)] via-white to-[var(--color-secondary-tint)]",
  "from-[var(--color-secondary-tint)] via-white to-[var(--color-primary-tint)]",
];

function gridColsClass(count: number) {
  if (count <= 1) return "grid-cols-1";
  if (count <= 4) return "grid-cols-2";
  return "grid-cols-3";
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <a
      href={review.postUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${review.school} 후기, 블로그에서 더 보기`}
      className="relative block h-64 w-96 shrink-0 overflow-hidden rounded-3xl bg-[var(--color-surface-alt)] shadow-sm transition-opacity hover:opacity-90 sm:h-80 sm:w-[28rem] lg:h-96 lg:w-[34rem]"
    >
      <div className={`grid h-full gap-1 ${gridColsClass(review.photos.length)}`}>
        {review.photos.map((src, index) => (
          <div key={index} className="relative">
            <Image
              src={src}
              alt=""
              fill
              sizes="(min-width: 1024px) 17rem, (min-width: 640px) 14rem, 12rem"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-5 pb-4 pt-10"
      >
        <p className="text-base font-bold text-white sm:text-lg">{review.school}</p>
      </div>
    </a>
  );
}

function PlaceholderCard({ gradient, label }: { gradient: string; label: string }) {
  return (
    <div
      aria-hidden="true"
      className={`flex h-64 w-96 shrink-0 flex-col items-center justify-center gap-3 rounded-3xl bg-gradient-to-br ${gradient} text-[var(--color-primary-hover)] sm:h-80 sm:w-[28rem] lg:h-96 lg:w-[34rem]`}
    >
      <Camera size={40} />
      <p className="text-lg font-bold">{label}</p>
    </div>
  );
}

export function ReviewMarquee() {
  const items = [
    ...REVIEWS.map((review) => ({ kind: "review" as const, review })),
    ...PLACEHOLDER_GRADIENTS.map((gradient, index) => ({
      kind: "placeholder" as const,
      gradient,
      label: `후기 사진 추가 예정 ${index + 1}`,
    })),
  ];
  const cards = [...items, ...items];

  return (
    <div className="overflow-hidden py-4">
      <div className="marquee-track flex w-max gap-8 px-6">
        {cards.map((item, index) =>
          item.kind === "review" ? (
            <ReviewCard key={`review-${item.review.id}-${index}`} review={item.review} />
          ) : (
            <PlaceholderCard key={`placeholder-${index}`} gradient={item.gradient} label={item.label} />
          ),
        )}
      </div>
    </div>
  );
}
