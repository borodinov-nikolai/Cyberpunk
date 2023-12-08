import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/icons/Cyberpunk_2077_logo 1.svg";
import socialList from "@/src/constants/social_list_items";

const Header = () => {
  return (
    <header
      className={
        "absolute left-1/2 top-[20px] z-[2] mx-auto flex h-[74px] w-full  -translate-x-1/2 flex-col items-center gap-5 xl:container sm:flex-row  sm:justify-between sm:gap-0 md:px-[36px]"
      }
    >
      <Link className={"inline-block"} href={"/"}>
        
        <Image
          className={"h-[74px] w-auto"}
          src={logo}
          height={74}
          width={400}
          alt={"logo"}
        />
      </Link>

      <ul
        className={"flex h-full items-center gap-[30px] p-3 sm:gap-8 lg:gap-10"}
      >
        {socialList.map(({ id, name, icon }) => {
          return (
            <li key={id}>
              
              <Link href="/">
                <Image
                  className={"h-[30px] w-auto"}
                  src={icon}
                  height={30}
                  width={30}
                  alt={name}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
