import {Card,Row,Col} from "antd";
import { Link } from 'react-router-dom';
import './Home.css'
import { useTranslation } from 'react-i18next';
import Navbar from "./Navbar";

function Home() {
    const { t } = useTranslation();

  return (
    <div><Navbar/>
    <div className='container'>
      <Row gutter={16}>
        <Col span={8}>
            <Link to="/layout">
                <Card className='card1' title={t("Test 1")} bordered={false}>
                {t('Layout & Style')}
                </Card>
            </Link>
        </Col>
        <Col span={8}>
            <Card className='card2' title={t("Test 2")} bordered={false}>
                {t('Connect API')}
            </Card>
        </Col>
        <Col span={8}>
            <Link to="/form">
            <Card className='card3' title={t("Test 3")} bordered={false}>
                {t('Form & Table')}
            </Card>
            </Link>
        </Col>
    </Row>
    </div>
  </div>
  )
}

export default Home