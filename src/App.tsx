import { menuItems } from "./data/db";

import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import FormTipPercentage from "./components/FormTipPercentage";

import useOrder from "./hooks/useOrder";

function App() {
  const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder();
  return (
    <>
      <header className="py-6 bg-amber-400">
        <div className="container">
          <h1 className="text-2xl font-extrabold text-center lg:text-3xl">
            Calculadora de Propinas y Consumo
          </h1>
        </div>
      </header>

      <main className="container grid gap-4 py-8 md:grid-cols-2">
        <div className="px-4 py-4 border rounded bg-zinc-100/50 sm:px-8">
          <h2 className="pb-2 mb-4 text-2xl font-bold text-center border-b">
            Menú
          </h2>
          <div className="my-6 space-y-4">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>
        <div className="p-4 border border-dashed rounded bg-zinc-100 border-zinc-200">
          <h2 className="pb-2 mb-6 text-2xl font-extrabold text-center border-b border-dashed">
            Consumo
          </h2>
          <div className="flex flex-col gap-6 justify-between h-[88%]">
            {order.length ? (
              <>
                <OrderContents order={order} removeItem={removeItem} />
                <FormTipPercentage setTip={setTip} tip={tip} />
                <OrderTotals order={order} tip={tip} placeOrder={placeOrder} />
              </>
            ) : (
              <p className="text-lg text-center text-gray-500 font-semibold">
                Aún no has ordenado nada
              </p>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;