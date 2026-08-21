import Team from "./components/Team";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Team />
    </main>
  );
}
