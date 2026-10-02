import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface Class {
  class: string;
  url: string;
}

interface Subject {
  name: string;
  classes: Class[];
}

const subjects: Subject[] = [
  {
    name: "Análisis de datos",
    classes: [{ class: "Primera clase", url: "/ADA/clase1" }],
  },
  { name: "Circuitos", classes: [] },
  { name: "Ingeniería de software", classes: [] },
  { name: "Sistemas operativos", classes: [] },
  {
    name: "Matemáticas discretas",
    classes: [
      { class: "Primera clase", url: "/MD/clase1" },
      { class: "Segunda clase", url: "/MD/clase2" },
    ],
  },
];

export default function Nav() {

  //Enlaces de analisis de datos


  
//Nombre de las materias



  return (
    <nav className="w-full border-b border-slate-200 bg-white" aria-label="Navegación principal">
      <NavigationMenu className="mx-auto min-h-16 w-full max-w-6xl justify-start px-4 sm:px-6">
        <NavigationMenuList className="w-full justify-start gap-1 overflow-x-auto py-2">
          <NavigationMenuItem>
            <NavigationMenuLink
              className="font-semibold text-slate-900 hover:bg-slate-100"
              render={<Link href="/">Inicio</Link>}
            />
          </NavigationMenuItem>
          {subjects.map((subject) => (
            <NavigationMenuItem key={subject.name}>
              <NavigationMenuTrigger className="whitespace-nowrap text-slate-700 hover:bg-slate-100">
                {subject.name}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="min-w-52 p-2">
                {subject.classes.length > 0 ? (
                  subject.classes.map((lesson) => (
                    <NavigationMenuLink
                      key={lesson.url}
                      className="whitespace-nowrap text-slate-700 hover:bg-slate-100"
                      render={<Link href={lesson.url}>{lesson.class}</Link>}
                    />
                  ))
                ) : (
                  <p className="px-2 py-2 text-sm text-slate-500">
                    Sin clases publicadas
                  </p>
                )}
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
