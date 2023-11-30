import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const history = useNavigate();

  //const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // function handleChange(event) {
  //   const { name, value } = event.target;

  // setData((prevInput) => {
  //   return {
  //     ...prevInput,
  //     [name]: value,
  //   };
  // });

  // function submitData(event) {
  //   event.preventDefault();
  //   console.log(data);
  //   //props.onAdd(data);

  //   // const newUser = {
  //   //   name: data.name,
  //   //   email: data.email,
  //   //   password: data.password,
  //   // };
  //   const { name, email, password } = data;

  //   if (name && email && password) {
  //     axios
  //       .post("http://localhost:8080/createuser", data)
  //       .then((res) => console.log(res));
  //   } else {
  //     alert("invalid input");
  //   }

  //   setData({
  //     name: "",
  //     email: "",
  //     password: "",
  //   });
  // }

  async function submitData(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/signup", {
          email,
          password,
        })
        .then((res) => {
          if (res.data == "exist") {
            alert("User already exists");
          } else if (res.data == "notexist") {
            history("/home1", { state: { id: email } });
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign Up to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="POST">
              {/* <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="name"
                    autoComplete="off"
                    onChange={handleChange}
                    value={data.name}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div> */}
              {/* 
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="off"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div> */}
              {/* /</div> */}

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    // id="email"
                    // name="email"
                    type="email"
                    autoComplete="off"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm"></div>
                </div>
                <div className="mt-2">
                  <input
                    // id="password"
                    // name="password"
                    type="password"
                    autoComplete="off"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  onClick={submitData}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign Up
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Already a member?{" "}
              <Link
                to="/signin"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// import React from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";

// export default function Signup() {
//   const history = useNavigate();

//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   function handleChange(event) {
//     const { name, value } = event.target;

//     setData((prevInput) => {
//       return {
//         ...prevInput,
//         [name]: value,
//       };
//     });
//   }

//   // function submitData(event) {
//   //   event.preventDefault();
//   //   console.log(data);
//   //   //props.onAdd(data);

//   //   // const newUser = {
//   //   //   name: data.name,
//   //   //   email: data.email,
//   //   //   password: data.password,
//   //   // };
//   //   const { name, email, password } = data;

//   //   if (name && email && password) {
//   //     axios
//   //       .post("http://localhost:8080/createuser", data)
//   //       .then((res) => console.log(res));
//   //   } else {
//   //     alert("invalid input");
//   //   }

//   //   setData({
//   //     name: "",
//   //     email: "",
//   //     password: "",
//   //   });
//   // }

//   async function submitData(e) {
//     e.preventDefault();

//     try {
//       await axios
//         .post("http://localhost:8000/signup0", {
//           name,
//           email,
//           password,
//         })
//         .then((res) => {
//           if (res.data == "exist") {
//             alert("User already exists");
//           } else if (res.data == "notexist") {
//             history("/home", { state: { id: email } });
//           }
//         })
//         .catch((e) => {
//           alert("wrong details");
//           console.log(e);
//         });
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   return (
//     <div>
//       <div>
//         <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//           <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//             <img
//               className="mx-auto h-10 w-auto"
//               src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//               alt="Your Company"
//             />
//             <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//               Sign Up to your account
//             </h2>
//           </div>

//           <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//             <form className="space-y-6" action="/" method="POST">
//               {/* <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium leading-6 text-gray-900"
//                 >
//                   Name
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     id="name"
//                     name="name"
//                     type="name"
//                     autoComplete="off"
//                     onChange={handleChange}
//                     value={data.name}
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div> */}

//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium leading-6 text-gray-900"
//                 >
//                   Name
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     id="name"
//                     name="name"
//                     type="text"
//                     autoComplete="off"
//                     onChange={handleChange}
//                     value={data.name}
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium leading-6 text-gray-900"
//                 >
//                   Email address
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     autoComplete="off"
//                     onChange={handleChange}
//                     value={data.email}
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <div className="flex items-center justify-between">
//                   <label
//                     htmlFor="password"
//                     className="block text-sm font-medium leading-6 text-gray-900"
//                   >
//                     Password
//                   </label>
//                   <div className="text-sm"></div>
//                 </div>
//                 <div className="mt-2">
//                   <input
//                     id="password"
//                     name="password"
//                     type="password"
//                     autoComplete="off"
//                     onChange={handleChange}
//                     value={data.password}
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <Link to="/">
//                   <button
//                     type="submit"
//                     onClick={submitData}
//                     className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                   >
//                     Sign Up
//                   </button>
//                 </Link>
//               </div>
//             </form>

//             <p className="mt-10 text-center text-sm text-gray-500">
//               Already a member?{" "}
//               <Link
//                 to="/signin"
//                 className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
//               >
//                 Sign In
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
