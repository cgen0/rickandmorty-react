import { StyledLocation } from "./style";
import { Location } from "../../types/types";

function LocationComponent(props: Location & { title: string }) {
  return (
    <StyledLocation>
      <div className="location-container" data-testid="locationID">
        <span className="title">{props.title}: </span>
        <span className="location-data">{props.name}</span>
        {props.name === "unknown" ? (
          ""
        ) : (
          <div>
            <div>
              <span className="title">Dimension: </span>
              <span className="location-data">{props.dimension}</span>
            </div>
            <div>
              <span className="title">Type: </span>
              <span className="location-data">{props.type}</span>
            </div>
            <div>
              <span className="title">Number of Residents: </span>
              <span className="location-data">{props.residents.length}</span>
            </div>
          </div>
        )}
      </div>
    </StyledLocation>
  );
}

export default LocationComponent;
