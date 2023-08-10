"use client";

import { memo } from "react";
import CharacterModel from "../models/CharacterModel";
import { Button, Card, CardContent } from "@mui/material";

interface Props {
  character: CharacterModel;
  upgradeCharLevel: (index: number) => void;
  downgradeCharLevel: (index: number) => void;
  index: number;
}

const Character = ({
  character,
  upgradeCharLevel,
  downgradeCharLevel,
  index,
}: Props) => {
  return (
    <li style={{ listStyle: "none", width: "46%", margin: "2vw" }}>
      <Card variant="outlined">
        <CardContent>
          <h3>{character.name}</h3>
          <p>Class: {character.class}</p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p>Level: </p>
            <Button
              variant="outlined"
              sx={{ mx: 1 }}
              onClick={() => downgradeCharLevel(index)}
            >
              -
            </Button>
            <p>{character.level}</p>
            <Button variant="outlined" sx={{ mx: 1 }} onClick={() => upgradeCharLevel(index)}>
              +
            </Button>
          </div>
        </CardContent>
      </Card>
    </li>
  );
};

export default memo(Character);
