import React, { useState, createContext, useEffect } from 'react'
import { setLanguageToI18n } from 'services/i18n'
import AppStorage from 'services/appStorage'

interface DataContextProps {
  removeAllKeys: () => Promise<void>
  loadDatas: () => Promise<void>
  getUser: () => Promise<boolean>
  setLanguage: React.Dispatch<React.SetStateAction<string>>
  language: string
  user: string
}

interface AppContextProps {
  children?: React.ReactNode
}

export const DataContext = createContext({} as DataContextProps)

const AppContext = ({ children }: AppContextProps) => {
  /*
   *   CONTEXT
   */

  /*
   *   REFS
   */

  /*
   *   STATES
   */
  const [user, setUser] = useState(null as any)
  const [language, setLanguage] = useState<string>(null as any)

  /*
   *   HOOKS
   */

  /*
   *   LAYOUT
   */

  /*
   *   FORMIK
   */

  /*
   *   FUNCTIONS
   */

  const removeAllKeys = async () => {
    await AppStorage.remove('@lesVoitures:language')
    await AppStorage.remove('@lesVoitures:userName')
  }

  const loadDatas = async () => {
    const language = await AppStorage.getData('@lesVoitures:language')
    const user = await AppStorage.getData('@lesVoitures:userName')

    if (language) {
      setLanguageToI18n(language)
    }

    if (user) {
      setUser(user)
    }
  }

  const getUser = async () => {
    const user = await AppStorage.getData('@lesVoitures:userName')

    if (user) {
      setUser(user)
      return true
    } else {
      return false
    }
  }

  /*
   *   EFFECTS
   */

  useEffect(() => {
    loadDatas()
  }, [])

  return (
    <DataContext.Provider
      value={{ language, setLanguage, loadDatas, getUser, user, removeAllKeys }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default AppContext
