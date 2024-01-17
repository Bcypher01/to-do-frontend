// "use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Formik, Field } from "formik";
import Cookies from "js-cookie";
import axios from "axios";

const Edit = () => {
  const params = useParams();
  const router = useRouter();
  const [task, setTask] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const token = Cookies.get("token");

  useEffect(() => {
    axios
      .get(`https://todo-api-m08h.onrender.com/tasks/${params.id}/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setTask(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          name: task.name,
          status: "1",
          percentage: task.percentage,
          date: startDate,
        }}
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
          const requestOptions = {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(values),
          };
          fetch(
            `https://todo-api-m08h.onrender.com/tasks/${params.id}/`,
            requestOptions
          )
            .then(() => {
              router.push("/");
            })
            .catch((error) => console.log(error));
          setTimeout(() => {
            setSubmitting(false);
          }, 400);
        }}>
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <div className="relative z-0 mb-6 w-full group">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-state">
                Name
              </label>
              <input
                type="name"
                name="name"
                value={values.name}
                className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border rounded"
                placeholder=" "
                onChange={handleChange}
                required
              />
            </div>

            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-state">
              Status
            </label>
            <div className="relative mb-6">
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

            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-state">
              Progress
            </label>
            <div className="relative mb-6">
              <input
                type="range"
                min="0"
                max="100"
                name="percentage"
                value={values.percentage}
                className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border rounded"
                placeholder="Progress(%)"
                onChange={handleChange}
                required
              />
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

export default Edit;
