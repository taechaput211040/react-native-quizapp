import { Question } from '../model/question';

export const getRandomizedQuestions = (): Question[] => {
    return sampleQuestions2
        .sort(() => Math.random() - 0.5)
        .map(ask => ({
            ...ask,
            ansOption: ask.ansOption.sort(() => Math.random() - 0.5),
        }));
};
const sampleQuestions2: Question[] = [
    {
        "ask": "น้ำแข็งแห้ง มีสีอะไร",
        "ansOption": [
            { "ans": "ขาว", "correct": true },
            { "ans": "ดำ", "correct": false },
            { "ans": "น้ำตาล", "correct": false },
            { "ans": "แดง", "correct": false }
        ]
    },
    {
        "ask": "กุ้งทะเล มีพยาธิหรือไม่",
        "ansOption": [
            { "ans": "ไม่มี", "correct": false },
            { "ans": "มี", "correct": true },
            { "ans": "อาจจะมีแต่เล็กน้อย", "correct": false },
            { "ans": "มีเยอะ", "correct": false }
        ]
    },
    {
        "ask": "โลกของเรา มีอายุกี่ปี",
        "ansOption": [
            { "ans": "4600 ล้านปี", "correct": true },
            { "ans": "4700 ล้านปี", "correct": false },
            { "ans": "6000 ล้านปี", "correct": false },
            { "ans": "9874 ล้านปี", "correct": false }
        ]
    },
    {
        "ask": "ใครคิดค้นการทำระเบิดปรามณู",
        "ansOption": [
            { "ans": "เซอร์ ไอแซก นิวตัน", "correct": false },
            { "ans": "วิลเลี่ยม เธอเนอร์", "correct": false },
            { "ans": "อัลเบิร์ต ไอสไตน์", "correct": true },
            { "ans": "โจเซมี่ กิบบ์", "correct": false }
        ]
    },
    {
        "ask": "กาบหอยแครงจะหุบเข้าหากันเมื่อใด",
        "ansOption": [
            { "ans": "เมื่อขาดน้ำ", "correct": false },
            { "ans": "เมื่อโดนแสงแดด", "correct": false },
            { "ans": "เมื่ออากาศชื้น", "correct": false },
            { "ans": "เมื่อถูกสัมผัส", "correct": true }
        ]
    },
    {
        "ask": "พืชชนิดใดเมื่อสัมผัสแล้วจะแสดงความรู้สึกให้เห็นได้",
        "ansOption": [
            { "ans": "ไม้ไผ่", "correct": false },
            { "ans": "ต้นไมยราบ", "correct": true },
            { "ans": "ต้นกระถิ่น", "correct": false },
            { "ans": "กระเทียม", "correct": false }
        ]
    },
    {
        "ask": "การแบ่งชนิดสารเป็นสารเนื้อเดียวและสารเนื้อผสมใช้สิ่งใดเป็นเกณฑ์ในการจำแนก",
        "ansOption": [
            { "ans": "อนุภาคของสาร", "correct": true },
            { "ans": "การนำไฟฟ้า", "correct": false },
            { "ans": "การสลาย", "correct": false },
            { "ans": "ความสามารถในการละลาย", "correct": false }
        ]
    },
    {
        "ask": "ถ้าไฟที่มีความร้อนที่สุดจะมีสีอะไร",
        "ansOption": [
            { "ans": "สีฟ้า", "correct": true },
            { "ans": "สีแดง", "correct": false },
            { "ans": "สีเหลือง", "correct": false },
            { "ans": "สีขาว", "correct": false }
        ]
    },
    {
        "ask": "ฟันของมนุษย์มีกี่ซี่",
        "ansOption": [
            { "ans": "32 ซี่", "correct": true },
            { "ans": "33 ซี่", "correct": false },
            { "ans": "31 ซี่", "correct": false },
            { "ans": "34 ซี่", "correct": false }
        ]
    },
    {
        "ask": "คลื่นความถี่มีหน่วยเป็นอะไร",
        "ansOption": [
            { "ans": "Hz", "correct": true },
            { "ans": "Sz Sz", "correct": false },
            { "ans": "Kg", "correct": false },
            { "ans": "Gz", "correct": false }
        ]
    },
    {
        "ask": "แป้งเป็นสารอาหารชนิดใด",
        "ansOption": [
            { "ans": "ไขมัน", "correct": false },
            { "ans": "โปรตีน", "correct": false },
            { "ans": "แป้ง", "correct": true },
            { "ans": "วิตามิน", "correct": false }
        ]
    },
    {
        "ask": "อุณหภูมิมีหน่วยเป็นอะไร",
        "ansOption": [
            { "ans": "ฟาเรนไฮด์", "correct": true },
            { "ans": "นิวตัน", "correct": false },
            { "ans": "กรัม", "correct": false },
            { "ans": "เมตร", "correct": false }
        ]
    },
    {
        "ask": "อุกาบาตเกิดจากอะไร",
        "ansOption": [
            { "ans": "การระเบิด", "correct": false },
            { "ans": "การเผาไหม้", "correct": false },
            { "ans": "การสะสมพลังงาน", "correct": false },
            { "ans": "แรงดึงดูดของโลก", "correct": true }
        ]
    },
    {
        "ask": "เตาไฟแช่แข็ง เป็นฉายาของ ดาวใด",
        "ansOption": [
            { "ans": "ดาวศุกร์", "correct": false },
            { "ans": "ดาวพลูโต", "correct": true },
            { "ans": "ดาวโลก", "correct": false },
            { "ans": "ดาวพุธ", "correct": false }
        ]
    },
    {
        "ask": "ดาวดวงใด ที่มีอุณหภูมิสูงที่สุด",
        "ansOption": [
            { "ans": "ดาวศุกร์", "correct": true },
            { "ans": "ดาวอังคาร", "correct": false },
            { "ans": "ดาวพฤหัสบดี", "correct": false },
            { "ans": "ดาวเสาร์", "correct": false }
        ]
    },
    {
        "ask": "ดาวที่มีวงแหวนล้อมรอบ",
        "ansOption": [
            { "ans": "ดาวศุกร์", "correct": false },
            { "ans": "ดาวอังคาร", "correct": false },
            { "ans": "ดาวพุธ", "correct": false },
            { "ans": "ดาวเสาร์", "correct": true }
        ]
    },
    {
        "ask": "องค์ประกอบของน้ำ ประกอบไปด้วยอะไรบ้าง",
        "ansOption": [
            { "ans": "คาร์บอน", "correct": false },
            { "ans": "แมกนีเซียม", "correct": false },
            { "ans": "ไฮโดรเจน", "correct": true },
            { "ans": "ไนโตรเจน", "correct": false }
        ]
    },
    {
        "ask": "เสียง มีคุณสมบัติเป็นอะไร",
        "ansOption": [
            { "ans": "คลื่น", "correct": true },
            { "ans": "มวล", "correct": false },
            { "ans": "ระยะทาง", "correct": false },
            { "ans": "ความเค้น", "correct": false }
        ]
    },
    {
        "ask": "ประเทศที่มีการปล่อยก๊าซคาร์บอนไดออกไซด์มากที่สุดในโลก",
        "ansOption": [
            { "ans": "รัสเซีย", "correct": false },
            { "ans": "จีน", "correct": true },
            { "ans": "อังกฤษ", "correct": false },
            { "ans": "แคนาดา", "correct": false }
        ]
    },
    {
        "ask": "แสงเคลื่อนที่แบบใด",
        "ansOption": [
            { "ans": "เส้นโค้ง", "correct": false },
            { "ans": "เส้นหยัก", "correct": false },
            { "ans": "เส้นตรง", "correct": true },
            { "ans": "สามเหลี่ยม", "correct": false }
        ]
    }
]