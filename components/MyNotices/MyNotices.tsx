"use client";

import { useState } from "react";
import css from "./MyNotices.module.css";
import { Notice } from "@/types/notice";
import NoticesList from "../NoticesList/NoticesList";

interface Props {
  favoriteNotices: Notice[];
  viewedNotices: Notice[];
}

export default function MyNotices({ favoriteNotices, viewedNotices }: Props) {
  const [activeTab, setActiveTab] = useState("favorites");

  return (
    <section>
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
      {activeTab === "favorites" && <NoticesList notices={favoriteNotices} />}
      {activeTab === "viewed" && <NoticesList notices={viewedNotices} />}
    </section>
  );
}
