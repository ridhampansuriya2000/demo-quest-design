import React, {useState} from "react";
import styles from './Dashboard.module.css';
import useWindowSize from '../../../utils/Hooks/useWindowsSize';
import Select from "../../Views/Select";
import Table from "../../Views/Table";
import Button from "../../Views/Button";
// import Modal from "../../Views/Modal";
import Modal from "../../Views/Modal";
import StatusLabel from "../../Views/StatusLabel";
import Navbar from "../../_components/Navbar";
import {navOption} from "../../../utils/constant";
import Checkbox from "../../Views/Checkbox";
import TextArea from "../../Views/TextArea";


const getStatus = (status) =>{
    switch (status) {
        case "승인완료" : return 'success';
        case "승인거부" : return 'error';
        case "승인대기" : return 'warning';
    }
}


const columns = [
    {
        title: 'No',
        dataIndex: 'no',
        // width: 10,
    },
    {
        title: '기존유형',
        dataIndex: '기존유형',
        // width: 20,
    },
    {
        title: '신청유형',
        dataIndex: '신청유형',
        // width: 10,
    },
    {
        title: '제출서류',
        dataIndex: '제출서류',
        render: (제출서류)=><Button text={제출서류} style={{ color: '#222222', backgroundColor: '#EBEEF3', fontWeight:'bolder', border:'1px solid #D7D8DA' }}/>,
        // width: 10,
    },
    {
        title: '신청일시',
        dataIndex: '신청일시',
        // width: 10,
    },
    {
        title: '승인여부',
        dataIndex: '승인여부',
        render: (승인여부,index)=><StatusLabel text={승인여부} type={getStatus(승인여부)}/>,
        // width: 10,
    },
    {
        title: '승인거부 사유',
        dataIndex: '승인거부 사유',
        // width: 10,
    },
    {
        title: '승인일시',
        dataIndex: '승인일시',
        // width: 10,
    },
    {
        title: '관리자',
        dataIndex: '관리자',
        // width: 10,
    },
];

const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        no: `${i + 1}`,
        기존유형: `소득적격`,
        신청유형: `개인전문`,
        제출서류: `보기`,
        신청일시: `2023-01-10 09:00:00`,
        승인여부: `${i%3 === 0 ? '승인완료' : i%2 === 0 ? '승인대기' : '승인거부'}`,
        "승인거부 사유" : `서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가`,
        승인일시: `2023-01-10 09:00:00`,
        관리자: `김관리자`,
    });
}

const options1 = [
    { value: '승인여부 전체', label: '승인여부 전체' },
    { value: '승인대기', label: '승인대기' },
    { value: '승인완료', label: '승인완료' },
    { value: '승인거부', label: '승인거부' },
];

const options2 = [
    { value: '신청일시순', label: '신청일시순' },
    { value: '승인일시순', label: '승인일시순' },
];

const options3 = [
    { value: '', label: '승인상태 변경' },
    { value: '승인완료', label: '승인완료' },
    { value: '승인거부', label: '승인거부' },
];

const options4 = [
    { value: '승인상태 변경', label: '승인상태 변경' },
    { value: '승인거부', label: '승인거부' },
    { value: '승인대기', label: '승인대기' },
    { value: '승인완료', label: '승인완료' },
];

const options5 = [
    { value: '일반개인', label: '일반개인' },
    { value: '소득적격', label: '소득적격' },
    { value: '개인전문', label: '개인전문' },
    { value: '법인', label: '법인' },
    { value: '여신금융', label: '여신금융' },
    { value: 'P2P온투', label: 'P2P온투' },
];

const body1 =
    <div className={styles.modalBody}>
        <div className={styles.dataInfoBox}>
            <div className={styles.fieldRow}>
                <div className={`${styles.labelBox} ${styles.labelBoxDivider}`}>회원번호</div>
                <div className={`${styles.valueBox} ${styles.valueBoxDivider}`}>abc111</div>
            </div>
            <div className={styles.fieldRow}>
                <div className={`${styles.labelBox} ${styles.labelBoxDivider}`}>회원명/법인명</div>
                <div className={`${styles.valueBox} ${styles.valueBoxDivider}`}>김길동</div>
            </div>
            <div className={styles.fieldRow}>
                <div className={`${styles.labelBox} ${styles.labelBoxDivider}`}>예치금잔액</div>
                <div className={`${styles.valueBox} ${styles.valueBoxDivider}`}><Select options={options5}
                                                                                        defaultValue='일반개인'/></div>
            </div>
            <div className={styles.fieldRow}>
                <div className={styles.labelBox}>투자건수</div>
                <div className={styles.valueBox}><Button text='파일 선택' style={{
                    color: '#222222',
                    backgroundColor: '#EBEEF3',
                    fontWeight: 'bolder',
                    border: '1px solid #D7D8DA'
                }}/></div>
            </div>
        </div>
        <ul className={styles.styledUL}>
            <li>파일 형식은 jpg, jpeg, gif, png, pdf만 가능합니다.</li>
            <li>최대 10개, 100MB까지 등록이 가능합니다.</li>
        </ul>
    </div>;

    const body2 = <div className={styles.modalBody}>
        <div className={styles.dataInfoBox}>
            <div className={styles.fieldRow}>
                <div className={`${styles.labelBox} ${styles.labelBoxDivider}`}>회원번호</div>
                <div className={`${styles.valueBox} ${styles.valueBoxDivider}`}>abc111, abc222</div>
            </div>
            <div className={styles.fieldRow}>
                <div className={`${styles.labelBox} ${styles.labelBoxDivider}`}>회원명/법인명</div>
                <div className={`${styles.valueBox} ${styles.valueBoxDivider}`}>김길동, ㈜가나다라투자</div>
            </div>
            <div className={styles.fieldRow}>
                <div className={`${styles.labelBox} `}>승인거부 사유</div>
                <div className={`${styles.valueBox}`}>
                    <div className={styles.reasonBox}>
                        <Checkbox onChange={()=>{}} width={20} >서류 식별 불가</Checkbox>
                        <Checkbox onChange={()=>{}} width={20} >필수 서류 누락</Checkbox>
                        <Checkbox onChange={()=>{}} width={20} >서류의 내용이 등록된 회원정보와 다름</Checkbox>
                        <Checkbox onChange={()=>{}} width={20} >서류에 누락된 내용이 있음 (필수정보, 회사직인, 본인날인, 본인서명 등)</Checkbox>
                        <Checkbox onChange={()=>{}} width={20} >서류의 유효기간이 초과됨</Checkbox>
                        <Checkbox onChange={()=>{}} width={20} >직접 입력</Checkbox>
                        <TextArea />
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.leaveInfoBox}>
            <div className={styles.dataInfoBox}>
                <div className={styles.fieldRow}>
                    <div className={`${styles.labelBox}`}>최근저장일시</div>
                    <div className={`${styles.valueBox}`}>2022-01-01 09:00:00</div>
                </div>
            </div>
            <div className={styles.dataInfoBox}>
                <div className={styles.fieldRow}>
                    <div className={`${styles.labelBox}`}>관리자</div>
                    <div className={`${styles.valueBox}`}>김관리자</div>
                </div>
            </div>
        </div>
    </div>

const body3 = <div className={styles.modalBody}>
    <div className={styles.docInfoBox}>
        <div className={styles.docFieldRow}>
            <div className={`${styles.docLabelBox}`}>서류</div>
            <div className={`${styles.docValueBox}`}>
                <div className={styles.docBox}>img</div>
                <div className={styles.docBox}>img</div>
                <div className={styles.docBox}>img</div>
                <div className={styles.docBox}>img</div>
            </div>
        </div>
    </div>
</div>;

    const getBody = (bodyNo) =>{
        switch (bodyNo) {
            case 1 : return body1;
            case 2 : return body2;
            case 3 : return body3;
            default : return "No Data";
        }
    }


const Dashboard = () =>{

    let windowSize = useWindowSize();

    const [currentTab,setCurrentTab] = React.useState('기본정보 관리');
    const [modal,setModal] = React.useState({isOpen:false,message:'',showCancelBtn:false,statusType:''});
    const [modal2,setModal2] = React.useState({isOpen:false,title:'',showCancelBtn:false,bodyNo:''});

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const onSelectChange = (newSelectedRowKeys) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    return(
        <div className={styles.mainContainer}>
            <div className={styles.headerBox}>
                <div className={styles.pageTitleText}>
                    회원상세
                </div>
                <div className={styles.divider}/>
                <Navbar options={navOption} currentTab={currentTab} handleChange={({value})=>setCurrentTab(value)}/>
            </div>
            <div className={styles.header1}>
                <div>
                    <span className={styles.titleText}>신청 목록</span>
                    <span className={styles.titleSubText}>(총 100명 | 승인대기 1건)</span>
                </div>
                <div className={styles.filterBox}>
                    <Select options={options1} defaultValue='승인여부 전체' autoResponsiveWidth={820} width={150}/>
                    <Select options={options2} defaultValue='신청일시순' autoResponsiveWidth={820} width={150}/>
                    <Select options={options3} defaultValue='' autoResponsiveWidth={820} width={150}/>
                </div>
            </div>
            <div className={styles.header2}>
                <div>
                    <Button type='primary' width={100} text='등록' onClick={()=>setOpenModal((preState)=>!preState)} autoResponsiveWidth={820}/>
                </div>
                <div className={styles.filterBox}>
                    <Button type='text'>선택한 0건</Button>
                    <Select options={options4} defaultValue='승인상태 변경' autoResponsiveWidth={820} width={150}/>
                    <Button type='primary' text='등록' autoResponsiveWidth={820} width={100}/>
                </div>
            </div>
            <Table
                rowSelection={rowSelection}
                dataSource={data}
                columns={columns}
            />

            <div className={styles.buttonBox} style={{marginTop:'30px'}}>
                <Button type='primary'text='modal 1' onClick={()=>setModal(()=>({isOpen:true,message:'선택된 신청건이 없습니다.',showCancelBtn:false,statusType:'info'}))} />
                <Button type='primary'text='modal 2' onClick={()=>setModal(()=>({isOpen:true,message:'선택된 2건의 승인상태를 변경하시겠습니까?',showCancelBtn:true,statusType:'info'}))} />
                <Button type='primary'text='modal 3' onClick={()=>setModal(()=>({isOpen:true,message:'저장되었습니다.',showCancelBtn:false,statusType:'success'}))} />
                <Button type='primary'text='modal 4' onClick={()=>setModal(()=>({isOpen:true,message:'이미 승인 완료된 회원입니다.',showCancelBtn:false,statusType:'info'}))} />
                <Button type='primary'text='modal 5' onClick={()=>setModal(()=>({isOpen:true,message:'이미 승인 거부된 회원입니다.',showCancelBtn:false,statusType:'info'}))} />
            </div>

            <div className={styles.buttonBox}>
                <Button onClick={()=>setModal2(()=>({isOpen:true,title:'투자유형 변경',showCancelBtn:false,bodyNo:1}))} text='modal 1'/>
                <Button onClick={()=>setModal2(()=>({isOpen:true,title:'투자유형 변경',showCancelBtn:false,bodyNo:2}))} text='modal 2'/>
                <Button onClick={()=>setModal2(()=>({isOpen:true,title:'서류 보기',showCancelBtn:false,bodyNo:3}))} text='modal 3'/>
            </div>

            <Modal
                title={modal2?.title}
                visible={modal2?.isOpen}
                onClose={()=>setModal2({isOpen:false,title:'',showCancelBtn:false,bodyNo:''})}
                width={windowSize.width > 820 ? 800 : 500}
                body={getBody(modal2?.bodyNo)}
                    footer={
                        <div className={styles.modalFooter}>
                            <Button key="back"  size="large" onClick={()=>setOpenModal({isOpen:false,title:'',showCancelBtn:false,bodyNo:''})} disabled={true}>취소</Button>
                            <Button
                                key="submit"
                                type="primary"
                                size="large"
                                onClick={()=>setModal2({isOpen:false,title:'',showCancelBtn:false,bodyNo:''})}
                            >
                                확인
                            </Button>
                        </div>
                    }
            />

            <Modal
                visible={modal?.isOpen}
                onClose={()=>setModal(()=>({isOpen:false,message:'',showCancelBtn:false,statusType:''}))}
                // width={windowSize.width > 820 ? 600 : 500}
                hideDivider={true}
                statusType={modal?.statusType}
                body={
                    <div className={styles.modalMsg}>
                        {modal?.message}
                    </div>
                }
                footer={
                    <div className={styles.modalFooter}>
                        {modal.showCancelBtn &&
                        <Button key="back"  size="large" onClick={()=>setModal(()=>({isOpen:false,message:'',showCancelBtn:false,statusType:''}))} disabled={true}>파일 다운로드</Button>}
                        <Button
                            key="submit"
                            type="primary"
                            size="large"
                            onClick={()=>setModal(()=>({isOpen:false,message:'',showCancelBtn:false,statusType:''}))}
                        >
                            확인
                        </Button>
                    </div>
                }
            />
            </div>
    )
};

export default Dashboard;