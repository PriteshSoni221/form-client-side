import Personal from "./Personal";
import { React, useContext, useState } from "react";
import { Survey } from "../context/survey";
import { genres } from "../data/genres";
import { GenreSection } from "./GenreSection";
import { Validate } from "../context/Validate";
import axios from "axios";
export const Form = () => {
  const { info, setinfo } = useContext(Survey);
  const { validate, setvalidate } = useContext(Validate);
  const [sent,setsent]=useState('notsent')
  const handlesubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:4000/survey", {
        name: info.name,
        country: info.country,
        email: info.email,
        ratings: info.ratings,
      })
      .then(function (response) {
        if(response.data=="survey saved"){setsent('sent')}
      })
      .catch(function (error) {
        setsent('error')
      });
  };
  return (
    <div
      name="container"
      className="flex justify-center w-screen h-screen p-10 text-txt "
    >
      <form
        onSubmit={handlesubmit}
        className="h-full p-6 overflow-auto rounded-lg lg:w-3/5 bg-pwgreen scroll-smooth scrollbar sm:w-screen "
      >
        <h1 className="block mb-5 text-2xl font-bold tracking-wide">
          Audio Survey
        </h1>
        <p className="mb-10 italic text-l">
          Thank you for participating in this servey, you will rate the tracks
          by dragging them from favorite to less favorite
        </p>
        <Personal />
        {genres.map((genre) => (
          <GenreSection
            key={genre.title}
            title={genre.title}
            tracks={genre.tracks}
          />
        ))}
      <div className="flex items-center gap-10">
        <input
          onClick={(e) => {
            setvalidate(true);
            console.log(info);
          }}
          type="submit"
          className="h-12 px-4 py-2 font-semibold bg-transparent border rounded w-28 hover:bg-button text-txt hover:text-white border-txt hover:border-transparent hover:cursor-pointer"
        />
        {sent=='sent'?<p className="mt-5 mb-5 italic text-l ">the survey is sent thank you for your participation :)</p>:sent=='error'&&<p className="mb-10 italic text-red-500 text-l">there was an error sending the form please retry</p>}
        </div>
      </form>
    </div>
  );
};
