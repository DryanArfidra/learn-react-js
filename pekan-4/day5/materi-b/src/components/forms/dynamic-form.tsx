import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { socialLinksSchema, type SocialLinksValues } from "@/lib/validations/auth";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PlusCircle, Trash2 } from "lucide-react";

export function DynamicForm() {
  const form = useForm<SocialLinksValues>({
    resolver: zodResolver(socialLinksSchema),
    defaultValues: { links: [{ platform: "", url: "" }] },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "links",
  });

  function onSubmit(values: SocialLinksValues) {
    console.log("Dynamic Form Data:", values);
    alert("Data berhasil disimpan!");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          {fields.map((field, index) => (
            <div key={field.id} className="flex gap-4 items-end p-4 border rounded-lg">
              <FormField
                control={form.control}
                name={`links.${index}.platform`}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Platform</FormLabel>
                    <FormControl><Input placeholder="contoh: Twitter" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`links.${index}.url`}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>URL</FormLabel>
                    <FormControl><Input placeholder="https://..." {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {fields.length > 1 && (
                <Button type="button" variant="destructive" size="icon" onClick={() => remove(index)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}
        </div>
        <Button type="button" variant="outline" onClick={() => append({ platform: "", url: "" })} className="w-full">
          <PlusCircle className="mr-2 h-4 w-4" /> Tambah Link
        </Button>
        <Button type="submit" className="w-full">Simpan</Button>
      </form>
    </Form>
  );
}