import TaskerHeader from "../features/header-main/TaskerHeader";
import React, { useState, useEffect } from "react";

export default function Tasks() {
  const [tasks, setTasks] = useState([
    {
      work: "",
      about: "",
      fName: "",
      lName: "",
      email: "",
      price: "",
      city: "",
      state: "",
      zip: "",
      street: "",
    },
  ]);

  useEffect(() => {
    fetch("/tasks")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setTasks(jsonRes));
  });

  console.log(tasks);

  // function getImageSrcByName(name) {
  //   const task = taskImages.find((task) => task.name === name);

  //   if (task) {
  //     return task.img;
  //   } else {
  //     // Return a default image URL or handle the case when the name is not found
  //     return "default-image-url.jpg";
  //   }
  // }

  // const imageSrc = getImageSrcByName(work);

  return (
    <div>
      <TaskerHeader></TaskerHeader>
      {
        <div>
          <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {tasks.map((task) => (
                  <div key={task.id} className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <img
                        src={
                          "https://images.unsplash.com/photo-1556037843-347ddff9f4b0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        }
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 justify-between">
                      <div>
                        <div className="flex justify-between">
                          <h2 className="font-bold text-black">{task.work}</h2>
                          <h2 className="font-bold text-black">
                            ₹{task.price}
                          </h2>
                        </div>

                        <h3 className="text-sm text-gray-700">{task.about}</h3>
                        <h3 className="text-sm text-gray-700">
                          {task.fName} {task.lName}
                        </h3>
                        <h3 className="text-sm text-gray-700">{task.email}</h3>
                        <h3 className="text-sm text-gray-700">
                          {task.street}-{task.zip}, {task.city}, {task.state}
                        </h3>
                      </div>
                      <p className="text-sm font-medium text-gray-900"></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}
