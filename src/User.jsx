<<<<<<< HEAD
export default function User({userInfo}) {

  const clickHandler = (data) => {
    console.log("Button Clicked", data);
  };
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
    <figure>
      <img
        src={userInfo.image} alt="Shoes" 
    />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{userInfo.lastName}</h2>
      <p>{userInfo.email}</p>
      <div className="card-actions justify-end">
        <button onClick={() => clickHandler(userInfo.lastName)} className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
  );
}
=======
export default function User({userInfo}) {

  const clickHandler = (data) => {
    console.log("Button Clicked", data);
  };
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
    <figure>
      <img
        src={userInfo.image} alt="Shoes" 
    />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{userInfo.lastName}</h2>
      <p>{userInfo.email}</p>
      <div className="card-actions justify-end">
        <button onClick={() => clickHandler(userInfo.lastName)} className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
  );
}
>>>>>>> f0856b8ed05e1826adaa821efd53fe3a71f12f62
