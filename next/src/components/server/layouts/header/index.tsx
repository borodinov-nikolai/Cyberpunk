import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/icons/Cyberpunk_2077_logo 1.svg";
import socialList from "@/src/constants/social_list_items";



const Header = () => {
  return (
    <div
      className={
        "z-[2] xl:container w-full flex flex-col gap-5 sm:gap-0 items-center  mx-auto h-[74px] absolute top-[20px] left-1/2 -translate-x-1/2  sm:flex-row sm:justify-between md:px-[36px]"
      }
    >
      <Link className={"inline-block"} href={"/"}>
        {" "}
        <Image
          className={"h-[74px] w-auto"}
          src={logo}
          height={74}
          width={400}
          alt={"logo"}
        />{" "}
      </Link>

      <ul className={"flex h-full gap-10 sm:gap-4 lg:gap-10 items-center"}>
        {socialList.map(({ id, name, icon }) => {
          return (
            <li key={id}>
              {" "}
              <Link href="/">
                <Image src={icon} height={30} width={30} alt={name} />{" "}
              </Link>{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
