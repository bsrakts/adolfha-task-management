import { ListTask } from "@/src/components/listTask";
import { todoList } from "@/src/context/feature/todoSlice";
import { pageHeaderTitle } from "@/src/helpers/pageHeaderTitle";
import Head from "next/head";
import { useSelector } from "react-redux";


export default function Home() {

  const allList = useSelector(todoList)

  return (
    <>
      <Head>
        <title>
          {pageHeaderTitle.All.title} - {pageHeaderTitle.All.description}
        </title>
        <meta name="description" content={pageHeaderTitle.All.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ListTask status={"All"} items={allList}/>
      </main>
    </>
  )
}
