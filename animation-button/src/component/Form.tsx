import {
    DatePicker,
    Radio,
    Select,
    Table,
    TableColumnsType,
  } from "antd";
import { Button, Form, Input, Space } from "antd";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";
import {useState } from "react";
import { Link } from "react-router-dom";
import "./Form.css"
  
  interface DataType {
    key: React.Key;
    name: string;
    genders: string;
    phone: string;
    nation: string;
    Manage: string;
  }
  
  function FormComponent() {
    const { t } = useTranslation();
    const columns: TableColumnsType<DataType> = [
      {
        title: "ชื่อ",
        dataIndex: "Names",
      },
      {
        title: "เพศ",
        dataIndex: "genders",
      },
      {
        title: "หมายเลขโทรศัพท์",
        dataIndex: "phone",
      },
      {
        title: "สัญชาติ",
        dataIndex: "nation",
      },
      {
        title: "จัดการ",
        dataIndex: "Manage",
      },
    ];
    const data: DataType[] = [];
  
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
      console.log("selectedRowKeys changed: ", newSelectedRowKeys);
      setSelectedRowKeys(newSelectedRowKeys);
    };
  
    const rowSelection = {
      selectedRowKeys,
      onChange: onSelectChange,
    };
  
    return (
      <div>
        <div style={{ display: "flex" }}>
          <div>
            <h1>{t("Form & Table")}</h1>
          </div>
          <div className="navbar">
            <Navbar />
          </div>
          <Link to={"/"}><button className="back">{t('Home')}</button></Link>
          
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Form
            style={{
              border: "2px solid black",
              borderRadius: "8px",
              padding: "15px",
            }}
          >
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <Form.Item
                name="prefix"
                label={t("Prefix")}
                rules={[{ required: true }]}
              >
                <Select style={{ width: "80px" }} placeholder={t("Prefix")}>
                  <Select.Option value="mr">{t("mr")}</Select.Option>
                  <Select.Option value="mrs">{t("mrs")}</Select.Option>
                  <Select.Option value="ms">{t("ms")}</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="name"
                label={t("Name")}
                rules={[{ required: true }]}
              >
                <Input style={{ width: "400px" }} />
              </Form.Item>
              <Form.Item
                name="lastname"
                label={t("Lastname")}
                rules={[{ required: true }]}
              >
                <Input style={{ width: "400px" }} />
              </Form.Item>
            </div>
  
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <Form.Item
                name="birthdate"
                label={t("Birthdate")}
                rules={[{ required: true }]}
              >
                <DatePicker placeholder={t("Please select date")} />
              </Form.Item>
              <Form.Item
                name="nationality"
                label={t("Nationality")}
                rules={[{ required: true }]}
              >
                <Select
                  style={{ width: "auto" }}
                  placeholder={t("-- Please select --")}
                >
                  <Select.Option value="mr">{t("mr")}</Select.Option>
                  <Select.Option value="mrs">{t("mrs")}</Select.Option>
                  <Select.Option value="ms">{t("ms")}</Select.Option>
                </Select>
              </Form.Item>
            </div>
            <Form.Item
              name="IDCardNumber"
              label={t("IDCardNumber")}
              rules={[{ required: true }]}
            >
              <div
                className=""
                style={{
                  flexDirection: "row",
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                }}
              >
                <Input style={{ width: "80px" }} />
                <span>-</span>
                <Input style={{ width: "150px" }} />
                <span>-</span>
                <Input style={{ width: "150px" }} />
                <span>-</span>
                <Input style={{ width: "150px" }} />
                <span>-</span>
                <Input style={{ width: "80px" }} />
              </div>
            </Form.Item>
            <Form.Item
              name="gender"
              label={t("Gender")}
              rules={[{ required: true }]}
            >
              <Radio.Group>
                <Radio value="men">{t("Men")} </Radio>
                <Radio value="women">{t("Women")} </Radio>
                <Radio value="ohter">{t("Ohter")} </Radio>
              </Radio.Group>
            </Form.Item>
  
            <Form.Item
              name="phoneNumber"
              label={t("PhoneNumber")}
              rules={[{ required: true }]}
            >
              <div
                className=""
                style={{
                  flexDirection: "row",
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                }}
              >
                <Select style={{ width: "100px" }}>
                  <Select.Option value="TH">+66</Select.Option>
                </Select>
                <span>-</span>
                <Input style={{ width: "300px" }} />
              </div>
            </Form.Item>
  
            <Form.Item name="passport" label={t("Passport")}>
              <Input style={{ width: "300px" }} />
            </Form.Item>
  
            <div
              className=""
              style={{
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <Form.Item
                name="salary"
                label={t("Salary")}
                rules={[{ required: true }]}
              >
                <Input style={{ width: "300px" }} />
              </Form.Item>
  
              <Form.Item>
                <Space>
                  <Button htmlType="reset">{t("ClearData")}</Button>
                  <Button htmlType="submit">{t("SubmitData")}</Button>
                </Space>
              </Form.Item>
            </div>
          </Form>
        </div>
        <div style={{ padding: "60px" }}>
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
          />
        </div>
      </div>
    );
  }
  
  export default FormComponent;