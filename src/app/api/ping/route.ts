import { status } from "@/lib/status";

export function GET() {
  return Response.json(status());
}
