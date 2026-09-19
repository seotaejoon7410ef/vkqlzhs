"use client";

import { useEffect, useState } from "react";

type FontScale = "normal" | "large" | "xlarge";

const FONT_SCALE_KEY = "hg-font-scale";
const CONTRAST_KEY = "hg-contrast";

export function AccessibilityBar() {
  const [fontScale, setFontScale] = useState<FontScale>("normal");
  const [highContrast, setHighContrast] = useState(false);
  const [mounted, setMounted] = useState(false);

  // 저장된 설정을 불러와 <html>에 반영 (첫 방문 시에는 기본값 사용).
  // localStorage는 서버에 없는 외부 저장소이므로, 마운트 시 1회만 동기화합니다.
  useEffect(() => {
    const savedScale = window.localStorage.getItem(FONT_SCALE_KEY) as FontScale | null;
    const savedContrast = window.localStorage.getItem(CONTRAST_KEY);
    if (savedScale) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- localStorage(외부 저장소) 복원은 마운트 시 1회만 필요
      setFontScale(savedScale);
      document.documentElement.dataset.fontScale = savedScale;
    }
    if (savedContrast === "high") {
      setHighContrast(true);
      document.documentElement.dataset.contrast = "high";
    }
    setMounted(true);
  }, []);

  const applyFontScale = (next: FontScale) => {
    setFontScale(next);
    document.documentElement.dataset.fontScale = next;
    window.localStorage.setItem(FONT_SCALE_KEY, next);
  };

  const increaseFont = () => {
    if (fontScale === "normal") applyFontScale("large");
    else if (fontScale === "large") applyFontScale("xlarge");
  };

  const decreaseFont = () => {
    if (fontScale === "xlarge") applyFontScale("large");
    else if (fontScale === "large") applyFontScale("normal");
  };

  const toggleContrast = () => {
    const next = !highContrast;
    setHighContrast(next);
    if (next) {
      document.documentElement.dataset.contrast = "high";
    } else {
      delete document.documentElement.dataset.contrast;
    }
    window.localStorage.setItem(CONTRAST_KEY, next ? "high" : "normal");
  };

  // 서버 렌더링과 클라이언트 초기 렌더링을 맞추기 위해, 마운트 전에는
  // 버튼 활성 상태 표시를 생략합니다 (버튼 자체는 항상 렌더링).
  const scaleLabel =
    mounted && fontScale === "xlarge"
      ? "가장 큰 글자"
      : mounted && fontScale === "large"
        ? "큰 글자"
        : "기본 글자";

  return (
    <div className="border-b border-[var(--color-border)] bg-[var(--color-secondary)] text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-2 px-5 py-2 text-sm sm:px-8">
        <p className="font-semibold">화면 설정</p>
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 text-white/70">{scaleLabel}</span>
          <button
            type="button"
            onClick={decreaseFont}
            disabled={fontScale === "normal"}
            className="min-h-9 rounded-md border border-white/40 px-3 font-bold disabled:opacity-40"
          >
            <span aria-hidden="true">가-</span>
            <span className="sr-only">글자 작게</span>
          </button>
          <button
            type="button"
            onClick={increaseFont}
            disabled={fontScale === "xlarge"}
            className="min-h-9 rounded-md border border-white/40 px-3 text-base font-bold disabled:opacity-40"
          >
            <span aria-hidden="true">가+</span>
            <span className="sr-only">글자 크게</span>
          </button>
          <button
            type="button"
            onClick={toggleContrast}
            aria-pressed={highContrast}
            className="min-h-9 rounded-md border border-white/40 px-3 font-bold aria-pressed:bg-white aria-pressed:text-[var(--color-secondary)]"
          >
            고대비 모드 {highContrast ? "끄기" : "켜기"}
          </button>
        </div>
      </div>
    </div>
  );
}
