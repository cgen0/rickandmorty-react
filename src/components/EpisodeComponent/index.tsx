import { StyledEpisode } from "./style";
import { Episode } from "../../types/types";

function EpisodeComponent(props: Episode) {
  return (
    <StyledEpisode>
      <div className="episode-container" data-testid="episodeID">
        <span className="title">First seen in: </span>
        <span className="episode-data"> {props.name}</span>
      </div>
    </StyledEpisode>
  );
}

export default EpisodeComponent;
