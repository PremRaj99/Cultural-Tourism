import React, { useState } from "react";
import { Alert, Button, Card, Checkbox, Label, Spinner, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import bg from "../assets/loginBg.jpg"
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/User/userSlice";

export default function Loginas() {
  const [loginType, setLoginType] = useState("USER");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      return dispatch(signInFailure("Plesase fill out all the fields."));
    }

    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username, password: password }),
      });
      const data = await res.json();

      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (

    <>

    <img src={bg}
     alt=""  
     className="w-full relative"/>

    <div className="flex flex-col items-center justify-center h-full bg-transparent py-8 absolute top-8 left-[0%] translate-x-[75%] ">
      <div className="w-full max-w-lg p-4 mb-8 border border-gray-200 rounded-lg shadow-md bg-transparent ">
        <div className="flex justify-between">
          <Button
            type="button"
            onClick={() => setLoginType("USER")}
            className={
              loginType === "USER"
                ? "bg-blue-500 text-white px-4 py-2 rounded"
                : "text-gray-700 px-4 py-2 rounded hover:bg-gray-200"
            }
          >
            Login as USER
          </Button>
          <Button
            type="button"
            onClick={() => setLoginType("PARTNER")}
            className={
              loginType === "PARTNER"
                ? "bg-blue-500 text-white px-4 py-2 rounded"
                : "text-gray-700 px-4 py-2 rounded hover:bg-gray-200"
            }
          >
            Login as PARTNER
          </Button>
        </div>
      </div>
      <Card className="w-[500px] bg-transparent shadow-md rounded-lg p-6">
        <form className="flex flex-col gap-3">
          <h2 className="text-3xl font-semibold mb-4 text-white">Login</h2>
          <div>
            <Label
              htmlFor="text"
              value={`Login as ${loginType}`}
              className="text-lg font-semibold text-white"
            />
          </div>
          <div>
            <Label
              htmlFor="userName"
              className="text-sm font-semibold text-gray-800"
            />
            <TextInput
              id="userName"
              type="text"
              value={username}
              placeholder="Enter your userName"
              required
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div>
            <Label
              htmlFor="password1"
              className="text-sm font-semibold text-gray-800"
            />
            <TextInput
              id="password1"
              type="password"
              value={password}
              placeholder="Enter Password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" className="rounded" />
            <Label
              htmlFor="remember"
              className="text-sm font-semibold text-white"
            >
              Remember me
            </Label>
          </div>
          <Button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 rounded transition duration-300"
            onClick={handleSubmit}
          >
            {loading ? (
              <>
                <Spinner size="sm" />
                <span className="pl-3">Loading...</span>
              </>
            ) : (
              "Login"
            )}
          </Button>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </form>
      </Card>
    </div>
    </>
  );
}