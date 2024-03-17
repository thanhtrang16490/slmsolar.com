import type { Metadata } from 'next'
import StyledComponentsRegistry from '@/lib/antd.registry'
import AnalyticsGoogle from './component/analytics.google'
import NProgressWrapper from '@/lib/nprogress.wrapper'
import TopNavigation from './component/header/top.navigation'
import { Barlow } from 'next/font/google'
import './globals.css'
import CallBoxModule from './component/footer/call.box'
import { GoogleTagManager } from '@next/third-parties/google'



const barlow = Barlow({
  weight: "400",
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SolarMax - ĐIỆN XANH MÁI NHÀ VIỆT',
  description: 'Đến năm 2030, Solarmax hoàn thành lắp đặt 1 triệu m2 tấm pin năng lượng mặt trời cho mái nhà Việt.',
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
      <body style={{ maxWidth: '1000px', margin: '-18px auto 0', }}>

        <StyledComponentsRegistry>
          <NProgressWrapper>
            <TopNavigation />

            {children}

            <CallBoxModule />
          </NProgressWrapper>
        </StyledComponentsRegistry>
        <GoogleTagManager gtmId="GTM-M8TDZH8K" />
      </body>
    </html >
  )
}
