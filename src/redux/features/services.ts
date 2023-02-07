import Axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const sendDataWebHook = createAsyncThunk(
  "apply-data",
  async (_, { getState }) => {
    try {
      const { formReducer } = getState() as RootState;
      const { answers } = formReducer;

      const dataJson = {
        ...answers,
        phoneNumber: +answers["phoneNumber"],
      };

      const data = await Axios.post(
        "https://p018kwwcmb.execute-api.us-east-2.amazonaws.com/dev/webhook_tiwala",
        dataJson
      );
      console.log(data.data);
    } catch (error) {
      console.error(error);
    }
  }
);
