

import { Col, Row, Typography } from "antd";
import Image from "next/image";



const questionAndAnswer = [
    {
        image: '/img/solar-rooftop.png',
        title: 'Nhà tôi mái ngói có lắp đặt được hệ năng lượng mặt trời không?',
        content: 'Solarmax đã triển khai nhiều mái nhà gia đình Việt lợp mái ngói, mái Bitum giả ngói với giải pháp đồng bộ, hệ khung Nhôm cao cấp bảo hành 12 năm giúp tiết kiệm Chi phí hợp lý, An toàn, Thẩm Mỹ cho mái nhà bạn.'
    },
    {
        image: '/img/hens-factory-chicken-cages.jpg',
        title: 'Nhà tôi có trang trại gà, mùa hè năm 2023 vừa qua bị mất điện liên tục dẫn đến thiệt hại lớn. Solar- max có giải pháp điện mặt trời vào phù hợp không?',
        content: 'Với trang trại gà yêu cầu có điện cho hệ thống làm mát và thông khí liên tục, Solarmax đã có giải pháp và hoàn thành lắp đặt hệ năng lượng mặt trời Hyprid có Pin Lithium lưu trữ 100kWp-300kWp cho nhiều chủ trang trại vào năm 2023. Tùy vào quy mô trang trại của bạn, bạn có thể lắp đặt hệ 20kWp-50 kWp theo từng giai đoạn, vừa sử dụng vừa đánh giá hiệu quả, lại tiết kiệm giúp giảm chi phí đầu tư tại một thời điểm.'
    },
    {
        image: '/img/solar-boat.png',
        title: 'Tôi là chủ tàu thủy, thường xuyên di chuyển trên sông nước, không có điện lưới, nếu lắp đặt hệ NLMT không dùng Pin Lithium lưu trữ thì có sử dụng được hệ không?',
        content: 'Với đặc điểm của bạn là không có điện lưới, mình cần sử dung Hệ năng lượng mặt trời Hybrid có Pin Lithium lưu trữ để sử dụng điện năng lượng mặt trời. Bạn có thể lắp tối thiểu 01 Pin lưu trữ 5kWh để sử dụng trải nghiệm trước, và tăng số lượng Pin lưu trữ lên 10kWh, 15kWh tùy vào nhu cầu sử dụng của bạn. Solarmax sẽ đến khảo sát diện tích lắp đặt trên thuyền để đưa ra giải pháp tối ưu nhất cho tàu của bạn.'
    },
    {
        image: '/img/max-solar-capacity.png',
        title: 'Solarmax lắp đặt được công suất tối đa là bao nhiêu?',
        content: 'Solarmax là tổng thầu EPC nhiều năm kinh nghiệm lắp đặt hệ NLMT gia đình từ 3-50kW, hệ công nghiệp thương mại 100kW-5 MW, Trang trại điện mặt trời 50MW-100MW...'
    },
    {
        image: '/img/solar-home.png',
        title: 'Nhà tôi có 2 nhà liền kề, tôi muốn lắp một hệ điện NLMT dùng chung cho 2 nhà được không? Giải pháp là gì',
        content: 'Solarmax trả lời là Có. Bạn có thể đầu tư hệ điện NLMT trên một mái giúp giảm chi phí đầu tư, tiết kiệm thiết bị dây. Solarmax đã từng triển khai cho khách hàng tại Hà Nội giải pháp cầu giao đảo chiều để gia đình sử dụng tối đa lượng điện do Hệ NLMT tạo ra, rút ngắn thời gian khấu hao và hoàn vốn đầu tư cho gia đình.'
    },
    {
        image: '/img/solar-combine.png',
        title: 'Mái nhà của tôi phức tạp kết hợp giữa mái bằng và mái ngói. Solarmax có giải pháp nào tối ưu lắp đặt không?',
        content:
            <>
                Solarmax tư vấn và khảo sát miễn phí tại nhà cho bạn, bao gồm:<br />
                1. Xác định nhu cầu sử dụng điện để tư vấn loại hệ Hybrid/ On - Grid và Công suất hệ năng lượng mặt trời phù hợp;<br />
                2. Xác định diện tích mái và địa hình mái để lên phương án khung giá đỡ và số lượng tấm Pin có thể lắp đặt;<br />
                3. Xác định hướng nhà, hướng nắng để thiết kế độ nghiêng phù hợp giúp tối đa hiệu suất của nắng;<br />
                4. Xác định đường điện, ổ điện, vị trí lắp đặt thiết bị Điện mặt trời giúp đảm bảo An toàn, Thẩm Mỹ, Phù hợp.<br />
            </>
    },
]

const QuestionAndAnswer = () => {


    return (
        <>
            {questionAndAnswer.map((item, index) => {
                return (
                    <Row >
                        <Col style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            width: '100%',
                            margin: '20px 15px 0px 15px',
                            height: '100%',
                            padding: '0px',
                            background: '#fff',
                            borderRadius: '8px',
                            boxShadow: '0 1px 2px 0 rgba(60,64,67,.1), 0 2px 6px 2px rgba(60,64,67,.15)'
                        }}>

                            <Row style={{ position: 'relative' }}>

                                <div style={{ padding: '0px', width: '100%', paddingTop: '56%', position: 'relative' }}>
                                    <Image style={{ borderRadius: '8px' }} alt='bam-tai' layout="fill" objectFit="cover" src={item.image} />
                                </div>

                                <div style={{ background: 'linear-gradient(to bottom, #ffffff00, #ffffff60 , #fff)', width: '100%', height: '60px', position: 'absolute', bottom: '-1px' }}>
                                </div>
                            </Row>
                            <div>
                                <Typography.Title style={{ margin: '10px 20px' }} level={5}>
                                    {item.title}
                                </Typography.Title>
                                <Typography.Paragraph style={{ margin: '10px 20px', textAlign: 'justify' }}>
                                    {item.content}
                                </Typography.Paragraph>
                            </div>


                        </Col>
                    </Row>
                )
            })

            }
        </>

    );
}

export default QuestionAndAnswer;