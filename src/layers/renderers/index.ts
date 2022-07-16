// @ts-nocheck
import {TIME} from "config/logging";
import {drawBiomes} from "./drawBiomes";
import {drawBorders} from "./drawBorders";
import {drawCells} from "./drawCells";
import {drawCoastline} from "./drawCoastline";
import {drawCoordinates} from "./drawCoordinates";
import {drawCultures} from "./drawCultures";
import {drawEmblems} from "./drawEmblems";
import {drawGrid} from "./drawGrid";
import {drawHeightmap} from "./drawHeightmap";
import {drawIce} from "./drawIce";
import {drawMarkers} from "./drawMarkers";
import {drawPopulation} from "./drawPopulation";
import {drawPrecipitation} from "./drawPrecipitation";
import {drawProvinces} from "./drawProvinces";
import {drawReligions} from "./drawReligions";
import {drawRivers} from "./drawRivers";
import {drawStates} from "./drawStates";
import {drawTemperature} from "./drawTemperature";

// Note: missed renderers are in toggle functions
const layerRenderersMap = {
  biomes: drawBiomes,
  borders: drawBorders,
  cells: drawCells,
  coastline: drawCoastline,
  coordinates: drawCoordinates,
  cultures: drawCultures,
  emblems: drawEmblems,
  grid: drawGrid,
  heightmap: drawHeightmap,
  ice: drawIce,
  markers: drawMarkers,
  population: drawPopulation,
  precipitation: drawPrecipitation,
  provinces: drawProvinces,
  religions: drawReligions,
  rivers: drawRivers,
  states: drawStates,
  temperature: drawTemperature
};

export function renderLayer(layerName: keyof typeof layerRenderersMap, ...args) {
  const renderer = layerRenderersMap[layerName];
  TIME && console.time(renderer.name);
  renderer(...args);
  TIME && console.timeEnd(renderer.name);
}