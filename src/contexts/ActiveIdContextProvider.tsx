import { createContext } from 'react';
import { useActiveId, useJobItems, useLocalStorage } from '../lib/hooks';

type ActiveIdContext = {
  activeId: number | null;
};

type Props = {
  children: React.ReactNode;
};

export const ActiveIdContext = createContext<ActiveIdContext | null>(null);

export default function ActiveIdContextProvider({ children }: Props) {

  const activeId = useActiveId()
  return (
    <ActiveIdContext.Provider
      value={{
        activeId,
      }}
    >
      {children}
    </ActiveIdContext.Provider>
  );
}
