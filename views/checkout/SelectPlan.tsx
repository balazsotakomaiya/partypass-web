import { CheckIcon } from "@heroicons/react/24/outline";

export enum PlanOptions {
  Standard = "Standard",
  Deluxe = "Deluxe",
}

const tiers = [
  {
    name: PlanOptions.Standard,
    price: 49,
    description: "All-access pass to all the clubs in Budapest",
    features: [
      "All-access pass to all the clubs in Budapest for 1 week",
      "Curated weekly event calendar, with the best events in town",
      "Up-to-date club info: dress code, music played, opening hours, and more",
      "Unbiased club and event reviews from real people",
    ],
  },
  {
    name: PlanOptions.Deluxe,
    price: 79,
    description:
      "All-access pass to all the clubs in Budapest with a personal concierge",
    features: [
      "Everything in Standard, plus:",
      "24/7 Concierge service to assist you with all your needs (e.g.: table reservations, bottle service, taxi bookings, etc.)",
    ],
  },
];

interface Props {
  selectedPlan: PlanOptions | null;
  onSelectPlan: (plan: PlanOptions) => void;
}

export default function SelectPlan({ selectedPlan, onSelectPlan }: Props) {
  return (
    <div>
      <div className="flex w-full gap-4 items-center">
        <div className="bg-gray-700 h-8 w-8 text-white text-center items-center flex rounded">
          <div className="w-full">1</div>
        </div>
        <h2 className="text-xl font-medium">Pick a plan</h2>
      </div>

      <div className="mt-8" />

      <div className="w-full space-y-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className="flex flex-col overflow-hidden rounded-lg border"
          >
            <div className="bg-white px-6 py-8 sm:p-10 sm:pb-6">
              <div>
                <h3
                  className="inline-flex rounded-full bg-gray-100 px-4 py-1 text-base font-semibold text-gray-600"
                  id="tier-standard"
                >
                  {tier.name}
                </h3>
              </div>
              <div className="mt-4 flex items-baseline text-6xl font-bold tracking-tight">
                £{tier.price}
                <span className="ml-1 text-2xl font-medium tracking-normal text-gray-500">
                  /per person
                </span>
              </div>
              <p className="mt-5 text-lg text-gray-500">{tier.description}</p>
            </div>
            <div className="flex flex-1 flex-col justify-between space-y-6 bg-gray-50 px-6 pt-6 pb-8 sm:p-10 sm:pt-6">
              <ul role="list" className="space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckIcon
                        className="h-6 w-6 text-green-500"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="ml-3 text-base text-gray-700">{feature}</p>
                  </li>
                ))}
              </ul>

              {selectedPlan === tier.name ? (
                <div className="rounded-md shadow w-full">
                  <button
                    onClick={() => onSelectPlan(tier.name)}
                    className="w-full rounded-md border border-transparent bg-indigo-400 px-5 py-3 text-base font-medium text-white hover:bg-gray-900"
                    aria-describedby="tier-standard"
                  >
                    Currently selected
                  </button>
                </div>
              ) : (
                <div className="rounded-md shadow">
                  <button
                    onClick={() => onSelectPlan(tier.name)}
                    className="w-full rounded-md border border-transparent bg-gray-800 px-5 py-3 text-base font-medium text-white hover:bg-gray-900"
                    aria-describedby="tier-standard"
                  >
                    Select {tier.name}
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
