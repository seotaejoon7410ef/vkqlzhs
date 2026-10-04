"use client";

import { useState, type FormEvent } from "react";
import { KINDERGARTEN_TOPICS } from "@/content/kindergarten-topics";

const AREAS = ["서울", "경기", "인천", "충남", "충북", "기타 지역(협의)"];

const KINDERGARTEN = "안전체험 (유치원)";
const SCHOOL = "장애인식개선체험 (초·중학교)";
const PROGRAM_TYPES = [KINDERGARTEN, SCHOOL];

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
  "mt-1.5 min-h-11 w-full rounded-xl border-2 border-[var(--color-border)] bg-[var(--color-surface)] px-3.5 text-base text-[var(--color-text)] focus:border-[var(--color-primary)]";
const labelClass = "text-sm font-bold text-[var(--color-text)]";
const gradePillClass =
  "flex min-h-9 cursor-pointer items-center gap-1.5 rounded-full border-2 border-[var(--color-border)] px-3 text-sm font-bold text-[var(--color-text-muted)] has-[input:checked]:border-[var(--color-primary)] has-[input:checked]:bg-[var(--color-primary-tint)] has-[input:checked]:text-[var(--color-primary-hover)]";
const sectionClass = "rounded-2xl border-2 border-[var(--color-border)] bg-[var(--color-surface-alt)] p-5 space-y-4";
const sectionTitleClass = "text-sm font-black text-[var(--color-primary-hover)]";

type SubmitState = "idle" | "sending" | "success" | "error";

export function InquiryForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [programType, setProgramType] = useState("");
  const [topicError, setTopicError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (programType === KINDERGARTEN && data.getAll("topic").length === 0) {
      setTopicError("체험 주제를 하나 이상 선택해 주세요.");
      return;
    }
    setTopicError("");

    const payload = {
      area: String(data.get("area") ?? ""),
      programType: String(data.get("programType") ?? ""),
      school: String(data.get("school") ?? ""),
      topic: data.getAll("topic").map(String).join(", "),
      age: String(data.get("age") ?? ""),
      headcount: String(data.get("headcount") ?? ""),
      sessions: String(data.get("sessions") ?? ""),
      grades: data.getAll("grade").map(String).join(", "),
      classCount: String(data.get("classCount") ?? ""),
      periods: String(data.get("periods") ?? ""),
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
      setProgramType("");
      form.reset();
    } catch {
      setErrorMessage("전송에 실패했어요. 잠시 후 다시 시도해 주세요.");
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="rounded-2xl border-2 border-[var(--color-primary)] bg-[var(--color-primary-tint)] p-8 text-center">
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
    <form onSubmit={handleSubmit} className="space-y-6" noValidate={false}>
      <div className="grid gap-4 sm:grid-cols-2">
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
          <label htmlFor="programType" className={labelClass}>
            체험 종류
          </label>
          <select
            id="programType"
            name="programType"
            required
            value={programType}
            onChange={(event) => setProgramType(event.target.value)}
            className={inputClass}
          >
            <option value="" disabled>
              체험 종류를 선택해 주세요
            </option>
            {PROGRAM_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="school" className={labelClass}>
          학교 · 유치원 이름
        </label>
        <input
          id="school"
          name="school"
          type="text"
          required
          placeholder="예: OO유치원 / OO초등학교"
          className={inputClass}
        />
      </div>

      {programType === KINDERGARTEN && (
        <section className={sectionClass} aria-label="유치원 정보">
          <p className={sectionTitleClass}>유치원 정보</p>
          <fieldset>
            <legend className={labelClass}>체험 주제 (여러 개 선택 가능)</legend>
            <div className="mt-2 flex flex-wrap items-center gap-1.5">
              {KINDERGARTEN_TOPICS.map((topic) => (
                <label key={topic.slug} className={gradePillClass}>
                  <input
                    type="checkbox"
                    name="topic"
                    value={topic.title}
                    className="h-3.5 w-3.5"
                    onChange={() => setTopicError("")}
                  />
                  {topic.title}
                </label>
              ))}
            </div>
            {topicError && (
              <p role="alert" className="mt-2 text-sm font-bold text-red-600">
                {topicError}
              </p>
            )}
            <p className="mt-2 text-xs text-[var(--color-text-muted)]">
              여러 주제를 함께 신청할 수 있어요. 주제마다 희망 날짜를 적어 주시면, 같은 날짜가 겹치지 않도록 담당자가 확인해 연락드려요.
            </p>
          </fieldset>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="age" className={labelClass}>
                연령 (세)
              </label>
              <input id="age" name="age" type="text" required placeholder="예: 5~7세" className={inputClass} />
            </div>
            <div>
              <label htmlFor="headcount" className={labelClass}>
                인원 (명)
              </label>
              <input
                id="headcount"
                name="headcount"
                type="number"
                min={1}
                required
                placeholder="예: 30"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="sessions" className={labelClass}>
                희망 회차 (회)
              </label>
              <input
                id="sessions"
                name="sessions"
                type="number"
                min={1}
                required
                placeholder="예: 2"
                className={inputClass}
              />
            </div>
          </div>
        </section>
      )}

      {programType === SCHOOL && (
        <section className={sectionClass} aria-label="초·중학교 정보">
          <p className={sectionTitleClass}>초·중학교 정보</p>
          <fieldset>
            <legend className={labelClass}>학년 (여러 학년이 함께하면 모두 선택해 주세요)</legend>

            <div className="mt-2 flex flex-wrap items-center gap-1.5">
              <span className="mr-1 text-xs font-bold text-[var(--color-text-muted)]">초등</span>
              {ELEMENTARY_GRADES.map((grade) => (
                <label key={grade} className={gradePillClass}>
                  <input type="checkbox" name="grade" value={grade} className="h-3.5 w-3.5" />
                  {grade.replace("초등학교 ", "")}
                </label>
              ))}
            </div>

            <div className="mt-2 flex flex-wrap items-center gap-1.5">
              <span className="mr-1 text-xs font-bold text-[var(--color-text-muted)]">중학</span>
              {MIDDLE_GRADES.map((grade) => (
                <label key={grade} className={gradePillClass}>
                  <input type="checkbox" name="grade" value={grade} className="h-3.5 w-3.5" />
                  {grade.replace("중학교 ", "")}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="classCount" className={labelClass}>
                학급수
              </label>
              <input
                id="classCount"
                name="classCount"
                type="number"
                min={1}
                required
                placeholder="예: 2"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="periods" className={labelClass}>
                희망 교시 수 (교시)
              </label>
              <input
                id="periods"
                name="periods"
                type="number"
                min={1}
                required
                placeholder="예: 2"
                className={inputClass}
              />
            </div>
          </div>
        </section>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
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
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="date" className={labelClass}>
          희망 수업 일정 (선택)
        </label>
        <input
          id="date"
          name="date"
          type="text"
          placeholder="예: 11월 3주 중 하루, 12/1~12/5 중 협의, 매주 화요일 등 자유롭게"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          요청 및 문의사항 (선택)
        </label>
        <textarea
          id="message"
          name="message"
          rows={1}
          placeholder="궁금한 점 등을 자유롭게 남겨주세요."
          className="mt-1.5 h-11 w-full resize-none rounded-xl border-2 border-[var(--color-border)] bg-[var(--color-surface)] px-3.5 py-2 text-sm text-[var(--color-text)] focus:border-[var(--color-primary)]"
        />
      </div>

      <label className="mx-auto flex max-w-md cursor-pointer items-start justify-center gap-2 text-center text-xs text-[var(--color-text-muted)]">
        <input type="checkbox" required className="mt-0.5 h-4 w-4 shrink-0" />
        입력하신 정보는 문의 답변 목적으로만 사용되며, 별도로 저장하지 않고
        담당자 이메일로 바로 전달됩니다. 이에 동의합니다. (필수)
      </label>

      <div className="flex flex-col items-center text-center">
        <button
          type="submit"
          disabled={state === "sending"}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--color-primary)] px-8 text-base font-bold text-white transition-colors hover:bg-[var(--color-primary-hover)] disabled:opacity-60"
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
