export const HomePhotosContainer = ({children}: {children:React.ReactNode}) => {
    return (
        <div className="mt-16 sm:mt-20">
            <div className="-my-4 flex justify-center overflow-hidden gap-5 py-4 sm:gap-8">
            {children}
            </div>
        </div>
    );
};


export const HomePhoto = ({image, rotation}: {image:string, rotation?:string}) => { 
    return ( 
        <div className={`relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 lg:w-72 sm:rounded-2xl ${rotation}`}>
            <img className="absolute inset-0 h-full w-full object-cover" src={image} alt="" />
        </div>
    )
}