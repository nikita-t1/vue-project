import { defineStore, acceptHMRUpdate } from 'pinia'

export const useToogleDarkModeStore = defineStore('darkMode', {
    state: () => ({
      useDarkMode: false as boolean,
    }),
    actions: {
      // since we rely on `this`, we cannot use an arrow function
      toogle(){
        this.useDarkMode = !this.useDarkMode
        const element = document.getElementById('html-root')
        if(element != null){
            element.className = ""
            if(this.useDarkMode){
                element.classList.add("dark")
            } else {
                element.classList.add("light")
            }
        }
      },
    },
  })
  