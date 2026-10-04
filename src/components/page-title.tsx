import Image from "next/image";
import { Camera } from "lucide-react";
import { Container } from "./container";
import { Kicker } from "./kicker";
import { Reveal } from "./reveal";

// 홈/회사소개/초등학교 체험 히어로와 동일한 박스 크기(min-h-480/640/760)를
// 써서, 실제 사진이 아직 없는 페이지도 박스 크기만큼은 통일되게 합니다.
export function PageTitle({
  label,
  title,
  description,
  photoSrc,
  photoAlt,
  photoPlaceholderLabel,
}: {
  label: string;
  title: string;
  description?: string;
  photoSrc?: string;
  photoAlt?: string;
  photoPlaceholderLabel?: string;
}) {
  return (
    <section className="on-dark relative isolate overflow-hidden">
      <div className="relative min-h-[480px] w-full bg-gradient-to-br from-[var(--color-secondary-hover)] via-[var(--color-secondary)] to-[var(--color-primary)] sm:min-h-[640px] lg:min-h-[760px]">
        {photoSrc && (
          <Image
            src={photoSrc}
            alt={photoAlt ?? ""}
            fill
            sizes="100vw"
            className="object-cover brightness-75"
          />
        )}

        {!photoSrc && photoPlaceholderLabel && (
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-10 flex flex-col items-center justify-center gap-2 text-white/80 sm:top-14"
          >
            <Camera size={28} />
            <p className="text-sm">{photoPlaceholderLabel}</p>
          </div>
        )}

        <Container className="absolute inset-x-0 bottom-0 pb-14 sm:pb-20 lg:pb-24">
          <div className="max-w-2xl">
            <Reveal>
              <Kicker color="accent">{label}</Kicker>
              <h1 className="text-balance mt-4 text-3xl font-black leading-tight sm:text-5xl">
                {title}
              </h1>
              {description && (
                <p className="mt-3 text-base text-white/90 sm:text-lg">{description}</p>
              )}
            </Reveal>
          </div>
        </Container>
      </div>
    </section>
  );
}
