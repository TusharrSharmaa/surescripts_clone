import Link from "next/link";
import CustomButton from "./ui/custombtn";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white py-5">
      <div className="container flex h-16 items-center gap-20">
        <div className="flex">
          <Link href="/" className="font-bold text-xl empty-link relative">
            <Image
              src="/company-logo.svg"
              width={232}
              height={48}
              alt="company logo"
            />
          </Link>
        </div>
        <div className="md:flex justify-between w-full items-center mt-2.5">
          <nav className="hidden md:flex gap-10">
            <Link
              href="/"
              className="link text-sm font-medium transition-colors hover:text-primary"
            >
              Why Surescripts
            </Link>
            <Link
              href="/about"
              className="link text-sm font-medium transition-colors hover:text-primary"
            >
              What we do
            </Link>
            <Link
              href="/services"
              className="link text-sm font-medium transition-colors hover:text-primary"
            >
              Insights
            </Link>
            <Link
              href="/contact"
              className="link text-sm font-medium transition-colors hover:text-primary"
            >
              Who we are
            </Link>
          </nav>
          <div className="hidden md:flex items-center gap-6">
            <CustomButton label="Contact sales" href="/about" type="primary" />
          </div>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              <Link
                href="/"
                className="text-base font-medium transition-colors hover:text-primary"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-base font-medium transition-colors hover:text-primary"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-base font-medium transition-colors hover:text-primary"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-base font-medium transition-colors hover:text-primary"
              >
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
