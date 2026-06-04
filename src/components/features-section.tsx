import Link from "next/link";

const features = [
  {
    title: "双层路由引擎",
    description: "先按应用选择连接方式，再按域名、IP、端口和规则集细分流向，命中路径清晰可查。",
    tag: "Route",
    wide: true,
    soft: false,
  },
  {
    title: "流量分析",
    description: "查看请求响应、进程来源、命中规则和脚本改写结果，排查异常接口更直接。",
    tag: "Observe",
    wide: false,
    soft: false,
  },
  {
    title: "策略编排",
    description: "应用级策略、规则集、DNS、TUN 和出口策略可以组合成更完整的运行链路。",
    tag: "Policy",
    wide: false,
    soft: false,
  },
  {
    title: "配置可控",
    description: "让本地配置、远程订阅、策略组和运行状态保持清晰可维护。",
    tag: "Config",
    wide: false,
    soft: false,
  },
  {
    title: "模块功能",
    description: "WARP、Tailscale、Cloudflared 等模块可组合进规则、DNS、TUN 和流量分析工作流。",
    tag: "Module",
    wide: true,
    soft: true,
  },
  {
    title: "桌面端效率",
    description: "面向长期运行场景设计，日常切换、更新和排错减少重复操作。",
    tag: "Desktop",
    wide: false,
    soft: false,
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="section features-section py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="section-header">
        <p>核心功能</p>
        <h2 className="text-gradient">通用代理客户端</h2>
        <span>保留深度控制，把订阅、规则、策略与观测收进同一个桌面工作流。</span>
      </div>
      <div className="bento-grid">
        {features.map((f) => (
          <article
            key={f.tag}
            className={`bento-card${f.wide ? " wide" : ""}${f.soft ? " soft" : ""}`}
          >
            <h3>{f.title}</h3>
            <p>{f.description}</p>
            <span>{f.tag}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
