import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/cn";

type Cta = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

export default function PageHero({
  title,
  subtitle,
  eyebrow,
  image,
  primaryCta,
  secondaryCta,
  height = "default"
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  image: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  height?: "default" | "tall";
}) {
  const h =
    height === "tall"
      ? "min-h-[360px] sm:min-h-[440px] lg:min-h-[560px]"
      : "min-h-[320px] sm:min-h-[380px] lg:min-h-[460px]";

  return (
    <section className={cn("relative w-full overflow-hidden bg-slate-100", h)}>
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Overlay para legibilidad sin negro puro */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/25 to-slate-900/10" />
        {/* Hario-like “soft wash” */}
        <div className="absolute inset-0 bg-white/10" />
      </div>

      {/* Content */}
      <Container>
        <div className="relative z-10 flex min-h-inherit items-end py-12 sm:py-14 lg:py-16">
          <div className="max-w-2xl">
            {eyebrow ? (
              <p className="inline-flex rounded-full border border-white/35 bg-white/15 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-white">
                {eyebrow}
              </p>
            ) : null}

            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {title}
            </h1>

            {subtitle ? (
              <p className="mt-4 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
                {subtitle}
              </p>
            ) : null}

            {(primaryCta || secondaryCta) ? (
              <div className="mt-7 flex flex-wrap gap-3">
                {primaryCta ? (
                  <Link
                    href={primaryCta.href}
                    className="focus-ring inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-extrabold text-slate-800 hover:bg-slate-50"
                  >
                    {primaryCta.label}
                  </Link>
                ) : null}

                {secondaryCta ? (
                  <Link
                    href={secondaryCta.href}
                    className="focus-ring inline-flex items-center justify-center rounded-full border border-white/60 bg-white/10 px-6 py-3 text-sm font-extrabold text-white hover:bg-white/15"
                  >
                    {secondaryCta.label}
                  </Link>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
