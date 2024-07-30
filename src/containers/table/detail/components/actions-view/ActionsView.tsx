import { CircleCheckBig, CircleXIcon, RefreshCcw } from "lucide-react";
import { useCallback, useState } from "react";
import { Button } from "~/components";
import settingBetStore from "~/store/zustand/settingBetStore";
import DialogError from "../DialogError";
import { toast } from "react-toastify";

type ActionsViewProps = {};

const ActionsView: React.FC<ActionsViewProps> = () => {
  const [openErrorRetry, setOpenErrorRetry] = useState(false);
  const [openErrorSubmit, setOpenErrorSubmit] = useState(false);

  const { resetPlayers, prevPlayers, setPrevPlayers, players, retryPlayers } =
    settingBetStore();

  const onReset = useCallback(() => {
    resetPlayers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRetry = useCallback(() => {
    if (!prevPlayers) {
      return setOpenErrorRetry(true);
    }
    retryPlayers();
  }, [retryPlayers, prevPlayers]);

  const onSubmit = useCallback(() => {
    const isFail = Object.values(players).every(
      (player) =>
        player.super.chips.length === 0 &&
        player.event.chips.length === 0 &&
        player.double.chips.length === 0
    );
    if (isFail) {
      return setOpenErrorSubmit(true);
    }
    setPrevPlayers();
    toast.success("Success bet!", {
      position: "top-center"
    });
  }, [setPrevPlayers, players]);

  return (
    <div className="p-4 flex flex-col gap-3 bg-[#0C1F44]">
      <div className="grid grid-cols-2	 gap-3 w-full">
        <Button className="bg-[#CF4949] py-0 text-lg" onClick={onReset}>
          HUỶ CƯỢC
          <CircleXIcon size={18} color="white" />
        </Button>
        <Button className="bg-[#78C34A]  py-0 text-lg" onClick={onRetry}>
          ĐẶT LẠI
          <RefreshCcw size={18} color="white" />
        </Button>
      </div>
      <Button
        className="bg-linear-gradient text-[#0C1F44] text-lg py-0"
        onClick={onSubmit}
      >
        ĐẶT CƯỢC NGAY
        <CircleCheckBig size={18} color="#0C1F44" />
      </Button>
      <DialogError
        open={openErrorRetry}
        title="You haven't placed a bet yet"
        description="Place your bets now. To use this feature."
        onOk={() => setOpenErrorRetry(false)}
        onClose={setOpenErrorRetry}
      />
      <DialogError
        open={openErrorSubmit}
        title="Bet failed"
        description="There are no chips on the table yet. Please choose chips and bets."
        onOk={() => setOpenErrorSubmit(false)}
        onClose={setOpenErrorSubmit}
      />
    </div>
  );
};

export default ActionsView;
