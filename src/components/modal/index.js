
import { Button, Col, Input, Row, Select, Form, Modal } from 'antd'
import { useDispatch } from 'react-redux'
import { addTask, editTask, removeTask } from '@/src/context/feature/todoSlice'
import { status } from '@/src/helpers/status'
import { useEffect } from 'react'
import router from 'next/router'

export const MyModal = ({ data,...other }) => {

  const dispatch = useDispatch();
  
  const [taskForm] = Form.useForm();

  const handleSubmit = (value) => {
    !data && dispatch(addTask(value))
    data && dispatch(editTask({ id: data.id, ...value }))
    router.push(`/${value.status}`)
    taskForm.resetFields()
    other.onCancel()
  }

  useEffect(() => {
    if(!data) return
    taskForm.setFieldsValue(data)
  },[data])

  return (
    <Modal
      {...other}
      onOk={() => taskForm.submit()}
      okText="Save"
      bodyStyle={{"padding-top":"35px"}}>
      <Form
        form={taskForm}
        layout='vertical'
        onFinish={handleSubmit}>
        <Row gutter={24}>
          <Col span={18}>
            <Form.Item
              name={"todo"}
              label={"Add New Todo"}
              rules={
              [
                {
                  required: true,
                  message: "please enter your todo"
                }
              ]
          }>
            <Input placeholder='*enter todo*'/>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              name={"status"}
              label={"Status:"}
              initialValue={status[0].key}>
              <Select defaultValue={status[0].value}>
                {
                  status.map((statu) =>
                    <Select.Option key={statu.key}
                  >{
                  statu.value}</Select.Option>)
                }
            </Select>
            </Form.Item>
          </Col>
          </Row>
      </Form>
    </Modal>
  )
}