import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

interface Class{
  class:string;
  url:string;
}


export default function Nav(){

const clase: Class[]=[
  {class:"Primesa clase",url:"clase1"},
  {class:"Segunda clase",url:"clase2"}

]

    return(
        <>
        <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
      <NavigationMenuContent>
        {clase.map((p)=>(<Link key={p.class} href={p.url}>
        <NavigationMenuLink >{p.class}</NavigationMenuLink>
        </Link>
        ))}
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
        </>
    )
}