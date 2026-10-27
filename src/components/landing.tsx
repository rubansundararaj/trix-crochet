import type { ReactNode } from "react";
import { PatternArt } from "@/components/pattern-art";
import {
  ArrowIcon,
  InstagramIcon,
  LoopMark,
  YouTubeIcon,
} from "@/components/icons";
import {
  designs,
  instagramUrl,
  siteName,
  youtubeUrl,
  type Design,
} from "@/lib/site";

function numeral(index: number) {
  return String(index + 1).padStart(2, "0");
}

function ExternalLink({
  href,
  label,
  className,
  children,
}: {
  href: string;
  label: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (opens in a new tab)`}
      className={className}
    >
      {children}
    </a>
  );
}

const pill =
  "inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition duration-200 motion-safe:hover:-translate-y-0.5";

export function Landing() {
  return (
    <>
      <div
        aria-hidden="true"
        className="h-2.5 bg-[repeating-linear-gradient(90deg,var(--color-clay)_0_14px,var(--color-paper)_14px_20px,var(--color-sage)_20px_34px,var(--color-paper)_34px_40px,var(--color-butter)_40px_54px,var(--color-paper)_54px_60px,var(--color-plum)_60px_74px,var(--color-paper)_74px_80px)]"
      />
      <header className="sticky top-0 z-30 border-b border-ink/10 bg-paper/90 backdrop-blur-md">
        <div className="flex items-center justify-between gap-3 px-5 py-3 sm:px-8">
          <a href="#top" className="flex items-center gap-2.5">
            <LoopMark />
            <span className="font-display text-xl leading-none tracking-tight">
              {siteName}
            </span>
          </a>
          <nav className="flex items-center gap-1 sm:gap-2" aria-label="Primary">
            <a
              href="#designs"
              className="rounded-full px-2.5 py-2 text-sm font-medium hover:bg-ink/5 sm:px-3"
            >
              Designs
            </a>
            <a
              href="#about"
              className="hidden rounded-full px-3 py-2 text-sm font-medium hover:bg-ink/5 sm:inline-flex"
            >
              About
            </a>
            <ExternalLink
              href={youtubeUrl}
              label="YouTube"
              className={`${pill} bg-ink px-2.5 text-cream sm:px-3.5`}
            >
              <YouTubeIcon />
              <span className="hidden sm:inline">YouTube</span>
            </ExternalLink>
            <ExternalLink
              href={instagramUrl}
              label="Instagram"
              className={`${pill} bg-sage px-2.5 text-cream sm:px-3.5`}
            >
              <InstagramIcon />
              <span className="hidden sm:inline">Instagram</span>
            </ExternalLink>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="grid items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage">
              A catalog in progress
            </p>
            <h1 className="mt-4 text-[2.7rem] leading-[1.02] sm:text-6xl lg:text-[4.4rem]">
              <span className="block">Crochet designs,</span>
              <span className="mt-1 block italic text-clay">
                posted as they’re made.
              </span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              Blankets, bags, hats, shawls, and lace. The cards below are
              placeholders until each pattern is written. The making itself is
              on YouTube and Instagram.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
              <a
                href="#designs"
                className={`${pill} col-span-2 w-full bg-ink px-5 py-3 text-cream sm:w-auto`}
              >
                Browse designs
              </a>
              <ExternalLink
                href={youtubeUrl}
                label="YouTube"
                className={`${pill} w-full bg-clay px-5 py-3 text-cream sm:w-auto`}
              >
                <YouTubeIcon />
                YouTube
              </ExternalLink>
              <ExternalLink
                href={instagramUrl}
                label="Instagram"
                className={`${pill} w-full bg-sage px-5 py-3 text-cream sm:w-auto`}
              >
                <InstagramIcon />
                Instagram
              </ExternalLink>
            </div>
          </div>
          <HeroBoard />
        </section>

        <section
          id="designs"
          className="scroll-mt-24 border-t border-ink/10 px-5 py-16 sm:px-8 sm:py-20"
        >
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage">
                The catalog
              </p>
              <h2 className="mt-2 text-4xl sm:text-5xl">Designs</h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted sm:text-right">
              Eight stand-ins. Names, yarn, and stitches will be replaced as
              each pattern is finished.
            </p>
          </div>
          <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {designs.map((design, index) => (
              <li
                key={design.id}
                id={`design-${design.id}`}
                className="scroll-mt-28"
              >
                <DesignCard design={design} index={index} />
              </li>
            ))}
          </ul>
        </section>

        <section
          id="about"
          className="scroll-mt-24 border-t border-ink/10 px-5 py-16 sm:px-8 sm:py-20"
        >
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage">
                About
              </p>
              <h2 className="mt-3 text-4xl leading-[1.05] sm:text-5xl">
                Made by hand, then written down.
              </h2>
            </div>
            <div className="max-w-xl space-y-5 text-lg leading-relaxed text-muted">
              <p className="text-ink">
                {siteName} is where the designs live. I crochet the piece, then
                post the pattern notes here — yarn, hook, and the stitch that
                holds it together.
              </p>
              <p>
                The grid is only a sketch of that shelf. YouTube has the full
                makes, from the foundation chain to the last end woven in.
                Instagram has the in-between: color tests, ripped-back rows,
                and the photo when a piece is done.
              </p>
            </div>
          </div>
        </section>

        <section
          id="watch"
          className="scroll-mt-24 border-t border-ink/10 px-5 py-16 sm:px-8 sm:py-20"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage">
            Elsewhere
          </p>
          <h2 className="mt-2 text-4xl sm:text-5xl">Watch and follow</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <ExternalLink
              href={youtubeUrl}
              label="YouTube"
              className="group flex min-h-72 flex-col rounded-3xl bg-clay p-7 text-cream sm:min-h-80 sm:p-10"
            >
              <YouTubeIcon className="h-7 w-7" />
              <div className="mt-auto">
                <h3 className="text-4xl text-cream">Watch the makes</h3>
                <p className="mt-3 max-w-sm leading-relaxed text-cream/85">
                  Start to finish, from the foundation chain through the last
                  tail woven in.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-medium">
                  Open YouTube
                  <ArrowIcon className="transition duration-200 motion-safe:group-hover:translate-x-1" />
                </span>
              </div>
            </ExternalLink>
            <ExternalLink
              href={instagramUrl}
              label="Instagram"
              className="group flex min-h-72 flex-col rounded-3xl bg-sage p-7 text-cream sm:min-h-80 sm:p-10"
            >
              <InstagramIcon className="h-7 w-7" />
              <div className="mt-auto">
                <h3 className="text-4xl text-cream">Follow the stitches</h3>
                <p className="mt-3 max-w-sm leading-relaxed text-cream/85">
                  Swatches, color choices, frogged rows, and finished photos.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-medium">
                  Open Instagram
                  <ArrowIcon className="transition duration-200 motion-safe:group-hover:translate-x-1" />
                </span>
              </div>
            </ExternalLink>
          </div>
        </section>
      </main>

      <footer className="border-t border-ink/10 px-5 py-8 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-2xl">{siteName}</p>
            <p className="mt-1 text-sm text-muted">
              Crochet designs, posted as they’re made.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm" aria-label="Footer">
            <a href="#designs" className="underline-offset-4 hover:underline">
              Designs
            </a>
            <a href="#about" className="underline-offset-4 hover:underline">
              About
            </a>
            <ExternalLink
              href={youtubeUrl}
              label="YouTube"
              className="underline-offset-4 hover:underline"
            >
              YouTube
            </ExternalLink>
            <ExternalLink
              href={instagramUrl}
              label="Instagram"
              className="underline-offset-4 hover:underline"
            >
              Instagram
            </ExternalLink>
          </nav>
        </div>
        <p className="mt-8 text-xs text-muted">© 2026 {siteName}</p>
      </footer>
    </>
  );
}

function HeroBoard() {
  const featured = designs.slice(0, 3);

  return (
    <div className="grid h-[26rem] grid-cols-2 grid-rows-2 gap-3 sm:h-[34rem] sm:gap-4">
      {featured.map((design, index) => (
        <a
          key={design.id}
          href={`#design-${design.id}`}
          className={`group relative overflow-hidden rounded-2xl ring-1 ring-ink/15 ${design.swatch} ${
            index === 0 ? "row-span-2" : ""
          }`}
        >
          <div
            className={`absolute inset-0 ${design.ink} ${
              design.id === "granny" ? "p-6 sm:p-8" : ""
            }`}
          >
            <PatternArt
              id={design.id}
              className="h-full w-full transition duration-500 motion-safe:group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/75 via-ink/25 to-transparent p-4 pt-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cream/75">
              {design.kind} · Placeholder
            </p>
            <p
              className={`font-display text-cream ${
                index === 0 ? "text-3xl" : "text-xl"
              }`}
            >
              {design.name}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}

function DesignCard({ design, index }: { design: Design; index: number }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-cream shadow-[0_16px_40px_-28px_rgba(42,33,24,0.6)] ring-1 ring-ink/10 transition duration-200 motion-safe:hover:-translate-y-1 hover:ring-ink/20">
      <div className={`relative aspect-square ${design.swatch} ${design.ink}`}>
        <PatternArt
          id={design.id}
          className="h-full w-full transition duration-500 motion-safe:group-hover:scale-105"
        />
        <span
          className={`absolute right-3 top-3 text-xs tabular-nums tracking-widest ${
            design.onDark ? "text-cream/70" : "text-ink/45"
          }`}
        >
          {numeral(index)}
        </span>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 shadow-[inset_0_0_40px_rgba(42,33,24,0.12)]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-clay">
          Placeholder · {design.kind}
        </p>
        <h3 className="mt-2 text-[1.7rem] leading-none">{design.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{design.blurb}</p>
        <p className="mt-auto pt-4 text-sm text-ink/80">
          {design.stitch}
          <span className="text-ink/30"> · </span>
          {design.yarn}
          <span className="text-ink/30"> · </span>
          {design.level}
        </p>
      </div>
    </article>
  );
}
