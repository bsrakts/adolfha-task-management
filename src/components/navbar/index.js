import { Button, Dropdown } from 'antd'
import style from './style.module.css'
import { MyModal } from '../modal'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeAllTask, todoList } from '@/src/context/feature/todoSlice'
import Link from 'next/link'
import { MenuOutlined } from '@ant-design/icons'

const Navbar = () => {
  const items = [
    {
      key: '1',
      label: (
        <Button
          block
            type="primary"
            onClick={() => setModalOpen(true)}>
            Add New Task
          </Button>
      ),
    },
    {
      key: '2',
      label: (
        <Button
          block
            type="primary"
            style={{ "backgroundColor": "#6bba2d" }}
          >
            <Link href={"/"}>
              List All
            </Link>
          </Button>
      ),
    },
    {
      key: '3',
      label: (
        <Button
          block
            type="primary" danger
            onClick={() => handleRemoveAll()}>
            Delete All
          </Button>
      ),
    },
  ]

  const dispatch = useDispatch()

  const handleRemoveAll = () => {
    dispatch(removeAllTask())
  }

  const allList = useSelector(todoList)

  const [modalOpen, setModalOpen] = useState(false)

  return (
    <nav className={style.navbar}>
      <div>
        <img src='/assets/logo.png' width={100} height={100} />
      </div>
      <div className={style.button}>
        <Button
          type="primary"
          onClick={() => setModalOpen(true)}>
          Add New Task
        </Button>
        <Button
          type="primary"
          style={{ "backgroundColor": "#6bba2d" }}
        >
          <Link href={"/"}>
            List All
          </Link>
        </Button>
        <Button
          type="primary" danger
          disabled={!allList.length > 0}
          onClick={() => handleRemoveAll()}>
          Delete All
        </Button>
      </div>
      <Dropdown
        trigger={["click"]}
        className={style.mobileMenu}
        placement="bottom"
        arrow
        menu={{
        items,
      }}
      >
        <Button><MenuOutlined /></Button>
      </Dropdown>
      <MyModal
        open={modalOpen}
        onCancel={() => setModalOpen(false)} />
    </nav>
  )
}

export default Navbar