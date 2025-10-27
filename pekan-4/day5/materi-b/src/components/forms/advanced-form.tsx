import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { advancedFormSchema, type AdvancedFormValues } from "@/lib/validations/auth"; // Import skema dan tipe baru
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AdvancedForm() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<AdvancedFormValues>({ // Gunakan tipe baru
    resolver: zodResolver(advancedFormSchema), // Gunakan skema baru
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      profilePicture: undefined, // Default value yang lebih bersih
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      // Set value dan trigger validasi untuk field ini
      form.setValue("profilePicture", file, { shouldValidate: true });
    }
  };

  useEffect(() => {
    if (selectedFile) {
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreviewUrl(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setPreviewUrl(null);
    }
  }, [selectedFile]);

  const onSubmit = async (values: AdvancedFormValues) => { // Gunakan tipe baru
    setIsSubmitting(true);
    console.log("Form Values:", values);
    
    // Simulasi submit dengan FormData
    const formData = new FormData();
    formData.append("email", values.email);
    formData.append("password", values.password);
    if (values.profilePicture) {
      formData.append("profilePicture", values.profilePicture);
    }

    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulasi API call
    alert("Pendaftaran dengan file berhasil! (Simulasi)");
    form.reset();
    setSelectedFile(null);
    setIsSubmitting(false);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader><CardTitle>Form Advanced</CardTitle></CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField control={form.control} name="email" render={({ field }) => (
              <FormItem><FormLabel>Email</FormLabel><FormControl><Input type="email" {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="password" render={({ field }) => (
              <FormItem><FormLabel>Password</FormLabel><FormControl><Input type="password" {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormItem>
              <FormLabel>Profile Picture</FormLabel>
              <FormControl><Input type="file" accept="image/*" onChange={handleFileChange} /></FormControl>
              {/* Tampilkan pesan error dari validasi schema */}
              {form.formState.errors.profilePicture && (
                <FormMessage>{form.formState.errors.profilePicture.message}</FormMessage>
              )}
            </FormItem>
            {previewUrl && (
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Preview:</p>
                <img src={previewUrl} alt="Preview" className="w-32 h-32 object-cover rounded-full border-2 border-gray-300" />
              </div>
            )}
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Mengirim..." : "Daftar"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}