import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export type LightboxImage = {
  title: string;
  category: string;
  caption?: string;
  camera?: string;
  lens?: string;
  src: string;
};

interface LightboxProps {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}

export function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % images.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + images.length) % images.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, images.length, onClose, onNavigate]);

  if (index === null) return null;
  const image = images[index];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-4 sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={image.title}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 rounded-full p-2 text-foreground/70 transition hover:bg-foreground/5 hover:text-foreground"
      >
        <X className="h-5 w-5" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index - 1 + images.length) % images.length);
        }}
        aria-label="Previous image"
        className="absolute left-2 sm:left-6 rounded-full p-2 text-foreground/70 transition hover:bg-foreground/5 hover:text-foreground"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index + 1) % images.length);
        }}
        aria-label="Next image"
        className="absolute right-2 sm:right-6 rounded-full p-2 text-foreground/70 transition hover:bg-foreground/5 hover:text-foreground"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <figure
        className="flex max-h-full max-w-6xl flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.title}
          className="max-h-[75vh] w-auto rounded-sm object-contain shadow-2xl"
        />
        <figcaption className="max-w-2xl text-center text-sm text-muted-foreground">
          <div className="font-serif text-lg text-foreground">{image.title}</div>
          <div className="mt-1 uppercase tracking-[0.2em] text-xs text-accent-foreground/70">
            {image.category}
          </div>
          {image.caption && <p className="mt-2">{image.caption}</p>}
          {(image.camera || image.lens) && (
            <p className="mt-1 text-xs text-muted-foreground/70">
              {[image.camera, image.lens].filter(Boolean).join(" · ")}
            </p>
          )}
        </figcaption>
      </figure>
    </div>
  );
}
