import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-3">

        <div>
          <h3 className="text-xl font-semibold">Rewan Tech Solutions</h3>
          <p className="mt-3 text-slate-400">
            We design and build modern web, mobile, and AI-powered digital
            products for startups and businesses.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Pages</h4>
          <div className="mt-3 flex flex-col gap-2 text-slate-400">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/work">Work</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold">Contact</h4>
          <div className="mt-3 text-slate-400 space-y-2">
            <p>hello@rewantechsolutions.com</p>
            <p>India</p>
          </div>
        </div>

      </div>

      <div className="text-center text-sm text-slate-500 pb-6">
        © {new Date().getFullYear()} Rewan Tech Solutions
      </div>
    </footer>
  );
}