"use client";

import { useTheme } from "./theme-provider";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "首页", href: "/" },
  { label: "规则引擎", href: "#features" },
  { label: "流量分析", href: "#mitm" },
  { label: "模块功能", href: "#features" },
  { label: "软件下载", href: "#cta" },
  { label: "免费试用", href: "#cta" },
];

export function SiteHeader() {
  const { theme, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="nav-shell flex items-center justify-between h-14">
          <Link href="/" className="nav-logo text-lg font-bold font-[family-name:var(--font-display)]">
            Aircan
          </Link>

          <div className="nav-menu hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-3 py-1.5 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors rounded-md hover:bg-[var(--accent)]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="nav-actions flex items-center gap-2">
            <button
              className="menu-toggle md:hidden theme-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {menuOpen ? (
                  <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
                ) : (
                  <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
                )}
              </svg>
            </button>
            <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
              {theme === "dark" ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
            <Link
              href="#"
              className="nav-button hidden sm:inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-8 px-4 bg-[var(--foreground)] text-[var(--primary-foreground)] hover:opacity-90 transition-all"
            >
              登录
            </Link>
          </div>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-[var(--border)]">
            <div className="flex flex-col gap-1 pt-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--accent)] rounded-md transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#"
                className="px-3 py-2 text-sm font-medium bg-[var(--foreground)] text-[var(--primary-foreground)] rounded-md text-center mt-2"
                onClick={() => setMenuOpen(false)}
              >
                登录
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
