import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
      translation: {
          "Layout & Style": "Layout & Style",
          "Test 1": "Test 1",
          "Test 2": "Test 2",
          "Test 3": "Test 3",
          "Connect API": "Connect API",
          "Form & Table":"Form & Table",
          "Prefix" : "Prefix",
          "Name": "Name",
          "Lastname": "Lastname",
          "Birthdate": "Birthdate",
          "Nationality": "Nationality",
          "IDCardNumber": "IDCardNumber",
          "Gender": "Gender",
          "PhoneNumber": "PhoneNumber",
          "Passport": "Passport",
          "Salary": "Salary",
          "ClearData": "ClearData",
          "SubmitData": "SubmitData",
          "Men": "Men",
          "Women": "Women",
          "Ohter": "Ohter",
          "-- Please select --":"-- Please select --",
          "Please select date":"Please select date",
          "mr" : "mr",
          "mrs" : "mrs",
          "ms" : "ms",
          "Home" : "Home",
          "Thai" : "Thai",
          "American" : "American",
      }
  },
  th:{
      translation: {
          "Layout & Style": "การจัดการหน้าเว็บ",
          "Test 1": "แบบทดสอบที่ 1",
          "Test 2": "แบบทดสอบที่ 2",
          "Test 3": "แบบทดสอบที่ 3",
          "Connect API": "การเชื่อมต่อ API",
          "Form & Table":"การจัดการหน้าฟอร์ม",
          "Prefix": "คำนำหน้า",
          "Name": "ชื่อ",
          "Lastname": "นามสกุล",
          "Birthdate": "วันเกิด",
          "Nationality": "สัญชาติ",
          "IDCardNumber": "เลขบัตรประชาชน",
          "Gender": "เพศ",
          "PhoneNumber": "หมายเลขโทรศัพท์มือถือ",
          "Passport": "หนังสือเดินทาง",
          "Salary": "เงินเดือนที่คาดหวัง",
          "ClearData": "ล้างข้อมูล",
          "SubmitData": "ส่งข้อมูล",
          "Men": "ผู้ชาย",
          "Women": "ผู้หญิง",
          "Ohter": "ไม่ระบุ",
          "-- Please select --": "-- กรุณาเลือก --",
          "Please select date": "กรุณาเลือกวันที่",
          "mr" : "นาย",
          "mrs" : "นาง",
          "ms" : "นางสาว",
          "Home" : "หน้าหลัก",
          "Thai" : "ไทย",
          "American" : "อเมริกา"
      }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
