export default function Menu({
  handleToggleMenu,
  active,
}: {
  handleToggleMenu: () => void
  active: boolean
}) {
  return (
    <div className={`fixed left-0 top-0 z-10 flex w-full `}>
      <nav
        className={`absolute z-10 ${
          active ? 'left-0' : '-left-full'
        } top-0  h-screen w-[min(100%,_440px)] bg-white transition-all duration-500`}
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
