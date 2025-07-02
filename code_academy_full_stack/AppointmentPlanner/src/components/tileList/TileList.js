import React from "react";
import { Tile } from "../tile/Tile";


export const TileList = (props) => {

  let array = props.tiles
  
  return (
    <div>
      {array.map(({name, ...rest}, index) => {
        return <Tile name={name} description={rest} key={index}/>
      })}
    </div>
  );
};
