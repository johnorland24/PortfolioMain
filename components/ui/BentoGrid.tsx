// import { cn } from "@/lib/utils";
// import { a, div } from "framer-motion/client";
// import TitleSkill from "../TitleSkill";

// export const BentoGrid = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children?: React.ReactNode;
// }) => {
//   return (
//     <div
//       className={cn(
//         "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
//         className
//       )}
//     >
//       {children}
//     </div>
//   );
// };

// export const BentoGridItem = ({
//   className,
//   title,
//   description,
//   header,
//   icon,
//   id,
//   image,
//   linkurl,
//   imageAlt,

// }: {
//   className?: string;
//   title?: string | React.ReactNode;
//   description?: string | React.ReactNode;
//   header?: React.ReactNode;
//   icon?: React.ReactNode;
//   id:number,
//   image?:string,
//   linkurl?:string,
//   imageAlt?: string;
// }) => {
//   return (
    
//      <div
//       className={cn(
//         " relative row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
//         className
//       )}
//       >
//       {header}
//       <div className="group-hover/bento:translate-x-2 transition duration-200">
//         {icon}
//         <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
//         <a href={linkurl} className='hyphens-manual underline decoration-red-700'>
//         {title}
//         </a>
//         </div>
//         <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 mb-2">
//           {description}
//         </div>
//        <div>
//        {image && (
//        <a  href={linkurl}>
//          <img src={image} alt={imageAlt} className=" bg-white rounded-2xl object-contain h-48 w-96 "/>
//        </a>
//       )}
//        </div>
//       </div>
//     </div>  
//   );
// };
