import { cn } from "~/lib/utils";

type ResultTableProps = {};

const tdVariant = cn(
  "border border-[#CCCCCC] w-[52px] h-[36px] text-center text-white bg-[#1D3D6D] font-semibold"
);

const ResultTable: React.FC<ResultTableProps> = () => {
  return (
    <table className="table-auto border border-slate-500">
      <tbody>
        <tr>
          {["B", "NN", "N1", "N5", "N9", "N6", "N9", "K", "M1", "N1", "N2"].map(
            (item) => (
              <td className={cn(tdVariant)} key={item}>
                {item}
              </td>
            )
          )}
        </tr>
        <tr>
          {["B", "NN", "N1", "N5", "N9", "N6", "N9", "K", "M1", "N1", "N2"].map(
            (item) => (
              <td className={cn(tdVariant)} key={item}>
                {item}
              </td>
            )
          )}
        </tr>
        <tr>
          {["B", "NN", "N1", "N5", "N9", "N6", "N9", "K", "M1", "N1", "N2"].map(
            (item) => (
              <td className={cn(tdVariant)} key={item}>
                {item}
              </td>
            )
          )}
        </tr>
        <tr>
          {["B", "NN", "N1", "N5", "N9", "N6", "N9", "K", "M1", "N1", "N2"].map(
            (item) => (
              <td className={cn(tdVariant)} key={item}>
                {item}
              </td>
            )
          )}
        </tr>
      </tbody>
    </table>
  );
};

export default ResultTable;
