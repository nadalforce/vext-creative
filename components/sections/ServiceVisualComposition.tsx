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

const showcaseFit = { fit: "contain" as const };

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
      return (
        <PhotoFrame
          {...showcaseFit}
          src={a}
          heightClass="h-[min(62vh,600px)]"
        />
      );
    }

    return (
      <div className="grid gap-4 lg:grid-cols-12 lg:gap-5">
        <PhotoFrame
          {...showcaseFit}
          src={a}
          heightClass="h-[min(62vh,600px)]"
          className="lg:col-span-7"
        />
        <div className="flex flex-col gap-4 lg:col-span-5 lg:-mt-6">
          {b && (
            <PhotoFrame
              {...showcaseFit}
              src={b}
              heightClass="h-[min(32vh,320px)]"
              className="lg:translate-x-2"
            />
          )}
          {c && (
            <PhotoFrame
              {...showcaseFit}
              src={c}
              heightClass="h-[min(26vh,260px)]"
              className="lg:-translate-x-3 lg:rotate-1"
            />
          )}
        </div>
      </div>
    );
  }

  if (layout === "edit") {
    return (
      <div className="space-y-4">
        <PhotoFrame {...showcaseFit} src={a} heightClass="h-[min(58vh,580px)]" />
        {(b || c) && (
          <div className="grid grid-cols-2 gap-4">
            {b && (
              <PhotoFrame {...showcaseFit} src={b} heightClass="h-[260px] md:h-[300px]" />
            )}
            {c && (
              <PhotoFrame {...showcaseFit} src={c} heightClass="h-[260px] md:h-[300px]" />
            )}
          </div>
        )}
      </div>
    );
  }

  if (layout === "brandIdentity") {
    return (
      <div className="relative mx-auto max-w-5xl">
        <PhotoFrame
          {...showcaseFit}
          src={a}
          heightClass="h-[min(65vh,620px)]"
        />
      </div>
    );
  }

  if (layout === "design") {
    return (
      <div className="relative pb-8 md:pb-16">
        <PhotoFrame
          {...showcaseFit}
          src={a}
          heightClass="h-[min(56vh,540px)]"
        />
        {b && (
          <PhotoFrame
            {...showcaseFit}
            src={b}
            heightClass="h-[min(40vh,380px)]"
            className="mt-4 md:absolute md:right-0 md:top-[30%] md:mt-0 md:w-[min(44%,440px)] md:rotate-2"
          />
        )}
        {c && (
          <PhotoFrame
            {...showcaseFit}
            src={c}
            heightClass="h-[min(32vh,300px)]"
            className="mt-4 md:absolute md:left-[6%] md:bottom-0 md:mt-0 md:w-[min(38%,360px)] md:-rotate-1"
          />
        )}
      </div>
    );
  }

  if (layout === "web") {
    if (!b) {
      return <PhotoFrame {...showcaseFit} src={a} heightClass="h-[min(58vh,560px)]" />;
    }

    return (
      <div className="grid gap-4 lg:grid-cols-12 lg:gap-5">
        <PhotoFrame
          {...showcaseFit}
          src={a}
          heightClass="h-[min(58vh,560px)]"
          className="lg:col-span-7"
        />
        <div className="flex flex-col gap-4 lg:col-span-5 lg:-mt-10">
          <PhotoFrame
            {...showcaseFit}
            src={b}
            heightClass="h-[min(38vh,380px)]"
            className="lg:translate-x-4"
          />
          {c && (
            <PhotoFrame
              {...showcaseFit}
              src={c}
              heightClass="h-[min(30vh,300px)]"
              className="lg:-translate-x-2 lg:rotate-1"
            />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="relative pb-6 md:pb-12">
      <PhotoFrame {...showcaseFit} src={a} heightClass="h-[min(58vh,560px)] md:pr-[30%]" />
      <div className="mt-4 flex flex-col gap-4 md:absolute md:right-0 md:top-[20%] md:mt-0 md:w-[min(40%,420px)]">
        {b && <PhotoFrame {...showcaseFit} src={b} heightClass="h-[260px] md:h-[300px]" />}
        {c && (
          <PhotoFrame
            {...showcaseFit}
            src={c}
            heightClass="h-[220px] md:h-[260px]"
            className="md:translate-x-5"
          />
        )}
      </div>
    </div>
  );
}
