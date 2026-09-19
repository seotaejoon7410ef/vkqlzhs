"use client";

import { useState, type FormEvent } from "react";

const CONTACT_EMAIL = "happyguide95@naver.com";

export function InquiryForm() {
  const [category, setCategory] = useState<"유치원" | "초·중등">("초·중등");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const school = String(data.get("school") ?? "");
    const teacher = String(data.get("teacher") ?? "");
    const phone = String(data.get("phone") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `[홈페이지 문의] ${category} - ${school}`;
    const body = [
      `구분: ${category}`,
      `학교(원)명 · 지역: ${school}`,
      `담당 선생님 성함: ${teacher}`,
      `연락처: ${phone}`,
      "",
      "문의 내용:",
      message || "(작성하지 않음)",
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-6" noValidate={false}>
      <fieldset>
        <legend className="text-sm font-bold text-[var(--color-text)]">구분</legend>
        <div className="mt-3 flex gap-3">
          {(["유치원", "초·중등"] as const).map((option) => (
            <label
              key={option}
              className={`flex min-h-11 cursor-pointer items-center gap-2 rounded-full border-2 px-5 text-sm font-bold ${
                category === option
                  ? "border-[var(--color-primary)] bg-[var(--color-primary-tint)] text-[var(--color-primary-hover)]"
                  : "border-[var(--color-border)] text-[var(--color-text-muted)]"
              }`}
            >
              <input
                type="radio"
                name="category"
                value={option}
                checked={category === option}
                onChange={() => setCategory(option)}
                className="h-4 w-4"
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="school" className="text-sm font-bold text-[var(--color-text)]">
            학교(원)명 · 지역
          </label>
          <input
            id="school"
            name="school"
            type="text"
            required
            placeholder="예: OO초등학교 (경기도 수원시)"
            className="mt-2 min-h-12 w-full rounded-xl border-2 border-[var(--color-border)] bg-[var(--color-surface)] px-4 text-base text-[var(--color-text)] focus:border-[var(--color-primary)]"
          />
        </div>
        <div>
          <label htmlFor="teacher" className="text-sm font-bold text-[var(--color-text)]">
            담당 선생님 성함
          </label>
          <input
            id="teacher"
            name="teacher"
            type="text"
            required
            className="mt-2 min-h-12 w-full rounded-xl border-2 border-[var(--color-border)] bg-[var(--color-surface)] px-4 text-base text-[var(--color-text)] focus:border-[var(--color-primary)]"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="text-sm font-bold text-[var(--color-text)]">
          연락처
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="010-0000-0000"
          className="mt-2 min-h-12 w-full max-w-xs rounded-xl border-2 border-[var(--color-border)] bg-[var(--color-surface)] px-4 text-base text-[var(--color-text)] focus:border-[var(--color-primary)]"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-bold text-[var(--color-text)]">
          문의 내용 (선택)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="희망 날짜, 인원, 궁금한 점 등을 자유롭게 남겨주세요."
          className="mt-2 w-full rounded-xl border-2 border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-base text-[var(--color-text)] focus:border-[var(--color-primary)]"
        />
      </div>

      <button
        type="submit"
        className="inline-flex min-h-14 items-center justify-center rounded-full bg-[var(--color-primary)] px-8 text-lg font-bold text-white transition-colors hover:bg-[var(--color-primary-hover)]"
      >
        작성한 내용으로 이메일 보내기
      </button>
      <p className="text-sm text-[var(--color-text-muted)]">
        버튼을 누르면 이메일 앱이 열리고, 위 내용이 자동으로 채워져요.
        확인 후 보내기만 누르시면 됩니다.
      </p>
    </form>
  );
}
