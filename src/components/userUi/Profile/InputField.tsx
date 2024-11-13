// import { useForm, SubmitHandler } from "react-hook-form";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import SelectScrollable from "@/components/ui/Selected";

// // Define TypeScript interface for the form fields
// interface FormData {
//   fullName: string;
//   location: string;
//   email: string;
//   whatsappNumber: string;
//   zoomUsername: string;
//   discordUsername: string;
//   telegramUsername: string;
// }

// function InputField() {
//   // Initialize react-hook-form
//   const {register,handleSubmit} = useForm()

//   // Function to handle form submission
//   const onSubmit: SubmitHandler<FormData> = (data) => {
//     console.log(data); // You can handle the submitted data here
//   };

//   return (
//     <section className="w-[70%]">
//       <div className="font-bold text-base">Profile</div>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="mt-7 flex items-center justify-between text-white">
//           <Label htmlFor="fullName">Full Name</Label>
//           <Input
//             {...register("fullName", { required: "Full Name is required" })}
//             placeholder="Emmanuel Ginger"
//             className="w-[85%] outline-none border focus-visible:ring-0 bg-black bg-opacity-50 backdrop-blur-md"
//           />
//           {errors.fullName && (
//             <span className="text-red-500">{errors.fullName.message}</span>
//           )}
//         </div>
//         <div className="mt-7 flex items-center justify-between text-white">
//           <Label htmlFor="location">Location</Label>
//           <SelectScrollable />
//           <SelectScrollable />
//         </div>

//         <div className="font-bold text-base mt-7">Contact information</div>
//         <div className="mt-7 flex items-center justify-between text-white">
//           <Label htmlFor="email">Email Address</Label>
//           <Input
//             type="email"
//             {...register("email", {
//               required: "Email is required",
//               pattern: {
//                 value: /^\S+@\S+$/i,
//                 message: "Invalid email address",
//               },
//             })}
//             placeholder="username@domain.com"
//             className="w-[55%] outline-none border focus-visible:ring-0 bg-black bg-opacity-50 backdrop-blur-md"
//           />
//           {errors.email && (
//             <span className="text-red-500">{errors.email.message}</span>
//           )}
//         </div>

//         <div className="mt-7 flex items-center justify-between text-white">
//           <Label htmlFor="whatsappNumber">Whatsapp Number</Label>
//           <Input
//             {...register("whatsappNumber", {
//               required: "Whatsapp number is required",
//             })}
//             placeholder="Whatsapp number"
//             className="w-[55%] outline-none border focus-visible:ring-0 bg-black bg-opacity-50 backdrop-blur-md"
//           />
//           {errors.whatsappNumber && (
//             <span className="text-red-500">
//               {errors.whatsappNumber.message}
//             </span>
//           )}
//         </div>

//         {/* Repeat similar structure for the rest of the inputs */}
//         <div className="mt-7 flex items-center justify-between text-white">
//           <Label htmlFor="zoomUsername">Zoom username</Label>
//           <Input
//             {...register("zoomUsername", {
//               required: "Zoom username is required",
//             })}
//             placeholder="@username"
//             className="w-[55%] outline-none border focus-visible:ring-0 bg-black bg-opacity-50 backdrop-blur-md"
//           />
//           {errors.zoomUsername && (
//             <span className="text-red-500">{errors.zoomUsername.message}</span>
//           )}
//         </div>

//         <div className="mt-7 flex items-center justify-between text-white">
//           <Label htmlFor="discordUsername">Discord username</Label>
//           <Input
//             {...register("discordUsername", {
//               required: "Discord username is required",
//             })}
//             placeholder="@username"
//             className="w-[55%] outline-none border focus-visible:ring-0 bg-black bg-opacity-50 backdrop-blur-md"
//           />
//           {errors.discordUsername && (
//             <span className="text-red-500">
//               {errors.discordUsername.message}
//             </span>
//           )}
//         </div>

//         <div className="mt-7 flex items-center justify-between text-white">
//           <Label htmlFor="telegramUsername">Telegram username</Label>
//           <Input
//             {...register("telegramUsername", {
//               required: "Telegram username is required",
//             })}
//             placeholder="@username"
//             className="w-[55%] outline-none border focus-visible:ring-0 bg-black bg-opacity-50 backdrop-blur-md"
//           />
//           {errors.telegramUsername && (
//             <span className="text-red-500">
//               {errors.telegramUsername.message}
//             </span>
//           )}
//         </div>

//         <button type="submit" className="mt-7 bg-blue-500 text-white py-2 px-4">
//           Submit
//         </button>
//       </form>
//     </section>
//   );
// }

// export default InputField;
