import Footer from "@/components/common/Footer/page";
import Header from "@/components/common/Header/page";
import NextImg from "@/components/common/next-img";

export default function Home() {
  return (
    <div>
      <Header />
      <section className="mt-[117px] mb-[168px]">
        <div className="container">
          <h1 className="text-[#545454] text-[102px] font-bold -tracking-[3px] leading-none w-[80%]">
            Obsessed with Making a Difference
          </h1>
          <div className="flex items-center justify-between mt-[155px]">
            <span className="text-[32px] -tracking-[1px] text-[#545454]">
              Homepage
            </span>
            <div className="border border-[#333] h-[1px] w-[200px]"></div>
            <div className="relative w-[275px] h-[36px]">
              <NextImg
                src="/assets/icon/Horizontal Logo.svg"
                alt="BannerHeader"
                objectFit="cover"
              />
            </div>
            <div className="border border-[#333] h-[1px] w-[255px]"></div>
            <span className="text-[32px] -tracking-[1px] text-[#545454] leading-[140%]">
              © 2024
            </span>
          </div>
        </div>
      </section>
      <section className="relative">
        <div className="relative w-full h-[675px] bg-[rgba(23,23,23,0.50)]">
          <NextImg
            src="/assets/image/Rectangle 176.png"
            alt="BannerHeader"
            objectFit="cover"
          />
        </div>
        <div className="absolute inset-0 bg-[rgba(23,23,23,0.50)]" />
        <p className="absolute inset-0 flex items-center justify-center text-[64px] font-medium -tracking-[2px] text-white mx-auto w-[50%] text-center leading-[72px]">
          Impacting Lives and <br /> Doing Good in the World
        </p>
      </section>
      <section className="mt-[165px] mb-[182px]">
        <div className="container">
          <div className="flex items-center justify-between">
            <span className="text-[64px] font-medium -tracking-[2px] text-[#333] w-[33%] leading-[72px]">
              Building a New Company
            </span>
            <span className="text-[#000] font-light text-[24px] leading-[180%] -tracking-[0.72px] w-[34%]">
              For the People, for Humanity, for Planet Earth A caring,
              considerate, and impactful company.
            </span>
          </div>
          <div className="flex items-center gap-6 mt-[72px]">
            <div className="relative w-[70%] h-[640px]">
              <NextImg
                src="/assets/image/Rectangle 174.png"
                alt="BannerHeader"
                objectFit="cover"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative w-[411px] h-[313px]">
                <NextImg
                  src="/assets/image/Rectangle 191.png"
                  alt="BannerHeader"
                  objectFit="cover"
                />
              </div>
              <div className="relative w-[411px] h-[313px]">
                <NextImg
                  src="/assets/image/Rectangle 192.png"
                  alt="BannerHeader"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-[176px]">
        <div className="container">
          <h2 className="text-[#333] text-[64px] font-medium -tracking-[1.92px] leading-[72px]">
            Transforming Dreams into Reality
          </h2>
          <div className="grid grid-cols-2 gap-[52px] mt-[100px]">
            <div className="relative w-[full] h-[420px]">
              <NextImg
                src="/assets/image/Rectangle 166.png"
                alt="BannerHeader"
                objectFit="cover"
              />
            </div>
            <div className="flex flex-col gap-[44px]">
              <p className="text-[#000] text-[32px] font-medium -tracking-[0.96px] w-[70%]">
                What does it mean to build a dream so big that a whole continent
                can be transformed? What does it mean to achieve the
                unthinkable?
              </p>
              <span className="text-[#000] text-[24px] font-light -tracking-[0.72px] w-[75%]">
                By 2050, the UN estimates that Africa will have a population of
                close to 2.5 billion people, nearly double the 2019 population
                of 1.3 billion.
              </span>
            </div>
          </div>
          <div className="mt-[100px] grid grid-cols-3 gap-6">
            <div>
              <div className="relative w-full h-[303px]">
                <NextImg
                  src="/assets/image/Rectangle 167.png"
                  alt="BannerHeader"
                  objectFit="cover"
                />
              </div>
              <p className="text-[#333] text-[32px] font-semibold -tracking-[0.96px] leading-none mt-[44px] mb-7">
                The question is:
              </p>
              <p className="text-[#000] text-2xl font-light -tracking-[0.72px]">
                How do we provide for, educate and feed all these people? How do
                we create jobs and a thriving, nurturing environment for growth
                and impact
              </p>
            </div>
            <div>
              <div className="relative w-full h-[303px]">
                <NextImg
                  src="/assets/image/Rectangle 168.png"
                  alt="BannerHeader"
                  objectFit="cover"
                />
              </div>
              <p className="text-[#333] text-[32px] font-semibold -tracking-[0.96px] leading-none mt-[44px] mb-7">
                We are building:
              </p>
              <p className="text-[#000] text-[24px] font-light -tracking-[0.72px]">
                the most innovative, transformative, and impactful company the
                world has ever seen to help address these challenges head-on and
                build a better Africa for all
              </p>
            </div>
            <div>
              <div className="relative w-full h-[303px]">
                <NextImg
                  src="/assets/image/Rectangle 169.png"
                  alt="BannerHeader"
                  objectFit="cover"
                />
              </div>
              <p className="text-[#333] text-[32px] font-semibold -tracking-[0.96px] leading-none mt-[44px] mb-7">
                Join us as:
              </p>
              <p className="text-[#000] text-2xl font-light -tracking-[0.72px]">
                we dare to do the unthinkable and transform our continent and
                our people’s lives for the better
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative">
        <div className="relative w-full h-[675px]">
          <NextImg
            src="/assets/image/Background2.png"
            alt="BannerHeader"
            objectFit="cover"
          />
        </div>
        <p className="absolute top-[20%] left-1/2 -translate-x-1/2 flex items-center justify-center text-[64px] font-medium -tracking-[2px] text-white mx-auto w-[75%] text-center leading-[72px]">
          Opportunity in Every Challenge <br /> There is opportunity in every
          challenge and hope in every opportunity.
        </p>
      </section>
      <section className="mt-[165px] mb-[245px]">
        <div className="container">
          <div className="flex items-center justify-between">
            <span className="text-[32px] -tracking-[1px] text-[#545454]">
              Challenge
            </span>
            <div className="border border-[#333] h-[1px] w-[200px]"></div>
            <div className="relative w-[275px] h-[36px]">
              <NextImg
                src="/assets/icon/Horizontal Logo.svg"
                alt="BannerHeader"
                objectFit="cover"
              />
            </div>
            <div className="border border-[#333] h-[1px] w-[255px]"></div>
            <span className="text-[32px] -tracking-[1px] text-[#545454] leading-[140%]">
              © 2024
            </span>
          </div>
        </div>
      </section>
      <section>
        <div className="container mb-[100px]">
          <h2 className="text-[#333] text-[64px] font-medium leading-[72px] -tracking-[1.92px] w-[65%]">
            The Challenge: Food is Too Expensive for 99% of Africans
          </h2>
        </div>
        <div className="relative w-full h-[675px]">
          <NextImg
            src="/assets/image/Background3.png"
            alt="BannerHeader"
            objectFit="cover"
          />
        </div>
        <div className="container flex flex-col gap-8 mt-[93px]">
          <p className="text-[#000] text-[24px] font-light leading-[180%] -tracking-[0.72px]">
            Over the past few decades, Africa’s food import bill has more than
            tripled, reaching about US$50 billion annually. It is estimated to
            reach US$110 billion by 2025. Much of this imported food could be
            produced locally, creating much-needed jobs and incomes for the
            continent’s youth and smallholder farmers.
          </p>
          <p className="text-[#000] text-[24px] font-light leading-[180%] -tracking-[0.72px]">
            With the right investments and by promoting inclusive value chain
            development (iVCD) and better regional food market integration,
            Africa has the potential to reduce its reliance on imports and
            foster economic growth within its own borders.
          </p>
        </div>
      </section>
      <section className="mt-[165px] mb-[200px]">
        <div className="container">
          <div className="flex items-center justify-between">
            <span className="text-[32px] -tracking-[1px] text-[#545454]">
              Our Dream
            </span>
            <div className="border border-[#333] h-[1px] w-[200px]"></div>
            <div className="relative w-[275px] h-[36px]">
              <NextImg
                src="/assets/icon/Horizontal Logo.svg"
                alt="BannerHeader"
                objectFit="cover"
              />
            </div>
            <div className="border border-[#333] h-[1px] w-[255px]"></div>
            <span className="text-[32px] -tracking-[1px] text-[#545454] leading-[140%]">
              © 2024
            </span>
          </div>
        </div>
      </section>
      <section className="mt-[245px]">
        <div className="container">
          <h2 className="text-[#333] text-[64px] font-medium -tracking-[1.92px] leading-[72px]">
            We Are Investing in Agriculture <br /> & Food Production
          </h2>
          <div className="grid grid-cols-2 mt-[115px]">
            <div className="relative w-[full] h-[580px]">
              <NextImg
                src="/assets/image/Rectangle 193.png"
                alt="BannerHeader"
                objectFit="cover"
              />
            </div>
            <p className="text-[#000] text-[24px] font-light -tracking-[0.72px] w-[80%] ml-[132px]">
              We believe that food should be accessible and affordable for
              everyone, and that no one should be dying of hunger and
              starvation. To make this vision a reality, we are investing in
              agriculture and the food production value chain at every stage.
            </p>
          </div>
          <div className="grid grid-cols-2 mt-[168px]">
            <p className="text-[#000] text-[24px] font-light -tracking-[0.72px] w-[80%]">
              Our focus is on transforming the agricultural value chain at three
              levels – farmer, market, and cluster. This approach is central to
              achieving food security in Africa. By helping the continent become
              self-sufficient in food production, we aim to reduce Africa's food
              import bill, ultimately bringing down the cost of food for
              everyday customers and consumers like you and me.
            </p>
            <div className="relative w-[full] h-[580px]">
              <NextImg
                src="/assets/image/Rectangle 194.png"
                alt="BannerHeader"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 mt-[115px]">
            <div className="relative w-[full] h-[580px]">
              <NextImg
                src="/assets/image/Rectangle 195.png"
                alt="BannerHeader"
                objectFit="cover"
              />
            </div>
            <p className="text-[#000] text-[24px] font-light -tracking-[0.72px] w-[80%] place-content-end ml-[132px]">
              Join us in transforming Africa’s agricultural potential into
              reality. Together, we can create a world where everyone thrives,
              everyone has access to food, and no one is left behind.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-[195px] mb-[238px]">
        <div className="container">
          <div className="flex items-center justify-between">
            <span className="text-[32px] -tracking-[1px] text-[#545454]">
              Hope and Endless
            </span>
            <div className="border border-[#333] h-[1px] w-[200px]"></div>
            <div className="relative w-[275px] h-[36px]">
              <NextImg
                src="/assets/icon/Horizontal Logo.svg"
                alt="BannerHeader"
                objectFit="cover"
              />
            </div>
            <div className="border border-[#333] h-[1px] w-[255px]"></div>
            <span className="text-[32px] -tracking-[1px] text-[#545454] leading-[140%]">
              © 2024
            </span>
          </div>
        </div>
      </section>
      <section>
        <div className="container flex justify-between">
          <h2 className="text-[#333] text-[64px] font-medium -tracking-[1.92px] leading-[72px]">
            Our Dream
          </h2>
          <p className="text-[#000] text-[24px] font-light -tracking-[0.72px] w-[45%]">
            Is to turn Africa into the land of opportunity, where everyone has a
            chance to reach their highest potential, contribute to society &
            live a life fulfilled.
          </p>
        </div>
      </section>
      <section className="mt-[100px] mb-[243px]">
        <div className="relative w-full h-[675px]">
          <NextImg
            src="/assets/image/Background4.png"
            alt="BannerHeader"
            objectFit="cover"
          />
        </div>
      </section>
      <section className="mb-[394px]">
        <div className="container">
          <div className="grid grid-cols-2 mt-[168px]">
            <div className="flex flex-col gap-20 w-[90%]">
              <h2 className="text-[#333] text-[64px] font-medium -tracking-[1.92px] leading-[72px]">
                Welcome to Our World of Hope and Endless Possibilities
              </h2>
              <p className="text-[#000] text-[24px] font-light -tracking-[0.72px] ">
                Welcome to villageagriculture.com, where we are redefining the
                future of agriculture and food production. Our mission is to
                create a sustainable, inclusive, and prosperous future for all
                stakeholders through innovative practices and community-focused
                initiatives.
              </p>
            </div>
            <div className="relative w-[full] h-[748px]">
              <NextImg
                src="/assets/image/Background6.png"
                alt="BannerHeader"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>
	  <Footer/>
    </div>
  );
}
