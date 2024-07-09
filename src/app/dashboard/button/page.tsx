import { Button } from "@/components/ui/button";
import { ChevronRight, Loader2, Mail } from "lucide-react";
import Link from "next/link";

export default function Page() {
    return (
        <div className="grid grid-cols-5 gap-2">
            <Button variant={"default"}>Click Aqui</Button>
            <Button variant={"destructive"}>destructive</Button>
            <Button variant={"ghost"}>ghost</Button>
            <Button variant={"link"}>link</Button>
            <Button variant={"outline"}>outline</Button>
            <Button variant={"secondary"}>secondary</Button>
            <Button variant={"success"} capitalize={false}>success</Button>
            <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
            </Button>
            <Button>
                <Mail className="mr-2 h-4 w-4" /> Login with Email
            </Button>
            <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
            </Button>
            <Button asChild>
                <Link href="/login">Login</Link>
            </Button>
        </div>
    );
}