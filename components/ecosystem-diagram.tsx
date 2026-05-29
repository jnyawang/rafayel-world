import { Server, Link2, Smartphone, ArrowDown } from "lucide-react"

export function EcosystemDiagram() {
  return (
    <section id="diagram" className="pb-10">
      <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-1">
        工作原理
      </h2>
      
      <div className="ios-group p-5">
        {/* Flow diagram */}
        <div className="flex flex-col items-center">
          {/* Provider */}
          <div className="w-full flex items-center gap-3 p-3 rounded-xl bg-muted/50">
            <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center">
              <Server className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">服务商 / 机场</p>
              <p className="text-xs text-muted-foreground">提供代理服务器节点</p>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex flex-col items-center py-2">
            <ArrowDown className="w-4 h-4 text-muted-foreground/40" />
            <span className="text-[10px] text-muted-foreground/60">生成</span>
          </div>

          {/* Subscription */}
          <div className="w-full flex items-center gap-3 p-3 rounded-xl bg-muted/50">
            <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center">
              <Link2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">订阅链接</p>
              <p className="text-xs text-muted-foreground">包含节点配置的 URL</p>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex flex-col items-center py-2">
            <ArrowDown className="w-4 h-4 text-muted-foreground/40" />
            <span className="text-[10px] text-muted-foreground/60">导入</span>
          </div>

          {/* Client Apps */}
          <div className="w-full flex items-center gap-3 p-3 rounded-xl bg-muted/50">
            <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
              <Smartphone className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">客户端应用</p>
              <p className="text-xs text-muted-foreground">Clash / Shadowrocket / Stash</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-5 h-px bg-border" />

        {/* Note */}
        <div className="p-3 rounded-xl bg-blue-50">
          <p className="text-sm text-blue-800">
            <span className="font-medium">提示：</span>部分服务商提供独立 App，无需单独安装客户端
          </p>
        </div>
      </div>
    </section>
  )
}
