import React, { useState } from 'react';
import {Space, Table,Modal,Input } from 'antd';
import { Button } from '@mui/material';
import controller, { getAll } from '../../../services';
import { endpoints } from '../../../services/base';
import { useEffect } from 'react';
import { Formik } from 'formik';
import Delete from '../Delete/Delete';
import ModeEditIcon from "@mui/icons-material/ModeEdit";
const { TextArea } = Input;





const Products = () => {
  const[data, setData]= useState([])
  async function getData(){
    await getAll(endpoints.products).then((res)=>{
      setData(res.data)
      console.log(res.data)
    })
  }
  useEffect(()=>{
    getData()
  },[])


//Edit Modal
const[editModal, setEditModal]=useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    const newUpdate={
      name: editModal.name,
      costPrice: editModal.costPrice,
      stockCount: editModal.stockCount,
      imgSrc: editModal.imgSrc,
    }
    controller.patch(endpoints.products,editModal.id,newUpdate).then(()=>getData())

    setIsModalOpen(false);  
    setEditModal(null)
  };
  const handleCancel = () => {
    setEditModal(null)
    setIsModalOpen(false);
  };
//
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  const clearFilters = () => {
    setFilteredInfo({});
  };
  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };

  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Cost Price',
      dataIndex: 'costPrice',
      key: 'costPrice',
      sorter: (a, b) => a.costPrice - b.costPrice,
      sortOrder: sortedInfo.columnKey === 'costPrice' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Stock Count',
      dataIndex: 'stockCount',
      key: 'stockCount',
      sorter: (a, b) => a.stockCount - b.stockCount,
      sortOrder: sortedInfo.columnKey === 'stockCount' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Image',
      dataIndex: 'imgSrc',
      render: (t, r) => <img style={{ width: "180px", height: "75px" }} src={`${r.imgSrc}`} />,
      key: 'imgSrc',
    },
    {
      title: 'Edit',
      render: (record) => {
        return (
          <Button onClick={() => {
            showModal()
            setEditModal(record)
          }} variant="outlined"
            color="primary">
            <ModeEditIcon/>
          </Button>
        )
      },
    },
    {
      title: 'Delete',
      dataIndex: '',
      key: 'delete',
      render: (text, record) => (
        <Delete getData={getData} text={text} id={record.id} />
      ),
    },
  ];
  return (
<>
<h1 style={{margin: "15px auto", text: "center",}}>Products</h1>
<Space
        style={{
          marginBottom: 16,
        }}
      >
       
        <Button onClick={clearFilters}>Clear filters</Button>
        <Button onClick={clearAll}>Clear filters and sorters</Button>
      </Space>
      <Table columns={columns} dataSource={data} onChange={handleChange} /> 
      <Modal title="Country" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <form style={{display:"flex", flexDirection:'column', gap:"12px"}}>
        <Input onChange={(e)=>setEditModal({...editModal, name: e.target.value})} value={editModal?.name} type='text'  placeholder="Name" />
        <Input onChange={(e)=>setEditModal({...editModal, costPrice:e.target.value})} value={editModal?.costPrice} type='number' placeholder='Cost Price'
        />
        <Input onChange={(e)=>setEditModal({...editModal, stockCount: e.target.value})}
        value={editModal?.stockCount} type='number' placeholder='stock count'
        />
        <Input onChange={(e)=>setEditModal({...editModal, imgSrc: e.target.value})}
        value={editModal?.imgSrc} type='url' placeholder='Image'
        />
        </form>
      
      </Modal>
</>
  )
}

export default Products