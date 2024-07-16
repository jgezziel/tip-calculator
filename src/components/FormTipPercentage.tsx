import type { Dispatch } from "react";

import { tipPercentages } from "../data/db";
import type { OrderActions } from "../reducers/OrderReducer";

type FormTipPercentageProps = {
  dispatch: Dispatch<OrderActions>;
  tip: number;
};

const FormTipPercentage = ({ dispatch, tip }: FormTipPercentageProps) => {
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
            onChange={(e) =>
              dispatch({ type: "SET_TIP", payload: { tip: +e.target.value } })
            }
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
