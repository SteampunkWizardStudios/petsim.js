import rarity from "../rarity";

type rap = {
  normal: number | null;
  shiny: number | null;
};

type sounds = { [key: string]: string[] };

type hoverboards = {
  configName: string;
  category: "Hoverboards";
  collection: "Hoverboards";
  rarity: rarity;
  name: string;
  description: string;
  sounds: sounds;
  icon: string;
  canBeShiny: boolean;
  productId: string | null;
  shinyParticleScale: number | null;
  pitchScale: number | null;
  bobRate: number | null;
  hoverHeight: number | null;
  animation: number | null;
  maxRoll: number | null;
  rotationLimit: number | null;
  defaultJumpSpeedBoost: number | null;
  tradable: boolean;
  rap: rap;

  rawData: any;
};
export default hoverboards;
