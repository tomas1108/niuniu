import { useCallback } from "react";
import { ChipPoker } from "~/components";
import { ChipPokerType } from "~/constants/chip";
import settingBetStore from "~/store/zustand/settingBetStore";

type ChipsViewProps = {};

const chipsPoker: ChipPokerType[] = [
  "chip10K",
  "chip30K",
  "chip50K",
  "chip100K",
  "chip500K",
  "chip1M"
];

const ChipsView: React.FC<ChipsViewProps> = () => {
  const { chipSelected, setChipSelected } = settingBetStore();

  const handleClickChip = useCallback((chip: ChipPokerType) => {
    setChipSelected(chip);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-row gap-3 bg-[#222222] p-4">
      {chipsPoker.map((chip, index) => (
        <ChipPoker
          id={`chip-${chip}`}
          variant={chip}
          sound
          hover
          onClick={handleClickChip.bind(null, chip)}
          selected={chipSelected === chip}
          key={index}
          width={46}
          height={46}
        />
      ))}
    </div>
  );
};

export default ChipsView;
