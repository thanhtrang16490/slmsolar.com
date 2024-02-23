import type { Metadata } from 'next'
import StyledComponentsRegistry from '@/lib/antd.registry'
import ChatBoxModule from './component/footer/chat.box'
import AnalyticsGoogle from './component/analytics.google'
import NProgressWrapper from '@/lib/nprogress.wrapper'
import TopNavigation from './component/header/top.navigation'
import { Barlow } from 'next/font/google'
import './globals.css'

const barlow = Barlow({
  weight: "400",
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SolarMax',
  description: 'SoLarMax cung cấp giải pháp điện mặt trời áp mái dành cho hộ gia đình, hộ kinh doanh với chi phí hợp lý, miễn phí khảo sát trực tiếp.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={barlow.className}>
      <head>
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />

      </head>
      <AnalyticsGoogle />
      <body style={{ margin: '-18px 0 0 0' }}>
        <StyledComponentsRegistry>
          <NProgressWrapper>
            <TopNavigation />
            {children}
            <ChatBoxModule />
          </NProgressWrapper>
        </StyledComponentsRegistry>
      </body>
    </html >
  )
}
