import axios from "axios";

export const instance = axios.create({
	baseURL: "https://esmaeiliamir.ir/DVS/public/api/",
});
