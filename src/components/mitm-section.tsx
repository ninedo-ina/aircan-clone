const mitmFeatures = [
  {
    title: "关键请求一条线看完",
    description: "开启 MITM 后，把 HTTPS 解密、规则命中、响应状态和脚本改写放进同一个排障面板。",
    large: true,
  },
  {
    title: "请求响应可见",
    description: "查看 HTTPS 请求头、响应状态和内容片段，定位接口异常更直接。",
    large: false,
  },
  {
    title: "命中路径可查",
    description: "进程来源、命中规则、出口策略放在同一条记录里。",
    large: false,
  },
  {
    title: "改写结果可追踪",
    description: "脚本改写后的结果和异常状态一起保留，方便复盘。",
    large: false,
  },
  {
    title: "关键链路排障",
    description: "适合检查登录、支付、订阅更新等需要确认结果的流程。",
    large: false,
  },
];

export function MitmSection() {
  return (
    <section id="mitm" className="section rules-section py-24 relative">
      <div className="rules-bg grid-bg absolute inset-0 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header mitm-section-head">
          <p>MITM 流量分析</p>
          <h2 className="text-gradient">轻量级网络调试</h2>
          <span>HTTPS 请求、响应内容、进程来源、命中规则和脚本改写结果放在同一组工作流里。</span>
        </div>
        <div className="mitm-bento-grid">
          {mitmFeatures.map((f, i) => (
            <article
              key={i}
              className={`mitm-card${f.large ? " mitm-large" : ""}`}
            >
              <div className="card-icon" />
              <h3>{f.title}</h3>
              <p>{f.description}</p>
              {f.large && (
                <div className="mitm-stack">
                  <div className="mitm-stack-row">
                    <span className="method">POST</span>
                    <span className="url">/api/license/activate</span>
                    <span className="status">200 OK</span>
                  </div>
                  <div className="mitm-stack-row">
                    <span className="rule">RULE-SET</span>
                    <span className="url">license-api</span>
                    <span className="status">Proxy</span>
                  </div>
                  <div className="mitm-stack-row">
                    <span className="rule">Response</span>
                    <span className="url">body + rewrite log</span>
                  </div>
                  <div className="mitm-stack-row">
                    <span className="rule">Trace</span>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
