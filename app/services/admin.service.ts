import { getUsersUrl } from "@/config/api.config";
import axios from "api/interceptors";

export const AdminService = {
    getCountUsers:()=>axios.get<number>(getUsersUrl('/count'))
}