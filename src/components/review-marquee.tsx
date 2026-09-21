import Image from "next/image";

const BLOG_URL = "https://blog.naver.com/happyguide95";

// 아래 6장은 모두 같은 후기(경기도 용인 OO초) 사진입니다.
const REVIEW_PHOTOS = [
  "/reviews/yongin-seongji-1.jpg",
  "/reviews/yongin-seongji-2.jpg",
  "/reviews/yongin-seongji-3.jpg",
  "/reviews/yongin-seongji-4.jpg",
  "/reviews/yongin-seongji-5.jpg",
  "/reviews/yongin-seongji-6.jpg",
];

export function ReviewMarquee() {
  const photos = [...REVIEW_PHOTOS, ...REVIEW_PHOTOS];

  return (
    <div className="overflow-hidden py-4">
      <div className="marquee-track flex w-max gap-8 px-6">
        {photos.map((src, index) => (
          <a
            key={index}
            href={BLOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="블로그에서 후기 더 보기"
            className="relative block h-64 w-96 shrink-0 overflow-hidden rounded-3xl bg-[var(--color-surface-alt)] transition-opacity hover:opacity-90 sm:h-80 sm:w-[28rem] lg:h-96 lg:w-[34rem]"
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="(min-width: 1024px) 34rem, (min-width: 640px) 28rem, 24rem"
              className="object-cover"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
