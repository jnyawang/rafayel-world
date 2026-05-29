import { AlertCircle } from "lucide-react"

const steps = [
  { num: "1", title: "安装 Shadowrocket", desc: "App Store 下载" },
  { num: "2", title: "导入订阅", desc: "复制链接后自动弹窗导入" },
  { num: "3", title: "启用 VPN", desc: "允许添加 VPN 配置" },
  { num: "4", title: "选择节点", desc: "选择一个可用节点连接" },
]

export function IOSTutorial() {
  return (
    <section id="ios" className="pb-10">
      <div className="flex items-center gap-2 mb-3 px-1">
        <svg className="w-4 h-4 text-foreground" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          iOS 教程
        </h2>
      </div>
      
      <div className="ios-group overflow-hidden">
        <div className="p-4 bg-blue-50">
          <p className="text-sm font-medium text-blue-800">使用 Shadowrocket/其他客户端应用 客户端</p>
        </div>
        
        {steps.map((step, index) => (
          <div key={index}>
            {index > 0 && <div className="ios-separator" />}
            <div className="flex items-center gap-3 p-4">
              <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-semibold flex items-center justify-center flex-shrink-0">
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

      {/* Notices */}
      <div className="mt-4 space-y-3">
        <div className="ios-group p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground">付费应用</p>
              <p className="text-sm text-muted-foreground">约 $2.99，一次购买永久使用</p>
            </div>
          </div>
        </div>
        
        <div className="ios-group p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground">地区限制</p>
              <p className="text-sm text-muted-foreground">需要非中国大陆 Apple ID 才能下载</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
