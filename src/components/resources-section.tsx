import Link from "next/link";

const resources = [
  {
    title: "导入订阅",
    description: "把远程订阅、本地规则文件和策略组放进统一配置。",
  },
  {
    title: "执行规则",
    description: "先按应用选择连接方式，再按域名、IP、端口和进程细分。",
  },
  {
    title: "观察流量",
    description: "查看请求响应、命中规则、出口策略和脚本改写结果。",
  },
  {
    title: "策略组合",
    description: "应用级策略、规则集、DNS、TUN 和出口策略组合成完整链路。",
  },
  {
    title: "模块集成",
    description: "WARP、Tailscale、Cloudflared 等模块集成进工作流。",
  },
  {
    title: "桌面效率",
    description: "面向长期运行场景，日常切换、更新和排错减少重复操作。",
  },
];

export function ResourcesSection() {
  return (
    <section className="section resources-section py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="section-header">
        <p>工作流</p>
        <h2 className="text-gradient">配置、执行、观测</h2>
        <span>从规则输入到连接分析，保持同一条操作链路。</span>
      </div>
      <div className="resource-grid">
        {resources.map((r, i) => (
          <Link href="#" key={i} className="resource-card">
            <strong>{r.title}</strong>
            <span>{r.description}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
