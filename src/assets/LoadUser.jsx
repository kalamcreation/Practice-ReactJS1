import { useEffect } from "react";

export default function LoadUser() {

    useEffect(()=>{
        // Could be GET or POST/PUT/PATCH/DELETE
        fetch('https://dummyjson.com/test')
        .then(res => res.json())
        .then(console.log);
        /* { status: 'ok', method: 'GET' } */
    },[2]);
  return <div className="text-cyan-600">LoadUser</div>
}
