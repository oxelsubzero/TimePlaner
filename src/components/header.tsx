import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
const Header = ({
  show,
  setShow,
}: {
  show: boolean;
  setShow: (show: boolean) => void;
}) => {
  return (
    <div className="p-3 ">
      <Button
        onClick={() => setShow(!show)}
        variant={"outline"}
        className="hover:bg-[#e11d48]"
      >
        <MenuIcon />
      </Button>
    </div>
  );
};

export default Header;
