"use client";

import { useState } from "react";
import css from "./MyNotices.module.css";

export default function MyNotices() {
  const [activeTab, setActiveTab] = useState("favorites");

  return (
    <>
      <div className={css.tabsPanel}>
        <button
          onClick={() => setActiveTab("favorites")}
          className={activeTab === "favorites" ? css.activeTab : ""}
        >
          My favorite pets
        </button>
        <button
          onClick={() => setActiveTab("viewed")}
          className={activeTab === "viewed" ? css.activeTab : ""}
        >
          Viewed
        </button>
      </div>
    </>
  );
}
