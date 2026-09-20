"use client";

import type { FormEvent } from "react";

const SMS_NUMBER = "01074957410";

const AREAS = ["서울", "경기", "인천", "충남", "충북", "기타 지역(협의)"];

const ELEMENTARY_GRADES = [
  "초등학교 1학년",
  "초등학교 2학년",
  "초등학교 3학년",
  "초등학교 4학년",
  "초등학교 5학년",
  "초등학교 6학년",
];

const MIDDLE_GRADES = ["중학교 1학년", "중학교 2학년", "중학교 3학년"];

const inputClass =
  "mt-2 min-h-12 w-full rounded-xl border-2 border-[var(--color-border)] bg-[var(--color-surface)] px-4 text-base text-[var(--color-text)] focus:border-[var(--color-primary)]";
const labelClass = "text-sm font-bold text-[var(--color-text)]";

export function InquiryForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const area = String(data.get("area") ?? "");
    const school = String(data.get("school") ?? "");
    const grades = data.getAll("grade").map(String).join(", ");
    const classCount = String(data.get("classCount") ?? "");
    const teacher = String(data.get("teacher") ?? "");
    const phone = String(data.get("phone") ?? "");
    const date = String(data.get("date") ?? "");
    const message = String(data.get("message") ?? "");

    const body = [
      "[홈페이지 문의] 프로그램 견적 문의",
      `지역: ${area}`,
      `학교(원) 이름: ${school}`,
      grades ? `학년: ${grades}` : "",
      classCount ? `학급수: ${classCount}` : "",
      `담당 선생님: ${teacher}`,
      `연락처: ${phone}`,
      date ? `희망 수업 일정: ${date}` : "",
      message ? `문의 내용: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    // iOS와 안드로이드는 sms: 링크의 본문 구분자가 서로 달라(iOS: &, 안드로이드: ?) 기기별로 나눠줍니다.
    const isIOS = /iPhone|iPad|iPod/.test(window.navigator.userAgent);
    const separator = isIOS ? "&" : "?";
    window.location.href = `sms:${SMS_NUMBER}${separator}body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-6" noValidate={false}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="area" className={labelClass}>
            지역
          </label>
          <select id="area" name="area" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              지역을 선택해 주세요
            </option>
            {AREAS.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="school" className={labelClass}>
            학교(원) 이름
          </label>
          <input
            id="school"
            name="school"
            type="text"
            required
            placeholder="예: OO초등학교"
            className={inputClass}
          />
        </div>
      </div>

      <fieldset>
        <legend className={labelClass}>
          학년 (여러 학년이 함께하면 모두 선택해 주세요)
        </legend>

        <p className="mt-4 text-xs font-bold text-[var(--color-text-muted)]">초등학교</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {ELEMENTARY_GRADES.map((grade) => (
            <label
              key={grade}
              className="flex min-h-11 cursor-pointer items-center gap-2 rounded-full border-2 border-[var(--color-border)] px-4 text-sm font-bold text-[var(--color-text-muted)] has-[input:checked]:border-[var(--color-primary)] has-[input:checked]:bg-[var(--color-primary-tint)] has-[input:checked]:text-[var(--color-primary-hover)]"
            >
              <input type="checkbox" name="grade" value={grade} className="h-4 w-4" />
              {grade}
            </label>
          ))}
        </div>

        <p className="mt-5 text-xs font-bold text-[var(--color-text-muted)]">중학교</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {MIDDLE_GRADES.map((grade) => (
            <label
              key={grade}
              className="flex min-h-11 cursor-pointer items-center gap-2 rounded-full border-2 border-[var(--color-border)] px-4 text-sm font-bold text-[var(--color-text-muted)] has-[input:checked]:border-[var(--color-primary)] has-[input:checked]:bg-[var(--color-primary-tint)] has-[input:checked]:text-[var(--color-primary-hover)]"
            >
              <input type="checkbox" name="grade" value={grade} className="h-4 w-4" />
              {grade}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="classCount" className={labelClass}>
          학급수
        </label>
        <input
          id="classCount"
          name="classCount"
          type="number"
          min={1}
          placeholder="예: 2"
          className={`${inputClass} sm:max-w-xs`}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="teacher" className={labelClass}>
            담당 선생님 성함
          </label>
          <input id="teacher" name="teacher" type="text" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            연락처
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="010-0000-0000"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="date" className={labelClass}>
          희망 수업 일정 (선택)
        </label>
        <input id="date" name="date" type="date" className={`${inputClass} sm:max-w-xs`} />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          문의 내용 (선택)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="인원, 궁금한 점 등을 자유롭게 남겨주세요."
          className="mt-2 w-full rounded-xl border-2 border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-base text-[var(--color-text)] focus:border-[var(--color-primary)]"
        />
      </div>

      <button
        type="submit"
        className="inline-flex min-h-14 items-center justify-center rounded-full bg-[var(--color-primary)] px-8 text-lg font-bold text-white transition-colors hover:bg-[var(--color-primary-hover)]"
      >
        작성한 내용으로 문자 보내기
      </button>
      <p className="text-sm text-[var(--color-text-muted)]">
        버튼을 누르면 휴대폰 문자 앱이 열리고, 위 내용이 자동으로
        채워져요. 확인 후 보내기만 누르시면 됩니다. (PC로 보고 계시면
        문자 전송이 안 될 수 있어요 — 그럴 땐 전화로 문의해 주세요.)
      </p>
    </form>
  );
}
