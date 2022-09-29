import { defineStore, acceptHMRUpdate } from 'pinia'

export const useNotImplementedAlertStore = defineStore('notImplementedAlert', {
    state: () => ({
      count: 0,
      alertTextList: [] as string[]
    }),
    actions: {
      // since we rely on `this`, we cannot use an arrow function
      showAlert(alertText: string) {
        this.count++
        this.alertTextList.push(alertText)
        
        setTimeout(() => {
          this.count--
          this.alertTextList.shift()
        }, 10000)
      },
    },
  })
  