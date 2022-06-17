import { React, useContext, useState } from "react";
import { Survey } from "../context/survey";
import { Validate } from "../context/Validate";
const Personal = () => {
  const [name, setname] = useState("");
  const [country, setcountry] = useState("");
  const [email, setemail] = useState("");
  const { info, setinfo } = useContext(Survey);
  const { validate, setvalidate } = useContext(Validate);
  const handlename = (e) => {
    e.preventDefault();
    setname(e.target.value);
  };
  const handlecountry = (e) => {
    e.preventDefault();
    setcountry(e.target.value);
  };
  const handleemail = (e) => {
    e.preventDefault();
    setemail(e.target.value);
  };

  if (validate) {
    let survey = info;
    survey.name = name;
    survey.email = email;
    survey.country = country;
    setinfo(survey);
  }

  return (
    <div>
      <div className="flex flex-wrap mb-6 -mx-3">
        <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
          <label
            className="block mb-2 text-xs font-bold tracking-wide uppercase"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className={
              validate && name == ""
                ? "block w-full px-4 py-3 mb-3 leading-tight text-gray-900 bg-gray-200 border focus:ring-red-400  rounded appearance-none focus:outline-none focus:bg-white"
                : "block w-full px-4 py-3 mb-3 leading-tight text-gray-900 bg-gray-200 border  rounded appearance-none focus:outline-none focus:bg-white"
            }
            id="name"
            type="text"
            placeholder="full name"
            onChange={handlename}
            required
          />
        </div>
        <div className="w-full px-3 md:w-1/2">
          <label
            className="block mb-2 text-xs font-bold tracking-wide uppercase"
            htmlFor="country"
          >
            Country
          </label>
          <input
            className={
              validate && country == ""
                ? "block w-full px-4 py-3 mb-3 leading-tight text-gray-900 bg-gray-200 border focus:ring-red-400 rounded appearance-none focus:outline-none focus:bg-white"
                : "block w-full px-4 py-3 mb-3 leading-tight text-gray-900 bg-gray-200 border  rounded appearance-none focus:outline-none focus:bg-white"
            }
            id="country"
            type="text"
            placeholder="Country name"
            onChange={handlecountry}
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap mb-6 -mx-3">
        <div className="w-full px-3">
          <label
            className="block mb-2 text-xs font-bold tracking-wide uppercase"
            htmlFor="email"
          >
            E-mail
          </label>
          <input
            className={
              validate && email == ""
                ? "block w-full px-4 py-3 mb-3 leading-tight text-gray-900 bg-gray-200 border focus:ring-red-400  rounded appearance-none focus:outline-none focus:bg-white"
                : "block w-full px-4 py-3 mb-3 leading-tight text-gray-900 bg-gray-200 border  rounded appearance-none focus:outline-none focus:bg-white"
            }
            id="email"
            type="email"
            placeholder="hey@something.bye"
            onChange={handleemail}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default Personal;
