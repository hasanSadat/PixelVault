function SkeletonCard({height = "450px"}) {
  return (
    <div className="animate-pulse w-full max-h-[600px] md:max-h-full" style={{height : `${height}`}}>
      <div className="w-full h-full bg-slate-700 rounded-md"></div>
    </div>
  );
}

export default SkeletonCard;
