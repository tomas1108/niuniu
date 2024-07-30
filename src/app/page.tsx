import Image from "next/image";
import Slot from "~/components/slot/Slot";
import { getVendorList } from "~/action/vendors.action";
import { BannerSlider } from "~/components";
import { _IMAGE_URL } from "~/constants/global.const";

const icon = {
  telegram: "/images/icon/Vector.png",
  kakao: "/images/icon/headphones.png",
  user: "/images/icon/user.png",
  coin: "/images/icon/coin.png",
};

const winningPlayers = [
  {
    name: "Alex Cupper",
    amount: "$100.00",
    icon: "/images/chip/chip-1M-x3.png",
  },
  {
    name: "David Copper",
    amount: "$100.00",
    icon: "/images/chip/chip-1M-x3.png",
  },
  { name: "Jasmine", amount: "$100.00", icon: "/images/chip/chip-1M-x3.png" },
  {
    name: "Alex Cupper",
    amount: "$100.00",
    icon: "/images/chip/chip-1M-x3.png",
  },
  {
    name: "Alex Cupper",
    amount: "$100.00",
    icon: "/images/chip/chip-1M-x3.png",
  },
];

export default async function Home() {

  const slotData = await getVendorList();
  if (!slotData?.success) return {};

  const handleLogin = () => {
    window.location.href = "/login";
  }

  return (
    <>
      <BannerSlider />
      <main className="mainContent">
        <div className="max-w-[1500px] container">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="flex flex-row">
              <div className="w-[62px]">
                <Image
                  src={icon.coin}
                  alt="Coin"
                  width={1}
                  height={1}
                  sizes="100vw"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className="flex flex-col text-right text-2xl font-bold italic">
                <span>Wining</span>
                <span>Now!</span>
              </div>
            </div>
            <div className="mainContent-best-players flex flex-row justify-center items-center bg-second py-2.5 px-6 rounded-[30px] md:ml-5 mt-4 md:mt-0">
              <div className="flex flex-row gap-6">
                <div className="flex-[1_0_5%] hidden md:block">
                  <Image
                    src={icon.user}
                    alt="Trophy"
                    width={42}
                    height={42}
                    sizes="100vw"
                  />
                </div>
                <div className="flex flex-row flex-wrap gap-x-5 gap-y-1">
                  {winningPlayers.map((player, index) => (
                    <div
                      className="flex flex-row justify-center items-center gap-3"
                      key={index}
                    >
                      <div className="w-9 border border-gray-600 rounded-full p-[3px]">
                        <Image
                          src={player.icon}
                          alt="Player Icon"
                          width={1}
                          height={1}
                          sizes="100vw"
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                      <div className="flex flex-row text-sm gap-2">
                        <h4>{player.name}</h4>
                        <span>{player.amount}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Slot
            data={slotData}
          />
        </div>
      </main>
    </>
  );
}
