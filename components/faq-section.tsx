"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "什么是机场？",
    answer: "机场是提供代理节点服务的服务商的俗称。购买套餐后可以使用它们运营的服务器节点。",
  },
  {
    question: "什么是 Clash？",
    answer: "Clash 是其中一款跨平台的代理客户端软件，支持多种代理协议，是目前最主流的代理工具之一。",
  },
  {
    question: "什么是订阅链接？",
    answer: "订阅链接是包含节点配置信息的 URL。导入客户端后会自动获取所有可用节点。",
  },
  {
    question: "为什么有些 VPN 只有 App？",
    answer: "部分服务商为了简化使用，将订阅和客户端打包成独立 App，下载即用，完全不用了解这些只需要下个app就可以。",
  },
  {
    question: "新手选哪种方式？",
    answer: "如果追求简单，选独立 App。如果想要更多控制和节点选择，用订阅 + 客户端。",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="pb-10">
      <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-1">
        常见问题
      </h2>
      
      <div className="ios-group overflow-hidden">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-0"
            >
              <AccordionTrigger className="text-left text-foreground hover:no-underline px-4 py-4 text-base font-medium data-[state=open]:bg-muted/30">
                <span className="pr-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground px-4 pb-4 leading-relaxed">
                {faq.answer}
              </AccordionContent>
              {index < faqs.length - 1 && <div className="ios-separator" />}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
