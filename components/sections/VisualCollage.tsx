"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef, type CSSProperties } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { fadeUp } from "@/lib/animations";

type VisualCollageProps = {
  images: string[];
};

type CollageTile = {
  src: string;
  mobile: string;
  desktop: string;
  rotate: string;
  z: number;
  parallax: number;
};

function CollagePhoto({
  src,
  className = "",
  rotate = "0deg",
  style,
}: {
  src: string;
  className?: string;
  rotate?: string;
  style?: CSSProperties;
}) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl bg-zinc-900 shadow-[0_24px_70px_rgba(0,0,0,0.55)] ring-1 ring-white/15 md:rounded-3xl ${className}`}
      style={{ rotate, ...style }}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        className="h-full w-full object-cover"
        loading="lazy"
        decoding="async"
        draggable={false}
      />
    </motion.div>
  );
}

function ParallaxTile({
  tile,
  scrollYProgress,
}: {
  tile: CollageTile;
  scrollYProgress: MotionValue<number>;
}) {
  const yTile = useTransform(
    scrollYProgress,
    [0, 1],
    [tile.parallax, -tile.parallax]
  );

  return (
    <motion.div
      className={`absolute ${tile.desktop}`}
      style={{ zIndex: tile.z, y: yTile }}
    >
      <CollagePhoto
        src={tile.src}
        className="h-full w-full"
        rotate={tile.rotate}
      />
    </motion.div>
  );
}

function buildTiles(pool: string[]): CollageTile[] {
  const picks = pool.filter(Boolean).slice(0, 8);
  const layouts: Omit<CollageTile, "src">[] = [
    {
      mobile: "col-span-2 aspect-[4/3]",
      desktop: "left-0 top-0 h-[52%] w-[48%]",
      rotate: "-1.5deg",
      z: 2,
      parallax: 24,
    },
    {
      mobile: "col-span-1 aspect-[3/4]",
      desktop: "right-[2%] top-[4%] h-[38%] w-[30%]",
      rotate: "2deg",
      z: 4,
      parallax: 40,
    },
    {
      mobile: "col-span-1 aspect-[3/4]",
      desktop: "right-0 top-[38%] h-[34%] w-[32%]",
      rotate: "-2.5deg",
      z: 3,
      parallax: 32,
    },
    {
      mobile: "col-span-2 aspect-[16/9]",
      desktop: "left-[6%] top-[42%] h-[36%] w-[44%]",
      rotate: "1deg",
      z: 5,
      parallax: 18,
    },
    {
      mobile: "col-span-1 aspect-square",
      desktop: "left-[38%] top-[28%] h-[28%] w-[26%]",
      rotate: "-1deg",
      z: 6,
      parallax: 48,
    },
    {
      mobile: "col-span-1 aspect-[4/5]",
      desktop: "left-[18%] bottom-[2%] h-[32%] w-[34%]",
      rotate: "2.5deg",
      z: 4,
      parallax: 28,
    },
    {
      mobile: "col-span-2 aspect-[21/9]",
      desktop: "right-[8%] bottom-0 h-[38%] w-[46%]",
      rotate: "-1deg",
      z: 7,
      parallax: 36,
    },
    {
      mobile: "col-span-1 aspect-[3/4]",
      desktop: "left-[48%] bottom-[18%] h-[26%] w-[22%]",
      rotate: "1.5deg",
      z: 8,
      parallax: 52,
    },
    {
      mobile: "col-span-1 aspect-square",
      desktop: "right-[34%] top-[62%] h-[22%] w-[20%]",
      rotate: "-2deg",
      z: 9,
      parallax: 44,
    },
  ];

  return picks.map((src, i) => ({
    src,
    ...layouts[i % layouts.length],
  }));
}

export function VisualCollage({ images }: VisualCollageProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const tiles = buildTiles(images);

  return (
    <section
      id="galeri"
      ref={ref}
      className="relative overflow-hidden border-t border-white/[0.04] bg-black py-28 md:py-40"
    >
      <GlowOrb className="left-1/2 top-1/3 -translate-x-1/2" color="mixed" delay={0.5} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          label="Atölye Kareleri"
          title="VEXT Creative Ofisimiz ve Stüdyomuzdan Seçilmiş Kareler"
          description="Ofis, set, kurgu masası ve tasarım ekranından seçilmiş kareler."
          align="center"
        />

        <motion.div
          className="relative mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:hidden"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {tiles.map((tile, i) => (
            <CollagePhoto
              key={`${tile.src}-m-${i}`}
              src={tile.src}
              className={`${tile.mobile} ${i % 3 === 1 ? "-mt-6" : ""} ${i % 4 === 2 ? "z-10" : "z-[1]"}`}
              rotate={tile.rotate}
            />
          ))}
        </motion.div>

        <motion.div
          className="relative mt-16 hidden md:block"
          style={{ y: yBg }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9 }}
        >
          <div className="relative mx-auto min-h-[920px] max-w-6xl lg:min-h-[1000px]">
            {tiles.map((tile, i) => (
              <ParallaxTile
                key={`${tile.src}-d-${i}`}
                tile={tile}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
