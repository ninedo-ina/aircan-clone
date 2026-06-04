import Link from "next/link";

export function CtaSection() {
  return (
    <section id="cta" className="cta-section py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="cta-glow" />
      <div className="relative max-w-2xl mx-auto text-center">
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-4">
          开始整理你的网络工作台
        </h2>
        <p className="text-[var(--muted-foreground)] text-lg mb-8 leading-relaxed">
          下载 Aircan，导入订阅，设置应用级策略，然后在同一处观察每一次策略命中。
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="#"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-10 px-6 bg-[var(--foreground)] text-[var(--primary-foreground)] hover:opacity-90 transition-all"
          >
            软件下载
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-10 px-6 border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--accent)] transition-all"
          >
            免费试用
          </Link>
        </div>
      </div>
    </section>
  );
}
