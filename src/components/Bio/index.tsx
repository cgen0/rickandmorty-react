import { StyledBio } from "./style";
import { CharacterComplete } from "../../types/types";

function Bio(
  props: Pick<
    CharacterComplete,
    "name" | "status" | "species" | "type" | "gender"
  >
) {
  return (
    <StyledBio>
      <div className="bio-container" data-testid="bioID">
        <div className="name-container">
          <span className="name">{props.name}</span>
        </div>
        <div>
          <span className={`status ${props.status.toLocaleLowerCase()}`}></span>

          <span>{props.species ? props.species : "Unknown species"}</span>
          <span> {props.gender ? `- ${props.gender}` : "Unknown gender"}</span>
          <span> {props.type ? `- ${props.type}` : ""} </span>
        </div>
      </div>
    </StyledBio>
  );
}

export default Bio;
