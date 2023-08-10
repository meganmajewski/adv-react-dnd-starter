"use client";

import { useCallback, useState } from "react";
import Character from "./Character";
import CharacterModel from "../models/CharacterModel";
import AddCharacterForm from "./AddCharacterForm";
import { starterCharacters } from "@/models/starterCharacters";

const Charcters = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [characters, setCharacters] = useState<CharacterModel[]>(
    starterCharacters
  );

  const upgradeCharLevel = useCallback((i: number): void => {
    setCharacters((prev) => [
      ...prev.slice(0, i),
      { ...prev[i], level: prev[i].level + 1 },
      ...prev.slice(i + 1),
    ]);
  }, []);

  const downgradeCharLevel = useCallback((i: number): void => {
    setCharacters((prev) => [
      ...prev.slice(0, i),
      { ...prev[i], level: prev[i].level - 1 },
      ...prev.slice(i + 1),
    ]);
  }, []);

  const addCharacter = useCallback((c: CharacterModel): void => {
    setCharacters((prev) => [c, ...prev]);
  }, []);

  return (
    <div>
      <h2>Add a Character</h2>
      <AddCharacterForm onAdd={addCharacter} />
      <h2>Characters</h2>
      <div>
        <ul style={{ display: "flex", flexWrap: "wrap" }}>
          {characters.slice(startIndex, startIndex + 30).map((item, i) => (
            <Character
              key={item.name}
              character={item}
              upgradeCharLevel={upgradeCharLevel}
              downgradeCharLevel={downgradeCharLevel}
              index={i}
            />
          ))}
        </ul>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 20px 30px 20px",
        }}
      >
        <Button
          variant="outlined"
          onClick={() => setStartIndex((prev) => prev - 30)}
          disabled={startIndex - 30 < 0}
        >
          Prev 30
        </Button>
        <Button
          variant="outlined"
          onClick={() => setStartIndex((prev) => prev + 30)}
          disabled={startIndex + 30 > starterCharacters.length}
        >
          Next 30
        </Button>
      </div>
    </div>
  );
};

export default Charcters;
