export const calculateHarvestedData = (
  originalCapitalGains,
  selectedAssets
) => {

  let stcgProfits =
    originalCapitalGains.stcg.profits;

  let stcgLosses =
    originalCapitalGains.stcg.losses;

  let ltcgProfits =
    originalCapitalGains.ltcg.profits;

  let ltcgLosses =
    originalCapitalGains.ltcg.losses;

  selectedAssets.forEach((asset) => {

    const stGain = asset.stcg.gain;

    const ltGain = asset.ltcg.gain;

    /*
      TAX LOSS HARVESTING LOGIC

      Only LOSSES should reduce taxes.
      So we add only negative gains
      into losses.
    */

    if (stGain < 0) {
      stcgLosses += Math.abs(stGain);
    }

    if (ltGain < 0) {
      ltcgLosses += Math.abs(ltGain);
    }
  });

  return {
    stcg: {
      profits: stcgProfits,
      losses: stcgLosses,
    },

    ltcg: {
      profits: ltcgProfits,
      losses: ltcgLosses,
    },
  };
};

/*
  Net Gain
*/

export const calculateNetGain = (
  profits,
  losses
) => {

  return profits - losses;
};

/*
  Total Realised Capital Gains
*/

export const calculateRealisedGains = (
  data
) => {

  const shortTermNet =
    data.stcg.profits -
    data.stcg.losses;

  const longTermNet =
    data.ltcg.profits -
    data.ltcg.losses;

  return shortTermNet + longTermNet;
};