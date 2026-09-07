import type { LayerSpecification, StyleSpecification } from "maplibre-gl";

/**
 * Tunes CARTO's Dark Matter basemap to look like the Mapbox Dark style the map
 * used before: a globe, grey land on darker water, neutral borders and labels,
 * and no continent names. The style JSON is fetched by the sketch and passed
 * through here before it is handed to the map.
 */

export const CARTO_DARK_MATTER_URL =
  "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json";

// Mapbox Dark v11 palette
const LAND = "hsl(0, 0%, 16%)";
const LAND_SUBTLE = "hsl(0, 0%, 15%)";
const WATER = "hsl(0, 0%, 12%)";
const BORDER = "hsl(0, 0%, 41%)";
const BORDER_STATE = "hsl(0, 0%, 38%)";
const ROAD = "hsl(0, 0%, 24%)";
const HALO = "hsl(0, 0%, 3%)";
const LABEL = "hsl(0, 0%, 40%)";
const LABEL_BRIGHT = "hsl(0, 0%, 66%)";
const LABEL_MUTED = "hsl(0, 0%, 50%)";
const LABEL_WATER = "hsl(0, 0%, 35%)";

const HIDDEN_LAYERS = new Set(["place_continent"]);

// Mapbox shows country names from zoom 1, CARTO only from zoom 2.
const MINZOOM: Record<string, number> = { place_country_1: 1 };

// Mixed-case country names at Mapbox's sizes instead of CARTO's bold uppercase.
const COUNTRY_LABEL_LAYOUT = {
  "text-transform": "none",
  "text-size": { stops: [[1, 10], [3, 11], [4, 12], [5, 13], [6, 14]] },
};
const LAYOUT: Record<string, Record<string, unknown>> = {
  place_country_1: COUNTRY_LABEL_LAYOUT,
  place_country_2: COUNTRY_LABEL_LAYOUT,
};

const PAINT: Record<string, Record<string, unknown>> = {
  background: { "background-color": LAND },
  landcover: { "fill-color": LAND_SUBTLE },
  landuse: { "fill-color": LAND_SUBTLE },
  landuse_residential: { "fill-color": "rgba(0, 0, 0, 0.15)" },
  park_nature_reserve: { "fill-color": LAND_SUBTLE },
  park_national_park: { "fill-color": LAND_SUBTLE },
  water: { "fill-color": WATER },
  waterway: { "line-color": WATER },
  boundary_country_inner: { "line-color": BORDER },
  boundary_country_outline: { "line-color": WATER },
  boundary_state: { "line-color": BORDER_STATE },
  boundary_county: { "line-color": "hsl(0, 0%, 25%)" },
  road_mot_case_noramp: { "line-color": ROAD },
  road_trunk_case_noramp: { "line-color": ROAD },
  road_pri_case_noramp: { "line-color": ROAD },
  place_country_1: { "text-color": LABEL, "text-halo-color": HALO },
  place_country_2: { "text-color": LABEL, "text-halo-color": HALO },
  place_state: { "text-color": LABEL_BRIGHT, "text-halo-color": HALO },
  place_town: { "text-color": LABEL_BRIGHT, "text-halo-color": HALO },
  place_villages: { "text-color": LABEL_MUTED, "text-halo-color": HALO },
  place_hamlet: { "text-color": LABEL_MUTED, "text-halo-color": HALO },
  place_suburbs: { "text-color": LABEL_MUTED, "text-halo-color": HALO },
  watername_ocean: { "text-color": LABEL_WATER, "text-halo-color": HALO },
  watername_sea: { "text-color": LABEL_WATER, "text-halo-color": HALO },
  watername_lake: { "text-color": LABEL_WATER, "text-halo-color": HALO },
  watername_lake_line: { "text-color": LABEL_WATER, "text-halo-color": HALO },
  waterway_label: { "text-color": LABEL_WATER, "text-halo-color": HALO },
};

export const toPogMapStyle = (style: StyleSpecification): StyleSpecification => ({
  ...style,
  // Part of the style rather than the `projection` prop, so the very first
  // frame is already a globe.
  projection: { type: "globe" },
  layers: style.layers
    .filter((layer) => !HIDDEN_LAYERS.has(layer.id))
    .map((layer) => {
      const paint = PAINT[layer.id];
      const layout = LAYOUT[layer.id];
      const minzoom = MINZOOM[layer.id];
      if (!paint && !layout && minzoom === undefined) return layer;

      return {
        ...layer,
        ...(minzoom !== undefined && { minzoom }),
        paint: { ...layer.paint, ...paint },
        layout: { ...layer.layout, ...layout },
      } as LayerSpecification;
    }),
});
