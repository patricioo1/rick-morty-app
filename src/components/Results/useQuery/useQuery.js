import { useLocation } from "react-router-dom";

export function useQuery (){
    console.log(useLocation().search);
    return new URLSearchParams(useLocation().search)
}