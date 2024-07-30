"use client";

import {
  ChipsView,
  PlayerView,
  ActionsView,
  TimeProgress,
  InfoTable,
  ResultTable
} from "./components";

type TableDetailViewProps = {};

const TableDetailView: React.FC<TableDetailViewProps> = () => {
  return (
    <div className="w-screen h-screen flex justify-end items-start flex-col">
      <div className="w-full h-full">
        <iframe
          src="https://customer-ahyi3qofkokk3ex2.cloudflarestream.com/7e179467f57d9c0bf8336c89dccf6a2e/iframe"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          width="100%"
          height="100%"
          id="iframeLive"
          allowFullScreen={true}
          className="top-0 left-0 w-full h-full z-1 m-0 p-0"
        ></iframe>
        <div className="m-2 absolute">
          <TimeProgress />
        </div>
      </div>
      <InfoTable />

      <div className="grid grid-cols-3 w-full gap-[2px]">
        <PlayerView keyPlayer="player1" namePlayer="PLAYER 1" userCount={1} />
        <PlayerView keyPlayer="player2" namePlayer="PLAYER 2" userCount={1} />
        <PlayerView keyPlayer="player3" namePlayer="PLAYER 3" userCount={1} />
      </div>
      <div className="flex flex-row">
        <ResultTable />
        <div className="flex flex-col">
          <ChipsView />
          <ActionsView />
        </div>
      </div>
    </div>
  );
};

export default TableDetailView;
