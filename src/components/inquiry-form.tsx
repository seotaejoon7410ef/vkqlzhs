"use client";

import { useState, type FormEvent } from "react";

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

type SubmitState = "idle" | "sending" | "success" | "error";

export function InquiryForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      area: String(data.get("area") ?? ""),
      school: String(data.get("school") ?? ""),
      grades: data.getAll("grade").map(String).join(", "),
      classCount: String(data.get("classCount") ?? ""),
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      email: String(data.get("email") ?? ""),
      date: String(data.get("date") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    setState("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const result = await res.json().catch(() => null);
        setErrorMessage(result?.error ?? "전송에 실패했어요. 잠시 후 다시 시도해 주세요.");
        setState("error");
        return;
      }

      setState("success");
      form.reset();
    } catch {
      setErrorMessage("전송에 실패했어요. 잠시 후 다시 시도해 주세요.");
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="mt-10 rounded-2xl border-2 border-[var(--color-primary)] bg-[var(--color-primary-tint)] p-8 text-center">
        <p className="text-lg font-bold text-[var(--color-primary-hover)]">
          문의가 접수됐어요!
        </p>
        <p className="mt-2 text-[var(--color-text-muted)]">
          남겨주신 연락처로 담당자가 확인 후 연락드릴게요.
        </p>
      </div>
    );
  }

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
          <label htmlFor="name" className={labelClass}>
            담당 선생님 성함
          </label>
          <input id="name" name="name" type="text" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            휴대폰 번호
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
        <label htmlFor="email" className={labelClass}>
          이메일
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="example@school.go.kr"
          className={`${inputClass} sm:max-w-xs`}
        />
      </div>

      <div>
        <label htmlFor="date" className={labelClass}>
          희망 수업 일정 (선택)
        </label>
        <input id="date" name="date" type="date" className={`${inputClass} sm:max-w-xs`} />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          요청 및 문의사항 (선택)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="인원, 궁금한 점 등을 자유롭게 남겨주세요."
          className="mt-2 w-full rounded-xl border-2 border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-base text-[var(--color-text)] focus:border-[var(--color-primary)]"
        />
      </div>

      <label className="flex cursor-pointer items-start gap-2 text-sm text-[var(--color-text-muted)]">
        <input type="checkbox" required className="mt-1 h-4 w-4 shrink-0" />
        입력하신 정보는 문의 답변 목적으로만 사용되며, 별도로 저장하지 않고
        담당자 이메일로 바로 전달됩니다. 이에 동의합니다. (필수)
      </label>

      <div>
        <button
          type="submit"
          disabled={state === "sending"}
          className="inline-flex min-h-14 items-center justify-center rounded-full bg-[var(--color-primary)] px-8 text-lg font-bold text-white transition-colors hover:bg-[var(--color-primary-hover)] disabled:opacity-60"
        >
          {state === "sending" ? "보내는 중..." : "문의 보내기"}
        </button>
        {state === "error" && (
          <p role="alert" className="mt-3 text-sm font-bold text-red-600">
            {errorMessage} 급하시면 전화(031-236-8410)로 문의해 주세요.
          </p>
        )}
      </div>
    </form>
  );
}
