import { lightColorScheme } from "./functions";

// Color Scheme
export const borderColor = "border-gray ";

export const bgColor = lightColorScheme() ? "bg-white " : "bg-black ";

// Main
export const app = "flex m-0 p-0 relative textColor ";
export const articleContainer:string =  "mt-3 text-xl h-full lg:w-[50vw] ";
export const innerContainer: string = "px-6 py-6 border " + borderColor + "py-6 rounded h-full lg:w-[50vw] ";
export const innerContainerHeader:string =  "font-medium text-2xl ";
export const pageHeader:string =  "font-medium text-3xl ";
export const pageHeaderClickable:string =  `${pageHeader} + w-fit font-bold hover:text-blue-500 cursor-pointer `;
export const pageTitle:string =  "text-5xl font-bold mb-3 text-center ";
export const pageDivider:string =  "border-black w-100 my-3 ";
export const stack:string =  'flex flex-col gap-2';
export const centerContainer:string =  "flex w-full place-content-center ";
export const doubleStack:string =  'mt-3 grid grid-cols-2 md:gap-6 ';
export const innerText:string =  "text-[19px] md:text-xl ";
export const link:string =  "text-blue-600 ";
export const fixedSubBox:string =  'absolute top-[90px] lg:top-[160px] flex ';
export const textContainer:string =  "flex flex-col place-items-center ";
export const starColor:string =  "ring-blue-500 ";
export const star:string =  `${starColor} ring-offset-4 ring-offset-blue-100 z-30 cursor-grab active:cursor-grabbing `;

//Inputs
export const textField: string = "border-2 " + borderColor + " rounded-lg py-2 px-3 w-full placeholder:text-[17px] focus:outline-blue-500 " + bgColor;

//Button
export const button:string =  "bg-gray-500 text-white px-3 py-1 cursor-pointer rounded-lg w-fit focus:outline-none focus:ring focus:ring-white ";
export const disabledButton:string =  `${button} cursor-default bg-gray-400`
export const closeButton:string =  `${button} hover:bg-red-500 active:bg-red-600 `;
export const submitButton:string =  `${button} hover:bg-blue-500 active:bg-blue-600 `;
export const pictureButton:string =  "hover:text-red-600 ml-2 mt-3 cursor-pointer ";
export const textButtom:string =  "font-bold cursor-pointer hover:text-blue-500 ";
