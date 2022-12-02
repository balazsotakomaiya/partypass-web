import Button from "../../components/Button";
import Panel from "../../components/Panel";
import Steps, { StepsOptions } from "../../pages/checkout/components/Steps";

export default function ContactDetails() {
  return (
    <div className="p-16">
      <h1 className="text-2xl font-medium">Checkout</h1>

      <div className="mt-8" />

      <Steps currentStep={StepsOptions.ContactDetails} />

      <div className="mt-8" />

      <div className="grid grid-cols-12 gap-8">
        <div className="flex flex-col col-span-12">
          <div className="flex w-full gap-4 items-center">
            <div className="bg-gray-700 h-8 w-8 text-white text-center items-center flex rounded">
              <div className="w-full">3</div>
            </div>
            <h2 className="text-xl font-medium">Your contact details</h2>
          </div>

          <Panel className="p-8 mt-8">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div className="mt-1">
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="you@example.com"
              />
            </div>

            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mt-4"
            >
              Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="name"
                id="name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Bob"
              />
            </div>

            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mt-4"
            >
              Create a password
            </label>
            <div className="mt-1">
              <input
                type="password"
                name="password"
                id="password"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <Button className="mt-4">Continue</Button>
          </Panel>
        </div>
      </div>
    </div>
  );
}
