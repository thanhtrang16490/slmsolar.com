
import Sigeneryframesix from "../component/sigenergy/sigeneryframesix";
import Sigeneryframeone from "../component/sigenergy/sigeneryframeone";
import Sigeneryframefive from "../component/sigenergy/sigeneryframefive";
import Sigeneryframethree from "../component/sigenergy/sigeneryframethree";
import type { Metadata } from 'next'
import Sigeneryframefour from "../component/sigenergy/sigeneryframefour";
import Sigeneryframetwo from "../component/sigenergy/sigeneryframetwo";

export const metadata: Metadata = {
  title: 'Hệ Sigenergy cao cấp',
  description: 'Kết hợp năng lượng mặt trời, lưu trữ và sạc EV, Sigenergy cung cấp giải pháp năng lượng gia đình toàn diện giúp bạn giảm hóa đơn tiền điện và sự phụ thuộc vào lưới điện',
}


export default function heSigeneryCaoCap() {

  return (
    <>
      <div style={{ width: '100%', background: '#fff' }}>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignContent: 'center' }}>
          <div style={{ marginTop: '70px' }}>
            <Sigeneryframeone />
            <Sigeneryframetwo />
            <Sigeneryframethree />
            <Sigeneryframefour />
            <Sigeneryframefive />
            <Sigeneryframesix />

          </div>
        </div>
      </div>
    </>
  )
}
