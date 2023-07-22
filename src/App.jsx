
import picDes from './assets/images/illustration-sign-up-desktop.svg'
import list from "./assets/images/icon-list.svg";
import "./App.css";
function App() {
  return (
    <div className="w-full bg-[#5B62A4] h-[100vh] flex justify-center md:flex">
      <div className="sm:flex w-[50rem] md:h-[34rem] md:mt-[4rem] md:rounded-[2rem] md:p-6 bg-white">
        <div className=" w-full borde order-1 h-[16rem] ">
          {/* <img src={pic} className=" w-full md:hidden" alt="" /> */}
          <div>
          <img src={picDes} className=" object-cover h-[15rem] md:h-[30rem] md:rounded-none rounded-b-[1.2rem] w-full"  alt="" />
          </div>
        </div>
        <div>
          <div className="w-full flex text-black text-[3px] justify-center">
            <div className=" md:mt-[3=rem] md:p-[3rem] w-full p-2">
              <h1 className=" text-[3rem] font-bold">Stay Updated!</h1>
              <p className=" text-sm">
                {" "}
                Join 60,000+ product managers receiving monthly update on{" "}
              </p>
              <br />
              <ul className=" text-sm space-y-5" >
                <div className=" flex">
                  <img src={list} alt="" />
                  <li className=" pl-2"> Product discovery building waht matters</li>
                </div>
                <div className=" flex">
                  <img src={list} alt="" />
                  <li className=" pl-2">Measuring to ensure ubdates are a success </li>
                </div>
                <div className=" flex">
                  <img src={list} alt="" />
                  <li className=" pl-2">Add much mores</li>
                </div>
              </ul>
              <br />
              <p className="pl-1 font-semibold">Email address</p>
              <div className="">
                <input
                  className=" w-[22rem] h-[2.5rem] mb-5 rounded-lg pl-4 bg-transparent border"
                  type="email"
                  placeholder="email@company.com"
                />
                <button
                  type="submit"
                  className=" w-[22rem] h-[2.5rem] rounded-lg pl-4 bg-[#FF6257] border font-bold text-white"
                >
                  Subscrite to mounthly newsletter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
