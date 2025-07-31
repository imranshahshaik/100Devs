function circle (radius){
    return {radius,
    color:'red',
    draw: function(){
        console.log('hi')
    }
    }}
    const zircle = circle(1)

    function Circle(r){
        this.r = r
        this.draw = function (){
            console.log('draw');
        }
        
    }

    const another = Circle(1) 