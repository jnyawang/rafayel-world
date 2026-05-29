const steps = [
  { num: "1", title: "下载 Clash/Surfboard 等安卓可用的客户端", desc: "从 GitHub等途径 获取安装包" },
  { num: "2", title: "复制订阅链接", desc: "在机场网站复制订阅地址" },
  { num: "3", title: "导入配置", desc: "配置 → 新建 → 从 URL 导入" },
  { num: "4", title: "启用 VPN", desc: "允许系统 VPN 权限" },
  { num: "5", title: "选择节点", desc: "选择延迟较低的服务器" },
]

export function AndroidTutorial() {
  return (
    <section id="android" className="pb-10">
      <div className="flex items-center gap-2 mb-3 px-1">
        <svg className="w-4 h-4 text-[#3DDC84]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.523 2.293a.5.5 0 0 0-.77.63l1.072 1.413a6.5 6.5 0 0 0-9.9.084L8.96 2.919a.5.5 0 1 0-.77-.63L6.945 3.973A7.505 7.505 0 0 0 4.5 9.5V10h15v-.5a7.505 7.505 0 0 0-2.445-5.527l1.468-2.18zM8.5 7.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm7 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
          <path d="M4.5 11v6.5A2.5 2.5 0 0 0 7 20h10a2.5 2.5 0 0 0 2.5-2.5V11h-15z" />
        </svg>
        <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          安卓教程
        </h2>
      </div>
      
      <div className="ios-group overflow-hidden">
        <div className="p-4 bg-green-50">
          <p className="text-sm font-medium text-green-800">使用客户端（此处用Clash举例）</p>
        </div>
        
        {steps.map((step, index) => (
          <div key={index}>
            {index > 0 && <div className="ios-separator" />}
            <div className="flex items-center gap-3 p-4">
              <div className="w-7 h-7 rounded-full bg-[#3DDC84] text-white text-sm font-semibold flex items-center justify-center flex-shrink-0">
                {step.num}
              </div>
              <div>
                <p className="text-base font-medium text-foreground">{step.title}</p>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
