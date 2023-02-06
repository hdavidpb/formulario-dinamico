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
        // cedula: +answers["cedula"],
        // amount: +answers["amount"],
      };
      console.log(dataJson);
      // const data = await Axios.post(
      //   "https://ex75tdpoe2.execute-api.us-east-2.amazonaws.com/envio_zoho",
      //   dataJson
      // );
      // console.log(answers);
      // console.log(data.data);
    } catch (error) {
      console.error(error);
    }
  }
);
