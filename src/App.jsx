import { useEffect, useState } from "react";

import GainCard from "./components/GainCard";
import HoldingsTable from "./components/HoldingsTable";

import {
  fetchCapitalGains,
  fetchHoldings,
} from "./services/mockApi";

import {
  calculateHarvestedData,
  calculateRealisedGains,
} from "./utils/calculations";

const App = () => {
  const [holdings, setHoldings] =
    useState([]);

  const [capitalGains, setCapitalGains] =
    useState(null);

  const [selectedAssets, setSelectedAssets] =
    useState([]);

  useEffect(() => {
    const loadData = async () => {
      const holdingsData =
        await fetchHoldings();

      const gainsData =
        await fetchCapitalGains();

      setHoldings(holdingsData);

      setCapitalGains(
        gainsData.capitalGains
      );
    };

    loadData();
  }, []);

  const toggleSelection = (asset) => {
    const exists = selectedAssets.find(
      (item) => item.coin === asset.coin
    );

    if (exists) {
      setSelectedAssets(
        selectedAssets.filter(
          (item) =>
            item.coin !== asset.coin
        )
      );
    } else {
      setSelectedAssets([
        ...selectedAssets,
        asset,
      ]);
    }
  };

  const toggleSelectAll = () => {
    if (
      selectedAssets.length ===
      holdings.length
    ) {
      setSelectedAssets([]);
    } else {
      setSelectedAssets(holdings);
    }
  };

  if (!capitalGains) {
    return (
      <div className="text-center mt-20">
        Loading...
      </div>
    );
  }

  const harvestedData =
    calculateHarvestedData(
      capitalGains,
      selectedAssets
    );

  const originalRealised =
    calculateRealisedGains(
      capitalGains
    );

  const harvestedRealised =
    calculateRealisedGains(
      harvestedData
    );

  const savings =
  harvestedRealised < originalRealised
    ? originalRealised - harvestedRealised
    : 0;

  return (
    <div className="min-h-screen p-8 bg-slate-950">
      <h1 className="text-4xl font-bold mb-8">
        KoinX Tax Loss Harvesting
      </h1>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <GainCard
          title="Pre Harvesting"
          data={capitalGains}
          background="bg-slate-800"
        />

        <GainCard
          title="After Harvesting"
          data={harvestedData}
          background="bg-blue-900"
        />
      </div>

      {savings > 0 && (
        <div className="bg-green-600 p-4 rounded-xl mb-6 text-xl font-bold">
          You're going to save ₹
          {savings.toFixed(2)}
        </div>
      )}

      <HoldingsTable
        holdings={holdings}
        selectedAssets={selectedAssets}
        toggleSelection={toggleSelection}
        toggleSelectAll={toggleSelectAll}
      />
    </div>
  );
};

export default App;