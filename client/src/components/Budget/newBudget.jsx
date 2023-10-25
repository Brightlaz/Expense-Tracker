import React, { useState } from "react";
import Image from "next/image";
import check from "../../assets/check.svg";
import close from "../../assets/close.svg";

const NewBudget = () => {
  const [values, setValues] = useState({
    Name: "",
    amount: "",
    date: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // "consume the api"
  };
  return (
    <>
      <div className="absolute top-0 w-full h-full bg-black bg-opacity-40" />
      <div className="absolute left-0 right-0 bottom-0 bg-[#F6F3F3] rounded-tl-[30px] rounded-tr-[30px] pt-[39px] px-[22px] pb-10">
        <div className="absolute top-2 right-4">
          <Image
            src={close}
            alt="Budget Image"
            className="w-[35px] h-auto"
            width={500}
            height={300}
          />
        </div>
        <h1 className="text-black text-2xl mb-[17px] font-semibold leading-[41.17px]">
          New Budget
        </h1>
        <form id="email" className="text-[#344054] space-y-[5px]">
          <div>
            <input type="hidden" name="_subject" value="New submission!" />
            <div className="mb-6">
              <label
                className="block mb-2 text-black text-xl leading-[34.30px] font-medium"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full h-12 px-3 py-2 leading-tight text-gray-700 rounded-[10px] border-2 border-blue-700 appearance-none focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Emma Bello"
                value={values.Name}
                onChange={handleChange}
                name="Name"
              />
            </div>
            <div className="mb-6">
              <label
                className="block mb-2 text-black text-xl leading-[34.30px] font-medium"
                htmlFor="amount"
              >
                Amount
              </label>
              <input
                className="w-full h-12 px-3 py-2 leading-tight text-gray-700 rounded-[10px] border-2 border-blue-700 appearance-none focus:outline-none focus:shadow-outline"
                id="amount"
                type="text"
                placeholder="e.g N1000"
                value={values.amount}
                onChange={handleChange}
                name="amount"
              />
            </div>
            <div className="mb-8">
              <label
                className="block mb-2 text-black text-xl leading-[34.30px] font-medium"
                htmlFor="date"
              >
                Date
              </label>
              <input
                className="w-full h-12 px-3 py-2 leading-tight text-gray-700 rounded-[10px] border-2 border-blue-700 appearance-none focus:outline-none focus:shadow-outline"
                id="date"
                type="date"
                placeholder="DD/MM/YY"
                value={values.date}
                onChange={handleChange}
                name="date"
              />
            </div>
            <div className="flex justify-center cursor pointer">
              <Image
                src={check}
                alt="Budget Image"
                className="w-[73px] h-auto"
                width={500}
                height={300}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewBudget;
