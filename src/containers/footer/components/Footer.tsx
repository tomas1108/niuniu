import Image from "next/image";

import { _IMAGE_URL } from "~/constants/global.const";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="border-gray-600 border-b">
                <div className="max-w-[1500px] container">
                    <div className="flex flex-col lg:flex-row justify-between py-5 ">
                        <div className="flex flex-row gap-2 items-center justify-center lg:justify-start text-xs md:text-base">
                            <a href="#">Về chúng tôi</a>
                            <span>|</span>
                            <a href="#">Trung tâm trợ giúp</a>
                            <span>|</span>
                            <a href="#">Phương Án Đại Lý</a>
                            <span>|</span>
                            <a href="#">Tải APP</a>
                        </div>
                        <div className="mt-5 lg:mt-0">
                            <span className="footer-title">Nhà tài trợ</span>
                            <div className="footer-sponsors">
                                <Image src={_IMAGE_URL.visa} alt="Visa" width={30} height={30} />
                                <Image
                                    src={_IMAGE_URL.mastercard}
                                    alt="Mastercard"
                                    width={30}
                                    height={30}
                                />
                                <Image src={_IMAGE_URL.amex} alt="Amex" width={30} height={30} />
                                <Image
                                    src={_IMAGE_URL.discover}
                                    alt="Discover"
                                    width={30}
                                    height={30}
                                />
                            </div>
                        </div>
                        <div className="footer-section">
                            <span className="footer-title">
                                Đơn vị tiền tệ được chấp nhận
                            </span>
                            <div className="footer-sponsors">
                                <Image
                                    src={_IMAGE_URL.money1}
                                    alt="Bitcoin"
                                    width={30}
                                    height={30}
                                />
                                <Image
                                    src={_IMAGE_URL.money2}
                                    alt="Ethereum"
                                    width={30}
                                    height={30}
                                />
                                <Image
                                    src={_IMAGE_URL.money3}
                                    alt="USDT"
                                    width={30}
                                    height={30}
                                />
                                <Image
                                    src={_IMAGE_URL.money4}
                                    alt="Ripple"
                                    width={30}
                                    height={30}
                                />
                                <Image
                                    src={_IMAGE_URL.money5}
                                    alt="Litecoin"
                                    width={30}
                                    height={30}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="max-w-[1500px] container">
                <div className="flex flex-col md:flex-row justify-between mt-3">
                    <div className="flex flex-col md:flex-row md:gap-3 justify-center items-center">
                        <Image
                            src={_IMAGE_URL.logoHeader}
                            alt="Logo"
                            width={1}
                            height={1}
                            sizes="100vw"
                            style={{ width: "100%", height: "100%" }}
                            className="max-w-14"
                        />
                        <div className="mt-2">
                            <p>&copy; 2024 All Rights Reserved</p>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between items-center py-3 gap-5">
                        <div className="contact-item">
                            <Image
                                src={_IMAGE_URL.telegram}
                                alt="Telegram"
                                width={24}
                                height={24}
                            />
                            <span>Telegram ID: @트원스</span>
                        </div>
                        <div className="contact-item">
                            <Image
                                src={_IMAGE_URL.kakao}
                                alt="Kakao Talk"
                                width={24}
                                height={24}
                            />
                            <span>Kakao Talk ID: @트원스</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

Footer.displayName = 'Footer';
export default Footer; 