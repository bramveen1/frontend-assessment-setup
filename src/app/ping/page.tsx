import { StatusCard } from "@/components/StatusCard";
import { status } from "@/lib/status";

export const dynamic = "force-dynamic";

export default function PingPage() {
  return <StatusCard {...status()} />;
}
