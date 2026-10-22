"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "./container";

// 숫자가 바뀌면 이 값만 수정하면 됩니다.
const PARTICIPANT_COUNT = 2300;

// 화면에 들어온 뒤(active=true) 0부터 목표값까지 한 번만 올라가는 카운트업.
// prefers-reduced-motion이면 애니메이션 없이 바로 최종값을 보여줍니다.
function useCountUp(target: number, active: boolean, duration = 1800) {
  const [reducedMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active || reducedMotion) return;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, reducedMotion, target, duration]);

  if (active && reducedMotion) return target;
  return value;
}

export function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);
  const count = useCountUp(PARTICIPANT_COUNT, active);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-[var(--color-surface)] py-[60px] sm:py-24">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <p className="text-base font-bold text-[var(--color-text-muted)] sm:text-lg">
            시선을잇다와 함께한 장애 공감의 시간
          </p>
          <p className="mt-4 whitespace-nowrap text-[clamp(52px,14vw,60px)] font-black leading-none text-[#5B2C83] sm:mt-6 sm:text-[clamp(72px,8vw,88px)]">
            {count.toLocaleString("ko-KR")}명+
          </p>
          <div aria-hidden="true" className="mx-auto mt-5 h-[2px] w-10 bg-[#5B2C83] sm:mt-7" />
          <p className="mt-5 text-base font-bold text-[var(--color-text)] sm:mt-6 sm:text-lg">
            누적 교육 참여 학생
          </p>
          <p className="mt-2 text-sm text-[var(--color-text-muted)] sm:text-base">
            체험을 통해 이해하고, 공감으로 이어갑니다.
          </p>
        </div>
      </Container>
    </section>
  );
}
