import React, { useState ,useContext} from "react";
import { Audio } from "./Audio";
import { Validate } from "../context/Validate";
import { Survey } from "../context/survey";
const track = ({ track, id,genre,info,setinfo }) => {
  const [rating,setrating]=useState('notSelected')
  const { validate, setvalidate } = useContext(Validate);

  
  if(validate  ){
    const ratings={genre:genre,track_id:id,rating:rating}
    let survey=info
    survey.ratings.push(ratings)
    setinfo(survey)
  }
  
  return (
    <div className="flex justify-between pr-3 mb-4 bg-gray-200 rounded-lg cursor-move xl:w-3/4 lg:w-5/6 md:w-3/4 sm:w-full">
      <Audio track={track} />
      <div className="flex items-center justify-center w-24 ">
        <select
          id="rating"
          className={(validate&&rating=='notSelected')?"bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-400 focus:border-gray-400 block w-full p-2.5 peer":"bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-transparent focus:border-gray-400 block w-full p-2.5 peer"}
          required
          onChange={e=>setrating(e.target.value)}
        >
          <option value="">Rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    </div>
  );
};

export default track;
