'use client';

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

type TProps = {
    data: any
}

const Slot = ({ data }: TProps) => {
    const [showSlots, setShowSlots] = useState<boolean>(false);

    const { message } = data;

    const handleClickSlot = () => {
        setShowSlots(true);
    }

    return (
        <>
            <div className={clsx(
                "grid grid-cols-1 md:grid-cols-2 md:gap-10 py-10 mt-0 mx-auto gap-y-8 md:gap-y-0 md:w-[80%]",
                !showSlots ? 'grid' : 'hidden'
            )}
            >
                <div className="relative">
                    <div className="max-w-[500px] mt-0 mx-auto">
                        <Image
                            src={`/images/background/bg-3.png`}
                            alt="slot"
                            width={500}
                            height={364}
                            sizes="100vw"
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                    <div className="absolute bottom-7 left-0 flex flex-col justify-center items-center w-full gap-2">
                        <h3 className="text-2xl md:text-xl lg:text-4xl text-yellow font-black">GAME NIU NIU</h3>
                        <h4 className="italic">Lựa chọn hàng đầu</h4>
                    </div>
                </div>

                <div className="relative">
                    <div className="max-w-[500px] mt-0 mx-auto">
                        <Image
                            src={`/images/background/bg-4.png`}
                            alt="slot"
                            width={500}
                            height={364}
                            sizes="100vw"
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                    <div className="absolute bottom-7 left-0 flex flex-col justify-center items-center w-full gap-2">
                        <h3 className="text-2xl md:text-xl lg:text-4xl text-yellow font-black">SLOT GAME</h3>
                        <button
                            className="subButton"
                            onClick={() => handleClickSlot()}
                        >CƯỢC NGAY</button>
                    </div>
                </div>
            </div>

            <div className={clsx(
                "grid grid-cols-1 md:grid-cols-2 md:gap-10 py-10 mt-0 mx-auto gap-y-8 md:w-[80%]",
                showSlots ? 'grid' : 'hidden'
            )}
            >
                {message.map((item: any, index: number) => (
                    <div key={index} className="relative">
                        <div className="max-w-[500px] mt-0 mx-auto">
                            <Image
                                src={`/images/background/bg-${index % 2 + 3}.png`}
                                alt="slot"
                                width={500}
                                height={364}
                                sizes="100vw"
                                style={{ width: "100%", height: "100%" }}
                            />
                        </div>
                        <div className="absolute bottom-7 left-0 flex flex-col justify-center items-center w-full gap-2">
                            <h3 className="text-2xl md:text-xl lg:text-4xl text-yellow font-black ">{item.name}</h3>
                            {index === 0 ? (
                                <h4 className="italic">Lựa chọn hàng đầu</h4>
                            ) : (
                                <button className="subButton">CƯỢC NGAY</button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

Slot.displayName = 'Slot';
export default Slot;
