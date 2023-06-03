import React from "react";
import Image from "next/image";
import { CheckBox } from "../Checkbox/CheckBox";
import { Progress } from "../Progress/Progress";
import { Rating } from "../Rating/Rating";
import { CiMenuKebab } from "react-icons/ci";

import { Status } from "../Status/Status";
const Table = () => {
  return (
    <div className="flex flex-col w-full h-full overflow-x-hidden ">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4 flex">
                    <CheckBox />
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Customer
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Course
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Emolled
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Progress
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Rating
                  </th>
                  <th scope="col" className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4">
                    <CheckBox />
                  </td>

                  <td className="whitespace-nowrap px-6 py-4  font-medium flex items-center">
                    <div className="pr-2">
                      <Image
                        className="rounded-full"
                        width="40"
                        height="40"
                        src="/photo_2022-09-04_00-45-18.jpg"
                        alt="Rounded avatar"
                      />
                    </div>
                    Olivia Rthye
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <Status status={"Emolled"} />
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    UI Masterclass
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">Jan 4,2022</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <Progress progressWidth="50%" />
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <Rating count={2} total={5}/>

                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <CiMenuKebab />
                  </td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4">
                    <CheckBox />
                  </td>
                  <td className="whitespace-nowrap px-6 py-4  font-medium flex items-center">
                    <div className="pr-2">
                      <Image
                        className="rounded-full"
                        width="40"
                        height="40"
                        src="/photo_2022-09-04_00-45-18.jpg"
                        alt="Rounded avatar"
                      />
                    </div>
                    Olivia Rthye
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <Status status={"Emolled"} />
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    UI Masterclass
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">Jan 4,2022</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <Progress progressWidth="90%" />
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <Rating count={3} total={5}/>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <CiMenuKebab />
                  </td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4">
                    <CheckBox />
                  </td>
                  <td className="whitespace-nowrap px-6 py-4  font-medium flex items-center">
                    <div className="pr-2">
                      <Image
                        className="rounded-full"
                        width="40"
                        height="40"
                        src="/photo_2022-09-04_00-45-18.jpg"
                        alt="Rounded avatar"
                      />
                    </div>
                    Olivia Rthye
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <Status status={"Emolled"} />
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    UI Masterclass
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">Jan 4,2022</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <Progress progressWidth="60%" />
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                  <Rating count={2} total={5}/>

                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <CiMenuKebab />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
