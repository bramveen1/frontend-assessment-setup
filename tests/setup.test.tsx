import { expect, test } from "bun:test";
import { renderToString } from "react-dom/server";
import { GET } from "@/app/api/ping/route";
import { StatusCard } from "@/components/StatusCard";
import { dutchClock } from "@/lib/status";

test("the API route responds", async () => {
  const response = GET();
  expect(response.status).toBe(200);
  expect((await response.json()).status).toBe("ok");
});

test("React components render", () => {
  const html = renderToString(<StatusCard status="ok" dutchTime="12:00" />);
  expect(html).toContain("ok");
});

test("time zone data is available", () => {
  const summer = new Date("2026-07-01T12:00:00Z");
  const winter = new Date("2026-01-15T12:00:00Z");
  expect(dutchClock(summer)).toBe("14:00");
  expect(dutchClock(winter)).toBe("13:00");
});
