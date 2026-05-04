class Device {
  constructor(brand, series, color) {
    this.brand = brand;
    this.series = series;
    this.color = color;
  }
  charge() {
    console.log(`${this.brand}, ${this.series}, ${this.color} заряжается.`)
  }
}


class Phone extends Device {
  constructor(brand, series, color, memory) {
    super(brand, series, color);
    this.memory = memory;
  }
  takePicture() {
    console.log(`${this.brand}, ${this.series} фотографирует.`)
  }
}


class Watch extends Device {
  constructor(brand, series, color, stepTracking) {
    super(brand, series, color);
    this.stepTracking = stepTracking;
  }
  showStepTracking() {
      console.log(`${this.brand}, ${this.series}, ${this.color}, ${this.stepTracking} шагов пройдено.`); 
  }
}

class Headphones extends Device {
  constructor(brand, series, color, activeNoiseCancellation) {
    super(brand, series, color);
    this.activeNoiseCancellation = activeNoiseCancellation;
  }

  activateNoiseCancellation() {
    if (this.activeNoiseCancellation) {
      console.log(`Активное шумоподавление включено на ${this.brand}, ${this.series}`)
    } else {
      console.log(`На ${this.brand}, ${this.series} отсутсвует функция активного шумоподавления.`)
    }
  }
}

const iphone = new Phone('Iphone', '17 Pro Max', 'Orange', '512Gb')
const samsung = new Phone('Samsung', 'Galaxy S26 Ultra', 'black', '256Gb')
iphone.takePicture()
samsung.takePicture()
samsung.charge()

const appleWatch = new Watch('AppleWatch', 'Series 11', 'Purple', 8500)
const garmin = new Watch('Garmin', 'Fenix 8 Amoled', 'Gray', 2860)

appleWatch.showStepTracking()
garmin.showStepTracking()

const airPods = new Headphones('Apple', 'AirPods 4', 'White', false)
const airPodsMax = new Headphones('AirPods Max', 'Gen.2', 'Black', true)

airPods.activateNoiseCancellation()
airPodsMax.activateNoiseCancellation()

