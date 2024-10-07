import { headerData } from "@/data/headerData";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown";
import { Button } from "./ui/button";
import React, { useState } from "react";
import Link from "next/link";
import { Li } from "./ui/li";
import { ChevronDown, ChevronUp } from "lucide-react";

type Props = {
  item: (typeof headerData)[number];
};
export const HeaderListItem = ({ item }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);
  if (!item.dropdown) {
    return (
      <Li key={item.name}>
        <Link href={item.href}>{item.name}</Link>
      </Li>
    );
  }

  return (
    <Li key={item.name}>
      <DropdownMenu open={isOpen} onOpenChange={handleMouseEnter} modal>
        <DropdownMenuTrigger
          className="h-full focus:outline-none"
          aria-label={`Open ${item.name} menu`}
        >
          <span
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex h-full items-center gap-x-2"
          >
            {item.name}
            {isOpen ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </span>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className="grid gap-x-2 p-0"
          side="bottom"
          align="start"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {item.dropdown.map((subItem, index) => (
            <>
              <DropdownMenuGroup
                key={`${item.name}-${index}`}
                className="flex cursor-pointer items-center gap-x-2 px-0 pl-2 hover:bg-accent"
              >
                <Button variant={"secondary"} className="shrink-0" size={"xs"}>
                  <subItem.icon size={16} />
                </Button>
                <div className="">
                  <DropdownMenuLabel>{subItem.title}</DropdownMenuLabel>
                  <DropdownMenuItem className="cursor-pointer focus:bg-transparent">
                    {subItem.description}
                  </DropdownMenuItem>
                </div>
              </DropdownMenuGroup>
              {item.dropdown.length - 1 !== index && (
                <DropdownMenuSeparator className="" />
              )}
            </>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </Li>
  );
};
