import { DatePicker, Radio, Select, Table, TableColumnsType } from "antd";
import { Button, Form, Input, Space } from "antd";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Form.css";
import { useDispatch } from "react-redux";
import { saveFormData } from "../features/formSlice";

interface DataType {
  key: React.Key;
  names: string;
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

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const dispatch = useDispatch();

  const onFinish = (values: any) => {
    dispatch(saveFormData(values));
  };

  const [tableData, setTableData] = useState([]);
  const [data, setData] = useState([]);


  const getDataFromLocalStorage = () => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      setTableData(JSON.parse(storedData));
    }
  };

  useEffect(() => {
    getDataFromLocalStorage();
  }, [tableData]);

  useEffect(() => {
    const updatedData = [];
  for (let i = 0; i < tableData.length; i++) {
    updatedData.push({
      key: i,
      name: tableData[i].names,
      gender: tableData[i].gender,
      phone: tableData[i].phoneNumber,
      nation: tableData[i].nationality,
      Manage: "",
    });
  }
    setData(updatedData);
}, [tableData]); 
  useEffect(() => {
    getDataFromLocalStorage();
  }, []);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div className="title-form">
          <h1>{t("Form & Table")}</h1>
        </div>
        <div className="navbar-form">
          <Navbar />
        </div>
        <Link to={"/"}>
          <button className="back">{t("Home")}</button>
        </Link>
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
          onFinish={onFinish}
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
              name="names"
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
                <Select.Option value="Thai">{t("Thai")}</Select.Option>
                <Select.Option value="American">{t("American")}</Select.Option>
              </Select>
            </Form.Item>
          </div>
          <Form.Item
            name="IDCardNumber"
            label={t("IDCardNumber")}
            rules={[{ required: true }]}
          >
            <div
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
      <div className="table">
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