import { getRanking } from "@/http/api"
import Image from "next/image"
import MedalGold from "../../../../assets/medal1.svg"
import MedalSilver from "../../../../assets/medal2.svg"
import MedalCooper from "../../../../assets/medal3.svg"

export default async function Ranking() {
  const { ranking } = await getRanking()

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de Indicações
      </h2>
      <div className="space-y-4">
        {ranking.map((subscriber, index) => {
          const rankingPosition = index + 1

          return (
            <div
              key={subscriber.id}
              className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3"
            >
              <span className="text-sm text-gray-300 leading-none">
                <span className="font-semibold">{rankingPosition}º</span> |
                {subscriber.name}
              </span>
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                {subscriber.score}
              </span>
              {rankingPosition === 1 && (
                <Image
                  className="absolute right-8 top-0"
                  src={MedalGold}
                  alt=""
                />
              )}
              {rankingPosition === 2 && (
                <Image
                  className="absolute right-8 top-0"
                  src={MedalSilver}
                  alt=""
                />
              )}
              {rankingPosition === 3 && (
                <Image
                  className="absolute right-8 top-0"
                  src={MedalCooper}
                  alt=""
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
