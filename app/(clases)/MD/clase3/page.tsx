export default function Clase3() {
    return (
        <>
            <h1>Congruencia</h1>
            <p>Existen congruencias modulo n, donde n es cualquier enterno no negativo. En criptografia se usan modulos numeros primos</p>
            <p>Para esto, se usa la relacion de DIVISIBILIDAD</p>
            <h2>Definicion de relacion de divisibilidad</h2>
            <p>Se define la relacion | sobre el conjunto de enteros Z :  </p>
            <p>a|b {"<"}={">"}b es multiplo de a</p>
            <p>b=Ra para algun R∈Z</p>
            <p>Ejemplo: 2|4 por que 4=2*2</p>
            <p>5|0 por que 0=0*5</p>
            <p>0|5 por que 5=R*0=0 es imposible</p>
            <p>-2|4 por que 4=(-2)*(-2)</p>
            <p>3∤10 por que 1≠R*3, por que 10=R3={">"}10/3=R∈/Z</p>
            <p>Es | de equivalencia</p>
            <p>1{")"}| es reflexiva: ∀a∈,a|a por que a=1*a</p>
            <p>2{")"}| es transitiva: si a|b y b|c entonces b=Ra y c=Rb con R1,R2∈ℤ</p>
            <p>Sustituyendo b en la siguiente ecuacion, c=R1R2a</p>
            <p>Ejem: Sobre el conjunto de todas las personas, 
                ¿Las relaciones familiares, son de equivalencia?
            </p>
            <p>Def: Sea n entero no negativo. Se define la relacion de congruencia modulo n en ℤ como:</p>
            <p>a≡b{"("}mod n{")"}{"<"}={">"}n|{"("}a-b{")"}</p>
            <p>Tarea pdf6</p>
            <p>Tarea2: La relacion de congruencia modulo n es de equivalencia</p>

        </>
    )
}