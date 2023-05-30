import { useEffect, useState } from "react";

const useHandlePage = ({ status }) => {
  const [pagesName, setPagesName] = useState({
    nextLink: "",
    backLink: "",
    nextStatusName: "",
    backStatusName: ""
  });


  const handlePage = (status) => {
    switch (status) {
      case "ToDo":
        return setPagesName({
          nextLink: "progress",
          backLink: "/",
          nextStatusName: "Progress",
          backStatusName: "All",
        });
      case "Progress":
        return setPagesName({
          nextLink: "done",
          backLink: "todo",
          nextStatusName: "Done",
          backStatusName: "ToDo",
        });
      case "Done":
        return setPagesName({
          nextLink: "not-todo",
          backLink: "progress",
          nextStatusName: "Not ToDo",
          backStatusName: "Progress",
        });
      case "Not ToDo":
        return setPagesName({
          nextLink: "/",
          backLink: "done",
          nextStatusName: "All",
          backStatusName: "Done",
        });
      case "All":
        return setPagesName({
          nextLink: "todo",
          backLink: "not-todo",
          nextStatusName: "ToDo",
          backStatusName: "Not ToDo",
        });
    };
  }
  useEffect(() => {
      handlePage(status);
    }, [status]);
    return { pagesName };
}

export default useHandlePage;