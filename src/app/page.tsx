import Navbar from "@/components/ui/navbar";
import ItemCard from "@/components/ui/item-card";
import Counter from "@/components/counter";

export default function Home() {  
  let linkImage = "https://cdn2.thecatapi.com/images"
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#1b1a1a]">
     <Navbar />
     <div className="flex flex-col items-center justify-center gap-5">
     <h2 className="font-bold text-3xl mt-2 text-white">The Cat</h2>
     <div className="grid grid-cols-4 gap-5">
      <ItemCard name="Abyssinian" imgCat={`${linkImage}/0XYvRd7oD.jpg`} />
      <ItemCard name="Bombay" imgCat={`${linkImage}/5iYq9NmT1.jpg`}/>
      <ItemCard name="Cheetoh" imgCat={`${linkImage}/IFXsxmXLm.jpg`}/>
      <ItemCard name="Donskoy" imgCat={`${linkImage}/3KG57GfMW.jpg`}/>
      </div>
      </div>
      <Counter />
    </main>
);
}
