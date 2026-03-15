import image_banner from "/assets/girl-mall-checking-red-blouse_23-2148225634.avif"

function ImageBanner(){
return(
    <div className="mb-20">
    <div className='h-[600px] bg-cover bg-center rounded-sm' style={{backgroundImage:`url(${image_banner})`}}>
    </div>
    </div>
)
}

export default ImageBanner