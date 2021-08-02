import axios from "axios";
const axiosInstanceTodos = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/todos?_limit=10",
});
export const getTodos = async () => await axiosInstanceTodos.get();

const axiosInstanceUsers = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/users",
});
export const getUsers = async () => await axiosInstanceUsers.get();

export const editTodos = async (title, id) =>
  axios.patch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    title: title,
  });
