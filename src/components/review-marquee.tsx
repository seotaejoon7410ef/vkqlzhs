import Image from "next/image";

const BLOG_URL = "https://blog.naver.com/happyguide95";

// 아래 6장은 모두 같은 후기(경기도 용인 OO초) 사진이라 카드 하나로 묶습니다.
const REVIEW_PHOTOS = [
  "/reviews/yongin-seongji-1.jpg",
  "/reviews/yongin-seongji-2.jpg",
  "/reviews/yongin-seongji-3.jpg",
  "/reviews/yongin-seongji-4.jpg",
  "/reviews/yongin-seongji-5.jpg",
  "/reviews/yongin-seongji-6.jpg",
];

export function ReviewMarquee() {
  return (
    <a
      href={BLOG_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="경기도 용인 OO초 후기, 블로그에서 더 보기"
      className="relative mx-auto block max-w-2xl overflow-hidden rounded-3xl bg-[var(--color-surface-alt)] shadow-sm transition-opacity hover:opacity-90"
    >
      <div className="grid grid-cols-2 gap-1 sm:grid-cols-3">
        {REVIEW_PHOTOS.map((src, index) => (
          <div key={index} className="relative aspect-square">
            <Image
              src={src}
              alt=""
              fill
              sizes="(min-width: 640px) 22rem, 50vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-5 pb-4 pt-10"
      >
        <p className="text-base font-bold text-white sm:text-lg">경기도 용인 OO초</p>
      </div>
    </a>
  );
}
