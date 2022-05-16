export function domInjector(seletor: string){ /// wrapper/factory
    return function(target:any, propertyKey: string){
        
        let elemento: HTMLElement;
        
        const getter = function(){
        if(!elemento){
            elemento = <HTMLElement>document.querySelector(seletor)
           console.log(`buscando o elemento do Dom com o seletor 
            ${seletor} para injetar em ${propertyKey}`);            
        }
            return elemento;
        }
        Object.defineProperty(
            target, propertyKey, 
            {get: getter}
        )
    }
}