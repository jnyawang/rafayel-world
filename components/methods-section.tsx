import { Smartphone, Link2, ChevronRight } from "lucide-react"

export function MethodsSection() {
  return (
    <section id="methods" className="pb-10">
      <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-1">
        两种主要方式
      </h2>
      
      <div className="ios-group overflow-hidden">
        {/* Method 1 */}
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">独立 App 方式</h3>
                <p className="text-sm text-muted-foreground">下载、注册、一键连接</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground/50" />
          </div>
          <div className="mt-3 ml-13 pl-13">
            <span className="inline-block text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
              简单无脑
            </span>
          </div>
        </div>
        
        <div className="ios-separator" />
        
        {/* Method 2 */}
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center">
                <Link2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">订阅 + 客户端</h3>
                <p className="text-sm text-muted-foreground">购买订阅，导入 Clash/Surfboard 等客户端</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground/50" />
          </div>
          <div className="mt-3 ml-13 pl-13">
            <span className="inline-block text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
              灵活方便
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
