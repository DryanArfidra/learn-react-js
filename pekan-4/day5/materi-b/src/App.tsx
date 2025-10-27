import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BasicForm } from "@/components/forms/basic-form";
import { DynamicForm } from "@/components/forms/dynamic-form";
import { AdvancedForm } from "@/components/forms/advanced-form";
import { MultiStepCheckout } from "@/components/multi-step/checkout";

type FormType = "basic" | "dynamic" | "advanced" | "multi-step";

function App() {
  const [activeForm, setActiveForm] = useState<FormType>("basic");

  const renderForm = () => {
    switch (activeForm) {
      case "basic":
        return <BasicForm />;
      case "dynamic":
        return <DynamicForm />;
      case "advanced":
        return <AdvancedForm />;
      case "multi-step":
        return <MultiStepCheckout />;
      default:
        return <BasicForm />;
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-center">Evaluasi Harian Ke-23</CardTitle>
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            <Button variant={activeForm === "basic" ? "default" : "outline"} onClick={() => setActiveForm("basic")}>
              Basic Form
            </Button>
            <Button variant={activeForm === "multi-step" ? "default" : "outline"} onClick={() => setActiveForm("multi-step")}>
              Multi-Step
            </Button>
            <Button variant={activeForm === "dynamic" ? "default" : "outline"} onClick={() => setActiveForm("dynamic")}>
              Dynamic Form
            </Button>
            <Button variant={activeForm === "advanced" ? "default" : "outline"} onClick={() => setActiveForm("advanced")}>
              Advanced Form
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {renderForm()}
        </CardContent>
      </Card>
    </main>
  );
}

export default App;