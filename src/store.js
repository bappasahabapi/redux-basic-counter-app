import {legacy_createStore as createStore } from "redux";
import { counterReducer } from "./components/counterFeature/reducer";

export  const store =createStore(counterReducer)