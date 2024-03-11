
import Sigeneryframesix from "../component/sigenergy/sigeneryframesix";
import Sigeneryframeone from "../component/sigenergy/sigeneryframeone";
import Sigeneryframefive from "../component/sigenergy/sigeneryframefive";
import Sigeneryframethree from "../component/sigenergy/sigeneryframethree";



export default function heSigeneryCaoCap() {

  return (
    <>
      <div style={{ width: '100%', background: '#F2F1F6' }}>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignContent: 'left' }}>
          <div style={{ marginTop: '70px' }}>
            <Sigeneryframeone />
            <Sigeneryframethree />
            <Sigeneryframefive />
            <Sigeneryframesix />

          </div>
        </div>
      </div>
    </>
  )
}
