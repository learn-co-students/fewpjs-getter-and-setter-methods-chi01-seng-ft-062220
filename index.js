class Circle{
    constructor(radius){
        this.radius = radius;
    }

    pi() {
        return Math.PI
    }
    
    get diameter(){
        return this.radius * 2
    }

    get circumference(){
        return this.diameter * this.pi()
    }

    get area(){
        return this.pi() * (this.radius**2)
    }

    set diameter(newDiameter){
        this.radius = newDiameter/2
    }

    set circumference(newCircumference){
        this.radius = (newCircumference / this.pi())/2
    }

    set area(newArea){
        this.radius = Math.sqrt((newArea / this.pi()))
    }
}