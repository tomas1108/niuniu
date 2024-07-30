'use client'

import Image from "next/image";

type TProps = {
    data: any
}

const Slot = async ({ data }: TProps) => {
    console.log(data);

    return (
        <div className="grid grid-cols-2 gap-28 py-10">
            <div className="relative aspect-616/466 max-w-[600px]">
                <Image
                    src="/images/background/bg-1.png"
                    alt="slot"
                    width={616}
                    height={466}
                    sizes="100vw"
                    style={{ width: "100%", height: "100%" }}
                />

                <div className="absolute bottom-7 left-0 flex flex-col justify-center items-center w-full gap-2">
                    <h3 className="text-4xl text-yellow font-black ">GAME NIU NIU</h3>
                    <h4 className="italic">Lựa chọn hàng đầu</h4>
                </div>
            </div>

            <div className="relative aspect-616/466 max-w-[600px]">
                <Image
                    src="/images/background/bg-2.png"
                    alt="slot"
                    width={616}
                    height={466}
                    sizes="100vw"
                    style={{ width: "100%", height: "100%" }}
                />
                <div className="absolute bottom-7 left-0 flex flex-col justify-center items-center w-full gap-2">
                    <h3 className="text-4xl text-yellow font-black ">SLOT GAME</h3>
                    <button className="subButton">CƯỢC NGAY</button>
                </div>
            </div>
        </div>
    )
}

Slot.displayName = 'Slot';
export default Slot; 