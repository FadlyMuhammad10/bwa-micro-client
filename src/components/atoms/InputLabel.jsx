import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function InputLabel({ type, placeholder, label }) {
  return (
    <>
      <div className="w-full text-[#132B50] ">
        <Label htmlFor={type}>{label}</Label>
        <Input
          type={type}
          placeholder={placeholder}
          className="rounded-none w-full focus:outline-none border-[#7186A0] focus:text-black"
        />
      </div>
    </>
  );
}
