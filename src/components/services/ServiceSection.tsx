import Image from "next/image";

type ServiceItem = {
  icon: string;
  text: string;
};

type ServiceCategory = {
  title: string;
  items: ServiceItem[];
};

type ServiceSectionProps = {
  title: string;
  description: string;
  subText: string;
  categories: ServiceCategory[];
};

export default function ServiceSection({ title, description, subText, categories }: ServiceSectionProps) {
  return (
    <section className="w-full flex justify-center px-4 md:px-0 mt-10 lg:mt-[50px]">
      <div className="flex flex-col w-full max-w-[1596px] gap-[50px]">
        
        {/* --- Header Part --- */}
        <div className="flex flex-col border-l border-r border-t border-neutral-700 p-4 md:p-0 border-b md:border-b-0">
            
            {/* Title & Description Container */}
            {/* التعديل هنا: جعلنا الاتجاه flex-col دائماً، وقمنا بإزالة lg:flex-row لضمان ظهور العناصر تحت بعضها */}
            <div className="flex flex-col items-start gap-[30px] px-4 lg:px-[100px] py-[50px] lg:py-[80px]">
                
                {/* Title */}
                <h2 className="text-white font-barlow text-4xl lg:text-[48px] font-semibold leading-normal w-full">
                    {title}
                </h2>
                
                {/* Description */}
                {/* تمت إزالة تحديد العرض (w-2/3) ليأخذ النص راحته في العرض الكامل أو يمكنك تحديده إذا أردت */}
                <p className="text-neutral-100 font-barlow text-lg font-normal leading-[150%] tracking-[-0.108px] w-full">
                    {description}
                </p>
            </div>

            {/* "Our Services Include" Label */}
            <div className="w-full px-4 lg:px-[100px] pb-10">
                <div className="inline-flex px-[14px] py-[12px] justify-center items-center gap-[10px] rounded-lg bg-[#262626]">
                    <span className="text-white font-barlow text-[22px] font-normal leading-normal">
                        {subText}
                    </span>
                </div>
            </div>
        </div>

        {/* --- Categories Part (The Grid) --- */}
        <div className="flex flex-col w-full">
            {categories.map((category, catIndex) => (
                <div key={catIndex} className="flex flex-col w-full">
                    
                    {/* Category Title */}
                    <div className="w-full px-4 lg:px-[100px] py-10 border-l border-r border-t border-neutral-700 bg-neutral-800">
                        <h3 className="text-[#98989A] font-barlow text-[28px] font-medium leading-normal">
                            {category.title}
                        </h3>
                    </div>

                    {/* Items Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full border-l border-neutral-700">
                        {category.items.map((item, itemIndex) => (
                            <div 
                                key={itemIndex}
                                className="flex flex-col p-8 lg:p-[50px] gap-[30px] border-r border-b border-t border-neutral-700 bg-neutral-800"
                            >
                                {/* Icon Box */}
                                <div 
                                    className="flex items-center justify-center w-[80px] h-[80px] p-6 rounded-xl border border-[#262626]"
                                    style={{
                                        background: "linear-gradient(131deg, rgba(158, 255, 0, 0.20) -66.81%, rgba(158, 255, 0, 0.00) 37.19%)"
                                    }}
                                >
                                    <div className="relative w-8 h-8">
                                        <Image 
                                            src={item.icon} 
                                            alt="icon" 
                                            fill 
                                            className="object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Text */}
                                <p className="text-neutral-100 font-barlow text-[20px] font-medium leading-[150%] tracking-[-0.12px]">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
}