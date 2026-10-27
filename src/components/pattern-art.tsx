import type { ReactNode } from "react";
import type { DesignId } from "@/lib/site";

type ArtProps = {
  className?: string;
};

function SwatchSvg({
  className,
  children,
  cover = false,
}: {
  className?: string;
  children: ReactNode;
  cover?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 200 240"
      className={className}
      preserveAspectRatio={cover ? "xMidYMid slice" : "xMidYMid meet"}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function Granny({ className }: ArtProps) {
  const corners = [45, 135, 225, 315];
  const sides = [0, 90, 180, 270];

  return (
    <SwatchSvg className={className}>
      <g transform="translate(100 120)" fill="currentColor">
        <rect
          x="-78"
          y="-78"
          width="156"
          height="156"
          rx="8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        {Array.from({ length: 8 }, (_, index) => (
          <ellipse
            key={index}
            cx="0"
            cy="-18"
            rx="5"
            ry="9"
            opacity="0.95"
            transform={`rotate(${index * 45})`}
          />
        ))}
        <circle r="6" />
        {corners.map((angle) => (
          <g key={angle} transform={`rotate(${angle}) translate(0 -50)`}>
            <ellipse cx="0" cy="-8" rx="4.2" ry="9" />
            <ellipse cx="0" cy="-8" rx="4.2" ry="9" transform="rotate(26)" />
            <ellipse cx="0" cy="-8" rx="4.2" ry="9" transform="rotate(-26)" />
          </g>
        ))}
        {sides.map((angle) => (
          <g
            key={angle}
            transform={`rotate(${angle}) translate(0 -58)`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <circle cy="-2" r="5" />
            <circle cy="10" r="3.4" />
          </g>
        ))}
      </g>
    </SwatchSvg>
  );
}

function Ripple({ className }: ArtProps) {
  const band =
    "M0 18 L20 0 L40 18 L60 0 L80 18 L100 0 L120 18 L140 0 L160 18 L180 0 L200 18 L200 50 L180 32 L160 50 L140 32 L120 50 L100 32 L80 50 L60 32 L40 50 L20 32 L0 50 Z";
  const bands = [
    { y: 6, opacity: 0.95 },
    { y: 62, opacity: 0.62 },
    { y: 118, opacity: 0.34 },
    { y: 174, opacity: 0.82 },
  ];

  return (
    <SwatchSvg className={className} cover>
      {bands.map((item) => (
        <path
          key={item.y}
          d={band}
          fill="currentColor"
          opacity={item.opacity}
          transform={`translate(0 ${item.y})`}
        />
      ))}
    </SwatchSvg>
  );
}

function Bobble({ className }: ArtProps) {
  const nodes = [];
  for (let row = 0; row < 7; row += 1) {
    for (let col = 0; col < 6; col += 1) {
      const cx = 18 + col * 36 + (row % 2 ? 18 : 0);
      const cy = 18 + row * 34;
      nodes.push(
        <g key={`${row}-${col}`}>
          <circle cx={cx} cy={cy} r="13" fill="currentColor" opacity="0.92" />
          <circle
            cx={cx - 3.5}
            cy={cy - 4}
            r="4"
            fill="white"
            opacity="0.35"
          />
        </g>,
      );
    }
  }

  return (
    <SwatchSvg className={className} cover>
      {nodes}
    </SwatchSvg>
  );
}

function Mesh({ className }: ArtProps) {
  const rings = [];
  for (let row = 0; row < 8; row += 1) {
    for (let col = 0; col < 7; col += 1) {
      const cx = 8 + col * 32 + (row % 2 ? 16 : 0);
      const cy = 12 + row * 30;
      rings.push(
        <circle
          key={`${row}-${col}`}
          cx={cx}
          cy={cy}
          r="10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
        />,
      );
    }
  }

  return (
    <SwatchSvg className={className} cover>
      {rings}
    </SwatchSvg>
  );
}

function Shell({ className }: ArtProps) {
  const fans = [];
  for (let row = 0; row < 5; row += 1) {
    for (let col = 0; col < 7; col += 1) {
      const x = -10 + col * 34 + (row % 2 ? 17 : 0);
      const y = 42 + row * 42;
      fans.push(
        <path
          key={`${row}-${col}`}
          d={`M ${x} ${y} A 17 17 0 0 1 ${x + 34} ${y} Z`}
          fill="currentColor"
          opacity={row % 2 ? 0.55 : 0.92}
        />,
      );
    }
  }

  return (
    <SwatchSvg className={className} cover>
      {fans}
    </SwatchSvg>
  );
}

function Fern({ className }: ArtProps) {
  const leaves = [];
  for (let row = 0; row < 5; row += 1) {
    for (let col = 0; col < 4; col += 1) {
      const cx = 28 + col * 50 + (row % 2 ? 24 : 0);
      const cy = 28 + row * 48;
      leaves.push(
        <g key={`${row}-${col}`} transform={`translate(${cx} ${cy})`}>
          <path
            d="M0 18 C -16 8 -14 -8 0 -18 C 14 -8 16 8 0 18 Z"
            fill="currentColor"
            opacity={row % 2 ? 0.48 : 0.92}
          />
          <path
            d="M0 14 V -14"
            stroke="white"
            strokeWidth="1.2"
            opacity="0.45"
          />
        </g>,
      );
    }
  }

  return (
    <SwatchSvg className={className} cover>
      {leaves}
    </SwatchSvg>
  );
}

function Doily({ className }: ArtProps) {
  return (
    <SwatchSvg className={className}>
      <g transform="translate(100 120)" fill="currentColor">
        {Array.from({ length: 16 }, (_, index) => (
          <circle
            key={index}
            cx={Math.cos((index * 22.5 * Math.PI) / 180) * 78}
            cy={Math.sin((index * 22.5 * Math.PI) / 180) * 78}
            r="3.2"
          />
        ))}
        <circle
          r="68"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        {Array.from({ length: 12 }, (_, index) => (
          <ellipse
            key={index}
            cx="0"
            cy="-46"
            rx="8"
            ry="18"
            opacity="0.9"
            transform={`rotate(${index * 30})`}
          />
        ))}
        <circle r="26" fill="none" stroke="currentColor" strokeWidth="1.5" />
        {Array.from({ length: 8 }, (_, index) => (
          <ellipse
            key={index}
            cx="0"
            cy="-16"
            rx="4"
            ry="8"
            transform={`rotate(${index * 45})`}
          />
        ))}
        <circle r="5" />
      </g>
    </SwatchSvg>
  );
}

function Moss({ className }: ArtProps) {
  const stitches = [];
  for (let row = 0; row < 11; row += 1) {
    for (let col = 0; col < 8; col += 1) {
      const x = 8 + col * 26 + (row % 2 ? 13 : 0);
      const y = 14 + row * 20;
      stitches.push(
        <rect
          key={`${row}-${col}`}
          x={x}
          y={y}
          width="16"
          height="6"
          rx="3"
          fill="currentColor"
          opacity={row % 2 ? 0.55 : 0.95}
        />,
      );
    }
  }

  return (
    <SwatchSvg className={className} cover>
      {stitches}
    </SwatchSvg>
  );
}

const arts: Record<DesignId, (props: ArtProps) => ReactNode> = {
  granny: Granny,
  ripple: Ripple,
  beanie: Bobble,
  market: Mesh,
  tote: Shell,
  shawl: Fern,
  doily: Doily,
  cardigan: Moss,
};

export function PatternArt({
  id,
  className,
}: {
  id: DesignId;
  className?: string;
}) {
  const Art = arts[id];
  return <Art className={className} />;
}
