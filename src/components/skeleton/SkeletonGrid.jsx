import Loading from "../layout/Loading";
import SkeletonCard from "./SkeletonCard";

function SkeletonGrid() {
  return (
    <>
      <Loading />
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-4 mt-6 md:m-[4rem]">
        {Array.from({ length: 8 }, (_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    </>
  );
}

export default SkeletonGrid;
