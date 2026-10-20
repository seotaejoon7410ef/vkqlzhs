"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "./container";

// 숫자가 바뀌면 이 배열만 수정하면 됩니다.
export const SITE_STATS = [
  { value: 10, unit: "개교", label: "함께한 학교" },
  { value: 2300, unit: "명+", label: "누적 참여 학생" },
  { value: 4, unit: "개", label: "체험 존" },
  { value: 5, unit: "개 지역", label: "서울·경기·인천·충남·충북" },
] as const;

const STATS_AS_OF = "2026년 10월 기준";

// 화면에 들어온 뒤(active=true) 0부터 목표값까지 한 번만 올라가는 카운트업
function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
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
  }, [active, target, duration]);

  return value;
}

function StatItem({ stat, active }: { stat: (typeof SITE_STATS)[number]; active: boolean }) {
  const count = useCountUp(stat.value, active);

  return (
    <div className="text-center">
      <p className="text-4xl font-black text-[var(--color-primary)] sm:text-5xl">
        {count.toLocaleString("ko-KR")}
        <span className="ml-0.5 text-2xl font-black sm:text-3xl">{stat.unit}</span>
      </p>
      <p className="mt-2 text-sm font-bold text-[var(--color-text-muted)] sm:text-base">
        {stat.label}
      </p>
    </div>
  );
}

export function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

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
    <section ref={ref} className="bg-[var(--color-surface)] py-14 sm:py-16">
      <Container>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 sm:gap-6">
          {SITE_STATS.map((stat) => (
            <StatItem key={stat.label} stat={stat} active={active} />
          ))}
        </div>
        <p className="mt-8 text-right text-xs text-[var(--color-text-muted)]">
          {STATS_AS_OF}
        </p>
      </Container>
    </section>
  );
}
