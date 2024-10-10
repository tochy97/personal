// Main
export const container:string =  `flex flex-col place-items-center mt-[95px] mb-[105px] h-full w-full px-6 z-0 text-[20px] `;
export const innerContainer:string =  "bg-gray-200 mt-3 text-xl px-6 border border-black py-6 rounded h-full w-[80vw] ";
export const pageHeader:string =  "font-medium text-3xl ";
export const pageHeaderClickable:string =  `${pageHeader} + w-fit font-bold hover:text-blue-500 cursor-pointer `;
export const pageTitle:string =  "text-5xl font-bold mb-3 text-center ";
export const pageDivider:string =  "border-black w-100 my-3 ";
export const stack:string =  'grid grid-cols-1 gap-3 ';
export const centerContainer:string =  "flex w-full place-content-center ";
export const doubleStack:string =  'mt-3 grid grid-cols-2 md:gap-6 ';
export const innerText:string =  "text-[19px] md:text-xl ";
export const link:string =  "text-blue-600 ";
export const fixedSubBox:string =  'absolute top-[90px] lg:top-[160px] flex ';
export const textContainer:string =  "grid grid-cols-1 gap-4 place-items-center ";
export const fixedOptionBox:string =  'fixed top-[96px] left-[30px] md:left-[20px]flex z-40 ';
export const myPic:string =  'w-32'
export const scrollTracker:string =  "fixed right-0 top-[75px] left-0 h-[10px] origin-[0%] z-20 bg-red-500 ";
export const starColor:string =  "ring-blue-500 "
export const star:string =  `${starColor} ring-offset-4 ring-offset-blue-100 z-30 cursor-grab active:cursor-grabbing `;

//Common
export const modalContainer:string =  "z-40 p-10 bg-white cursor-default outline outline-blue-500 outline-4 ";
export const modalIcons:string =  'md:ml-4 lg:ml-7 text-[20px] md:text-[35px] text-red-500 ';
export const modalHeaderContainer:string =  "text-sm md:text-3xl px-5 py-2 md:flex flex justify-center ";
export const modalContentContainer:string =  'mb-3 text-sm md:text-lg lg:text-2xl ';

//Footer
export const footer:string =  "fixed z-20 h-[65px] bottom-0 w-full flex place-content-center ";
export const footerContainer:string =  'w-full flex pt-3 pb-5 flex gap-7 lg:gap-9 place-content-center bg-white hover:opacity-1 shadow-inner ';
export const footerIcon:string =  'text-black hover:text-blue-500 text-2xl md:text-3xl cursor-pointer ';

//Inputs
export const textField:string =  "border-2 border-gray-500 rounded-lg py-2 px-3 w-full placeholder:text-[17px] focus:outline-blue-500 ";

//Button
export const button:string =  "bg-gray-500 text-white px-3 py-1 cursor-pointer rounded-lg w-fit focus:outline-none focus:ring focus:ring-white ";
export const disabledButton:string =  `${button} cursor-default bg-gray-400`
export const closeButton:string =  `${button} hover:bg-red-500 active:bg-red-600 `;
export const submitButton:string =  `${button} hover:bg-blue-500 active:bg-blue-600 `;
export const pictureButton:string =  "hover:text-red-600 ml-2 mt-3 cursor-pointer ";

//History
export const historyContainer:string =  "static mt-[135px] w-full px-12 md:p-24 text-2xl mt-16 overflow-y-scroll z-0 select-none ";
export const monthContainer:string =  "mb-12 border border-grey-100 ";
export const monthGrid:string =  "w-full h-full grid grid-cols-7 divide-x divide-y ";
export const monthHeader:string =  "col-span-1 border-b-2 border-red-500 flex justify-evenly items-center xl:text-4xl py-4 lg:pt-8 lg:pb-3 ";
export const weekHeaderContainer:string =  "w-full grid grid-cols-7 divide-x border-y border-grey-100 text-sm md:text-2xl ";
export const weekContainer:string =  "md:px-5 py-2 text-center ";
export const dayContainer:string =  "md:h-24 h-16 text-sm md:text-2xl px-5 py-2 cursor-pointer hover:shadow-xl md:flex ";
export const calenderIcons:string =  'mt-1 md:ml-4 lg:ml-7 md:text-[23px] text-red-500 ';
export const searchInputs:string =  ' ';

// Nav
export const navBar:string =  "fixed top-0 bg-white w-full h-[75px] flex flex-wrap items-center justify-between px-2 text-md z-50 shadow-lg place-content-center ";
export const navComponentContainer:string =  "w-fit py-4 drop-shadow-md place-content-center ";
export const navTitle:string =  "font-bold leading-relaxed inli ne-block mx-4 whitespace-nowrap uppercase cursor-pointer hover:text-blue-500 ";
export const subNavContainer:string =  'flex absolute top-[75px] left-0 w-screen h-screen bg-white flex-col ';
export const subNavComponent:string =  "px-3 flex items-center text-sm uppercase font-semibold leading-snug hover:underline underline-offset-4 ";
export const subNavTitle:string =  "font-bold leading-relaxed inline-block mx-4 whitespace-nowrap uppercase cursor-context-menu hover:text-blue-500" ;
export const navSettings:string =  "px-3 flex "
