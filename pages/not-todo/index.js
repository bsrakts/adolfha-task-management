import { ListTask } from "@/src/components/listTask"
import { notTodoStatus } from "@/src/context/feature/todoSlice"
import { pageHeaderTitle } from "@/src/helpers/pageHeaderTitle"
import Head from "next/head"
import { useSelector } from "react-redux"


const NotToDo = () => {

  const notTodoList = useSelector(notTodoStatus)
  return (
    <>
      <Head>
        <title>
          {pageHeaderTitle.NotToDo.title}-{pageHeaderTitle.NotToDo.description}
        </title>
        <meta name="description" content={pageHeaderTitle.NotToDo.description} />
      </Head>
      <ListTask status={"Not ToDo"} items={notTodoList}/>
    </>
  )
}

export default NotToDo