import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-white text-slate-800">
      <h2 className="text-3xl font-bold mb-2">404 - Page Not Found</h2>
      <p className="text-slate-500 mb-6">The page you are looking for does not exist.</p>
      <Link
        href="/"
        className="px-6 py-2.5 rounded-full bg-[#002098] text-white font-semibold text-sm hover:opacity-90"
      >
        Return Home
      </Link>
    </div>
  );
}
