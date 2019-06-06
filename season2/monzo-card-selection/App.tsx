/* eslint-disable global-require */
import React, { useState, useEffect } from "react";
import { Asset } from "expo-asset";
import { AppLoading } from "expo";

import CardSelection from "./components/CardSelection";

const cards = [
  {
    id: "summer-sunset",
    name: "Summer Sunset",
    design: require("./assets/cards/summer-sunset.png"),
    thumbnail: require("./assets/cards/summer-sunset-thumbnail.png"),
    color: "#a373de"
  },
  {
    id: "meteor-shower",
    name: "Meteor shower",
    design: require("./assets/cards/meteor-shower.png"),
    thumbnail: require("./assets/cards/meteor-shower-thumbnail.png"),
    color: "#fc6091"
  },
  {
    id: "purple-sky",
    name: "Purple Sky",
    design: require("./assets/cards/purple-sky.png"),
    thumbnail: require("./assets/cards/purple-sky-thumbnail.png"),
    color: "#ec10db"
  }
];

export default () => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    (async () => {
      await Promise.all(
        cards
          .map(card => [
            Asset.loadAsync(card.design),
            Asset.loadAsync(card.thumbnail)
          ])
          .flat()
      );
      setReady(true);
    })();
  });
  if (!ready) {
    return <AppLoading />;
  }
  return <CardSelection {...{ cards }} />;
};
