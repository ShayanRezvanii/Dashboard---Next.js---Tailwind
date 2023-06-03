import React from "react";
import Card from "./UI/Card/Card";
import { ImArrowUp2 } from "react-icons/im";
const Details = ({ data }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 p-4">
      <Card
        title={"Total members"}
        number={data.total}
        icon={<ImArrowUp2 size={13} iconstyling={"px-2"} />}
        styleIcon={'p-1'}
        percent={data.percent}
      />
      <Card
        title={"Emolled members"}
        number={data.emolled}
        icon={<ImArrowUp2 size={13} iconstyling={"px-2"} />}
        styleIcon={'p-1'}
        percent={data.percent}
      />
      <div className="md:col-span-2 lg:col-span-1 ">
      <Card
        title={"Active now"}
        number={data.active}
        icon={<ImArrowUp2 size={13} />}
        styleIcon={'p-1'}
        percent={data.percent}
      />

      </div>


    </div>
  );
};

export default Details;
