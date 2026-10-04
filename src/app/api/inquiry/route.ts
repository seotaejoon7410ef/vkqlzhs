import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "happyguide95@naver.com";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY가 설정되지 않았습니다.");
    return NextResponse.json(
      { error: "지금은 문의를 보낼 수 없어요. 전화로 문의해 주세요." },
      { status: 500 },
    );
  }

  const body = await request.json();
  const {
    area,
    programType,
    school,
    grades,
    age,
    headcount,
    topic,
    sessions,
    classCount,
    periods,
    name,
    phone,
    email,
    date,
    message,
  } = body as Record<string, string>;

  if (!area || !programType || !school || !name || !phone || !email) {
    return NextResponse.json({ error: "필수 항목을 입력해 주세요." }, { status: 400 });
  }

  const text = [
    "행복한길잡이 홈페이지로 문의가 도착했습니다.",
    "",
    `체험 종류: ${programType}`,
    `지역: ${area}`,
    `학교 · 유치원 이름: ${school}`,
    grades ? `학년: ${grades}` : "",
    topic ? `체험 주제: ${topic}` : "",
    age ? `연령: ${age}` : "",
    headcount ? `인원: ${headcount}명` : "",
    sessions ? `희망 회차: ${sessions}회` : "",
    classCount ? `학급수: ${classCount}` : "",
    periods ? `희망 교시 수: ${periods}교시` : "",
    `담당 선생님: ${name}`,
    `연락처: ${phone}`,
    `이메일: ${email}`,
    date ? `희망 수업 일정: ${date}` : "",
    message ? `문의 내용: ${message}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "행복한길잡이 홈페이지 <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `[홈페이지 문의] ${school} - ${name}`,
      text,
    });

    if (error) {
      console.error(error);
      return NextResponse.json(
        { error: "전송에 실패했어요. 잠시 후 다시 시도해 주세요." },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "전송에 실패했어요. 잠시 후 다시 시도해 주세요." },
      { status: 500 },
    );
  }
}
