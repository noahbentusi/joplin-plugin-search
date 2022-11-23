export const delay = function(namespace: any, name: string, timeout: number, func: any) {
    if (namespace[name] != null)
        clearTimeout(namespace[name]);
    
    namespace[name] = setTimeout(func, timeout);
  };

export const timeout = function(timer: number) {
    return new Promise((resolve: Function) => {
        setTimeout(() => resolve(), timer);
    });
}
