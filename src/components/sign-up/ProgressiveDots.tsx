export default function ProgressiveDots({ stage }: { stage: number }) {
  return (
    <div className="flex justify-center gap-2">
      <div
        className={`h-2 w-2 bg-${
          stage === 1 ? 'emphasis' : 'alternative'
        } rounded`}
      ></div>
      <div
        className={`h-2 w-2 bg-${
          stage === 2 ? 'emphasis' : 'alternative'
        } rounded`}
      ></div>
      <div
        className={`h-2 w-2 bg-${
          stage === 3 ? 'emphasis' : 'alternative'
        } rounded`}
      ></div>
    </div>
  )
}
