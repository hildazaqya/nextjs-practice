import Image from "next/image"

interface Cat {
    name: string,
    imgCat: string,
}
function ItemCard({name,imgCat}: Cat) {
    return (
        <div className="bg-white rounded-lg shadow-xl p-4 flex flex-col items-center justify-center min-h-[180px]">
            <Image alt={name} width={100} height={100} src={imgCat} className="rounded-md shadow-md h-[100px] w-[100px] object-cover"/>
            <h2 className="text-lg font-bold mt-2 text-[#4FC0D0]">{name}</h2>
            <p className="text-xs">Lorem Ipsum</p>
        </div>
    )
}

export default ItemCard;
