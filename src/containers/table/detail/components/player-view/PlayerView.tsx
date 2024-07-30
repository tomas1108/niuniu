import { UsersRound } from "lucide-react";
import { Typography } from "~/components";
import { formatCurrency, moneyChip } from "~/utils/common";
import { useCallback, useId, useState } from "react";
import ItemPlayerView from "./ItemPlayerView";
import settingBetStore from "~/store/zustand/settingBetStore";
import { Player, Slot } from "~/constants/chip";
import DialogError from "../DialogError";

const { Text } = Typography;

type PlayerViewProps = {
  keyPlayer: Player;
  namePlayer: string;
  userCount: number;
};

const PlayerView: React.FC<PlayerViewProps> = ({
  keyPlayer,
  namePlayer,
  userCount
}) => {
  const [openError, setOpenError] = useState(false);

  const id = useId();

  const { chipSelected, players, setPlayers } = settingBetStore();

  const playSoundClick = () => {
    new Audio("/sounds/dropping-chip-2.wav").play();
  };

  const onHandleClickItemPlayer = useCallback(
    (params: { slot: Slot; keyPlayer: Player }) => {
      if (!chipSelected) {
        return setOpenError(true);
      }
      playSoundClick();
      const { slot, keyPlayer } = params;
      const player = players[keyPlayer];
      const chips = player[slot].chips;
      chips.push({
        chipType: chipSelected,
        value: moneyChip(chipSelected),
        id: chips.length + 1
      });
      setPlayers({ name: keyPlayer, data: { ...player, [slot]: { chips } } });
    },
    [players, chipSelected, setPlayers]
  );

  return (
    <div className="grid grid-rows-4 gap-[2px]" id={id}>
      <div className="bg-[#3F47CB] flex justify-between items-center px-8 py-0">
        <Text className="text-[#221B7B] text-xl">
          {/* {formatCurrency(1231108)} */}
        </Text>
        <Text className="text-white text-2xl uppercase">{namePlayer}</Text>
        <div className="flex flex-row gap-3 items-center">
          {/* <UsersRound size={24} color="#221B7B" />
          <Text className="text-[#221B7B] text-xl">{userCount}</Text> */}
        </div>
      </div>
      <ItemPlayerView
        name="Super"
        slot="super"
        keyPlayer={keyPlayer}
        chips={players[keyPlayer].super.chips}
        onHandleClickItemPlayer={onHandleClickItemPlayer}
      />
      <ItemPlayerView
        name="Double"
        slot="double"
        keyPlayer={keyPlayer}
        chips={players[keyPlayer].double.chips}
        onHandleClickItemPlayer={onHandleClickItemPlayer}
      />
      <ItemPlayerView
        name="EVENT"
        slot="event"
        keyPlayer={keyPlayer}
        chips={players[keyPlayer].event.chips}
        onHandleClickItemPlayer={onHandleClickItemPlayer}
      />
      <DialogError
        open={openError}
        title="Not found chip poker"
        description="You have not chosen a price to bet. Please choose a chip to bet."
        onOk={() => setOpenError(false)}
        onClose={setOpenError}
      />
    </div>
  );
};

export default PlayerView;
