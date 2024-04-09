import getImageURL from "../../other/getImageURL";
import charms from "../../types/collections/charms";
import rapType from "../../types/rapData";
import getCollection from "../getCollection";

const getCharms = async (rapData: rapType[] = []): Promise<charms[]> => {
  const data = await getCollection("Charms");

  rapData = rapData.filter((item) => item.category == "Charm");

  return data.map((charm: any) => {
    let tier = charm.configData.BaseTier - 1;
    return {
      category: "Charms",
      collection: "Charms",
      baseTier: charm.configData.BaseTier,
      maxTier: charm.configData.MaxTier,
      icon: getImageURL(charm.configData.Icon),
      configName: charm.configName,
      rawData: charm,
      tiers: charm.configData.Tiers.map((charmTier: any) => {
        tier++;
        return {
          description: charmTier.Desc,
          name: charmTier.DisplayName,
          power: charmTier.Power,
          rarity: {
            number: charmTier.Rarity.RarityNumber,
            name: charmTier.Rarity.DisplayName,
            announce: charmTier.Rarity.Announce,
          },
          tier,
          rap:
            rapData.find((item) => {
              return (
                item.id + " Charm" == charmTier.DisplayName && item.tier == tier
              );
            })?.rap ?? null,
        } satisfies charms["tiers"][number];
      }),
    } satisfies charms;
  }) satisfies charms[];
};

export default getCharms;
