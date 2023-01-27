import React, { useContext } from "react";
import { GlobalProvider } from "../GlobalContext";

const Task = () => {
  const {
    task,
    setTask,
    handleInputTaskNew,
    postTasks,
    disabledRadio,
    setDisabledRadio,
  } = useContext(GlobalProvider);
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  return (
    <div>
      <div className="flex flex-col h-64 mb-4 font-medium">
        <div className="rounded-3xl shadow-lg dark:bg-slate-800 bg-white p-4">
          <div className="flex flex-row justify-between items-center mb-4">
            <span>Buat Tugas</span>
          </div>
          <div className="flex text-sm">
            <div className="flex flex-col gap-2 w-full">
              <input
                type="text"
                onChange={handleInputTaskNew}
                value={task.title}
                required
                name="title"
                placeholder="Judul ..."
                className="w-full px-4 focus:outline-0 bg-transparent"
              />
              <div className="flex flex-col gap-2 bg-purple-200 dark:bg-purple-900 dark:bg p-4 rounded-lg">
                <div className="text-purple-400 dark:text-purple-200 ">
                  Pengingat
                </div>
                <div className="flex flex-row gap-2 justify-evenly items-center">
                  <button
                    type="radio"
                    name="reminder"
                    id="daily"
                    className={`${
                      disabledRadio[0] === "flex"
                        ? "bg-green-200 dark:bg-green-500"
                        : "bg-slate-100 dark:bg-slate-800"
                    } flex-1 px-2 py-1 rounded-lg shadow-md hover:scale-105 duration-200`}
                    onClick={() => {
                      setDisabledRadio(["flex", "hidden", "hidden"]);
                      let beforeTask = task;
                      beforeTask.reminder.weekly = [
                        true,
                        true,
                        true,
                        true,
                        true,
                        true,
                        true,
                      ];
                      const { title, note, reminder } = beforeTask;
                      setTask({ title, note, reminder });
                      console.log(task);
                    }}
                  >
                    Daily
                  </button>
                  <button
                    type="radio"
                    name="reminder"
                    id="daily"
                    className={`${
                      disabledRadio[1] === "flex"
                        ? "bg-green-200 dark:bg-green-500"
                        : "bg-slate-100 dark:bg-slate-800"
                    } flex-1 px-2 py-1 rounded-lg shadow-md hover:scale-105 duration-200`}
                    onClick={() => {
                      setDisabledRadio(["hidden", "flex", "hidden"]);
                    }}
                  >
                    Weekly
                  </button>
                  <button
                    type="radio"
                    name="once"
                    id="daily"
                    className={`${
                      disabledRadio[2] === "flex"
                        ? "bg-green-200 dark:bg-green-500"
                        : "bg-slate-100 dark:bg-slate-800"
                    } flex-1 px-2 py-1 rounded-lg shadow-md hover:scale-105 duration-200`}
                    onClick={() => {
                      setDisabledRadio(["hidden", "hidden", "flex"]);
                      let beforeTask = task;
                      beforeTask.reminder.weekly = [
                        false,
                        false,
                        false,
                        false,
                        false,
                        false,
                        false,
                      ];
                      const { title, note, reminder } = beforeTask;
                      setTask({ title, note, reminder });
                      console.log(task);
                    }}
                  >
                    Once
                  </button>
                </div>
                <div
                  className={`gap-2 flex-row items-center justify-between ${disabledRadio[1]}`}
                >
                  {task.reminder.weekly.map((val, index) => (
                    <button
                      key={index}
                      className={`flex items-center ${
                        task.reminder.weekly[index]
                          ? "bg-green-200 dark:bg-green-500"
                          : "bg-slate-100 dark:bg-slate-800"
                      } rounded-lg px-2 w-full justify-center hover:scale-110 duration-300 py-1 shadow-lg`}
                      onClick={() => {
                        let beforeTask = task;
                        beforeTask.reminder.weekly[index] =
                          !beforeTask.reminder.weekly[index];
                        setTask({ ...beforeTask });
                        console.log(task);
                      }}
                    >
                      {days[index]}
                    </button>
                  ))}
                </div>
                <div className={`${disabledRadio[2]}`}>
                  <input
                    type="date"
                    onChange={handleInputTaskNew}
                    value={task.reminder.once}
                    required
                    name="once"
                    className="p-2 rounded-lg dark:bg-slate-800  w-full shadow-md hover:scale-105 duration-300"
                  />
                </div>
              </div>
              <div>
                <textarea
                  style={{ resize: "none" }}
                  type="text-area"
                  onChange={handleInputTaskNew}
                  value={task.note}
                  required
                  name="note"
                  placeholder="Tulis catatan ..."
                  className="rounded-lg px-4 py-3 noScrollbar bg-blue-200 dark:bg-blue-900 w-full h-32 focus:outline-0"
                />
              </div>
              <div className="flex flex-row-reverse">
                <button
                  onClick={postTasks}
                  className="bg-slate-200 dark:bg-slate-700 dark:hover:bg-green-400 py-2 px-4 hover:bg-green-200  rounded-lg hover:scale-105 shadow-md duration-300"
                >
                  Tambahkan Tugas
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
