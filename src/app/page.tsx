import { rubik, ubuntu } from "@/fonts"
import CldImage from "@/components/reusable/cldImage"

export default function Home() {
  return (
    <main>
      <h1 className={`${rubik.variable} font-rubik font-bold text-2xl`}>
        Simplify Your Shopping Experience with Shoppingify: Understand
        Your Spending, Track Price Fluctuations, and Gain Insights Into Your Purchases!
      </h1>
      <div className="w-full h-[30vh] md:h-[50vh] relative rounded-2xl overflow-hidden">
        <CldImage
          fill
          src="Shoppingify/Shopping-cart"
          sizes="100vw"
          alt="Shopping cart filled with groceries sitting on top of a red arrow pointing upward"
        />
      </div>
    </main>
  )
}
