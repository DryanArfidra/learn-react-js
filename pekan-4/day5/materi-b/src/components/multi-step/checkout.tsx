import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkoutSchema, type CheckoutValues, personalInfoSchema } from "@/lib/validations/checkout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { StepIndicator } from "./indicator";

const totalSteps = 2;

export function MultiStepCheckout() {
  const [currentStep, setCurrentStep] = useState(1);

  const form = useForm<CheckoutValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      fullName: "",
      email: "",
      street: "",
      city: "",
    },
  });

  const nextStep = async () => {
    if (currentStep === 1) {
      // Hanya validasi field di langkah 1
      const fieldsToValidate = Object.keys(personalInfoSchema.shape) as (keyof CheckoutValues)[];
      const isValid = await form.trigger(fieldsToValidate);
      if (isValid) {
        setCurrentStep((prev) => prev + 1);
      }
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const onSubmit = (data: CheckoutValues) => {
    console.log("Checkout Data:", data);
    alert("Checkout berhasil! Lihat console.");
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>Form Checkout</CardTitle>
        <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* LANGKAH 1: Personal Info */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nama Lengkap</FormLabel>
                      <FormControl>
                        <Input placeholder="nama anda.." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="nama@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {/* LANGKAH 2: Address Info */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="street"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Alamat Jalan</FormLabel>
                      <FormControl>
                        <Input placeholder="Jl. Contoh No. 123" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Kota</FormLabel>
                      <FormControl>
                        <Input placeholder="Jakarta" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            <div className="flex justify-between">
              <Button type="button" variant="outline" onClick={prevStep} disabled={currentStep === 1}>
                Sebelumnya
              </Button>
              {currentStep < totalSteps ? (
                <Button type="button" onClick={nextStep}>
                  Selanjutnya
                </Button>
              ) : (
                <Button type="submit">Selesaikan Checkout</Button>
              )}
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}