import { defineStore } from 'pinia'
import { Device, type DeviceInfo } from '@capacitor/device'
import { StatusBar } from '@capacitor/status-bar'

export const useDeviceStore = defineStore('device-store', () => {
  const device = ref<DeviceInfo>()

  Device.getInfo().then((data) => {
    setTimeout(() => {
      device.value = data
    }, 2000)
  })

  function getPlatform() {
    if (device.value)
      return device.value.platform

    return 'waiting...'
  }

  function statusBarHide() {
    if (['ios', 'android'].includes(getPlatform()))
      StatusBar.hide()
  }

  return {
    device,
    getPlatform,
    statusBarHide,
  }
})
