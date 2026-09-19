"use client";

import { useState } from "react";
import {
  Accessibility,
  Backpack,
  Eye,
  HeartHandshake,
  Presentation,
} from "lucide-react";
import { DraftBadge } from "./draft-badge";

type Level = "elementary" | "middle";

const ZONES: {
  icon: typeof Eye;
  title: string;
  desc: Record<Level, string>;
}[] = [
  {
    icon: Eye,
    title: "시각장애존",
    desc: {
      elementary:
        "안대를 쓰고 짝과 함께 걸어봐요. 놀이처럼 즐기면서 시각장애인의 하루를 느껴봐요.",
      middle:
        "안대를 쓰고 이동과 간단한 과제를 수행해요. 활동 뒤 '보이지 않을 때 가장 필요한 건 무엇일까?'를 함께 생각해봐요.",
    },
  },
  {
    icon: Accessibility,
    title: "지체장애존",
    desc: {
      elementary:
        "휠체어를 직접 타고 놀이하듯 움직여봐요. 계단과 턱이 왜 힘든지 몸으로 느껴요.",
      middle:
        "휠체어로 실제 이동 과제를 수행해요. '우리 학교에서 휠체어로 가기 힘든 곳은 어디일까?'를 생각해봐요.",
    },
  },
  {
    icon: HeartHandshake,
    title: "감각협력존",
    desc: {
      elementary:
        "친구와 손발을 맞추는 협동 놀이를 해요. 함께하면 더 쉬워진다는 걸 몸으로 배워요.",
      middle:
        "제한된 감각으로 친구와 협력해 과제를 해결해요. 협력의 의미를 스스로 정리해보는 시간을 가져요.",
    },
  },
  {
    icon: Presentation,
    title: "전시형존",
    desc: {
      elementary: "그림과 자료로 장애에 대한 궁금증을 쉽게 풀어요.",
      middle: "자료를 보며 장애 관련 용어와 사회적 이슈를 더 깊이 알아봐요.",
    },
  },
];

const DURATION: Record<Level, string> = {
  elementary: "초등학교 1교시 40분 기준",
  middle: "중학교 1교시 45분 기준",
};

export function ProgramZones() {
  const [level, setLevel] = useState<Level>("elementary");

  return (
    <div className="space-y-16">
      {/* 유치원 */}
      <div>
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-primary-tint)] text-[var(--color-primary-hover)]"
          >
            <Backpack size={22} />
          </span>
          <h3 className="text-xl font-bold text-[var(--color-text)]">유치원 프로그램</h3>
          <DraftBadge />
        </div>
        <div className="mt-4 rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] p-7 text-[var(--color-text-muted)]">
          유치원 프로그램 구성은 아직 준비 중입니다. 내용 확인 후 채워
          넣겠습니다.
        </div>
      </div>

      {/* 초·중등 */}
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-xl font-bold text-[var(--color-text)]">
            초·중등 체험 프로그램 (4존)
          </h3>
          <DraftBadge />
        </div>
        <p className="mt-2 text-[var(--color-text-muted)]">
          같은 4개 존을 체험하지만, 학년에 맞게 설명과 활동 난이도가 달라요.
        </p>

        {/* 초등/중등 전환 버튼 */}
        <div
          role="group"
          aria-label="학교급 선택"
          className="mt-6 inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] p-1"
        >
          <button
            type="button"
            aria-pressed={level === "elementary"}
            onClick={() => setLevel("elementary")}
            className="min-h-11 rounded-full px-5 text-sm font-bold text-[var(--color-text-muted)] aria-pressed:bg-[var(--color-primary)] aria-pressed:text-white"
          >
            초등학교로 보기
          </button>
          <button
            type="button"
            aria-pressed={level === "middle"}
            onClick={() => setLevel("middle")}
            className="min-h-11 rounded-full px-5 text-sm font-bold text-[var(--color-text-muted)] aria-pressed:bg-[var(--color-primary)] aria-pressed:text-white"
          >
            중학교로 보기
          </button>
        </div>
        <p className="mt-3 text-sm font-semibold text-[var(--color-primary-hover)]">
          {DURATION[level]}
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ZONES.map((zone) => (
            <div
              key={zone.title}
              className="flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7"
            >
              <div className="flex items-start justify-between gap-2">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary-tint)] text-[var(--color-primary-hover)]"
                >
                  <zone.icon size={24} />
                </span>
              </div>
              <h4 className="mt-5 text-lg font-bold text-[var(--color-text)]">
                {zone.title}
              </h4>
              <p className="mt-3 leading-relaxed text-[var(--color-text-muted)]">
                {zone.desc[level]}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-[var(--color-text-muted)]">
          * 4존 설명과 초/중 난이도 차이는 초안입니다. 실제 진행 내용과
          다르면 알려주세요.
        </p>
      </div>
    </div>
  );
}
