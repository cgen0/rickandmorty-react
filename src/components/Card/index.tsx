import { CharacterComplete } from "../../types/types";
import { addSrc } from "../../utils/addSrc";
import { StyledCard } from "./style";
import LocationComponent from "../LocationComponent";
import Bio from "../Bio";
import EpisodeComponent from "../EpisodeComponent";
import { useState } from "react";

function Card(props: CharacterComplete) {
  const [showMore, setShowMore] = useState(false);

  function handleClick() {
    setShowMore(!showMore);
  }
  return (
    <StyledCard>
      <div>
        <div className="card card-front card-flex">
          <div className="image-container">
            <img ref={addSrc(props.image)} alt="character profile" />
            <div ref={addSrc(props.image)} />
          </div>
          <Bio
            name={props.name}
            status={props.status}
            species={props.species}
            type={props.type}
            gender={props.gender}
          />
          {props.origin === props.location ? (
            <div>
              <div>
                <LocationComponent
                  {...props.origin}
                  title="Origin and Location"
                />
              </div>
            </div>
          ) : (
            <div>
              <div>
                <LocationComponent {...props.origin} title="Origin" />
              </div>
              <div>
                <LocationComponent {...props.location} title="Location" />
              </div>
            </div>
          )}
          <EpisodeComponent {...props.episode[0]} />

          <button
            className={`${!showMore ? "show" : "hidden"}`}
            onClick={handleClick}
          >
            Full Episode List
          </button>
        </div>

        <div className={`card card-back ${showMore ? "show" : "hidden"}`}>
          <div className="title">Episodes: </div>

          {props.episode.map((episode) => (
            <div className="episode-data" key={episode.id}>
              {episode.name}
            </div>
          ))}
          <button onClick={handleClick}>Close</button>
        </div>
      </div>
    </StyledCard>
  );
}

export default Card;
