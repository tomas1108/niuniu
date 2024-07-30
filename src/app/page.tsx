// "use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Slot from "~/components/slot";
// import { getVendorList } from "~/action/vendors.action";

// Dữ liệu ảnh
const Logo = {
  logoHeader: "/icons/logo.svg",
  logo1: "/images/logo/logo1.png",
  logo2: "/images/logo/logo2.png",
  logo3: "/images/logo/logo3.png",
  logo4: "/images/logo/logo4.png",
  logo5: "/images/logo/logo5.png",
  logo6: "/images/logo/logo6.png",
};

const BackGround = {
  main: "/images/background/main_background.png",
  sub1: "/images/background/sub_background1.png",
  sub2: "/images/background/sub_background2.png",
};

const flags = [
  "/images/flags/vietnam.png",
  "/images/flags/ame.png",
  "/images/flags/china.png",
  "/images/flags/japan.png",
  "/images/flags/korea.png",
];

const icon = {
  telegram: "/images/icon/Vector.png",
  kakao: "/images/icon/headphones.png",
  user: "/images/icon/user.png",
  coin: "/images/icon/coin.png",
};

const suplier = {
  visa: "/images/logo/Visa.png",
  mastercard: "/images/logo/Mastercard.png",
  amex: "/images/logo/Amex.png",
  discover: "/images/logo/Discover.png",
};

const currency = {
  money1: "/images/logo/money1.png",
  money2: "/images/logo/money2.png",
  money3: "/images/logo/money3.png",
  money4: "/images/logo/money4.png",
  money5: "/images/logo/money5.png",
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
  // const [currentIndex, setCurrentIndex] = useState(0);
  const banners = [
    "/images/banner/banner1.jpg",
    "/images/banner/banner2.jpg",
    "/images/banner/banner3.jpg",
    "/images/banner/banner4.jpg",
  ];

  // const nextSlide = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  // };

  // const prevSlide = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? banners.length - 1 : prevIndex - 1
  //   );
  // };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextSlide();
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);

  // const slotData = await getVendorList();
  // if (!slotData?.success) return {};
  // console.log(slotData);

  return (
    <>
      <header className="w-full py-9 text-white">
        <div className="max-w-[1500px] container">
          <div className="headerContent">
            <div className="logo">
              <Image src={Logo.logoHeader} alt="Logo" width={80} height={40} />
            </div>
            <div className="language">
              <span>Language</span>
              {flags.map((flag, index) => (
                <Image
                  key={index}
                  src={flag}
                  alt={`Flag ${index}`}
                  width={24}
                  height={24}
                  className="flagIcon"
                />
              ))}
            </div>
            <nav className="nav">
              <a href="#">Trang chủ</a>
              <a href="#">Thông báo</a>
              <a href="#">Tư vấn & góp ý kiến</a>
              <a href="#">Nạp & Rút tiền</a>
            </nav>
            <div className="flex flex-row gap-4">
              <button className="w-28 h-10 rounded-[8px] box-border header-btn-login">
                <span className="header-btn-login-text">Đăng Nhập</span>
              </button>
              <button className="w-28 h-10 rounded-[8px] header-btn-signup text-black">
                Đăng Ký
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="banner">
        <div className="carousel">
          {/* <Image
            src={banners[currentIndex]}
            alt="Banner"
            layout="fill"
            objectFit="cover"
          /> */}

          <div className="bannerText">
            ★★★ Nó hiện có sẵn bình thường. ★★★ Nó hiện có sẵn bình thường. ★★★
            Nó hiện có sẵn bình thường.
          </div>
          {/* <button className="prev" onClick={prevSlide}>
            &#10094;
          </button>
          <button className="next" onClick={nextSlide}>
            &#10095;
          </button> */}
        </div>
      </section>

      <main className="mainContent">
        <div className="max-w-[1500px] container">
          <div className="flex flex-row justify-center items-center">
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
            <div className="mainContent-best-players flex flex-row justify-center items-center bg-second py-2.5 px-6 rounded-[30px] ml-5">
              <div className="flex flex-row gap-6">
                <div className="w-[42px] h-[42px]">
                  <Image
                    src={icon.user}
                    alt="Trophy"
                    width={1}
                    height={1}
                    sizes="100vw"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="flex flex-row flex-wrap gap-6">
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

     
        </div>
      </main>

      <footer className="footer">
        <div className="border-gray-600 border-b">
          <div className="max-w-[1500px] container">
            <div className="flex flex-row justify-between py-5 ">
              <div className="footer-links">
                <a href="#">Về chúng tôi</a>
                <span>|</span>
                <a href="#">Trung tâm trợ giúp</a>
                <span>|</span>
                <a href="#">Phương Án Đại Lý</a>
                <span>|</span>
                <a href="#">Tải APP</a>
              </div>
              <div className="footer-section">
                <span className="footer-title">Nhà tài trợ</span>
                <div className="footer-sponsors">
                  <Image src={suplier.visa} alt="Visa" width={30} height={30} />
                  <Image
                    src={suplier.mastercard}
                    alt="Mastercard"
                    width={30}
                    height={30}
                  />
                  <Image src={suplier.amex} alt="Amex" width={30} height={30} />
                  <Image
                    src={suplier.discover}
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
                    src={currency.money1}
                    alt="Bitcoin"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={currency.money2}
                    alt="Ethereum"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={currency.money3}
                    alt="USDT"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={currency.money4}
                    alt="Ripple"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={currency.money5}
                    alt="Litecoin"
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-gray-600 border-b">
          <div className="max-w-[1500px] container py-5">
            <div className="flex flex-row justify-center items-center gap-10">
              <Image src={Logo.logo1} alt="SEGA" width={176} height={50} />
              <Image src={Logo.logo2} alt="GENESIS" width={196} height={48} />
              <Image src={Logo.logo3} alt="ATARI" width={135} height={37} />
              <Image
                src={Logo.logo4}
                alt="Game Boy Advance"
                width={289}
                height={26}
              />
              <Image src={Logo.logo5} alt="MAME" width={147} height={42} />
              <Image src={Logo.logo6} alt="Game Boy" width={188} height={34} />
            </div>
          </div>
        </div>

        <div className="max-w-[1500px] container">
          <div className="footer-bottom">
            <div className="footer-logo">
              <Image src={Logo.logoHeader} alt="Logo" width={80} height={40} />
            </div>
            <div className="footer-info">
              <p>&copy; 2024 All Rights Reserved</p>
            </div>
            <div className="footer-contacts">
              <div className="contact-item">
                <Image
                  src={icon.telegram}
                  alt="Telegram"
                  width={24}
                  height={24}
                />
                <span>Telegram ID: @트원스</span>
              </div>
              <div className="contact-item">
                <Image
                  src={icon.kakao}
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
    </>
  );
}
