import { sortStatus } from "@/src/helpers/sortStatus"
import { ArrowLeftOutlined, ArrowRightOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons"
import { Button, Col, List, Row } from "antd"
import { Typography } from 'antd'
import style from "./style.module.css"
import { MyModal } from "../modal"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getLocalData, removeTask } from "@/src/context/feature/todoSlice"
import Link from "next/link"
import useHandlePage from "@/src/hooks/useHandlePage";

export const ListTask = ({ items,status }) => {

  const dispatch = useDispatch();

  const [editModal, setEditModal] = useState({
    open: false,
    data: null
  })

  useEffect(() => {
    dispatch(getLocalData())
   },[dispatch])

  const { pagesName } = useHandlePage({ status });

  const handleRemoveTask = (id) => {
    dispatch(removeTask(id))
  }

  return (
    <>
      <MyModal
        open={editModal.open}
        onCancel={() => setEditModal({ open: false, data: null })}
        data={editModal.data} />
      <List
        header={
          <Row gutter={24} style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <Col align={"left"} span={8}>
              <Button
              className={style.arrowBtn}>
                <Link href={`${pagesName.backLink}`}>
                  <ArrowLeftOutlined
                  className={style.arrowBtnLeft}/>
                {pagesName.backStatusName}
              </Link>
              </Button>
            </Col>
            <Col className="t-center" span={8}>
              <Typography.Title className={style.status} align={"middle"} level={2}>
                Status : {status}
              </Typography.Title>
            </Col>
            <Col align={"right"} span={8}>
              <Button
                className={style.arrowBtn}>
                <Link href={`${pagesName.nextLink}`}>
                  {pagesName.nextStatusName}
                  <ArrowRightOutlined
                className={style.arrowBtnRight}/>
                </Link>
              </Button>
            </Col>
          </Row>
        }
      bordered
      dataSource={items}
      renderItem={(item) => (
        <List.Item className={style.taskItemContainer}>
          <div className={style.taskItem}>
            <Button onClick={() => setEditModal({open:true, data:item})}
            icon={<EditOutlined />} />
            <Button danger={true} onClick={() => handleRemoveTask(item.id)} icon={<DeleteOutlined/>} />
            <Typography.Text
                type={
                  item.status === "todo"
                    ? "secondary"
                    : item.status === "progress"
                    ? "warning"
                    : item.status === "done"
                    ? "success"
                    : "danger"
                }
              >
                {item.todo}
              </Typography.Text>
          </div>
          <div>
            {sortStatus(item)}
          </div>
        </List.Item>
      )}
      />
      </>
  )
}