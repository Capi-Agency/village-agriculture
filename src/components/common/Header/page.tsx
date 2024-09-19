import NextImg from "../next-img";

export default function Header() {
  return (
    <div className="relative">
      <div className="w-full h-[782px]">
        <NextImg
          src="/assets/image/bg-header.png"
          alt="Header"
          objectFit="cover"
        />
      </div>
      <div className="bg-white rounded-full absolute top-14 px-8 py-5 left-[50%] -translate-x-1/2 w-[74%]">
        <div className="flex items-center justify-between">
          <div className="relative w-[275px] h-[36px]">
            <NextImg
              src="/assets/icon/Horizontal Logo.svg"
              alt="BannerHeader"
              objectFit="cover"
            />
          </div>
          <div className="flex items-center gap-10">
            <select name="" id="">
              <option value="">Eng</option>
              <option value="">Vie</option>
            </select>
            <div className="relative h-[27px] w-[27px]">
              <NextImg
                src="/assets/icon/density_medium.svg"
                alt="Header"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
