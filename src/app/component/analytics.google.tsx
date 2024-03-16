import Script from 'next/script'

function AnalyticsGoogle() {
    return (
        <div className="container">
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-VNYXEPHQKW" />
            <Script id="google-analytics">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

        gtag('config', 'G-VNYXEPHQKW');
        `}
            </Script>
        </div>
    )
}

export default AnalyticsGoogle