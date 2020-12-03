import { useEffect } from "react"
import { useLocalStorage, useMedia } from "./index"

export function useDarkMode() {
  if (typeof window === "undefined") {
    return [false, () => void 0]
  }

  const [enabledState, setEnabledState] = useLocalStorage("dark-mode-enabled")
  const prefersDarkMode = usePrefersDarkMode()

  const enabled =
    typeof enabledState !== "undefined" ? enabledState : prefersDarkMode

  useEffect(() => {
    const className = "dark"
    const element = window.document.body
    if (enabled) {
      element.classList.add(className)
    } else {
      element.classList.remove(className)
    }
  }, [enabled])

  return [enabled, setEnabledState]
}

function usePrefersDarkMode() {
  return useMedia(["(prefers-color-scheme: dark)"], [true], false)
}
