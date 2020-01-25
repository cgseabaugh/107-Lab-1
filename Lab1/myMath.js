module.exports = {
    mathMod: function(){
        console.log("This is math madule");
    },
    sum: function(num1, num2){
        return num1 + num2;
    },
    greater: function(num1, num2){
        // return the greater number
        if(num1 > num2) return num1;
        else return num2;
    },
    smaller: function(num1, num2){
        //return the smaller number
        if(num1 < num2) return num1;
        else return num2;
    },
    division: function(number, by){
        if( by == 0){
            console.error('ARE YOU CRAZY MAN?!');
            return 0;
        };
        return number / by;
    },
    isEven: function(num){
        var res = num % 2;

        if(res==0) return true;
        else return false;
    }
};