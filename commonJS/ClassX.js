class Diameter{
    constructor(radius){
        this.radius = radius;
    }

    diam(){
        return 2*this.radius
    }
}
class Semicircle{
    PI = Math.PI
    constructor(rad,PI){
        this.rad = rad
        this.PI = PI
    }
    semiCirum(){
        return this.rad*(this.PI + 2)
    }
}

module.exports = {
    Diameter,
    Semicircle
}