import React, { useState } from "react";

import CharC from '../characters/CharC';

import { useImagesContext } from "../../contexts/ImagesContext";


export default props => {
  const [selectedGame, setSelectedGame] = useState(false);
  const selectGameHandler = game => {
    setSelectedGame(true);
    setTimeout(() => props.history.push("/" + game), 1500);
  };

  return (
	<>
	<CharC img= {images["charc.png"]} />
	
	</>
	);
};