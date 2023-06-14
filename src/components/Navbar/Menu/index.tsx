export default function Menu({
  handleToggleMenu,
  active,
}: {
  handleToggleMenu: () => void
  active: boolean
}) {
  return (
    <div
      className={`${active ? 'z-30' : 'z-[-1]'} fixed left-0 top-0 flex w-full`}
    >
      <nav
        className={`${
          active ? 'w-[min(100%,_440px)]' : 'w-0'
        } h-screen bg-white transition-all duration-300`}
      ></nav>
      {active && (
        <div
          className="h-screen w-full bg-black opacity-40"
          onClick={handleToggleMenu}
        ></div>
      )}
    </div>
  )
}
