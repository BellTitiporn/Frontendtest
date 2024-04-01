import './Layout&Style.css'
import { Col, Divider, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';

function Test1(){
  const { t } = useTranslation();


    return (
        <div className='wrapper1'>
    <div className="title">{t('Layout & Style')}</div>
    <div className='navbar-layout'><Navbar/></div>
    <Divider  orientation="left"></Divider>
    <Row className="item1">
      <Col className="item1-1" span={4}><div className='triangle-left'></div></Col>
      <Col className="item1-2" span={8}><div className='center'><div className='triangle-top'></div><div className='triangle-bottom'></div></div></Col>
      <Col className="item1-3" span={4}><div className='triangle-right'></div></Col>
    </Row>

    <Divider orientation="left"></Divider>
        <>
          <Row className="item2">
            <Col className="item2-1" span={4}></Col>
            <Col className="item2-2" span={4}><div className="square"></div></Col>
            <Col className="item2-3" span={4}><div className="circle"></div></Col>
            <Col className="item2-4" span={4}><div className="oval"></div></Col>
          </Row>

          <Divider orientation="left"></Divider>

          <Row className="item3">
            <Col className="item3-1" span={4}><div className="trapezoid"></div></Col>
            <Col className="item3-2" span={4}><div className="rectangle"></div></Col>
            <Col className="item3-3" span={4}><div className="parallelogram"></div></Col>
          </Row>
        </>
    </div>
  );
}


export default Test1