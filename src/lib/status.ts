const TIME_ZONE = "Europe/Amsterdam";

/** 14:00, in Dutch time whatever the machine's own time zone is. */
export function dutchClock(instant: Date): string {
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
    timeZone: TIME_ZONE,
  }).format(instant);
}

export function status(now = new Date()) {
  return { status: "ok", dutchTime: dutchClock(now) } as const;
}
