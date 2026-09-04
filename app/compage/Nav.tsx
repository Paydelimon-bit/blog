import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface Class {
  class: string;
  url: string;
}

interface Name{
  name1:string;
  name2:string;
  name3:string;
  name4:string;
  name5:string;
  
}


export default function Nav() {

  //Enlaces de analisis de datos
  const AD: Class[] = [
    { class: "Primesa clase", url: "/ADA/clase1" },
    { class: "Segunda clase", url: "/ADA/clase2" },
  ];

  
//Nombre de las materias
const Nombre:Name=
  {name1:"Analisis de datos",
   name2:"Circuitos",
   name3:"Ingenieria de software",
   name4:"Sistemas operativos",
   name5:"Matematicas discretas"}


  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuLink
            className={""}
            render={<Link href="/">Inicio</Link>}
          />
        </NavigationMenuList>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>{Nombre.name1}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul>
                <li title="Titulo">d</li>
              </ul>
              {AD.map((p) => (
                <NavigationMenuLink key={p.class} href={p.url}>
                  {p.class}
                </NavigationMenuLink>
              ))}
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>{Nombre.name2}</NavigationMenuTrigger>
            <NavigationMenuContent>
              {AD.map((p) => (
                <NavigationMenuLink key={p.class} href={p.url}>
                  {p.class}
                </NavigationMenuLink>
              ))}
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>{Nombre.name3}</NavigationMenuTrigger>
            <NavigationMenuContent>
              {AD.map((p) => (
                <NavigationMenuLink key={p.class} href={p.url}>
                  {p.class}
                </NavigationMenuLink>
              ))}
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>{Nombre.name4}</NavigationMenuTrigger>
            <NavigationMenuContent>
              {AD.map((p) => (
                <NavigationMenuLink key={p.class} href={p.url}>
                  {p.class}
                </NavigationMenuLink>
              ))}
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>{Nombre.name5}</NavigationMenuTrigger>
            <NavigationMenuContent>
              {AD.map((p) => (
                <NavigationMenuLink key={p.class} href={p.url}>
                  {p.class}
                </NavigationMenuLink>
              ))}
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
