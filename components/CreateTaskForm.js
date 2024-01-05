import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { server } from "../config";
import { Formik, Field } from "formik";
import Cookies from "js-cookie";

const CreateTaskForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <Formik
        initialValues={{ name: "", status: "1", date: startDate }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          let items = localStorage.getItem("items");
          if (items === null) items = [];

          if (items) {
            let data = JSON.parse(localStorage.getItem("items"));

            localStorage.setItem("items", JSON.stringify(data));
          } else {
            localStorage.setItem("items", JSON.stringify(values));
          }
          const token = Cookies.get("token");
          const requestOptions = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(values),
          };
          fetch("https://todo-api-m08h.onrender.com/tasks/", requestOptions)
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
          setTimeout(() => {
            setSubmitting(false);
          }, 400);
          console.log(values);
        }}>
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="name"
                name="name"
                value={values.name}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={handleChange}
                required
              />
              <label
                htmlFor="name"
                className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Name
              </label>
            </div>

            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-state">
              Status
            </label>
            <div className="relative">
              <Field
                as="select"
                className="block appearance-none w-full bg-gray-100 border border-gray-100 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                name="status">
                <option value="2">In Progress</option>
                <option value="3">Pending</option>
              </Field>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div className="my-6">
              <DatePicker
                className="border rounded px-2 py-1"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>

            <button
              type="submit"
              className="px-8 py-2 text-white font-semibold bg-teal-300">
              Submit
            </button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default CreateTaskForm;
