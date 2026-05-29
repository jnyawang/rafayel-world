"use client"

import { Zap, Settings, Shield } from "lucide-react"

const recommendations = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "简单易用",
    description: "选择独立 App 服务商，下载即用",
    badge: "下单独的APP很省事，but只有这一家提供服务",
    color: "primary" as const,
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "灵活定制",
    description: "订阅 + 客户端，自由切换节点",
    badge: "这种比较灵活，相当于可以选不同翻墙渠道，在客户端里就能随便切。我个人体感是用clash这种客户端的更方便，不然一家APP崩了就没得翻了，如果要用不同家的，又要再下一个APP，占内存又麻烦",
    color: "secondary" as const,
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "稳定可靠",
    description: "老牌机场，多协议支持",
    badge: "长期使用",
    color: "accent" as const,
  },
]

export function BeginnerAdvice() {
  return (
    <section id="advice" className="relative py-32 px-6 overflow-hidden">
      {/* Background glows */}
      <div className="glow-orb glow-orb-pink w-[400px] h-[400px] top-20 right-0 opacity-25" />
      <div className="glow-orb glow-orb-blue w-[400px] h-[400px] bottom-20 left-0 opacity-20" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="gradient-text">选择建议</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            根据你的需求选择方案
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {recommendations.map((rec, index) => {
            const colorClasses = {
              primary: {
                icon: "bg-primary/15 text-primary",
                badge: "bg-primary/15 text-primary",
                glow: "glow-soft-pink",
              },
              secondary: {
                icon: "bg-secondary/15 text-secondary",
                badge: "bg-secondary/15 text-secondary",
                glow: "glow-soft-blue",
              },
              accent: {
                icon: "bg-accent/15 text-accent",
                badge: "bg-accent/15 text-accent",
                glow: "glow-soft-mixed",
              },
            }

            const colors = colorClasses[rec.color]

            return (
              <div
                key={index}
                className={`glass-card rounded-[2rem] p-8 md:p-10 ${colors.glow} card-shine group hover:scale-[1.03] transition-all duration-500 flex flex-col text-center`}
              >
                <div
                  className={`w-18 h-18 md:w-20 md:h-20 rounded-2xl ${colors.icon} flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300`}
                >
                  {rec.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {rec.title}
                </h3>

                <p className="text-muted-foreground mb-8 text-lg leading-relaxed flex-1">
                  {rec.description}
                </p>

                <div
                  className={`inline-flex items-center justify-center px-5 py-2.5 rounded-full ${colors.badge} text-sm font-medium mx-auto`}
                >
                  {rec.badge}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
