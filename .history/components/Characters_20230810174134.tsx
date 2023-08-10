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
    </div>
  );
};

export default Charcters;
