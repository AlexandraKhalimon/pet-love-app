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

      {activeTab === "favorites" &&
        (favoriteNotices.length < 1 ? (
          <p className={css.message}>
            Oops, <span>looks like there aren&apos;t any furries</span> on our
            adorable page yet. Do not worry! View your pets on the &quot;find
            your favorite pet&quot; page and add them to your favorites.
          </p>
        ) : (
          <NoticesList notices={favoriteNotices} variant="favorites" />
        ))}
      {activeTab === "viewed" &&
        (viewedNotices.length < 1 ? (
          <p className={css.message}>
            Oops, <span>looks like there aren&apos;t any furries</span> on our
            adorable page yet. Do not worry! View your pets on the &quot;find
            your favorite pet&quot; page.
          </p>
        ) : (
          <NoticesList notices={viewedNotices} variant="viewed" />
        ))}
    </section>
  );
}
