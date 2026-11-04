type Props = { status: string; dutchTime: string };

export function StatusCard({ status, dutchTime }: Props) {
  return (
    <section className="rounded-lg bg-surface p-6">
      <h1 className="text-2xl font-semibold">Setup check</h1>
      <p className="mt-2">
        Status: <strong className="text-primary">{status}</strong>
      </p>
      <p>Dutch time: {dutchTime}</p>
    </section>
  );
}
