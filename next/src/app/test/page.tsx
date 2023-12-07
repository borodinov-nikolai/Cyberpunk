import React from "react";

const Test = () => {
  return (
    <div
      className={
        "mx-auto flex h-screen items-center justify-center xl:container"
      }
    >
      <div className={""}>
        <input
          className={
            " rounded-lg border-2 border-red-500 bg-black p-4 font-archangelsk text-[40px] text-white focus:border-4 focus:border-green-500 focus:outline-none "
          }
          type="text"
          placeholder="Введите имя"
        />
      </div>
    </div>
  );
};

export default Test;
