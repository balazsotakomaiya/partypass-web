import React, { useState } from "react";
import { useRouter } from "next/router";
import SelectPlan from "./SelectPlan";
import Steps, { Step, StepsOptions } from "./Steps";
import SelectWeek from "./SelectWeek";

const CheckoutView = () => {
  const router = useRouter();
  const { step } = router.query;
  const [selectedPlan, setSelectedPlan] = useState<PlanOptions | null>(null);
  const [selectedDates, setSelectedDates] = useState<Date | null>(null);

  const steps: Step[] = [
    {
      label: "Step 1",
      name: "Plan",
      id: StepsOptions.SelectPlan,
      order: 0,
      slug: "select-plan",
      isCompleted: () => selectedPlan !== null,
    },
    {
      label: "Step 2",
      name: "Week",
      id: StepsOptions.SelectWeek,
      order: 1,
      slug: "select-week",
      isCompleted: () => selectedDates !== null,
    },
    {
      label: "Step 3",
      name: "Contact details",
      id: StepsOptions.ContactDetails,
      order: 2,
      slug: "contact-details",
      isCompleted: () => selectedPlan !== null,
    },
    {
      label: "Step 4",
      name: "Team",
      id: StepsOptions.TeamMembers,
      order: 3,
      slug: "team-members",
      isCompleted: () => selectedPlan !== null,
    },
    {
      label: "Step 5",
      name: "Payment",
      id: StepsOptions.Payment,
      order: 4,
      slug: "payment",
      isCompleted: () => selectedPlan !== null,
    },
  ];

  return (
    <div className="p-16">
      <h1 className="text-2xl font-medium">Checkout</h1>

      <div className="mt-8" />

      <Steps steps={steps} currentStep={StepsOptions.SelectPlan} />

      <div className="mt-8" />
      {step === "select-plan" ? (
        <SelectPlan
          onSelectPlan={(plan) => setSelectedPlan(plan)}
          selectedPlan={selectedPlan}
        />
      ) : null}
      {step === "select-week" ? <SelectWeek /> : null}
    </div>
  );
};
export default CheckoutView;
