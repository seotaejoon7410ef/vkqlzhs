import Image from "next/image";
import { Camera } from "lucide-react";
import { Container } from "./container";
import { Reveal } from "./reveal";

export function PageTitle({
  label,
  title,
  photoSrc,
  photoAlt,
  photoPlaceholderLabel,
}: {
  label: string;
  title: string;
  photoSrc?: string;
  photoAlt?: string;
  photoPlaceholderLabel?: string;
}) {
  const showPhoto = Boolean(photoSrc || photoPlaceholderLabel);

  return (
    <section className="on-dark relative overflow-hidden bg-gradient-to-br from-[var(--color-secondary-hover)] via-[var(--color-secondary)] to-[var(--color-primary)] text-white">
      <Container className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-sm font-bold text-[var(--color-accent)]">{label}</p>
            <h1 className="mx-auto mt-3 max-w-[36em] text-4xl font-black leading-[1.2] sm:text-5xl">
              {title}
            </h1>
          </Reveal>
        </div>
      </Container>

      {showPhoto &&
        (photoSrc ? (
          <div className="relative h-56 w-full sm:h-72 lg:h-80">
            <Image
              src={photoSrc}
              alt={photoAlt ?? ""}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ) : (
          <div
            aria-hidden="true"
            className="flex h-56 w-full flex-col items-center justify-center gap-2 border-t border-white/10 bg-black/10 text-white/70 sm:h-72 lg:h-80"
          >
            <Camera size={32} />
            <p className="text-sm">{photoPlaceholderLabel}</p>
          </div>
        ))}
    </section>
  );
}
