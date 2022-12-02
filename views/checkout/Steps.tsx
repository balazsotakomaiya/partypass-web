import React from "react";
import Link from "next/link";

interface Props {
  currentStep: number;
  steps: Step[];
}

export interface Step {
  id: StepsOptions;
  label: string;
  name: string;
  order: number;
  slug: string;
  isCompleted: () => boolean;
}

export enum StepsOptions {
  SelectPlan = 1,
  SelectWeek = 2,
  ContactDetails = 3,
  TeamMembers = 4,
  Payment = 5,
}

const Steps: React.FC<Props> = ({ currentStep, steps }) => {
  return (
    <nav aria-label="Progress">
      <ol role="list" className="space-y-4 md:flex md:space-y-0 md:space-x-8">
        {steps.map((step) => (
          <li key={step.name} className="md:flex-1">
            {step.order < currentStep ? (
              <Link
                href={`/checkout/${encodeURIComponent(step.slug)}`}
                className="group flex flex-col border-l-4 border-indigo-600 py-2 pl-4 hover:border-indigo-800 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0"
              >
                <span className="text-sm font-medium text-indigo-600 group-hover:text-indigo-800">
                  {step.label}
                </span>
                <span className="text-sm font-medium">{step.name}</span>
              </Link>
            ) : step.id === currentStep ? (
              <Link
                href={`/checkout/${encodeURIComponent(step.slug)}`}
                className="flex flex-col border-l-4 border-indigo-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0"
                aria-current="step"
              >
                <span className="text-sm font-medium text-indigo-600">
                  {step.label}
                </span>
                <span className="text-sm font-medium">{step.name}</span>
              </Link>
            ) : (
              <Link
                href={`/checkout/${encodeURIComponent(step.slug)}`}
                className="group flex flex-col border-l-4 border-gray-200 py-2 pl-4 hover:border-gray-300 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0"
              >
                <span className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                  {step.label}
                </span>
                <span className="text-sm font-medium">{step.name}</span>
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Steps;
