import React from "react";
import Image from "next/image";
import { COMPANY_INFO } from "@/data";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-brand-line bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 text-sm">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-10">
          <div className="md:col-span-6 space-y-4">
            <a
              href="https://suvrin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="logo-link inline-block"
            >
              <Image
                src="/logo.png"
                alt="Suvrin Technologies"
                width={200}
                height={60}
                className="h-14 sm:h-16 w-auto object-contain block bg-transparent"
              />
            </a>
            <p className="text-slate-500 leading-relaxed max-w-md text-sm">
              Authoritative enterprise digital transformation and Odoo ERP implementation partner for industrial businesses across Gurgaon, Delhi NCR, and pan-India.
            </p>
          </div>
          <div className="md:col-span-6 space-y-1.5 text-slate-500">
            <p className="text-brand-ink font-heading font-bold text-base mb-2">
              <a
                href="https://suvrin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-[#2140A6] transition-colors"
              >
                Suvrin Technologies Pvt. Ltd.
              </a>
            </p>
            <p>{COMPANY_INFO.address}</p>
            <p className="text-[#83B773] font-bold">Direct Gurgaon / India Desk: {COMPANY_INFO.phoneDisplay}</p>
            <p className="text-xs text-slate-400">
              Email: {COMPANY_INFO.email} • Global: {COMPANY_INFO.globalPresence}
            </p>
          </div>
        </div>
        <div className="pt-5 border-t border-brand-line flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>
            © 2026{" "}
            <a
              href="https://suvrin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-slate-500"
            >
              Suvrin Technologies Pvt. Ltd.
            </a>
            {" "}Gurgaon, Haryana, India.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://suvrin.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-slate-600 transition-colors"
            >
              Privacy Policy
            </a>
            <span>•</span>
            <a
              href="https://suvrin.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-slate-600 transition-colors"
            >
              Terms
            </a>
            <span>•</span>
            <span>ISO 9001 / GST Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
