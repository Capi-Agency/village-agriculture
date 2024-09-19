import Header from "@/components/common/Header/page";
import NextImg from "@/components/common/next-img";

export default function Home() {
  return (
    <div>
      <Header />
      <section className="mt-[117px] mb-[168px]">
        <div className="container">
          <h1 className="text-[#545454] text-[102px] font-bold -tracking-[3px] leading-none">
            Obsessed with Making a Difference
          </h1>
          <div className="flex items-center justify-between mt-[155px]">
            <span className="text-[32px] -tracking-[1px] text-[#545454]">Homepage</span>
            <div className="border border-[#333] h-[1px] w-[200px]"></div>
            <div className="relative w-[275px] h-[36px]">
              <NextImg
                src="/assets/icon/Horizontal Logo.svg"
                alt="BannerHeader"
                objectFit="cover"
              />
            </div>
            <div className="border border-[#333] h-[1px] w-[255px]"></div>
            <span className="text-[32px] -tracking-[1px] text-[#545454] leading-[140%]">© 2024</span>
          </div>
        </div>
      </section>

    </div>
  );
}
