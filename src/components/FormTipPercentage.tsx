import type { Dispatch, SetStateAction } from "react";

import { tipPercentages } from "../data/db";

type FormTipPercentageProps = {
  setTip: Dispatch<SetStateAction<number>>;
  tip: number;
};

const FormTipPercentage = ({ setTip, tip }: FormTipPercentageProps) => {
  return (
    <div>
      <h2 className="pb-2 mb-6 text-2xl font-extrabold border-b border-dashed">
        Propina
      </h2>
      <form>
        <div>
          <label htmlFor="tip" className="block mb-2 font-bold text-zinc-600">
            Porcentaje de propina
          </label>
          <select
            name="tip"
            id="tip"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-amber-400 focus:border-amber-400"
            onChange={(e) => setTip(Number(e.target.value))}
            value={tip}
          >
            {tipPercentages.map((tipPer) => (
              <option key={tipPer.id} value={tipPer.value}>
                {tipPer.label}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};

export default FormTipPercentage;
