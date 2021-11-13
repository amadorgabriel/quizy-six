import { createContext, useContext, useState } from 'react'

type cursorType = 'pulse' | 'hover' | 'not-allowed'

interface CursorContextData {
  cursorType: cursorType
  switchCursor: (cursorType: cursorType) => void
}

interface CursorProviderProps {
  children: React.ReactNode
}

const CursorContext = createContext({} as CursorContextData)

export function CursorProvider({ children }: CursorProviderProps) {
  const [cursorType, setCursorType] = useState<cursorType>(`pulse`)

  const switchCursor = (cursorType: cursorType) => {
    setCursorType(cursorType)
  }

  return (
    <CursorContext.Provider value={{ cursorType, switchCursor }}>
      {children}
    </CursorContext.Provider>
  )
}

export function useCursor() {
  return useContext(CursorContext)
}
