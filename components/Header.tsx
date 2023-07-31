"use client";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Menu from "./Menu";
import styles from "../app/page.module.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header>
      <h1>D&D</h1>
      {showMenu ? (
        <Menu close={() => setShowMenu(false)} />
      ) : (
        <MenuIcon
          onClick={() => setShowMenu(true)}
          sx={{ width: "2em", height: "2em" }}
        />
      )}
      <video className={styles.header_video} autoPlay muted loop>
        <source src="/media/video.mp4" type="video/mp4" />
      </video>
    </header>
  );
};

export default Header;
