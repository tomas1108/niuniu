"use client";

import { cn } from "~/lib/utils";
import { PokerCards, PostTable, QualityItem } from "./components";
import { Button } from "@headlessui/react";
import Image from "next/image";
import betResultStore from "~/store/zustand/betResultStore";

type BestResultViewProps = {};

const titleVariants = cn("text-semibold text-2xl");
const buttonVariants = cn(
  "rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:opacity-[0.8]"
);

const BestResultView: React.FC<BestResultViewProps> = () => {
  const { typeEdit, resultsConfirm, resetAll } = betResultStore();
  return (
    <div className="grid-cols-3 grid w-screen min-h-screen p-4 gap-4">
      <div className="flex flex-row gap-4 w-full">
        <div className="flex flex-cols flex-wrap gap-3 justify-center w-full h-full">
          <div className="w-full flex flex-col gap-3">
            <span className={cn(titleVariants)}>Ván cược</span>
            <Button onClick={resetAll} className={cn(buttonVariants)}>
              Ván mới
            </Button>
            <Button
              onClick={resetAll}
              className={cn(buttonVariants, "bg-red-500 ")}
            >
              Huỷ kết quả
            </Button>
            <Button className={cn(buttonVariants)}>Gửi kết quả</Button>
          </div>
          <QualityItem
            title="Dealer"
            quality={resultsConfirm?.dealer?.quality as undefined}
            type="dealer"
            isChecked={typeEdit === "dealer"}
            cards={resultsConfirm?.dealer?.cards}
          />
          <QualityItem
            title="Player 1"
            quality={resultsConfirm?.player1?.quality as undefined}
            type="player1"
            isChecked={typeEdit === "player1"}
            cards={resultsConfirm?.player1?.cards}
          />
          <QualityItem
            title="Player 2"
            quality={resultsConfirm?.player2?.quality as undefined}
            type="player2"
            isChecked={typeEdit === "player2"}
            cards={resultsConfirm?.player2?.cards}
          />
          <QualityItem
            title="Player 3"
            quality={resultsConfirm?.player3?.quality as undefined}
            type="player3"
            isChecked={typeEdit === "player3"}
            cards={resultsConfirm?.player3?.cards}
          />
        </div>
      </div>
      <PostTable />
      <PokerCards />
    </div>
  );
};

export default BestResultView;
