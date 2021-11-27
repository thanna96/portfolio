import React, { FC } from "react";

export const PageDivider: FC<{
  title: string;
  subTitle?: string;
  id?: string;
  color: string;
  textColor: string;
}> = function (data) {
  return (
    <div
      id={data.id}
      className={"centered-container"}
      style={{ background: data.color }}
    >
      <div className={"text-center m-auto"}>
        <h1 className={"text-white text-3xl"} style={{ color: data.textColor }}>
          {data.title}
        </h1>
        <h2
          className={"text-white text-2xl italic"}
          style={{ color: data.textColor }}
        >
          {data.subTitle}
        </h2>
      </div>
    </div>
  );
};

export default PageDivider;
