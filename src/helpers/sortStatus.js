
export const sortStatus = (item) => {
  console.log(item, "soritem")
  return (
    item.status == "todo" ? "To Do" : item.status == "progress" ? "Progress" : item.status == "done" ? "Done" : item.status == "not-todo" ? "Not To Do" : ""
  )
}