import type { Metadata } from 'next'

import Generatorfourthframe from '../component/generator/generatorfourthframe'
import Generatorfiveframe from '../component/generator/generatorfiveframe'
import Generatorthirstframe from '../component/generator/generatorthirstrame'
import Generatorsecondframe from '../component/generator/generatorsecondframe'

export const metadata: Metadata = {
  title: 'Hệ Sigenergy cao cấp',
  description: 'Kết hợp năng lượng mặt trời, lưu trữ và sạc EV, Sigenergy cung cấp giải pháp năng lượng gia đình toàn diện giúp bạn giảm hóa đơn tiền điện và sự phụ thuộc vào lưới điện',
}


export default function mayPhatDienMatTroi() {

  return (
    <>
      <div style={{ width: '100%', background: '#fff' }}>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignContent: 'center' }}>
          <div style={{ marginTop: '70px' }}>
            <Generatorsecondframe />
            <Generatorthirstframe />
            <Generatorfourthframe />
            <Generatorfiveframe />
          </div>
        </div>
      </div>
    </>
  )
}
