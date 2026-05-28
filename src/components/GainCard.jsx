const GainCard = ({
  title,
  data,
  background,
}) => {
  const stNet =
    data.stcg.profits - data.stcg.losses;

  const ltNet =
    data.ltcg.profits - data.ltcg.losses;

  const realised = stNet + ltNet;

  return (
    <div className={`${background} p-6 rounded-2xl w-full`}>
      <h2 className="text-2xl font-bold mb-6">
        {title}
      </h2>

      <div className="space-y-4">
        <div>
          <h3 className="font-bold">
            Short Term
          </h3>

          <p>
            Profits: ₹
            {data.stcg.profits.toFixed(2)}
          </p>

          <p>
            Losses: ₹
            {data.stcg.losses.toFixed(2)}
          </p>

          <p>
            Net: ₹{stNet.toFixed(2)}
          </p>
        </div>

        <div>
          <h3 className="font-bold">
            Long Term
          </h3>

          <p>
            Profits: ₹
            {data.ltcg.profits.toFixed(2)}
          </p>

          <p>
            Losses: ₹
            {data.ltcg.losses.toFixed(2)}
          </p>

          <p>
            Net: ₹{ltNet.toFixed(2)}
          </p>
        </div>

        <div className="text-xl font-bold pt-4">
          Realised Gains: ₹
          {realised.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default GainCard;