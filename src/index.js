/**
 * 
 * 
 * @Autor Denis Power
 * 
 * 
 */



    if(!Array.prototype.at){

        /**
         * If the plataform does not support at(ES2022) method.
         * 
         */

         Array.prototype.at=function(index){

              if(!(typeof index=="number")){

                 throw new SyntaxError("The argument of [].index() must be a number.")


              };

              if(index>=0){

                return this[index]

              }

              if(index<0){

                return this[index+this.length]

                

              }


         }


    }

    Array.prototype.hasIndex=function(index){

        if(!(typeof index=="number")){

            throw new SyntaxError("The argument of [].hasIndex must be a number.")

        };

        if(index<0){

            throw new SyntaxErr("The argument of [].hasIndex must not be less than 0.")

        };

        /**
         * 
         * We must not use [][index] or [].at(index).
         * 
         * EX:
         * 
         * [2,undefined] => The array has the second item even though it is undefined.
         * 
         */

         return this.length>index;
         

         

    };

    Array.prototype.toSet=function(){

        const set=new Set();

        for(let item of this){

            set.add(item);

        };

        return set;

    };


    Array.prototype.min=function(){

        /**
         * this<number>
         * 
         */

         let min;

         for(let n of this){

            if(!(typeof n=="number")){

                throw new SyntaxError("All the items of [].min must be numbers.")

            }
        
            if(min==void 0){

                min=n;

                continue;

            };

            if(n<min){

                min=n;

            };
 
         }


         return min;

    };

    Array.prototype.max=function(){


        /**
         * 
         * this<number>
         * 
         */

        let max;

        for(let n of this){

           if(!(typeof n=="number")){

               throw new SyntaxError("All the items of [].min must be numbers.")

           }
       
           if(max==void 0){

               max=n;

               continue;

           };

           if(n>max){

               max=n;

           };

        }


        return max;


    };

    Array.prototype.unique=function(){

        let set=new Set(this);

        return Array.from(set);

    }


    Object.defineProperties(Object.prototype, {

        length:{
            get(){

              return  Object.entries(this).length
                

            },
            enumerable:!1,
            writable:!1
            
        },
        toMap:{
            value(){

                const map=new Map();

                for(prop in this){

                    map.set(prop, this[prop]);
                };

                return map

            },
            enumerable:!1,
            writable:!1
        },
        destroy:{
            value(){

                for(let prop in this){

                    delete this[prop]

                };

            },
            enumerable:!1,
            writable:!1
        }
        

    });

    


    Set.prototype.toArray=function(){


        return Array.from(this);

    };

    Map.prototype.toObj=function(){

        let obj=Object.create(null);

        this.forEach((value,key)=>{

            obj[key]=value;
           
        });

        return obj;

    };


