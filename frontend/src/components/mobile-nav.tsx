import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-orange-500" />
            </SheetTrigger>
            <SheetContent>
                <SheetTitle>
                    <span>Welcome to MernEats.com!</span>
                </SheetTitle>
                <Separator />
                <SheetDescription className="flex">
                    <Button className="flex-1 font-bold bg-orange-500 hover:bg-orange-600">Login</Button>
                </SheetDescription>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
