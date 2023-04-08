import { configureStore } from "@reduxjs/toolkit";
import departmentsReducer from "../slice/departmentsSlice";
import 'redux-logger'
import { createLogger } from "redux-logger";
import staffsReducer from "../slice/staffsSlice";
import staffsSalariesReducer from "../slice/staffsSalariesSlice";
import { reducer as formReducer } from 'redux-form';


const logger= createLogger()

const store= configureStore({
    // rootReducer,
    reducer: {
        department:departmentsReducer,
        staff: staffsReducer,
        staffSalary: staffsSalariesReducer,
        form: formReducer,
    },
    midddware: (getdefaultMiddleware)=>getdefaultMiddleware().concat(logger)
})

export default store 