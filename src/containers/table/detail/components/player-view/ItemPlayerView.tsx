import { useTransition, animated } from "@react-spring/web";
import { ChipPoker, Typography } from "~/components";
import { cn } from "~/lib/utils";
import { chipPointsOfSlot, formatCurrency } from "~/utils/common";
import { ChipPokerType, Player, Slot } from "~/constants/chip";
import { memo, useMemo } from "react";
import { isEmpty } from "lodash";

type ItemPlayerViewProps = {
  name: string;
  chips: { chipType: ChipPokerType; value: number; id: number }[];
  onHandleClickItemPlayer: ({
    slot,
    keyPlayer
  }: {
    slot: Slot;
    keyPlayer: Player;
  }) => void;
  slot: Slot;
  keyPlayer: Player;
};

const { Text } = Typography;

const TRANSITION_CONFIG = {
  from: { opacity: 0, transform: "translate3d(0, -40px, 0)" },
  enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
  leave: { opacity: 0, transform: "translate3d(0, -40px, 0)" }
};

const variantCommon = cn(
  "bg-[#1C3669] px-4 py-1 flex justify-between items-center cursor-pointer"
);

const variantHoverCommon = cn("hover:brightness-115 raise hover:z-[1000000]");

const ItemPlayerView: React.FC<ItemPlayerViewProps> = ({
  name,
  keyPlayer,
  chips,
  onHandleClickItemPlayer,
  slot
}) => {
  const transitionChips = useTransition(chips, TRANSITION_CONFIG);

  const point = useMemo(() => {
    switch (slot) {
      case "super":
        return 13;
      case "double":
        return 6;
      default:
        return 1;
    }
  }, [slot]);

  const playSoundClick = () => {
    new Audio("/sounds/dropping-chip-2.wav").play();
  };

  const handleOnClickItemPlayer = (params: {
    slot: Slot;
    keyPlayer: Player;
  }) => {
    playSoundClick();
    onHandleClickItemPlayer && onHandleClickItemPlayer(params);
  };

  if (slot === "event") {
    return (
      <div
        className={cn(
          variantCommon,
          variantHoverCommon,
          "cursor-pointer justify-center gap-3 w-full"
        )}
        onClick={handleOnClickItemPlayer.bind(null, { slot, keyPlayer })}
      >
        <Text className="text-white text-sm">
          {formatCurrency(
            chips.reduce((acc, chip) => acc + chip.value, 0) * point
          )}
        </Text>
        <Text className="text-linear-gradient inline-block  bg-clip-text text-xl">
          EVENT
        </Text>
        <div
          className={`flex flex-col relative h-full justify-center ${
            !isEmpty(chips) && "flex-1"
          }`}
        >
          {transitionChips((style, item, _transitionState, index) => {
            let styleClone =
              index % 8 === 0
                ? { ...style }
                : ({
                    ...style,
                    bottom: `${(index % 8) * 2}px`,
                    zIndex: index
                  } as any);
            const pointLeft = Math.floor(index / 8);
            styleClone =
              pointLeft === 0
                ? { ...styleClone }
                : { ...styleClone, left: `${32 * pointLeft}px` };
            return (
              <animated.div
                key={item.id}
                style={styleClone}
                className={cn(`absolute`)}
              >
                <ChipPoker
                  variant={
                    chipPointsOfSlot(slot, item.chipType) as ChipPokerVariant
                  }
                  width={38}
                  height={38}
                />
              </animated.div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-[2px]">
      <div
        className={cn(variantCommon, variantHoverCommon, "cursor-pointer")}
        onClick={handleOnClickItemPlayer.bind(null, { slot, keyPlayer })}
      >
        <Text className="text-white text-xs">
          {formatCurrency(
            chips.reduce((acc, chip) => acc + chip.value, 0) * point
          )}
        </Text>
        <Text
          dangerouslySetInnerHTML={{
            __html: name
          }}
          className="bg-gradient-to-r from-[#F2ECB6] via-[#A96F44] to-[#F2ECB6] inline-block text-transparent bg-clip-text text-xl"
        />
        <div className="flex flex-col relative h-full justify-center w-[52px]">
          {transitionChips((style, item, _transitionState, index) => {
            const styleClone =
              index === 0
                ? { ...style }
                : { ...style, bottom: `${index * 8}px`, zIndex: index };
            return (
              <animated.div
                key={item.id}
                style={styleClone}
                className={cn(`absolute`)}
              >
                <ChipPoker variant={item.chipType} width={42} height={42} />
              </animated.div>
            );
          })}
        </div>
      </div>
      <div className={cn(variantCommon, "gap-2 justify-start")}>
        <Text className="text-white text-2xl">{`X${point}`}</Text>
        <div className="flex flex-col relative w-full h-full justify-center">
          {transitionChips((style, item, _transitionState, index) => {
            let styleClone =
              index % 8 === 0
                ? { ...style }
                : ({
                    ...style,
                    bottom: `${(index % 8) * 8}px`,
                    zIndex: index
                  } as any);
            const pointLeft = Math.floor(index / 8);
            styleClone =
              pointLeft === 0
                ? { ...styleClone }
                : { ...styleClone, left: `${32 * pointLeft}px` };
            return (
              <animated.div
                key={item.id}
                style={styleClone}
                className={cn(`absolute`)}
              >
                <ChipPoker
                  variant={
                    chipPointsOfSlot(slot, item.chipType) as ChipPokerVariant
                  }
                  width={38}
                  height={38}
                />
              </animated.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default memo(ItemPlayerView);
