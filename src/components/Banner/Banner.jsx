import site_banner from '/assets/banner.jpg'
function Banner(){
    return(
<div className="mb-20">
<div className='h-[700px] bg-cover bg-center relative flex flex-col gap-3 justify-end' style={{backgroundImage:`url(${site_banner})`}}>
    <div className="w-[35%] h-[47%] rounded-xl border-2 bg-white border-purple-800 absolute text-purple-800 top-[250px] right-[50px] opacity-80 p-6 ">
        <h2 className="text-4xl text-left font-bold pb-2">Latest<br/> Products of the<br/> Week</h2>
        <hr/>
        <p className="text-left py-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque nec diam at tincidunt. Nam molestie rutrum odio, sed dignissim lectus tristique a. Mauris malesuada sapien nec mattis dapibus. 
       </p>
       <button className="bg-purple-900 text-white w-[30%] p-2 rounded-lg float-right">View All</button>
    </div>        
</div>
</div>
    )
}
export default Banner;