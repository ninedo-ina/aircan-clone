import Link from "next/link";

const footerLinks = {
  产品: [
    { label: "规则引擎", href: "#features" },
    { label: "流量分析", href: "#mitm" },
    { label: "模块功能", href: "#features" },
  ],
  "下载与资源": [
    { label: "软件下载", href: "#cta" },
    { label: "规则文件", href: "#" },
    { label: "免费试用", href: "#cta" },
  ],
  账户: [
    { label: "登录", href: "#" },
    { label: "注册", href: "#" },
    { label: "控制台", href: "#" },
  ],
  法律: [
    { label: "隐私政策", href: "#" },
    { label: "服务条款", href: "#" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="site-footer py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="footer-grid">
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-lg font-bold mb-3">
              Aircan
            </h3>
            <p className="text-[var(--muted-foreground)] text-sm leading-relaxed mb-4">
              面向桌面端的规则引擎、流量分析与网络策略工作台。
            </p>
            <p className="text-[var(--muted-foreground)] text-sm">
              support@aircan.app
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-sm mb-3">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--muted-foreground)]">
            Copyright &copy; 2026 AirnetTools Inc. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">
              隐私政策
            </Link>
            <Link href="#" className="text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">
              服务条款
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
