export const  COLOURS = {
    white: '#ffffff',
    black: '#000000',
    green: '#00AC76',
    red: '#C04345',
    blue: '#0043F9',
    backgroundLight:'#F0F0F3',
    backgroundMedium:'#B9B9B9',
    backgroundDark:'#777777',
}

export const Items = [
    {
    id:1,
    category:'product',
    productName:'MI Super Bass Bluetooth wireless Headphones',
    ProductPrice:1799,
    description:'Up to 20 hours battery life | Super powerful Bass',
    isOff:true,
    offPercentage:10,
    productImage: require('../database/images/products/Mi1.png'),
    isAvailable: true,
    productImageList: [
        require('../database/images/products/Mi1.png'),
        require('../database/images/products/Mi2.png'),
        require('../database/images/products/Mi3.png'),
       ]
    },
    {
    id:2,
    category:'product',
    productName:'boAt Rockerz 450 Bluetooth Headphone',
    ProductPrice:1499,
    description:'boAt Rockerz 450 M is  an on-ear wireless headset that has ergonomically| Super powerful Bass',
    isOff:false,
    productImage:require('../database/images/products/boat1.png'),
    isAvailable: true,
    productImageList: [
        require('../database/images/products/boat1.png'),
        require('../database/images/products/boat2.png'),
        require('../database/images/products/boat3.png'),
       ]
    },
    {
    id:3,
    category:'accessory',
    productName:'boAt Airdopes 441',
    ProductPrice:1999,
    description:'Bluetooth: It has Bluetooth v5.0 with a range of 10m',
    isOff:true,
    offPercentage: 18,
    productImage:require('../database/images/accessories/boatairpods1.png'),
    isAvailable: true,
    productImageList: [
        require('../database/images/accessories/boatairpods1.png'),
        require('../database/images/accessories/boatairpods2.png'),
        require('../database/images/accessories/boatairpods3.png'),
       ]
    },
    {
    id:4,
    category:'accessory',
    productName:'boAt Bassheads 242',
    ProductPrice:399,
    description:'Bluetooth: It has Bluetooth v5.0 with a range of 10m',
    isOff:false,
    productImage:require('../database/images/accessories/boatbassheads1.png'),
    isAvailable: true,
    productImageList: [
        require('../database/images/accessories/boatbassheads1.png'),
        require('../database/images/accessories/boatbassheads2.png'),
        require('../database/images/accessories/boatbassheads3.png'),
       ]
    },
    {
    id:5,
    category:'accessory',
    productName:'boAt Rockerz 255 Pro+',
    ProductPrice:1499,
    description:'Bluetooth: It has Bluetooth v5.0 with a range of 10m',
    isOff:false,
    productImage:require('../database/images/accessories/boatrockerz1.png'),
    productImageList: [
        require('../database/images/accessories/boatrockerz1.png'),
        require('../database/images/accessories/boatrockerz2.png'),
        require('../database/images/accessories/boatrockerz3.png'),
       ]
    },
    {
    id:6,
    category:'accessory',
    productName:'Boult Audio AirBass ¨Propods TWS',
    ProductPrice:1299,
    description:'Bluetooth: It has Bluetooth v5.0 with a range of 10m',
    isOff:false,
    productImage:require('../database/images/accessories/boultairbass1.png'),
    isAvailable: true,
    productImageList: [
        require('../database/images/accessories/boultairbass1.png'),
        require('../database/images/accessories/boultairbass2.png'),
        require('../database/images/accessories/boultairbass3.png'),
       ]
    },
]