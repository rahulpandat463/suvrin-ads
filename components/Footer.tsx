import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-14 px-4 sm:px-8 md:px-12 lg:pl-28 border-t border-brand-line bg-transparent">
      <div className="max-w-7xl mx-auto text-sm">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-10">
          <div className="md:col-span-6 space-y-4">
            <a href="#chapter-hero" className="logo-link inline-block">
              <Image
                src="/logo.png"
                alt="Suvrin Technologies"
                width={200}
                height={60}
                className="h-14 sm:h-16 w-auto object-contain block bg-transparent"
              />
            </a>
            <p className="text-slate-500 leading-relaxed max-w-md text-sm">
              Authoritative enterprise digital transformation and Odoo ERP implementation partner for industrial businesses across Dubai, Abu Dhabi, and the GCC.
            </p>
          </div>
          <div className="md:col-span-6 space-y-1.5 text-slate-500">
            <p className="text-brand-ink font-heading font-bold text-base mb-2">
              Suvrin Technologies / Maxcode Solutions LLC
            </p>
            <p>Living Marina Gate, D94 M Floor, Jumeirah, Dubai Marina, UAE</p>
            <p className="text-brand-blue font-bold">Direct GCC Desk: +971 501 359 238</p>
            <p className="text-xs text-slate-400">
              Email: sudeep@suvrin.com • Global: India (Delhi NCR) • USA (Delaware)
            </p>
          </div>
        </div>
        <div className="pt-5 border-t border-brand-line flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© 2026 Suvrin Technologies. In collaboration with Maxcode Solutions LLC, Dubai.</p>
          <div className="flex items-center gap-3">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms</span>
            <span>•</span>
            <span>ISO 9001 / GCC Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
