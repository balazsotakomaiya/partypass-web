import Panel from "../../components/Panel";
import Steps, { StepsOptions } from "../../pages/checkout/components/Steps";

export default function Payment() {
  return (
    <div className="p-16">
      <h1 className="text-2xl font-medium">Checkout</h1>

      <div className="mt-8" />

      <Steps currentStep={StepsOptions.Payment} />

      <div className="mt-8" />

      <div className="grid grid-cols-12 gap-8">
        <div className="flex flex-col col-span-12">
          <div className="flex w-full gap-4 items-center">
            <div className="bg-gray-700 h-8 w-8 text-white text-center items-center flex rounded">
              <div className="w-full">5</div>
            </div>
            <h2 className="text-xl font-medium">Payment time</h2>
          </div>

          <Panel className="p-8 mt-8">hello world</Panel>
        </div>
      </div>
    </div>
  );
}
