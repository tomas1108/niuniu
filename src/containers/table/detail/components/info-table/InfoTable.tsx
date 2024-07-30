import { Typography } from "~/components";

const { Text } = Typography;

type InfoTableProps = {};

const InfoTable: React.FC<InfoTableProps> = () => {
  return (
    <div className="bg-[#3F47CB] p-4  min-w-[200px] shadow-md rounded-xl absolute top-4 left-4 z-auto flex flex-col gap-3">
      <Text className="text-white">TABLE:</Text>
      <Text className="text-white">ID:</Text>
      <Text className="text-white">MONEY:</Text>
      <Text className="text-white">LIMIT:</Text>
    </div>
  );
};

export default InfoTable;
