import WorkHero from "@/components/work/WorkHero";
import WorkList from "@/components/work/WorkList";
import WorkCTA from "@/components/work/WorkCTA"; 

export default function WorkPage() {
  return (
    <div className="flex flex-col items-center w-full bg-neutral-800 pb-0">
      
      {/* 1. Work Hero */}
      <WorkHero />

      {/* 2. Work List & Pagination */}
      <WorkList />

      {/* 3. CTA Section */}
      <WorkCTA />

    </div>
  );
}