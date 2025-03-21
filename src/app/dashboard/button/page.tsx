'use client';
import { Button } from "@/components/ui/button";
import { Link, Loader2, MailOpen } from "lucide-react";

export default function Page() {
  return (
    <div className="grid grid-cols-5 gap-2">
      <Button onClick={()=> console.log("Hola")}>Default</Button>
      <Button variant="destructive">Default</Button>
      <Button variant="link">Default</Button>
      <Button variant="secondary">Default</Button>
      <Button variant="outline">Default</Button>
      <Button disabled capitalize>default</Button>
      <Button variant="success">default</Button>
      <Button>
        <MailOpen /> Login with Email
      </Button>
      <Button disabled>
        <Loader2 className="animate-spin" />
        Please wait
      </Button>
      <Button asChild>
        <Link href="/login">Login</Link>
      </Button>
    </div>
  );
}