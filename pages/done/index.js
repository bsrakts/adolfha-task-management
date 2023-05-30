import { ListTask } from "@/src/components/listTask"
import { doneStatus } from "@/src/context/feature/todoSlice"
import { pageHeaderTitle } from "@/src/helpers/pageHeaderTitle"
import Head from "next/head"
import { useSelector } from "react-redux"


const Done = () => {

  const DoneList = useSelector(doneStatus)
  return (
    <>
      <Head>
        <title>
          {pageHeaderTitle.Done.title}-{pageHeaderTitle.Done.description}
        </title>
        <meta name="description" content={pageHeaderTitle.Done.description} />
      </Head>
      <ListTask status={"Done"} items={DoneList}/>
    </>
  )
}

export default Done