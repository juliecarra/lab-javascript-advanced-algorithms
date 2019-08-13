function StackDataStructure () {
   this.stackControl = [];
   this.MAX_SIZE = 19;
}

StackDataStructure.prototype.isEmpty = function () { //permet d'appeler la fonction StackDataStructure 
    if(this.stackControl.length == 0) {
        return true;
    } else {
        return false;
    }
}

StackDataStructure.prototype.canPush = function () {
    if(this.stackControl.length == this.MAX_SIZE) {
        return false;
    }
    else {
        return true;
    }
}

StackDataStructure.prototype.push = function (element) {
   /* if(this.stackControl != this.MAX_SIZE) {
        return true;
    }
    else {
        return false;
    }*/
    if(this.canPush()) {
        this.stackControl.push(element);
        return this.stackControl;
    }
        else {
            return "Stack Overflow";
        }
        
    }
    
    

StackDataStructure.prototype.pop = function (element) {
    /*if(this.stackControl.length == 0) {
        return false;
    }
    else {
        return true;
    }
    */

    if (this.isEmpty()) {
        return "Stack Underflow";
      } else {
        return this.stackControl.pop(element);
      }
}