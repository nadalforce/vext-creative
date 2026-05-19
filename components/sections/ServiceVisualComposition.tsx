"use client";

import { PhotoFrame } from "@/components/ui/PhotoFrame";

type LayoutKind =
  | "production"
  | "edit"
  | "design"
  | "web"
  | "brandIdentity"
  | "direction";

type ServiceVisualCompositionProps = {
  images: string[];
  layout: LayoutKind;
};

const showcaseFit = { fit: "showcase" as const };

function ShowcaseImage({
  src,
  heightClass,
  wrapperClassName = "",
  frameClassName = "",
}: {
  src: string;
  heightClass: string;
  wrapperClassName?: string;
  frameClassName?: string;
}) {
  return (
    <div className={`flex w-full min-w-0 justify-center ${wrapperClassName}`}>
      <PhotoFrame
        {...showcaseFit}
        src={src}
        heightClass={heightClass}
        className={frameClassName}
      />
    </div>
  );
}

export function ServiceVisualComposition({
  images,
  layout,
}: ServiceVisualCompositionProps) {
  const [a, b, c] = images;

  if (!a) {
    return (
      <div className="flex h-[480px] items-center justify-center rounded-3xl border border-dashed border-white/15 bg-zinc-900/50">
        <p className="text-sm text-white/40">Görsel bulunamadı</p>
      </div>
    );
  }

  if (layout === "production") {
    if (!b) {
      return <ShowcaseImage src={a} heightClass="max-h-[min(62vh,600px)]" />;
    }

    return (
      <div className="grid gap-4 lg:grid-cols-12 lg:gap-5">
        <ShowcaseImage
          src={a}
          heightClass="max-h-[min(62vh,600px)]"
          wrapperClassName="lg:col-span-7"
        />
        <div className="flex flex-col items-center gap-4 lg:col-span-5 lg:-mt-6">
          {b && (
            <ShowcaseImage
              src={b}
              heightClass="max-h-[min(32vh,320px)]"
              frameClassName="lg:translate-x-2"
            />
          )}
          {c && (
            <ShowcaseImage
              src={c}
              heightClass="max-h-[min(26vh,260px)]"
              frameClassName="lg:-translate-x-3 lg:rotate-1"
            />
          )}
        </div>
      </div>
    );
  }

  if (layout === "edit") {
    return (
      <div className="space-y-4">
        <ShowcaseImage src={a} heightClass="max-h-[min(58vh,580px)]" />
        {(b || c) && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {b && (
              <ShowcaseImage src={b} heightClass="max-h-[260px] md:max-h-[300px]" />
            )}
            {c && (
              <ShowcaseImage src={c} heightClass="max-h-[260px] md:max-h-[300px]" />
            )}
          </div>
        )}
      </div>
    );
  }

  if (layout === "brandIdentity") {
    return <ShowcaseImage src={a} heightClass="max-h-[min(65vh,620px)]" />;
  }

  if (layout === "design") {
    return (
      <div className="relative pb-8 md:pb-16">
        <ShowcaseImage src={a} heightClass="max-h-[min(56vh,540px)]" />
        {b && (
          <ShowcaseImage
            src={b}
            heightClass="max-h-[min(40vh,380px)]"
            wrapperClassName="mt-4 md:absolute md:right-0 md:top-[30%] md:mt-0 md:max-w-[min(44%,440px)] md:justify-end"
            frameClassName="md:rotate-2"
          />
        )}
        {c && (
          <ShowcaseImage
            src={c}
            heightClass="max-h-[min(32vh,300px)]"
            wrapperClassName="mt-4 md:absolute md:left-[6%] md:bottom-0 md:mt-0 md:max-w-[min(38%,360px)]"
            frameClassName="md:-rotate-1"
          />
        )}
      </div>
    );
  }

  if (layout === "web") {
    if (!b) {
      return <ShowcaseImage src={a} heightClass="max-h-[min(58vh,560px)]" />;
    }

    return (
      <div className="grid gap-4 lg:grid-cols-12 lg:gap-5">
        <ShowcaseImage
          src={a}
          heightClass="max-h-[min(58vh,560px)]"
          wrapperClassName="lg:col-span-7"
        />
        <div className="flex flex-col items-center gap-4 lg:col-span-5 lg:-mt-10">
          <ShowcaseImage
            src={b}
            heightClass="max-h-[min(38vh,380px)]"
            frameClassName="lg:translate-x-4"
          />
          {c && (
            <ShowcaseImage
              src={c}
              heightClass="max-h-[min(30vh,300px)]"
              frameClassName="lg:-translate-x-2 lg:rotate-1"
            />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="relative pb-6 md:pb-12">
      <ShowcaseImage src={a} heightClass="max-h-[min(58vh,560px)]" />
      <div className="mt-4 flex flex-col items-center gap-4 md:absolute md:right-0 md:top-[20%] md:mt-0 md:w-[min(40%,420px)]">
        {b && <ShowcaseImage src={b} heightClass="max-h-[260px] md:max-h-[300px]" />}
        {c && (
          <ShowcaseImage
            src={c}
            heightClass="max-h-[220px] md:max-h-[260px]"
            frameClassName="md:translate-x-5"
          />
        )}
      </div>
    </div>
  );
}
