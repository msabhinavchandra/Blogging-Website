


export default function Post(){
return (
<div className="post grid grid-cols-2 gap-x-4 mb-9">
          <div className="image">
          <img className="max-w-full w-96" src="https://techcrunch.com/wp-content/uploads/2019/07/VHOPod010.jpg?w=850&h=492&crop=1" alt=""  />
          </div>
          <div className="text">
          <h2 className='font-bold text-2xl m-0'>Hyperloop One is reportedly shutting down</h2>
          <p className="info flex gap-10">
            <a href="" className="author m-0  text-sm font-semibold">Alex Turner</a>
            <time className='m-0  text-sm font-semibold'>2023-12-22 16:22</time>
          </p>
          <p className='mx-0 my-0 leading-6'>One of the longest-running hyperloop startups is reportedly shutting its doors. Hyperloop One, once backed by Richard Branson’s Virgin Group, will cease operations on December 31 according to Bloomberg News.</p>
          </div>
        </div> 
);
}
