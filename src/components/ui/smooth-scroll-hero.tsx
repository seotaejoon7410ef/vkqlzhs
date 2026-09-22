"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";

// 스크롤한 만큼 사진의 클립(보이는 영역)이 initial → final 비율로
// 서서히 커지는 히어로. clipPercentage는 "사진이 몇 %나 드러나
// 보이는지"를 뜻해서, 값이 커질수록 액자(clip-path inset) 여백이
// 좁아지며 사진이 더 크게 보입니다. 래퍼를 scrollHeight만큼 길게
// 만들고 안쪽을 sticky로 고정해, 그 구간을 스크롤하는 동안만
// 클립 비율이 바뀌도록 구현했습니다(라이브러리 추가 없이 순수
// scroll 이벤트 + requestAnimationFrame).
export function SmoothScrollHero({
  scrollHeight = 1500,
  desktopImage,
  mobileImage,
  initialClipPercentage = 25,
  finalClipPercentage = 75,
  children,
}: {
  scrollHeight?: number;
  desktopImage: string;
  mobileImage: string;
  initialClipPercentage?: number;
  finalClipPercentage?: number;
  children?: ReactNode;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [visiblePercent, setVisiblePercent] = useState(initialClipPercentage);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const el = wrapperRef.current;
      if (!el) return;
      const scrollableRange = el.offsetHeight - window.innerHeight;
      const progress =
        scrollableRange > 0
          ? Math.min(1, Math.max(0, -el.getBoundingClientRect().top / scrollableRange))
          : 0;
      setVisiblePercent(
        initialClipPercentage + (finalClipPercentage - initialClipPercentage) * progress,
      );
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [initialClipPercentage, finalClipPercentage]);

  const inset = (100 - visiblePercent) / 2;

  return (
    <div ref={wrapperRef} style={{ height: `${scrollHeight}px` }} className="relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(${inset}% ${inset}% ${inset}% ${inset}% round 28px)` }}
        >
          <Image
            src={desktopImage}
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="hidden object-cover object-center sm:block"
          />
          <Image
            src={mobileImage}
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right sm:hidden"
          />
        </div>
        {children}
      </div>
    </div>
  );
}
