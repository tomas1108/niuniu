import { cn } from "~/lib/utils";
import betResultStore from "~/store/zustand/betResultStore";

type PostTableProps = {};

const ratios = [
  {
    quality: "소카드",
    event: "1 x 1",
    double: "1 x 6 (5%)",
    super: "1 x 13 (5%)"
  },
  {
    quality: "포카드",
    event: "1 x 1",
    double: "1 x 5 (5%)",
    super: "1 x 12 (5%)"
  },
  {
    quality: "올픽쳐",
    event: "1 x 1",
    double: "1 x 4 (5%)",
    super: "1 x 11 (5%)"
  },
  {
    quality: "niuniu",
    event: "1 x 1",
    double: "1 x 3 (5%) 예)",
    super: "1 x 10 (5%)"
  },
  {
    quality: "niu9",
    event: "1 x 1",
    double: "1 x 2 (5%)",
    super: "1 x 9 (5%)"
  },
  {
    quality: "niu8",
    event: "1 x 1",
    double: "1 x 2 (5%)",
    super: "1 x 8 (5%)"
  },
  {
    quality: "niu7",
    event: "1 x 1",
    double: "1 x 2 (5%)",
    super: "1 x 7 (5%)"
  },
  {
    quality: "niu6",
    event: "1 x 0.5",
    double: "1 x 0.5",
    super: "1 x 6 (5%)"
  },
  {
    quality: "niu5",
    event: "1 x 1",
    double: "1 x 1",
    super: "1 x 5 (5%)"
  },
  {
    quality: "niu4",
    event: "1 x 1",
    double: "1 x 1",
    super: "1 x 4 (5%)"
  },
  {
    quality: "niu3",
    event: "1 x 1",
    double: "1 x 1",
    super: "1 x 3 (5%)"
  },
  {
    quality: "niu2",
    event: "1 x 1",
    double: "1 x 1",
    super: "1 x 2 (5%)"
  },
  {
    quality: "niu2",
    event: "1 x 1",
    double: "1 x 1",
    super: "1 x 1"
  },
  {
    quality: "High Card",
    event: "1 x 1",
    double: "1 x 1",
    super: "1 x 1"
  }
];

const tdVariant = cn("p-2");

const PostTable: React.FC<PostTableProps> = () => {
  const { typeEdit, results, setResults } = betResultStore();

  const onCheckPost = (ratio: any) => {
    setResults({ quality: ratio });
  };

  return (
    <div className="relative overflow-x-auto sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4"></th>
            <th scope="col" className={cn(tdVariant)}>
              카드 족보 (Chất bài)
            </th>
            <th scope="col" className={cn(tdVariant)}>
              이븐 (Even)
            </th>
            <th scope="col" className={cn(tdVariant)}>
              더블(Double)
            </th>
            <th scope="col" className={cn(tdVariant)}>
              슈퍼 (Super)
            </th>
          </tr>
        </thead>
        <tbody>
          {ratios.map((ratio, index) => {
            return (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      onClick={onCheckPost.bind(null, ratio.quality)}
                      id="checkbox-table-search-1"
                      type="checkbox"
                      checked={results?.[typeEdit!]?.quality === ratio.quality}
                      disabled={!typeEdit}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="sr-only">checkbox</label>
                  </div>
                </td>
                <th scope="row" className={cn("tdVariant")}>
                  {ratio.quality}
                </th>
                <td className={cn("tdVariant")}>{ratio.event}</td>
                <td className={cn("tdVariant")}>{ratio.double}</td>
                <td className={cn("tdVariant")}>{ratio.super}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PostTable;
