import {
  getSubscriberInviteClicks,
  getSubscriberInviteCount,
  getSubscriberRankingPosition,
} from "@/http/api"
import { BadgeCheck, Medal, MousePointerClick } from "lucide-react"
import React from "react"

interface StatsProps {
  subscriberId: string
}

export default async function Stats({ subscriberId }: StatsProps) {
  const { count: accessCount } = await getSubscriberInviteClicks(subscriberId)
  const { count: inviteCount } = await getSubscriberInviteCount(subscriberId)
  const { position: rankingPosition } =
    await getSubscriberRankingPosition(subscriberId)

  return (
    <div className="grid gap-3 md:grid-cols-3">
      <div className="bg-gray-700 border border-gray-600 py-7 px-4 flex flex-col items-center justify-center gap-1 rounded-xl relative">
        <span className="font-heading text-gray-200 text-2xl font-semibold leading-none">
          {accessCount}
        </span>
        <span className="text-gray-300 text-sm leading-none text-center">
          Acessos ao link
        </span>
        <MousePointerClick className="size-5 text-purple absolute top-3 left-3" />
      </div>
      <div className="bg-gray-700 border border-gray-600 py-7 px-4 flex flex-col items-center justify-center gap-1 rounded-xl relative">
        <span className="font-heading text-gray-200 text-2xl font-semibold leading-none">
          {inviteCount}
        </span>
        <span className="text-gray-300 text-sm leading-none text-center">
          Inscrições feitas
        </span>
        <BadgeCheck className="size-5 text-purple absolute top-3 left-3" />
      </div>
      <div className="bg-gray-700 border border-gray-600 py-7 px-4 flex flex-col items-center justify-center gap-1 rounded-xl relative">
        <span className="font-heading text-gray-200 text-2xl font-semibold leading-none">
          {rankingPosition ? `${rankingPosition}º` : "-"}
        </span>
        <span className="text-gray-300 text-sm leading-none text-center">
          Posição no ranking
        </span>
        <Medal className="size-5 text-purple absolute top-3 left-3" />
      </div>
    </div>
  )
}
