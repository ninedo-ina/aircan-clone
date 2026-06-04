import Link from "next/link";

export function HeroSection() {
  return (
    <section className="hero-section relative pt-28 pb-20 overflow-hidden">
      <div className="hero-bg" />
      <div className="grid-bg absolute inset-0 pointer-events-none" />
      <div className="hero-copy relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="release-badge mx-auto">
          <span className="release-badge-dot" />
          v1.0.3 已发布 · 桌面端规则引擎与连接观测工作台
        </div>
        <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          <span className="text-gradient-accent">桌面网络控制器</span>
        </h1>
        <p className="hero-summary text-lg sm:text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto mb-10 leading-relaxed">
          把订阅、规则、策略组与连接观测放进一个清爽的桌面控制面。
        </p>
        <div className="hero-actions flex flex-wrap gap-3 justify-center mb-16">
          <Link
            href="#cta"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-10 px-5 bg-[var(--foreground)] text-[var(--primary-foreground)] hover:opacity-90 transition-all"
          >
            软件下载
          </Link>
          <Link
            href="#features"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-10 px-5 border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--accent)] transition-all"
          >
            规则引擎
          </Link>
          <Link
            href="#mitm"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-10 px-5 border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--accent)] transition-all"
          >
            流量分析
          </Link>
          <Link
            href="#features"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-10 px-5 border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--accent)] transition-all"
          >
            模块功能
          </Link>
          <Link
            href="#cta"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-10 px-5 border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--accent)] transition-all"
          >
            免费试用
          </Link>
        </div>
        <div className="window-wrap relative">
          <div className="dashboard-preview">
            {/* Dashboard mockup content */}
            <div className="p-4 h-full flex flex-col">
              {/* Title bar */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[var(--border)]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs text-[var(--muted-foreground)] ml-2 font-mono">Aircan — Dashboard</span>
              </div>
              {/* Sidebar + content */}
              <div className="flex flex-1 gap-3">
                {/* Sidebar */}
                <div className="w-32 flex-shrink-0 hidden sm:flex flex-col gap-1.5">
                  {["概览", "规则", "策略", "连接", "DNS", "TUN"].map((item) => (
                    <div
                      key={item}
                      className={`text-xs px-2 py-1.5 rounded ${
                        item === "概览"
                          ? "bg-[var(--accent)] font-medium"
                          : "text-[var(--muted-foreground)] hover:bg-[var(--accent)]"
                      } cursor-default transition-colors`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
                {/* Main content area */}
                <div className="flex-1 flex flex-col gap-3">
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: "活跃连接", value: "1,284" },
                      { label: "规则命中", value: "9,472" },
                      { label: "策略组", value: "12" },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-[var(--muted)] rounded-lg p-2.5">
                        <div className="text-[10px] text-[var(--muted-foreground)]">{stat.label}</div>
                        <div className="text-sm font-semibold mt-0.5">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                  {/* Connection list */}
                  <div className="flex-1 bg-[var(--muted)] rounded-lg p-2.5 overflow-hidden">
                    <div className="text-[10px] text-[var(--muted-foreground)] mb-2">最近连接</div>
                    {[
                      { host: "checkout.aircan.dev", rule: "RULE-SET", policy: "Proxy", status: "200" },
                      { host: "api.example.com", rule: "DOMAIN", policy: "Direct", status: "304" },
                      { host: "cdn.jsdelivr.net", rule: "GEOIP", policy: "Proxy", status: "200" },
                      { host: "stats.uisdc.com", rule: "RULE-SET", policy: "Reject", status: "—" },
                    ].map((conn) => (
                      <div key={conn.host} className="flex items-center gap-2 text-[10px] py-1 border-b border-[var(--border)] last:border-0">
                        <span className="font-mono text-[var(--muted-foreground)] w-4">·</span>
                        <span className="flex-1 truncate font-mono">{conn.host}</span>
                        <span className="text-[var(--muted-foreground)]">{conn.rule}</span>
                        <span className={`font-medium ${
                          conn.policy === "Proxy" ? "text-blue-500" : conn.policy === "Direct" ? "text-green-500" : "text-red-400"
                        }`}>{conn.policy}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="window-glow" />
        </div>
      </div>
    </section>
  );
}
