import { React, useState ,useContext} from "react";
import "../styles/audio.css";
import {Survey} from "../context/survey";
import { Validate } from "../context/Validate";
import Track from "./track";

export const GenreSection = (props) => {
  const [genre, setgenre] = useState({ genre:props.title,comment: "", ratings: [] });
  const [tracks, settracks] = useState(props.tracks);
  const [comment, setcomment] = useState('');
  const { info, setinfo } = useContext(Survey);
  const { validate, setvalidate } = useContext(Validate);

  const handlecomment=(e)=>{
    const ne=genre
    ne.comment=e.target.value
    setgenre(ne)
  }
 
  if(validate){
    let survey=info
    survey.ratings.push(genre)
    setinfo(survey)
  }
  return (
    <fieldset className="min-w-full p-5 mb-10 rounded-lg bg-wkgreen">
      <h1 className="block mb-2 font-bold tracking-wide uppercase text-txt text-l">
        {props.title}
      </h1>
      <div id="drag-container" className="w-full gap-5 mb-4">
        <p className="mb-5 italic text-l">
          sort the tracks from favorite to less favorite by dragging them{" "}
        </p>
        <ul>
          {tracks.map((track) => (
            <Track
              key={track.id}
              track={track.url}
              id={track.name}
              genre={props.title}
              info={genre}
              setinfo={setgenre}
            />
          ))}
        </ul>
      </div>
      <textarea
        id="message"
        rows="4"
        className="block w-full px-4 py-3 leading-tight text-gray-900 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
        placeholder="Leave a comment..."
        onChange={handlecomment}
      ></textarea>
    </fieldset>
  );
};
