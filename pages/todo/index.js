import { ListTask } from "@/src/components/listTask"
import { todoStatus } from "@/src/context/feature/todoSlice"
import { pageHeaderTitle } from "@/src/helpers/pageHeaderTitle"
import Head from "next/head"
import { useSelector } from "react-redux"


const Todo = () => {

  const todosList = useSelector(todoStatus)
  return (
    <>
      <Head>
        <title>
          {pageHeaderTitle.Todo.title}-{pageHeaderTitle.Todo.description}
        </title>
        <meta name="description" content={pageHeaderTitle.Todo.description} />
      </Head>
      <ListTask status={"ToDo"} items={todosList}/>
    </>
  )
}

export default Todo