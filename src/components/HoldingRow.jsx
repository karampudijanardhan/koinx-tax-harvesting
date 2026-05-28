const HoldingRow = ({
  asset,
  isSelected,
  onToggle,
}) => {
  return (
    <tr
      className={`border-b border-slate-700 transition duration-300 hover:bg-slate-800 ${
        isSelected
          ? "bg-slate-800"
          : "bg-transparent"
      }`}
    >
      {/* Checkbox */}
      <td className="p-4">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onToggle(asset)}
          className="w-4 h-4 accent-blue-500 cursor-pointer"
        />
      </td>

      {/* Asset */}
      <td className="p-4">
        <div className="flex items-center gap-3 min-w-[220px]">
          <div className="bg-slate-700 p-2 rounded-full">
            <img
              src={asset.logo}
              alt={asset.coin}
              className="w-8 h-8 rounded-full object-cover"
            />
          </div>

          <div>
            <h3 className="font-semibold text-white">
              {asset.coin}
            </h3>

            <p className="text-sm text-slate-400">
              {asset.coinName}
            </p>
          </div>
        </div>
      </td>

      {/* Holdings */}
      <td className="p-4">
        <div>
          <p className="font-medium text-white">
            {asset.totalHolding}
          </p>

          <p className="text-xs text-slate-400">
            Holdings
          </p>
        </div>
      </td>

      {/* Avg Buy Price */}
      <td className="p-4">
        <div>
          <p className="font-medium text-white">
            ₹
            {asset.averageBuyPrice.toLocaleString()}
          </p>

          <p className="text-xs text-slate-400">
            Avg Buy
          </p>
        </div>
      </td>

      {/* Current Price */}
      <td className="p-4">
        <div>
          <p className="font-medium text-white">
            ₹
            {asset.currentPrice.toLocaleString()}
          </p>

          <p className="text-xs text-slate-400">
            Current
          </p>
        </div>
      </td>

      {/* STCG */}
      <td className="p-4">
        <div>
          <p
            className={`font-semibold ${
              asset.stcg.gain > 0
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            ₹
            {Math.abs(
              asset.stcg.gain
            ).toLocaleString()}
          </p>

          <p className="text-xs text-slate-400">
            {asset.stcg.balance} Qty
          </p>
        </div>
      </td>

      {/* LTCG */}
      <td className="p-4">
        <div>
          <p
            className={`font-semibold ${
              asset.ltcg.gain > 0
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            ₹
            {Math.abs(
              asset.ltcg.gain
            ).toLocaleString()}
          </p>

          <p className="text-xs text-slate-400">
            {asset.ltcg.balance} Qty
          </p>
        </div>
      </td>

      {/* Amount To Sell */}
      <td className="p-4">
        <div
          className={`inline-flex items-center justify-center px-4 py-2 rounded-xl text-sm font-medium ${
            isSelected
              ? "bg-blue-600 text-white"
              : "bg-slate-700 text-slate-300"
          }`}
        >
          {isSelected
            ? asset.totalHolding
            : "-"}
        </div>
      </td>
    </tr>
  );
};

export default HoldingRow;