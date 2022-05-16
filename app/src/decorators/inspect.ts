export function inspect(){
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){
        const metodoOriginal = descriptor.value;
        //qualquer parametro e como nao sabemos quantos, guardamos numa array de tipo any.
        descriptor.value = function(...args: any[]){
            console.log(`-- Método ${propertyKey}`);
            console.log(`--- Parametros: ${JSON.stringify(args)}`);

            const retorno = metodoOriginal.apply(this, args)
            console.log(`---- Retorno: ${JSON.stringify(retorno)}`);            
            return retorno;
        }

        return descriptor;
    }
}