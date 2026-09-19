import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "소식·자료실",
  description: "행복한길잡이의 최근 소식과 교육 자료를 안내합니다.",
};

const POSTS = [
  {
    category: "공지",
    title: "(예시) 2026년 상반기 학교 교육 신청 접수 안내",
    date: "2026-03-02",
    excerpt:
      "2026년 상반기 학교 대상 장애 인식 개선 교육 신청을 접수합니다. 신청 방법과 일정은 아래 내용을 참고해주세요.",
  },
  {
    category: "소식",
    title: "(예시) 공공기관 임직원 대상 교육 후기",
    date: "2026-02-18",
    excerpt:
      "지난달 진행한 공공기관 임직원 교육 현장의 이야기를 전해드립니다.",
  },
  {
    category: "자료",
    title: "(예시) 장애 인식 개선 교육 기본 자료집 배포",
    date: "2026-01-10",
    excerpt:
      "누구나 활용할 수 있는 장애 인식 개선 기본 자료집을 공유합니다.",
  },
];

export default function NewsPage() {
  return (
    <>
      <section className="bg-[var(--color-surface-alt)] py-16 sm:py-20">
        <Container>
          <p className="text-sm font-bold text-[var(--color-primary-hover)]">
            소식·자료실
          </p>
          <h1 className="mt-3 text-4xl font-extrabold text-[var(--color-text)]">
            행복한길잡이의 새로운 소식
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-text-muted)]">
            공지사항, 교육 후기, 자료 배포 소식을 이곳에서 확인하실 수
            있습니다. 아래 목록은 구성을 보여드리기 위한 예시이며, 실제
            게시물로 교체될 예정입니다.
          </p>
        </Container>
      </section>

      <section aria-labelledby="posts-heading" className="py-16 sm:py-20">
        <Container>
          <h2 id="posts-heading" className="sr-only">
            게시물 목록
          </h2>
          <ul className="grid gap-6 lg:grid-cols-3">
            {POSTS.map((post) => (
              <li key={post.title}>
                <article className="flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="rounded-full bg-[var(--color-primary-tint)] px-3 py-1 font-bold text-[var(--color-primary-hover)]">
                      {post.category}
                    </span>
                    <time
                      dateTime={post.date}
                      className="text-[var(--color-text-muted)]"
                    >
                      {post.date}
                    </time>
                  </div>
                  <h3 className="mt-4 text-lg font-bold leading-snug text-[var(--color-text)]">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {post.excerpt}
                  </p>
                </article>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-sm text-[var(--color-text-muted)]">
            ※ 게시판 기능(작성·검색·상세 페이지)은 실제 운영 콘텐츠가
            준비되는 대로 이어서 구축할 예정입니다.
          </p>
        </Container>
      </section>
    </>
  );
}
