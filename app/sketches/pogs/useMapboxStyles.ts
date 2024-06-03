import { useInsertionEffect } from "react";

export const useMapboxStyles = () => {
  useInsertionEffect(() => {
    if (!document.getElementById("mapbox-css")) {
      const link = document.createElement("link");
      link.id = "mapbox-css";
      link.rel = "stylesheet"; /*                            | see version in package.json */
      link.href = "https://api.tiles.mapbox.com/mapbox-gl-js/v3.4.0/mapbox-gl.css";

      document.head.appendChild(link);
    }
  }, []);
};
