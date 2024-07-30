import Link from "next/link";
import Image from "next/image";
import { _FLAG_COUNTRY, _IMAGE_URL } from "~/constants/global.const";

type TProps = {};

const Header = ({ }: TProps) => {
  return (
    <header className="w-full py-9 text-white px-2">
      <div className="max-w-[1500px] container">
        <div className="flex flex-col lg:flex-row justify-between w-full">
          <div className="flex">
            <div className="logo w-1/2 order-1">
              <Link href="/">
                <Image
                  src={_IMAGE_URL.logoHeader}
                  alt="Logo"
                  width={80}
                  height={40}
                />
              </Link>
            </div>
            <div className="w-full order-4 flex flex-row gap-1">
              <span>Language</span>
              {_FLAG_COUNTRY.map((flag, index) => (
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
          </div>
          <nav className=" gap-5 w-full  md:w-auto  order-3">
            <Link href="/">Trang Chủ </Link>
            <a href="#">Thông báo</a>
            <a href="#">Tư vấn & góp ý kiến</a>
            <a href="#">Nạp & Rút tiền</a>
          </nav>
          <div className="flex flex-row gap-4  order-4">
            <button className="w-28 h-10 rounded-[8px] box-border header-btn-login">
              <Link href="/login">
                <span className="header-btn-login-text">Đăng Nhập</span>
              </Link>
            </button>

            <button className="w-28 h-10 rounded-[8px] header-btn-signup text-black">
              <Link href="/register">Đăng Ký</Link>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.displayName = "Header";
export default Header;
