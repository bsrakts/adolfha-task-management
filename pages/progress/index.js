import { ListTask } from "@/src/components/listTask"
import { progressStatus } from "@/src/context/feature/todoSlice"
import { pageHeaderTitle } from "@/src/helpers/pageHeaderTitle"
import Head from "next/head"
import { useSelector } from "react-redux"


const Progress = () => {

  const progressList = useSelector(progressStatus)
  return (
    <>
      <Head>
        <title>
          {pageHeaderTitle.Progress.title}-{pageHeaderTitle.Progress.description}
        </title>
        <meta name="description" content={pageHeaderTitle.Progress.description} />
      </Head>
      <ListTask status={"Progress"} items={progressList}/>
    </>
  )
}

export default Progress