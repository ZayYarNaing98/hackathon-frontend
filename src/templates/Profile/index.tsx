import { Carousel } from "react-responsive-carousel";
import React, { useState } from "react";
import HomeNavbar from "../Home/components/Navbar";
import { twMerge } from "tailwind-merge";
import MemoGiftBox from "../Home/components/icons/GiftBox";
import MemoFacebookIcon from "../Home/components/icons/FacebookIcon";
import MemoTelegramIcon from "../Home/components/icons/TelegramIcon";
import MemoInstragramIcon from "../Home/components/icons/InstragramIcon";
import Card from "../Home/components/Card";
import MemoCompanyIcon from "../Home/components/icons/CompanyIcon";
import CompayCard from "../Home/components/Card/CompayCard";
import MemoFBSmallIcon from "../Home/components/icons/FBSmallIcon";
import MemoLocationSmallIcon from "../Home/components/icons/LocationSmallIcon";
import MemoMailSmallIcon from "../Home/components/icons/MailSmallIcon";
import MemoPhoneSmallIcon from "../Home/components/icons/PhoneSmallIcon";
import ImageOne from "@/assets/profile_banner.png";
import { useNavigate } from "react-router-dom";
import imageOne from "@/assets/1.png";
import imageTwo from "@/assets/2.png";
import imageThree from "@/assets/3.png";
import imageFour from "@/assets/4.png";

function RightIcon(
  props: React.SVGAttributes<SVGSVGElement> & { fillPath?: string },
) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 17 15" fill="none" {...props}>
      <path
        d="M10.361.333a1.107 1.107 0 00-1.583 0 1.107 1.107 0 000 1.584l4.416 4.416H1.111C.5 6.333 0 6.833 0 7.444c0 .612.5 1.112 1.111 1.112h12.111l-4.444 4.416a1.107 1.107 0 000 1.584c.222.222.5.333.778.333.277 0 .555-.111.777-.333l6.334-6.334a1.107 1.107 0 000-1.583L10.36.333z"
        fill={props.fillPath ? props.fillPath : "#fff"}
      />
    </svg>
  );
}

export const MemoRightIcon = React.memo(RightIcon);

const ProfileTemplate = () => {
  const mockData = [
    {
      id: 1,
      title: "Summber Sale",
      desc: "Rem ipsum sedubel anatis rem ipsum sedubel anatis",
      image: imageOne,
    },
    {
      id: 2,
      title: "Big Sale",
      desc: "Don't know where to start in?",
      image: imageTwo,
    },
    {
      id: 3,
      title: "Gift Voucher",
      desc: "The trainees can enroll from start today. don’t miss chance",
      image: imageThree,
    },
    {
      id: 4,
      title: "Giveaway Time",
      desc: "Don't know where to start in?",
      image: imageFour,
    },
  ];
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState("promotion");
  return (
    <div className="h-screen overflow-y-auto bg-[#F5F5F5] pb-52">
      <HomeNavbar />

      <div className="relative overflow-hidden ">
        <img className="h-[700px] w-full object-cover" src={ImageOne} />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="mx-auto max-w-[1620px]">
            <div className="flex">
              <div
                className={twMerge([
                  "flex h-[96px] w-[280px] items-stretch",
                  currentTab !== "promotion" && "p-2",
                ])}
              >
                <button
                  className={twMerge([
                    "flex flex-1 items-center justify-center rounded-t-md bg-[#F5F5F5] text-[20px] font-semibold not-italic text-[#8B3DFF]",
                    currentTab !== "promotion" && "rounded-md",
                  ])}
                  onClick={() => {
                    setCurrentTab("promotion");
                  }}
                >
                  <MemoGiftBox
                    width={"23px"}
                    height={"23px"}
                    className="mr-2"
                  />
                  Promotion
                </button>
              </div>
              <div
                className={twMerge([
                  "flex h-[96px] w-[280px] items-stretch",
                  currentTab !== "other_promotion" && "p-2",
                ])}
              >
                <button
                  className={twMerge([
                    "flex flex-1 items-center justify-center rounded-t-md bg-[#F5F5F5] text-[20px] font-semibold not-italic text-[#8B3DFF]",
                    currentTab !== "other_promotion" && "rounded-md",
                  ])}
                  onClick={() => {
                    setCurrentTab("other_promotion");
                  }}
                >
                  <MemoGiftBox
                    width={"23px"}
                    height={"23px"}
                    className="mr-2"
                  />
                  Other Promotion
                </button>
              </div>
              <div
                className={twMerge([
                  "flex h-[96px] w-[280px] items-stretch",
                  currentTab !== "about_company" && "p-2",
                ])}
              >
                <button
                  className={twMerge([
                    "flex flex-1 items-center justify-center rounded-t-md bg-[#F5F5F5] text-[20px] font-semibold not-italic text-[#8B3DFF]",
                    currentTab !== "about_company" && "rounded-md",
                  ])}
                  onClick={() => {
                    setCurrentTab("about_company");
                  }}
                >
                  <MemoCompanyIcon
                    width={"23px"}
                    height={"23px"}
                    className="mr-2"
                  />
                  About Company
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {currentTab === "promotion" && (
        <div className="mx-auto max-w-[1620px]">
          <div className="flex">
            <div className="flex-1">
              <h1 className="mb-6 mt-[100px] text-[40px] font-normal capitalize not-italic">
                Promotions Title
              </h1>
              <ul className="list-item list-disc">
                <li className="text-[20px]">
                  Lörem ipsum sedubel anatis.Lörem ipsum sedubel anatis.Lörem
                  ipsum sedubel anatisLörem ipsum sedubel anatis.
                </li>
                <li className="text-[20px]">
                  Lörem ipsum sedubel anatis.Lörem ipsum sedubel anatis.Lörem
                  ipsum sedubel anatisLörem ipsum sedubel anatis.
                </li>
                <li className="text-[20px]">
                  Lörem ipsum sedubel anatis.Lörem ipsum sedubel anatis.Lörem
                  ipsum sedubel anatisLörem ipsum sedubel anatis.
                </li>
                <li className="text-[20px]">
                  Lörem ipsum sedubel anatis.Lörem ipsum sedubel anatis.Lörem
                  ipsum sedubel anatisLörem ipsum sedubel anatis.
                </li>
              </ul>
              <div className="pt-32">
                <h1 className="text-[30px]">Share via :</h1>
                <div className="mt-5 flex gap-9">
                  <div className="flex flex-col items-center justify-center">
                    <button className="mb-3 h-[60px] w-[60px] overflow-hidden rounded-full">
                      <MemoFacebookIcon width={"60px"} height={"60px"} />
                    </button>
                    <p>Facebook</p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <button className="mb-3 h-[60px] w-[60px] overflow-hidden rounded-full">
                      <MemoTelegramIcon width={"60px"} height={"60px"} />
                    </button>
                    <p>Telegram</p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <button className="mb-3 h-[60px] w-[60px] overflow-hidden rounded-full">
                      <MemoInstragramIcon width={"60px"} height={"60px"} />
                    </button>
                    <p>Instragram</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 justify-center">
              <div className="mt-[100px]">
                <Carousel
                  infiniteLoop={true}
                  showArrows={false}
                  showStatus={false}
                  showIndicators={true}
                  showThumbs={false}
                  swipeable={true}
                  width={364}
                >
                  <div className="aspect-[1/1] w-[364px]">
                    <img className="object-cover" src={imageOne} />
                  </div>
                  <div className="aspect-[1/1] w-[364px]">
                    <img className="object-cover" src={imageTwo} />
                  </div>
                  <div className="aspect-[1/1] w-[364px]">
                    <img className="object-cover" src={imageThree} />
                  </div>
                </Carousel>
                <button
                  onClick={() => {
                    window.open(
                      "https://www.facebook.com/BeautyDiaryMyanmar",
                      "_blank",
                    );
                  }}
                  className="mt-5 flex h-[60px] w-[364px] items-center justify-center gap-3 rounded-full bg-gradient-to-t from-[#8B3DFF] to-[#5E0FD3] text-[18px] font-semibold text-white"
                >
                  Inquiry about This Promotion <RightIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {currentTab === "other_promotion" && (
        <div className="mx-auto max-w-[1620px]">
          <div className="flex">
            <div className="flex-1">
              <h1 className="mb-6 mt-[100px] text-[40px] font-normal capitalize not-italic">
                Others Promotions from this company
              </h1>
              <div className="flex justify-center">
                {mockData.map((i, index) => {
                  return (
                    <Card
                      key={index}
                      facebook={"fa"}
                      telegram={"te"}
                      instragram="i"
                      title={i.title}
                      desc={i.desc}
                      image={i.image}
                      onClick={() => {}}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {currentTab === "about_company" && (
        <div className="mx-auto max-w-[1620px]">
          <div className="flex">
            <div className="flex-1">
              <h1 className="mb-6 mt-[100px] text-[40px] font-normal capitalize not-italic">
                Aceplus Solutions Co.Ltd
              </h1>
              <p>
                n publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available.In
                publishing and graphic design, Lorem ipsum is a placeholder text
                commonly used to demonstrate the visual form of a document or a
                typeface without relying on meaningful content. Lorem ipsum may
                be used as a placeholder before final copy is available.
              </p>
            </div>
          </div>
          <div className="mt-11 flex flex-wrap justify-center">
            <CompayCard
              title="Phone"
              ctaLabel="Call Them"
              desc="09 787 665 456"
              icon={<MemoPhoneSmallIcon width={"30px"} height={"30px"} />}
            />
            <CompayCard
              title="Facebook"
              ctaLabel="Visit page"
              desc="Be pround of yourself"
              icon={<MemoFBSmallIcon width={"42px"} height={"42px"} />}
            />
            <CompayCard
              title="Email"
              ctaLabel="Send Email"
              desc="beproundofyou@gmail.com"
              icon={<MemoMailSmallIcon width={"28px"} height={"20px"} />}
            />
            <CompayCard
              title="Address"
              ctaLabel="View Map"
              desc="No.222, Banyardala Street, Tamwe Township, Yangon"
              icon={<MemoLocationSmallIcon width={"26px"} height={"31px"} />}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileTemplate;

