import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/login">
        <button className="bg-black text-white">Get Started</button>
      </Link>
    </div>
  );
}
