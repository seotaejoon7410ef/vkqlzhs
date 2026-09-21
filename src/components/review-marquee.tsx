import Image from "next/image";

const REVIEW_PHOTOS = [
  { src: "/reviews/yongin-seongji-1.jpg", school: "경기 용인성지초" },
  { src: "/reviews/yongin-seongji-2.jpg", school: "경기 용인성지초" },
  { src: "/reviews/yongin-seongji-3.jpg", school: "경기 용인성지초" },
  { src: "/reviews/yongin-seongji-4.jpg", school: "경기 용인성지초" },
  { src: "/reviews/yongin-seongji-5.jpg", school: "경기 용인성지초" },
  { src: "/reviews/yongin-seongji-6.jpg", school: "경기 용인성지초" },
];

export function ReviewMarquee() {
  const cards = [...REVIEW_PHOTOS, ...REVIEW_PHOTOS];

  return (
    <div className="overflow-hidden py-4" aria-hidden="true">
      <div className="marquee-track flex w-max gap-8 px-6">
        {cards.map((photo, index) => (
          <div
            key={index}
            className="relative h-64 w-96 shrink-0 overflow-hidden rounded-3xl bg-[var(--color-surface-alt)] sm:h-80 sm:w-[28rem] lg:h-96 lg:w-[34rem]"
          >
            <Image
              src={photo.src}
              alt=""
              fill
              sizes="(min-width: 1024px) 34rem, (min-width: 640px) 28rem, 24rem"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-5 py-4">
              <p className="text-sm font-bold text-white">{photo.school}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
