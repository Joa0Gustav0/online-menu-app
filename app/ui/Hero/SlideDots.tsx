function SlideDots( { behaviour }: { behaviour: string } ) {
  return (
    <div className={`w-[10px] h-[10px] rounded-full ${behaviour} transition-all duration-[.25s]`}></div>
  );
}

export default SlideDots;