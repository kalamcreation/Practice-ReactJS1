<<<<<<< HEAD
import { useEffect } from "react";

export default function LoadUser() {

    useEffect(()=>{
        // Could be GET or POST/PUT/PATCH/DELETE
        fetch('https://dummyjson.com/test')
        .then(res => res.json())
        .then(console.log);
        /* { status: 'ok', method: 'GET' } */
    },[2]);
  return <div className="text-rose-600 text-4xl">
    <button className="btn btn-success">Button</button>
    </div>
}
=======
import { useEffect } from "react";

export default function LoadUser() {

    useEffect(()=>{
        // Could be GET or POST/PUT/PATCH/DELETE
        fetch('https://dummyjson.com/test')
        .then(res => res.json())
        .then(console.log);
        /* { status: 'ok', method: 'GET' } */
    },[2]);
  return <div className="text-rose-600 text-4xl">
    <button className="btn btn-success">Button</button>
    </div>
}
>>>>>>> f0856b8ed05e1826adaa821efd53fe3a71f12f62
