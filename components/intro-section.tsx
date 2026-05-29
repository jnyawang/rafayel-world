import { Globe, Wifi } from "lucide-react"

export function IntroSection() {
  return (
    <section id="intro" className="pb-10">
      <div className="ios-group p-4">
        <div className="flex items-start gap-3 pb-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Globe className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h2 className="text-base font-semibold text-foreground">什么是科学上网？</h2>
            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
              通过代理服务器中转网络请求，让你能够访问被限制的网站和服务。
            </p>
          </div>
        </div>
        
        <div className="ios-separator" />
        
        <div className="flex items-start gap-3 pt-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Wifi className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h2 className="text-base font-semibold text-foreground">VPN 与代理的区别</h2>
            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
              VPN 加密全部流量，代理通常只处理特定应用。实际使用中两者常混用。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
