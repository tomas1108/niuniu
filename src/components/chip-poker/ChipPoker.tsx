import { cva } from "class-variance-authority";
import Image, { ImageProps } from "next/image";
import { useCallback } from "react";
import { cn } from "~/lib/utils";

type ChipPokerProps = Omit<ImageProps, "alt" | "onClick" | "src"> & {
  onClick?: () => void;
  selected?: boolean;
  variant: ChipPokerVariant;
  alt?: string;
  sound?: boolean;
  hover?: boolean;
};

const chipsPoker = {
  chip10K: "/images/chip/chip-10k-x3.png",
  chip30K: "/images/chip/chip-30k-x3.png",
  chip50K: "/images/chip/chip-50k-x3.png",
  chip100K: "/images/chip/chip-100k-x3.png",
  chip500K: "/images/chip/chip-500k-x3.png",
  chip1M: "/images/chip/chip-1M-x3.png",
  chip60K: "/images/chip/chip-60k-x3.png",
  chip180K: "/images/chip/chip-180k-x3.png",
  chip300K: "/images/chip/chip-300k-x3.png",
  chip600K: "/images/chip/chip-600k-x3.png",
  chip3M: "/images/chip/chip-3M-x3.png",
  chip6M: "/images/chip/chip-6M-x3.png",
  chip130K: "/images/chip/chip-130k-x3.png",
  chip390K: "/images/chip/chip-390k-x3.png",
  chip650K: "/images/chip/chip-650k-x3.png",
  chip1M3: "/images/chip/chip-1M3-x3.png",
  chip6M5: "/images/chip/chip-6M5-x3.png",
  chip13M: "/images/chip/chip-13M-x3.png"
};

const chipPokerVariants = cva(
  "cursor-pointer transition-transform duration-200 ease-in-out hover:scale-[1.4]",
  {
    variants: {
      variant: {
        chip10K: "hover:drop-shadow-chip-poker-10K",
        chip30K: "hover:drop-shadow-chip-poker-30K",
        chip50K: "hover:drop-shadow-chip-poker-50K",
        chip100K: "hover:drop-shadow-chip-poker-100K",
        chip500K: "hover:drop-shadow-chip-poker-500K",
        chip1M: "hover:drop-shadow-chip-poker-1M",
        chip60K: "hover:drop-shadow-chip-poker-10K",
        chip180K: "hover:drop-shadow-chip-poker-30K",
        chip300K: "hover:drop-shadow-chip-poker-50K",
        chip600K: "hover:drop-shadow-chip-poker-100K",
        chip3M: "hover:drop-shadow-chip-poker-500k",
        chip6M: "hover:drop-shadow-chip-poker-1M",
        chip130K: "hover:drop-shadow-chip-poker-10K",
        chip390K: "hover:drop-shadow-chip-poker-30K",
        chip650K: "hover:drop-shadow-chip-poker-50K",
        chip1M3: "hover:drop-shadow-chip-poker-100K",
        chip6M5: "hover:drop-shadow-chip-poker-500K"
      }
    }
  }
);

const DropShadowChipPoker = {
  chip10K: "drop-shadow-chip-poker-10K",
  chip30K: "drop-shadow-chip-poker-30K",
  chip50K: "drop-shadow-chip-poker-50K",
  chip100K: "drop-shadow-chip-poker-100K",
  chip500K: "drop-shadow-chip-poker-500K",
  chip1M: "drop-shadow-chip-poker-1M",
  chip60K: "drop-shadow-chip-poker-10K",
  chip180K: "drop-shadow-chip-poker-30K",
  chip300K: "drop-shadow-chip-poker-50K",
  chip600K: "drop-shadow-chip-poker-100K",
  chip3M: "drop-shadow-chip-poker-500K",
  chip6M: "drop-shadow-chip-poker-1M",
  chip130K: "drop-shadow-chip-poker-10K",
  chip390K: "drop-shadow-chip-poker-30K",
  chip650K: "drop-shadow-chip-poker-50K",
  chip1M3: "drop-shadow-chip-poker-100K",
  chip6M5: "drop-shadow-chip-poker-500K",
  chip13M: "drop-shadow-chip-poker-1M"
};

const ChipPoker: React.FC<ChipPokerProps> = ({
  variant,
  onClick,
  hover,
  selected,
  className,
  sound,
  ...props
}) => {
  const handleClickChip = useCallback(() => {
    sound && new Audio("/sounds/clicking-chip-2.wav").play();
    onClick && onClick();
  }, [onClick, sound]);

  return (
    <Image
      {...props}
      src={chipsPoker[variant]}
      alt={`chip-poker-${variant}`}
      onClick={handleClickChip}
      className={cn(
        hover &&
          chipPokerVariants({
            variant
          }),
        className,
        selected && `scale-[1.4] ${DropShadowChipPoker[variant]}`
      )}
    />
  );
};

export default ChipPoker;
