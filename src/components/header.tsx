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
    <div className="p-5 ">
      <Button
        onClick={() => setShow(!show)}
        variant={"outline"}
        className="hover:bg-[#16a34a]"
      >
        <MenuIcon />
      </Button>
    </div>
  );
};

export default Header;
