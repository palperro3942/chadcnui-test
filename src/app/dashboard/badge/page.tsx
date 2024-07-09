import { Badge } from "@/components/ui/badge";

export default function Page() {
  return (
    <div className="flex gap-4">
      <Badge capitalize >badge</Badge>
      <Badge capitalize variant={"destructive"}>destructive</Badge>
      <Badge variant={"outline"}>outline</Badge>
      <Badge capitalize={false} variant={"secondary"}>secondary</Badge>
      <Badge variant={"success"}>success</Badge>
    </div>
  );
}