import { createContext, ReactNode, useState } from "react";
interface LoadingContext {
  isLoading: boolean;
  loaderToggler: (arg0: boolean) => void
}
interface LoadingProviderType {
  children: ReactNode;
}

const loadingContext = createContext({} as LoadingContext);
export default loadingContext;
export function LoadingProvider(props: LoadingProviderType) {
  const [isLoading, setIsLoading] = useState(false);
  const loaderToggler = (state: boolean) => setIsLoading(state);
  return (
    <loadingContext.Provider value={{ isLoading, loaderToggler }}>
      {props.children}
    </loadingContext.Provider>
  );
}
