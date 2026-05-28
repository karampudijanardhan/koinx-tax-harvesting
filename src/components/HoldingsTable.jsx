import HoldingRow from "./HoldingRow";

const HoldingsTable = ({
  holdings,
  selectedAssets,
  toggleSelection,
  toggleSelectAll,
}) => {
  const isAllSelected =
    holdings.length > 0 &&
    selectedAssets.length === holdings.length;

  return (
    <div className="bg-slate-900 rounded-3xl p-4 md:p-6 shadow-lg overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-5 gap-3">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Holdings
          </h2>

          <p className="text-gray-400 text-sm mt-1">
            Select assets to calculate harvesting benefits
          </p>
        </div>

        <button
          className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-xl text-sm font-medium"
        >
          View All
        </button>
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-slate-700 text-gray-300 text-sm">
              
              <th className="p-4">
                <input
                  type="checkbox"
                  checked={isAllSelected}
                  onChange={toggleSelectAll}
                  className="w-4 h-4 cursor-pointer accent-blue-500"
                />
              </th>

              <th className="p-4 text-left">
                Asset
              </th>

              <th className="p-4 text-left">
                Holdings
              </th>

              <th className="p-4 text-left">
                Avg Buy Price
              </th>

              <th className="p-4 text-left">
                Current Price
              </th>

              <th className="p-4 text-left">
                Short-Term Gain
              </th>

              <th className="p-4 text-left">
                Long-Term Gain
              </th>

              <th className="p-4 text-left">
                Amount to Sell
              </th>
            </tr>
          </thead>

          <tbody>
            {holdings.map((asset) => (
              <HoldingRow
                key={asset.coin}
                asset={asset}
                isSelected={selectedAssets.some(
                  (item) => item.coin === asset.coin
                )}
                onToggle={toggleSelection}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="grid gap-4 lg:hidden">
        {holdings.map((asset) => {
          const isSelected = selectedAssets.some(
            (item) => item.coin === asset.coin
          );

          return (
            <div
              key={asset.coin}
              className={`rounded-2xl p-4 border transition ${
                isSelected
                  ? "border-blue-500 bg-slate-800"
                  : "border-slate-700 bg-slate-950"
              }`}
            >
              {/* Top */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={asset.logo}
                    alt={asset.coin}
                    className="w-10 h-10 rounded-full"
                  />

                  <div>
                    <h3 className="font-semibold text-white">
                      {asset.coin}
                    </h3>

                    <p className="text-xs text-gray-400">
                      {asset.coinName}
                    </p>
                  </div>
                </div>

                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => toggleSelection(asset)}
                  className="w-5 h-5 accent-blue-500"
                />
              </div>

              {/* Details */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                
                <div>
                  <p className="text-gray-400">
                    Holdings
                  </p>

                  <p className="font-medium">
                    {asset.totalHolding}
                  </p>
                </div>

                <div>
                  <p className="text-gray-400">
                    Avg Buy
                  </p>

                  <p className="font-medium">
                    ₹{asset.averageBuyPrice}
                  </p>
                </div>

                <div>
                  <p className="text-gray-400">
                    Current Price
                  </p>

                  <p className="font-medium">
                    ₹{asset.currentPrice}
                  </p>
                </div>

                <div>
                  <p className="text-gray-400">
                    Amount To Sell
                  </p>

                  <p className="font-medium">
                    {isSelected
                      ? asset.totalHolding
                      : "-"}
                  </p>
                </div>

                <div>
                  <p className="text-gray-400">
                    STCG
                  </p>

                  <p
                    className={`font-semibold ${
                      asset.stcg.gain > 0
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    ₹{asset.stcg.gain}
                  </p>
                </div>

                <div>
                  <p className="text-gray-400">
                    LTCG
                  </p>

                  <p
                    className={`font-semibold ${
                      asset.ltcg.gain > 0
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    ₹{asset.ltcg.gain}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HoldingsTable;